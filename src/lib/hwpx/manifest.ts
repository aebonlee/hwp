/**
 * HWPX Manifest (content.hpf) parser
 * Ported from hwp2md/internal/parser/hwpx/manifest.go
 */
import type { IRMetadata } from '../ir/types';

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

/**
 * Parse OPF-format manifest XML.
 */
export function parseManifest(xmlString: string): HwpxManifest {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'application/xml');

  // Parse metadata
  const meta: HwpxManifestMeta = {};
  const metaEl = doc.querySelector('metadata');
  if (metaEl) {
    meta.title = getTextContent(metaEl, 'title');
    meta.creator = getTextContent(metaEl, 'creator');
    meta.subject = getTextContent(metaEl, 'subject');
    meta.description = getTextContent(metaEl, 'description');
    meta.publisher = getTextContent(metaEl, 'publisher');
    meta.date = getTextContent(metaEl, 'date');
    meta.language = getTextContent(metaEl, 'language');
    meta.keywords = getTextContent(metaEl, 'keywords');
  }

  // Parse manifest items
  const items: HwpxManifestItem[] = [];
  const manifestEl = doc.querySelector('manifest');
  if (manifestEl) {
    for (const item of manifestEl.querySelectorAll('item')) {
      items.push({
        id: item.getAttribute('id') || '',
        href: item.getAttribute('href') || '',
        mediaType: item.getAttribute('media-type') || '',
      });
    }
  }

  // Parse spine
  const spine: HwpxSpineItem[] = [];
  const spineEl = doc.querySelector('spine');
  if (spineEl) {
    for (const ref of spineEl.querySelectorAll('itemref')) {
      spine.push({ idref: ref.getAttribute('idref') || '' });
    }
  }

  return { metadata: meta, items, spine };
}

/**
 * Convert manifest metadata to IR metadata.
 */
export function toIRMetadata(manifest: HwpxManifest): IRMetadata {
  return {
    title: manifest.metadata.title,
    author: manifest.metadata.creator,
    subject: manifest.metadata.subject,
    description: manifest.metadata.description,
    keywords: manifest.metadata.keywords,
    creator: manifest.metadata.creator,
    created: manifest.metadata.date,
  };
}

/**
 * Get ordered section file paths based on spine.
 */
export function getSectionPaths(manifest: HwpxManifest): string[] {
  // Build id → href map
  const itemMap = new Map<string, string>();
  for (const item of manifest.items) {
    itemMap.set(item.id, item.href);
  }

  // Get sections in spine order
  const paths: string[] = [];
  for (const ref of manifest.spine) {
    const href = itemMap.get(ref.idref);
    if (href) paths.push(href);
  }

  // If spine is empty, fall back to manifest order
  if (paths.length === 0) {
    for (const item of manifest.items) {
      if (isSection(item)) paths.push(item.href);
    }
  }

  return paths;
}

function isSection(item: HwpxManifestItem): boolean {
  return (
    item.mediaType === 'application/xml' ||
    item.mediaType === 'text/xml' ||
    (item.id.length > 0 && (item.id[0] === 's' || item.id[0] === 'S'))
  );
}

function getTextContent(parent: Element, tagName: string): string | undefined {
  // Try with and without namespace prefix
  const el = parent.querySelector(tagName) ||
    parent.getElementsByTagName(`opf:${tagName}`)[0] ||
    parent.getElementsByTagName(`dc:${tagName}`)[0];
  return el?.textContent?.trim() || undefined;
}
