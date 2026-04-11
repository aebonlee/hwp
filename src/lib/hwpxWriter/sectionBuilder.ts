/**
 * Section XML builder for HWPX export
 * Generates section0.xml from IR content.
 */
import type { IRDocument, IRBlock, IRParagraph, IRTableBlock, IRListBlock, IRImageBlock } from '../ir/types';

/**
 * Build section0.xml from IR document content.
 */
export function buildSectionXml(doc: IRDocument): string {
  let body = '';

  for (const block of doc.content) {
    body += blockToXml(block);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<hs:sec xmlns:hs="urn:hancom:hwp:section"
  xmlns:hp="urn:hancom:hwp:paragraph">
${body}
</hs:sec>`;
}

function blockToXml(block: IRBlock): string {
  switch (block.type) {
    case 'paragraph':
      return block.paragraph ? paragraphToXml(block.paragraph) : '';
    case 'table':
      return block.table ? tableToXml(block.table) : '';
    case 'list':
      return block.list ? listToXml(block.list) : '';
    case 'image':
      return block.image ? imageToXml(block.image) : '';
    default:
      return '';
  }
}

function paragraphToXml(p: IRParagraph): string {
  const text = escapeXml(p.text);
  const styleAttr = p.style.headingLevel
    ? ` styleIDRef="heading${p.style.headingLevel}"`
    : '';

  return `  <hp:p${styleAttr}>
    <hp:run>
      <hp:t>${text}</hp:t>
    </hp:run>
  </hp:p>
`;
}

function tableToXml(t: IRTableBlock): string {
  if (!t.cells || t.cells.length === 0) return '';

  let xml = `  <hp:tbl>\n`;

  for (let i = 0; i < t.cells.length; i++) {
    xml += `    <hp:tr>\n`;
    for (let j = 0; j < t.cells[i].length; j++) {
      const cell = t.cells[i][j];
      const spanAttrs: string[] = [];
      if (cell.colSpan > 1) spanAttrs.push(`colSpan="${cell.colSpan}"`);
      if (cell.rowSpan > 1) spanAttrs.push(`rowSpan="${cell.rowSpan}"`);
      const spanStr = spanAttrs.length > 0 ? ` ${spanAttrs.join(' ')}` : '';

      xml += `      <hp:tc>\n`;
      if (spanAttrs.length > 0) {
        xml += `        <hp:cellSpan${spanStr}/>\n`;
      }
      xml += `        <hp:p>\n`;
      xml += `          <hp:run>\n`;
      xml += `            <hp:t>${escapeXml(cell.text)}</hp:t>\n`;
      xml += `          </hp:run>\n`;
      xml += `        </hp:p>\n`;
      xml += `      </hp:tc>\n`;
    }
    xml += `    </hp:tr>\n`;
  }

  xml += `  </hp:tbl>\n`;
  return xml;
}

function listToXml(l: IRListBlock): string {
  let xml = '';
  for (let i = 0; i < l.items.length; i++) {
    const item = l.items[i];
    const prefix = l.ordered ? `${i + 1}. ` : '- ';
    const indent = '  '.repeat(item.level || 0);
    xml += paragraphToXml({
      text: `${indent}${prefix}${item.text}`,
      runs: [],
      style: {},
    });
  }
  return xml;
}

function imageToXml(img: IRImageBlock): string {
  // Basic image placeholder — full image embedding would require BinData
  return `  <hp:p>
    <hp:run>
      <hp:t>[Image: ${escapeXml(img.alt || img.id)}]</hp:t>
    </hp:run>
  </hp:p>
`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
