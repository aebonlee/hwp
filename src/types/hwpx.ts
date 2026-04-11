/**
 * HWPX Intermediate Representation types
 * Ported from hwp2md/internal/ir/*.go
 */

// ─── Document ───
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

// ─── Block Types ───
export type BlockType = 'paragraph' | 'table' | 'image' | 'list';

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

// ─── HWPX Manifest (OPF) ───
export interface HwpxManifest {
  metadata: HwpxManifestMeta;
  items: HwpxManifestItem[];
  spine: HwpxSpineItem[];
}

export interface HwpxManifestMeta {
  title?: string;
  creator?: string;
  subject?: string;
  description?: string;
  publisher?: string;
  date?: string;
  language?: string;
  keywords?: string;
}

export interface HwpxManifestItem {
  id: string;
  href: string;
  mediaType: string;
}

export interface HwpxSpineItem {
  idref: string;
}
