/**
 * Manifest (content.hpf) builder for HWPX export.
 */
import type { IRMetadata } from '../ir/types';

/**
 * Build content.hpf manifest XML.
 */
export function buildManifestXml(metadata: IRMetadata): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<opf:package xmlns:opf="http://www.idpf.org/2007/opf" version="1.0">
  <opf:metadata>
    <opf:title>${escapeXml(metadata.title || '')}</opf:title>
    <opf:creator>${escapeXml(metadata.author || '')}</opf:creator>
    <opf:subject>${escapeXml(metadata.subject || '')}</opf:subject>
    <opf:description>${escapeXml(metadata.description || '')}</opf:description>
    <opf:date>${new Date().toISOString().split('T')[0]}</opf:date>
  </opf:metadata>
  <opf:manifest>
    <opf:item id="header" href="header.xml" media-type="application/xml"/>
    <opf:item id="section0" href="section0.xml" media-type="application/xml"/>
  </opf:manifest>
  <opf:spine>
    <opf:itemref idref="section0"/>
  </opf:spine>
</opf:package>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
