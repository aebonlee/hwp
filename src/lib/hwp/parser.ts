/**
 * HWP 5.x Binary Parser
 *
 * HWP 5.x uses OLE2 (Compound Binary File) format.
 * This is a basic parser that extracts text content.
 * For full parsing, an external library like hwp.js would be needed,
 * but since no well-maintained browser-compatible HWP parser exists,
 * we implement basic text extraction from the OLE2 structure.
 */
import { newDocument, newParagraph, type IRDocument } from '../ir/types';

/**
 * Parse an HWP 5.x binary file and extract text content.
 */
export async function parseHwp(buffer: ArrayBuffer): Promise<IRDocument> {
  const doc = newDocument();
  const bytes = new Uint8Array(buffer);

  // Verify OLE2 magic bytes
  if (!isOLE2(bytes)) {
    throw new Error('올바른 HWP 파일이 아닙니다. HWPX 파일을 사용해 주세요.');
  }

  try {
    // Try to extract text using basic OLE2 parsing
    const text = extractTextFromHwp(bytes);
    if (text.trim()) {
      // Split into paragraphs
      const paragraphs = text.split(/\n{2,}/);
      for (const para of paragraphs) {
        const trimmed = para.trim();
        if (trimmed) {
          doc.content.push({
            type: 'paragraph',
            paragraph: newParagraph(trimmed),
          });
        }
      }
    } else {
      doc.content.push({
        type: 'paragraph',
        paragraph: newParagraph('(HWP 5.x 파일에서 텍스트를 추출하지 못했습니다. HWPX 형식을 사용해 주세요.)'),
      });
    }
  } catch {
    doc.content.push({
      type: 'paragraph',
      paragraph: newParagraph('(HWP 5.x 바이너리 파싱 중 오류가 발생했습니다. 한컴오피스에서 HWPX로 다시 저장한 후 변환해 주세요.)'),
    });
  }

  return doc;
}

function isOLE2(bytes: Uint8Array): boolean {
  // OLE2 magic: D0 CF 11 E0 A1 B1 1A E1
  return (
    bytes.length >= 8 &&
    bytes[0] === 0xd0 &&
    bytes[1] === 0xcf &&
    bytes[2] === 0x11 &&
    bytes[3] === 0xe0 &&
    bytes[4] === 0xa1 &&
    bytes[5] === 0xb1 &&
    bytes[6] === 0x1a &&
    bytes[7] === 0xe1
  );
}

/**
 * Basic text extraction from HWP OLE2 compound document.
 *
 * HWP 5.x stores body text in "BodyText/Section0", "BodyText/Section1" etc.
 * The sections contain compressed streams with HWP paragraph records.
 * Each paragraph record has text with control characters.
 *
 * This is a simplified extraction that looks for UTF-16LE text patterns
 * in the binary data. For production use, a full OLE2+HWP parser would be better.
 */
function extractTextFromHwp(bytes: Uint8Array): string {
  const texts: string[] = [];

  // Strategy: Scan for UTF-16LE text sequences
  // HWP uses UTF-16LE internally for text storage
  let i = 0;
  let currentText = '';

  while (i < bytes.length - 1) {
    const lo = bytes[i];
    const hi = bytes[i + 1];
    const codePoint = lo | (hi << 8);

    // Korean syllables: U+AC00 ~ U+D7AF
    // Basic Latin: U+0020 ~ U+007E
    // CJK punctuation: U+3000 ~ U+303F
    // Fullwidth: U+FF00 ~ U+FF5E
    // Common Korean Jamo: U+1100 ~ U+11FF
    const isKorean = codePoint >= 0xac00 && codePoint <= 0xd7af;
    const isLatin = codePoint >= 0x0020 && codePoint <= 0x007e;
    const isPunct = (codePoint >= 0x3000 && codePoint <= 0x303f) ||
                    (codePoint >= 0xff00 && codePoint <= 0xff5e);
    const isNewline = codePoint === 0x000a || codePoint === 0x000d;

    if (isKorean || isLatin || isPunct || isNewline) {
      if (isNewline) {
        if (currentText.trim().length >= 2) {
          texts.push(currentText.trim());
        }
        currentText = '';
      } else {
        currentText += String.fromCharCode(codePoint);
      }
      i += 2;
    } else {
      if (currentText.trim().length >= 2) {
        texts.push(currentText.trim());
      }
      currentText = '';
      i += 2;
    }
  }

  if (currentText.trim().length >= 2) {
    texts.push(currentText.trim());
  }

  // Filter: keep lines that are likely actual content (not binary garbage)
  const filtered = texts.filter(line => {
    // Must have at least some meaningful characters
    const koreanCount = (line.match(/[\uac00-\ud7af]/g) || []).length;
    const alphaCount = (line.match(/[a-zA-Z]/g) || []).length;
    return koreanCount >= 2 || alphaCount >= 3 || line.length >= 10;
  });

  return filtered.join('\n\n');
}
