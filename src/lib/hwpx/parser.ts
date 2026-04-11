/**
 * HWPX Parser — parses HWPX (Open HWPML) documents
 * Ported from hwp2md/internal/parser/hwpx/parser.go
 */
import JSZip from 'jszip';
import { newDocument, newParagraph, newImage, type IRDocument, type IRParagraph, type IRBlock, type IRImageBlock } from '../ir/types';
import { parseManifest, toIRMetadata, type HwpxManifest } from './manifest';
import { buildTable, convertTableToText, type CellContext } from './tableBuilder';

/**
 * Parse an HWPX file (ArrayBuffer) into an IR Document.
 */
export async function parseHwpx(buffer: ArrayBuffer): Promise<IRDocument> {
  const zip = await JSZip.loadAsync(buffer);
  const doc = newDocument();

  // Parse manifest
  const manifestData = await readManifest(zip);
  let manifest: HwpxManifest | null = null;
  let sections: string[] = [];
  const binData = new Map<string, string>();

  if (manifestData) {
    manifest = parseManifest(manifestData);
    doc.metadata = toIRMetadata(manifest);

    // Extract section paths and bindata mappings
    for (const item of manifest.items) {
      let href = item.href;
      // Normalize path
      if (!href.startsWith('/') && !href.startsWith('Contents/')) {
        if (item.mediaType.endsWith('xml') && item.id.includes('section')) {
          href = 'Contents/' + href;
        }
      }

      if (item.id.toLowerCase().includes('section')) {
        sections.push(href);
      }
      if (item.href.startsWith('BinData/')) {
        binData.set(item.id, item.href);
      }
    }

    sections.sort();
  } else {
    // No manifest — find sections directly
    sections = findSectionsWithoutManifest(zip, binData);
  }

  // Parse each section in order
  for (const sectionPath of sections) {
    const sectionXml = await readSectionFile(zip, sectionPath);
    if (sectionXml) {
      parseSectionXML(doc, sectionXml, binData);
    }
  }

  return doc;
}

// ──────────────────────────────────────────
// Internal helpers
// ──────────────────────────────────────────

async function readManifest(zip: JSZip): Promise<string | null> {
  const paths = ['Contents/content.hpf', 'content.hpf'];
  for (const path of paths) {
    const file = findFile(zip, path);
    if (file) return file.async('string');
  }
  return null;
}

function findSectionsWithoutManifest(zip: JSZip, binData: Map<string, string>): string[] {
  const sections: string[] = [];
  for (const [name] of Object.entries(zip.files)) {
    if (name.includes('section') && name.endsWith('.xml')) {
      sections.push(name);
    }
    if (name.startsWith('BinData/') || name.includes('/BinData/')) {
      const base = name.split('/').pop() || '';
      const id = base.replace(/\.[^.]+$/, '');
      binData.set(id, name);
    }
  }
  sections.sort();
  return sections;
}

async function readSectionFile(zip: JSZip, sectionPath: string): Promise<string | null> {
  const file = findFile(zip, sectionPath);
  if (file) return file.async('string');
  return null;
}

function findFile(zip: JSZip, path: string): JSZip.JSZipObject | null {
  // Try exact match
  let file = zip.file(path);
  if (file) return file;

  // Try case-insensitive or suffix match
  const lowerPath = path.toLowerCase();
  for (const [name, obj] of Object.entries(zip.files)) {
    if (!obj.dir) {
      if (name.toLowerCase() === lowerPath || name.toLowerCase().endsWith(lowerPath)) {
        return obj;
      }
    }
  }
  return null;
}

// ──────────────────────────────────────────
// XML Section parser
// ──────────────────────────────────────────

interface TableState {
  rows: CellContext[][];
  currentRow: CellContext[];
  cell: CellContext | null;
}

