/**
 * Image extraction from HWPX BinData
 * Ported from hwp2md/internal/parser/hwpx/parser.go extractBinData()
 */
import JSZip from 'jszip';
import type { IRImageBlock } from '../ir/types';

/**
 * Extract binary image data from HWPX zip and convert to base64 data URI.
 */
export async function extractImage(
  zip: JSZip,
  binDataMap: Map<string, string>,
  imageId: string
): Promise<IRImageBlock | null> {
  const path = binDataMap.get(imageId);
  if (!path) return null;

  // Try to find the file in the zip
  const file = findFileInZip(zip, path);
  if (!file) return null;

  const data = await file.async('uint8array');
  const ext = getExtension(path);
  const mimeType = getMimeType(ext);

  // Convert to base64 data URI
  const base64 = uint8ArrayToBase64(data);
  const dataUri = `data:${mimeType};base64,${base64}`;

  return {
    id: imageId,
    path: dataUri,
    origName: getBaseName(path),
    format: ext,
    data,
  };
}

/**
 * Extract all images from the zip.
 */
export async function extractAllImages(
  zip: JSZip,
  binDataMap: Map<string, string>
): Promise<Map<string, IRImageBlock>> {
  const images = new Map<string, IRImageBlock>();

  for (const [id, path] of binDataMap) {
    const file = findFileInZip(zip, path);
    if (!file) continue;

    const data = await file.async('uint8array');
    const ext = getExtension(path);
    const mimeType = getMimeType(ext);
    const base64 = uint8ArrayToBase64(data);

    images.set(id, {
      id,
      path: `data:${mimeType};base64,${base64}`,
      origName: getBaseName(path),
      format: ext,
      data,
    });
  }

  return images;
}

function findFileInZip(zip: JSZip, path: string): JSZip.JSZipObject | null {
  // Try exact match first
  let file = zip.file(path);
  if (file) return file;

  // Try case-insensitive match
  const lowerPath = path.toLowerCase();
  for (const [name, obj] of Object.entries(zip.files)) {
    if (name.toLowerCase() === lowerPath || name.toLowerCase().endsWith(lowerPath.replace(/^.*\//, '/'))) {
      if (!obj.dir) return obj;
    }
  }

  // Try with Contents/ prefix
  file = zip.file(`Contents/${path}`);
  if (file) return file;

  return null;
}

function getExtension(path: string): string {
  const idx = path.lastIndexOf('.');
  return idx >= 0 ? path.slice(idx + 1).toLowerCase() : '';
}

function getBaseName(path: string): string {
  const idx = path.lastIndexOf('/');
  return idx >= 0 ? path.slice(idx + 1) : path;
}

function getMimeType(ext: string): string {
  switch (ext) {
    case 'png': return 'image/png';
    case 'jpg': case 'jpeg': return 'image/jpeg';
    case 'gif': return 'image/gif';
    case 'bmp': return 'image/bmp';
    case 'svg': return 'image/svg+xml';
    case 'webp': return 'image/webp';
    case 'tif': case 'tiff': return 'image/tiff';
    default: return 'application/octet-stream';
  }
}

function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
