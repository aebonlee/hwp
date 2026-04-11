/**
 * Markdown → IR converter
 * Parses markdown text into IR blocks for HWPX export.
 */
import { newParagraph, newTable, newList, newImage, type IRDocument, type IRBlock, type IRListItem } from '../ir/types';

/**
 * Parse a markdown string into an IR Document.
 */
export function markdownToIR(markdown: string): IRDocument {
  const doc: IRDocument = {
    version: '1.0',
    metadata: {},
    content: [],
  };

  const lines = markdown.split('\n');
  let i = 0;

  // Check for YAML front matter
  if (lines[0] === '---') {
    i = 1;
    while (i < lines.length && lines[i] !== '---') {
      const match = lines[i].match(/^(\w+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        if (key === 'title') doc.metadata.title = value;
        else if (key === 'author') doc.metadata.author = value;
      }
      i++;
    }
    i++; // skip closing ---
  }

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const para = newParagraph(text);
      para.style.headingLevel = level;
      doc.content.push({ type: 'paragraph', paragraph: para });
      i++;
      continue;
    }

    // Table (starts with |)
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const table = parseMarkdownTable(tableLines);
      if (table) doc.content.push(table);
      continue;
    }

    // Unordered list
    if (line.match(/^\s*[-*+]\s/)) {
      const items: IRListItem[] = [];
      while (i < lines.length && lines[i].match(/^\s*[-*+]\s/)) {
        const match = lines[i].match(/^(\s*)[-*+]\s(.+)$/);
        if (match) {
          const indent = Math.floor(match[1].length / 2);
          items.push({ text: match[2], level: indent });
        }
        i++;
      }
      const list = newList(false);
      list.items = items;
      doc.content.push({ type: 'list', list });
      continue;
    }

    // Ordered list
    if (line.match(/^\s*\d+\.\s/)) {
      const items: IRListItem[] = [];
      while (i < lines.length && lines[i].match(/^\s*\d+\.\s/)) {
        const match = lines[i].match(/^(\s*)\d+\.\s(.+)$/);
        if (match) {
          const indent = Math.floor(match[1].length / 2);
          items.push({ text: match[2], level: indent });
        }
        i++;
      }
      const list = newList(true);
      list.items = items;
      doc.content.push({ type: 'list', list });
      continue;
    }

    // Image
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      const img = newImage(imgMatch[2]);
      img.alt = imgMatch[1];
      img.path = imgMatch[2];
      doc.content.push({ type: 'image', image: img });
      i++;
      continue;
    }

    // Regular paragraph (collect consecutive non-empty lines)
    let text = '';
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith('#') && !lines[i].startsWith('|') && !lines[i].match(/^\s*[-*+]\s/) && !lines[i].match(/^\s*\d+\.\s/)) {
      if (text) text += '\n';
      text += lines[i];
      i++;
    }
    if (text.trim()) {
      doc.content.push({ type: 'paragraph', paragraph: newParagraph(text) });
    }
  }

  return doc;
}

function parseMarkdownTable(lines: string[]): IRBlock | null {
  if (lines.length < 2) return null;

  // Filter out separator row
  const dataLines = lines.filter(line => !line.match(/^\|[\s-:|]+\|$/));
  if (dataLines.length === 0) return null;

  const rows = dataLines.map(line => {
    return line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map(cell => cell.trim());
  });

  const numRows = rows.length;
  const numCols = Math.max(...rows.map(r => r.length));

  const table = newTable(numRows, numCols);
  table.hasHeader = true;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      table.cells[i][j].text = rows[i][j] || '';
      if (i === 0) table.cells[i][j].style.isHeader = true;
    }
  }

  return { type: 'table', table };
}
