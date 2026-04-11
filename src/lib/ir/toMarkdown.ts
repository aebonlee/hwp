/**
 * IR → Markdown converter
 * Ported from hwp2md/internal/cli/convert.go convertToBasicMarkdown()
 */
import type { IRDocument, IRParagraph, IRTableBlock, IRImageBlock, IRListBlock, IRListItem } from './types';

/**
 * Convert an IR Document to Markdown string.
 */
export function irToMarkdown(doc: IRDocument): string {
  // If RawMarkdown is available, use it directly
  if (doc.rawMarkdown) {
    let result = '';
    if (doc.metadata.title || doc.metadata.author) {
      result += '---\n';
      if (doc.metadata.title) result += `title: ${doc.metadata.title}\n`;
      if (doc.metadata.author) result += `author: ${doc.metadata.author}\n`;
      result += '---\n\n';
    }
    result += doc.rawMarkdown;
    return result;
  }

  let result = '';

  // Metadata as YAML front matter
  if (doc.metadata.title || doc.metadata.author) {
    result += '---\n';
    if (doc.metadata.title) result += `title: ${doc.metadata.title}\n`;
    if (doc.metadata.author) result += `author: ${doc.metadata.author}\n`;
    result += '---\n\n';
  }

  // Content
  for (const block of doc.content) {
    switch (block.type) {
      case 'paragraph':
        if (block.paragraph) result += writeParagraph(block.paragraph);
        break;
      case 'table':
        if (block.table) result += writeTable(block.table);
        break;
      case 'image':
        if (block.image) result += writeImage(block.image);
        break;
      case 'list':
        if (block.list) result += writeList(block.list);
        break;
    }
  }

  return result;
}

function writeParagraph(p: IRParagraph): string {
  const text = p.text.trim();
  if (!text) return '';

  // Handle headings
  if (p.style.headingLevel && p.style.headingLevel > 0 && p.style.headingLevel <= 6) {
    const prefix = '#'.repeat(p.style.headingLevel);
    return `${prefix} ${text}\n\n`;
  }

  return text + '\n\n';
}

function writeTable(t: IRTableBlock): string {
  if (!t.cells || t.cells.length === 0) return '';

  // Check for info-box table
  if (isInfoBoxTable(t)) {
    return writeInfoBoxAsText(t);
  }

  const numCols = t.cols;
  const numRows = t.cells.length;

  // Build occupiedBy grid for rowspan/colspan
  interface CellRef { row: number; col: number; }
  const occupiedBy: CellRef[][] = [];
  for (let i = 0; i < numRows; i++) {
    occupiedBy.push(Array.from({ length: numCols }, () => ({ row: -1, col: -1 })));
  }

  // Mark cells
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (occupiedBy[i][j].row === -1) {
        const cell = t.cells[i][j];
        const rowSpan = Math.max(cell.rowSpan || 1, 1);
        const colSpan = Math.max(cell.colSpan || 1, 1);

        for (let r = i; r < i + rowSpan && r < numRows; r++) {
          for (let c = j; c < j + colSpan && c < numCols; c++) {
            occupiedBy[r][c] = { row: i, col: j };
          }
        }
      }
    }
  }

  let result = '';

  // Write rows
  for (let i = 0; i < numRows; i++) {
    result += '|';
    for (let j = 0; j < numCols; j++) {
      const ref = occupiedBy[i][j];
      let text = '';
      if (ref.row >= 0 && ref.col >= 0) {
        if (ref.row === i && ref.col === j) {
          text = t.cells[i][j].text.replace(/\n/g, ' ');
        } else if (ref.row < i && ref.col === j) {
          text = '〃'; // rowspan marker
        }
      }
      result += ` ${text} |`;
    }
    result += '\n';

    // Write separator after header row
    if (i === 0) {
      result += '|';
      for (let j = 0; j < numCols; j++) {
        result += ' --- |';
      }
      result += '\n';
    }
  }
  result += '\n';

  return result;
}

function isInfoBoxTable(t: IRTableBlock): boolean {
  if (!t.cells) return false;

  // Pattern: Single-column table with 【title】 pattern
  if (t.cols === 1 && t.cells.length >= 1) {
    for (const row of t.cells) {
      for (const cell of row) {
        const text = cell.text.trim();
        if (text.includes('【') && text.includes('】')) return true;
      }
    }
  }

  // Pattern: Multi-column with [title] pattern
  if (t.cells.length < 2 || t.cols < 2) return false;

  for (const row of t.cells) {
    for (const cell of row) {
      const text = cell.text.trim();
      if (text.startsWith('[') && text.endsWith(']')) {
        return true;
      }
    }
  }

  return false;
}

function writeInfoBoxAsText(t: IRTableBlock): string {
  if (!t.cells) return '';

  let result = '';

  // Single-column 【title】 pattern
  if (t.cols === 1) {
    for (const row of t.cells) {
      for (const cell of row) {
        const text = cell.text.trim();
        if (text.includes('【') && text.includes('】')) {
          const sections = text.split('【');
          for (const section of sections) {
            const trimmed = section.trim();
            if (!trimmed) continue;
            const closingIdx = trimmed.indexOf('】');
            if (closingIdx === -1) {
              result += trimmed + '\n\n';
              continue;
            }
            const title = trimmed.slice(0, closingIdx);
            const content = trimmed.slice(closingIdx + 1).trim();
            result += `**【${title}】**\n\n`;
            if (content) result += content + '\n\n';
          }
          return result;
        }
      }
    }
  }

  // Multi-column [title] pattern
  let title = '';
  for (const row of t.cells) {
    for (const cell of row) {
      const text = cell.text.trim();
      if (text.startsWith('[') && text.endsWith(']')) {
        title = text;
        break;
      }
    }
    if (title) break;
  }

  if (title) {
    result += `**${title}**\n\n`;
  }

  // Content from last row
  const lastRow = t.cells[t.cells.length - 1];
  for (const cell of lastRow) {
    const text = cell.text.trim();
    if (!text) continue;

    const lines = text.split('○');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      if (i === 0 && !text.startsWith('○')) {
        result += line + '\n\n';
      } else {
        result += `- ${line}\n`;
      }
    }
    result += '\n';
  }

  return result;
}

function writeImage(img: IRImageBlock): string {
  const alt = img.alt || img.id;
  const path = img.path || img.id;
  return `![${alt}](${path})\n\n`;
}

function writeList(l: IRListBlock): string {
  let result = '';
  result += writeListItems(l.items, l.ordered, 0);
  result += '\n';
  return result;
}

function writeListItems(items: IRListItem[], ordered: boolean, depth: number): string {
  let result = '';
  const indent = '  '.repeat(depth);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const prefix = ordered ? `${i + 1}. ` : '- ';
    result += `${indent}${prefix}${item.text}\n`;

    if (item.children && item.children.length > 0) {
      result += writeListItems(item.children, ordered, depth + 1);
    }
  }
  return result;
}
