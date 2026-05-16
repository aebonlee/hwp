/**
 * kordoc 브라우저 래퍼 — 브라우저에서 안전한 모듈만 re-export.
 *
 * kordoc의 index.ts는 fs/promises를 import하여 브라우저 불가.
 * 개별 모듈을 직접 가져와서 사용한다.
 */

// ─── 파서 ───────────────────────────────────────────────
export { parseHwpxDocument } from '@kordoc/hwpx/parser';
export { parseDocxDocument } from '@kordoc/docx/parser';
export { parseXlsxDocument } from '@kordoc/xlsx/parser';
export { parseHwp3Document } from '@kordoc/hwp3/parser';
export { parseHwpmlDocument } from '@kordoc/hwpml/parser';

// ─── 생성기 ─────────────────────────────────────────────
export { markdownToHwpx } from '@kordoc/hwpx/generator';

// ─── 유틸 ───────────────────────────────────────────────
export { blocksToMarkdown } from '@kordoc/table/builder';
export { extractFormFields } from '@kordoc/form/recognize';

// ─── 포맷 감지 ──────────────────────────────────────────
export { detectFormat, detectZipFormat, isZipFile, isHwpxFile, isOldHwpFile, isHwp3File, isHwpmlFile } from '@kordoc/detect';

// ─── 타입 ───────────────────────────────────────────────
export type {
  IRBlock,
  IRBlockType,
  IRTable,
  IRCell,
  CellContext,
  DocumentMetadata,
  ParseResult,
  ParseSuccess,
  ParseFailure,
  ParseOptions,
  ParseWarning,
  InternalParseResult,
  FormField,
  FormResult,
  FileType,
  InlineStyle,
  ImageData,
  ExtractedImage,
} from '@kordoc/types';

// ─── 브릿지 ─────────────────────────────────────────────
export { kordocToHwpIR, hwpIRToKordocBlocks } from './bridge';
