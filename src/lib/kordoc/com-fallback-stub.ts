/**
 * com-fallback 브라우저 스텁 — COM/DRM 기능은 Windows COM 기반이라 브라우저 불가.
 * kordoc의 hwpx/parser.ts가 import하지만, 브라우저에서는 사용 안 됨.
 */

export function isComFallbackAvailable(): boolean {
  return false;
}

export function isEncryptedHwpx(_manifestXml: string): boolean {
  return false;
}

export function extractTextViaCom(_filePath: string): { pages: string[]; pageCount: number; warnings: never[] } {
  return { pages: [], pageCount: 0, warnings: [] };
}

export function comResultToParseResult(_pages: string[], _pageCount: number, _metadata: unknown, _warnings: unknown[]) {
  return { markdown: '', blocks: [], warnings: [] };
}
