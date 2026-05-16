/**
 * zlib 브라우저 심 — kordoc의 hwpx/parser.ts, hwp3/parser.ts가 사용하는
 * inflateRawSync를 fflate�� 대체한다.
 */
import { inflateSync } from 'fflate';

/**
 * inflateRawSync — raw deflate 데이터를 해제.
 * Node.js zlib.inflateRawSync와 동일한 인터페이스.
 */
export function inflateRawSync(
  data: Uint8Array | Buffer,
  options?: { maxOutputLength?: number }
): Buffer {
  const input = data instanceof Uint8Array ? data : new Uint8Array(data);
  const result = inflateSync(input);

  // maxOutputLength 초과 시 에러 (ZIP bomb 방지)
  if (options?.maxOutputLength && result.byteLength > options.maxOutputLength) {
    throw new Error(`Output length exceeded: ${result.byteLength} > ${options.maxOutputLength}`);
  }

  // Buffer 호환 — 브라우저에서 buffer 패키지 사용
  return Buffer.from(result.buffer, result.byteOffset, result.byteLength);
}

export default { inflateRawSync };
