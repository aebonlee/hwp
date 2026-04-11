/**
 * IR (Intermediate Representation) types
 * Ported from hwp2md/internal/ir/*.go
 */

// ─── Block Types ───
export type BlockType = 'paragraph' | 'table' | 'image' | 'list';

export interface IRDocument {
  version: string;
  metadata: IRMetadata;
  content: IRBlock[];
  rawMarkdown?: string;
}

export interface IRMetadata {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  description?: string;
  creator?: string;
  created?: string;
  modified?: string;
}

export interface IRBlock {
  type: BlockType;
  paragraph?: IRParagraph;
  table?: IRTableBlock;
  image?: IRImageBlock;
  list?: IRListBlock;
}

// ─── Paragraph ───
export interface IRParagraph {
  text: string;
  runs: IRRun[];
  style: IRParagraphStyle;
}

export interface IRRun {
  text: string;
  style: IRTextStyle;
}

export interface IRParagraphStyle {
  headingLevel?: number;
  alignment?: string;
  indent?: number;
  isQuote?: boolean;
}

export interface IRTextStyle {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  superscript?: boolean;
  subscript?: boolean;
  code?: boolean;
  link?: string;
}

// ─── Table ───
export interface IRTableBlock {
  rows: number;
  cols: number;
  cells: IRCell[][];
  rawText?: string;
  caption?: string;
  hasHeader?: boolean;
}

export interface IRCell {
  text: string;
  rowSpan: number;
  colSpan: number;
  style: IRCellStyle;
}

export interface IRCellStyle {
  bold?: boolean;
  alignment?: string;
  isHeader?: boolean;
}

// ─── Image ───
export interface IRImageBlock {
  id: string;
  path?: string;
  origName?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  format?: string;
  data?: Uint8Array;
}

// ─── List ───
export interface IRListBlock {
  ordered: boolean;
  items: IRListItem[];
  start?: number;
}

export interface IRListItem {
  text: string;
  level?: number;
  children?: IRListItem[];
}

// ─── Factory functions ───
export function newDocument(): IRDocument {
  return { version: '1.0', metadata: {}, content: [] };
}

export function newParagraph(text: string): IRParagraph {
  return { text, runs: [], style: {} };
}

export function newTable(rows: number, cols: number): IRTableBlock {
  const cells: IRCell[][] = [];
  for (let i = 0; i < rows; i++) {
    const row: IRCell[] = [];
    for (let j = 0; j < cols; j++) {
      row.push({ text: '', rowSpan: 1, colSpan: 1, style: {} });
    }
    cells.push(row);
  }
  return { rows, cols, cells };
}

export function newImage(id: string): IRImageBlock {
  return { id };
}

export function newList(ordered: boolean): IRListBlock {
  return { ordered, items: [], start: 1 };
}
