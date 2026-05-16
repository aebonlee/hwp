/**
 * kordoc 모듈 타입 선언 — TypeScript 컴파일러용
 * 실제 번들링은 Vite alias로 @kordoc → ../kordoc/src 매핑하여 처리.
 */

// ─── 공통 타입 ──────────────────────────────────────────

declare module '@kordoc/types' {
  export type IRBlockType = 'paragraph' | 'table' | 'heading' | 'list' | 'image' | 'separator';

  export interface IRBlock {
    type: IRBlockType;
    text?: string;
    table?: IRTable;
    level?: number;
    pageNumber?: number;
    style?: InlineStyle;
    listType?: 'ordered' | 'unordered';
    children?: IRBlock[];
    href?: string;
    footnoteText?: string;
    imageData?: ImageData;
  }

  export interface IRTable {
    rows: number;
    cols: number;
    cells: IRCell[][];
    hasHeader: boolean;
  }

  export interface IRCell {
    text: string;
    colSpan: number;
    rowSpan: number;
  }

  export interface CellContext {
    text: string;
    colSpan: number;
    rowSpan: number;
    colAddr?: number;
    rowAddr?: number;
  }

  export interface InlineStyle {
    bold?: boolean;
    italic?: boolean;
    fontSize?: number;
    fontName?: string;
  }

  export interface ImageData {
    data: Uint8Array;
    mimeType: string;
    filename?: string;
  }

  export interface DocumentMetadata {
    title?: string;
    author?: string;
    creator?: string;
    createdAt?: string;
    modifiedAt?: string;
    pageCount?: number;
    version?: string;
    description?: string;
    keywords?: string[];
  }

  export interface ParseOptions {
    pages?: number[] | string;
    onProgress?: (current: number, total: number) => void;
    removeHeaderFooter?: boolean;
    filePath?: string;
  }

  export interface ParseWarning {
    page?: number;
    message: string;
    code: string;
  }

  export interface OutlineItem {
    level: number;
    text: string;
    pageNumber?: number;
  }

  export interface ExtractedImage {
    filename: string;
    data: Uint8Array;
    mimeType: string;
  }

  export interface InternalParseResult {
    markdown: string;
    blocks: IRBlock[];
    metadata?: DocumentMetadata;
    outline?: OutlineItem[];
    warnings?: ParseWarning[];
    images?: ExtractedImage[];
    isImageBased?: boolean;
  }

  export type FileType = 'hwpx' | 'hwp' | 'hwp3' | 'hwpml' | 'pdf' | 'xlsx' | 'xls' | 'docx' | 'unknown';

  export interface ParseSuccess {
    success: true;
    fileType: FileType;
    markdown: string;
    blocks: IRBlock[];
    metadata?: DocumentMetadata;
    outline?: OutlineItem[];
    warnings?: ParseWarning[];
    images?: ExtractedImage[];
    pageCount?: number;
  }

  export interface ParseFailure {
    success: false;
    fileType: FileType;
    error: string;
    code?: string;
  }

  export type ParseResult = ParseSuccess | ParseFailure;

  export interface FormField {
    label: string;
    value: string;
    row: number;
    col: number;
  }

  export interface FormResult {
    fields: FormField[];
    confidence: number;
  }
}

// ─── 파서 모듈 ──────────────────────────────────────────

declare module '@kordoc/hwpx/parser' {
  import type { InternalParseResult, ParseOptions } from '@kordoc/types';
  export function parseHwpxDocument(buffer: ArrayBuffer, options?: ParseOptions): Promise<InternalParseResult>;
  export function precheckZipSize(buffer: ArrayBuffer, maxSize?: number, maxEntries?: number): { totalUncompressed: number; entryCount: number };
}

declare module '@kordoc/docx/parser' {
  import type { InternalParseResult, ParseOptions } from '@kordoc/types';
  export function parseDocxDocument(buffer: ArrayBuffer, options?: ParseOptions): Promise<InternalParseResult>;
}

declare module '@kordoc/xlsx/parser' {
  import type { InternalParseResult, ParseOptions } from '@kordoc/types';
  export function parseXlsxDocument(buffer: ArrayBuffer, options?: ParseOptions): Promise<InternalParseResult>;
}

declare module '@kordoc/hwp3/parser' {
  import type { InternalParseResult, ParseOptions } from '@kordoc/types';
  export function parseHwp3Document(buffer: ArrayBuffer, options?: ParseOptions): InternalParseResult;
}

declare module '@kordoc/hwpml/parser' {
  import type { InternalParseResult, ParseOptions } from '@kordoc/types';
  export function parseHwpmlDocument(buffer: ArrayBuffer, options?: ParseOptions): InternalParseResult;
}

// ─── 생성기 ─────────────────────────────────────────────

declare module '@kordoc/hwpx/generator' {
  export function markdownToHwpx(markdown: string): Promise<ArrayBuffer>;
}

// ─── 유틸 모듈 ──────────────────────────────────────────

declare module '@kordoc/table/builder' {
  import type { IRBlock, CellContext, IRTable } from '@kordoc/types';
  export function blocksToMarkdown(blocks: IRBlock[]): string;
  export function buildTable(rows: CellContext[][]): IRTable;
  export const MAX_COLS: number;
  export const MAX_ROWS: number;
}

declare module '@kordoc/form/recognize' {
  import type { IRBlock, FormResult } from '@kordoc/types';
  export function extractFormFields(blocks: IRBlock[]): FormResult;
}

declare module '@kordoc/detect' {
  import type { FileType } from '@kordoc/types';
  export function detectFormat(buffer: ArrayBuffer): FileType;
  export function detectZipFormat(buffer: ArrayBuffer): Promise<'hwpx' | 'xlsx' | 'docx' | 'unknown'>;
  export function isZipFile(buffer: ArrayBuffer): boolean;
  export function isHwpxFile(buffer: ArrayBuffer): boolean;
  export function isOldHwpFile(buffer: ArrayBuffer): boolean;
  export function isHwp3File(buffer: ArrayBuffer): boolean;
  export function isHwpmlFile(buffer: ArrayBuffer): boolean;
  export function isPdfFile(buffer: ArrayBuffer): boolean;
}