function parseSectionXML(
  doc: IRDocument,
  xmlString: string,
  binData: Map<string, string>
): void {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

  // Stack-based table handling for nested tables
  const tableStack: TableState[] = [];
  let currentTable: TableState | null = null;
  let currentParagraph: IRParagraph | null = null;

  const getCurrentCell = (): CellContext | null => {
    return currentTable?.cell ?? null;
  };

  // Walk the XML tree using TreeWalker
  walkElement(xmlDoc.documentElement);

  function walkElement(el: Element) {
    const localName = getLocalName(el);

    // Handle start element
    switch (localName) {
      case 'p': {
        currentParagraph = newParagraph('');
        break;
      }
      case 't': {
        if (currentParagraph) {
          const text = readElementText(el);
          const cell = getCurrentCell();
          if (cell) {
            cell.text += text;
          } else {
            currentParagraph.text += text;
          }
        }
        return; // Don't recurse into <t> children (already handled)
      }
      case 'tab': {
        if (currentParagraph) {
          const cell = getCurrentCell();
          if (cell) {
            cell.text += '\t';
          } else {
            currentParagraph.text += '\t';
          }
        }
        break;
      }
      case 'br': {
        if (currentParagraph) {
          const brType = el.getAttribute('type') || 'line';
          if (brType === 'line') {
            const cell = getCurrentCell();
            if (cell) {
              cell.text += '\n';
            } else {
              currentParagraph.text += '\n';
            }
          }
        }
        break;
      }
      case 'tbl': {
        // Push current table to stack
        if (currentTable) {
          tableStack.push(currentTable);
        }
        currentTable = { rows: [], currentRow: [], cell: null };
        break;
      }
      case 'tr': {
        if (currentTable) {
          currentTable.currentRow = [];
        }
        break;
      }
      case 'tc': {
        if (currentTable) {
          currentTable.cell = { text: '', colSpan: 1, rowSpan: 1 };
        }
        break;
      }
      case 'cellSpan': {
        const cell = getCurrentCell();
        if (cell) {
          const cs = el.getAttribute('colSpan');
          const rs = el.getAttribute('rowSpan');
          if (cs) cell.colSpan = parseInt(cs, 10) || 1;
          if (rs) cell.rowSpan = parseInt(rs, 10) || 1;
        }
        break;
      }
      case 'pic':
      case 'img': {
        const img = parseImageElement(el, binData);
        if (img) {
          doc.content.push({ type: 'image', image: img });
        }
        break;
      }
    }

    // Recurse into children
    for (let i = 0; i < el.children.length; i++) {
      walkElement(el.children[i]);
    }

    // Handle end element
    switch (localName) {
      case 'p': {
        if (currentParagraph && currentParagraph.text.trim()) {
          const cell = getCurrentCell();
          if (cell) {
            if (cell.text.length > 0) cell.text += '\n';
            cell.text += currentParagraph.text;
          } else if (!currentTable) {
            doc.content.push({
              type: 'paragraph',
              paragraph: currentParagraph,
            } as IRBlock);
          }
        }
        currentParagraph = null;
        break;
      }
      case 'tc': {
        if (currentTable && currentTable.cell) {
          currentTable.currentRow.push(currentTable.cell);
          currentTable.cell = null;
        }
        break;
      }
      case 'tr': {
        if (currentTable && currentTable.currentRow.length > 0) {
          currentTable.rows.push(currentTable.currentRow);
          currentTable.currentRow = [];
        }
        break;
      }
      case 'tbl': {
        if (currentTable && currentTable.rows.length > 0) {
          if (tableStack.length > 0) {
            // Nested table — convert to text and add to parent cell
            const nestedText = convertTableToText(currentTable.rows);
            const parentTable = tableStack.pop()!;
            if (parentTable.cell) {
              if (parentTable.cell.text.length > 0) parentTable.cell.text += '\n';
              parentTable.cell.text += nestedText;
            }
            currentTable = parentTable;
          } else {
            // Top-level table — add to document
            const table = buildTable(currentTable.rows);
            if (table) {
              doc.content.push({ type: 'table', table });
            }
            currentTable = null;
          }
        } else {
          // Empty table — restore parent if any
          if (tableStack.length > 0) {
            currentTable = tableStack.pop()!;
          } else {
            currentTable = null;
          }
        }
        break;
      }
    }
  }
}

function getLocalName(el: Element): string {
  return el.localName || el.nodeName.split(':').pop() || '';
}

/**
 * Read text content from a <t> element, handling special whitespace elements.
 */
function readElementText(el: Element): string {
  let text = '';
  for (let i = 0; i < el.childNodes.length; i++) {
    const node = el.childNodes[i];
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent || '';
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const localName = getLocalName(node as Element);
      if (localName === 'fwSpace' || localName === 'hwSpace') {
        text += ' ';
      }
    }
  }
  return text;
}

function parseImageElement(el: Element, binData: Map<string, string>): IRImageBlock | null {
  const img = newImage('');

  // Check attributes on the element and its children
  const checkAttrs = (e: Element) => {
    for (let i = 0; i < e.attributes.length; i++) {
      const attr = e.attributes[i];
      const name = attr.localName || attr.name.split(':').pop() || '';
      switch (name) {
        case 'binItemIDRef':
        case 'binItemId':
          img.id = attr.value;
          if (binData.has(attr.value)) {
            img.path = binData.get(attr.value);
          }
          break;
        case 'alt':
        case 'descr':
          img.alt = attr.value;
          break;
        case 'width':
          img.width = parseInt(attr.value, 10) || undefined;
          break;
        case 'height':
          img.height = parseInt(attr.value, 10) || undefined;
          break;
      }
    }
  };

  checkAttrs(el);
  // Also check child elements for image references
  for (let i = 0; i < el.children.length; i++) {
    checkAttrs(el.children[i]);
  }

  return img.id ? img : null;
}
