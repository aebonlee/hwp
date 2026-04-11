/**
 * Markdown → HWPX generator
 * Creates an HWPX file from markdown content.
 */
import JSZip from 'jszip';
import { markdownToIR } from '../markdown/parser';
import { buildSectionXml } from './sectionBuilder';
import { buildManifestXml } from './manifestBuilder';

/**
 * Generate an HWPX file (as Blob) from markdown content.
 */
export async function generateHwpx(markdown: string, title: string): Promise<Blob> {
  const ir = markdownToIR(markdown);
  if (title) ir.metadata.title = title;

  const zip = new JSZip();

  // mimetype (uncompressed, first entry)
  zip.file('mimetype', 'application/hwp+zip', { compression: 'STORE' });

  // META-INF/container.xml
  zip.file('META-INF/container.xml', buildContainerXml());

  // Contents/content.hpf (manifest)
  zip.file('Contents/content.hpf', buildManifestXml(ir.metadata));

  // Contents/header.xml
  zip.file('Contents/header.xml', buildHeaderXml());

  // Contents/section0.xml (body content)
  zip.file('Contents/section0.xml', buildSectionXml(ir));

  // Generate the zip
  return zip.generateAsync({
    type: 'blob',
    mimeType: 'application/hwp+zip',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });
}

function buildContainerXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0">
  <rootfiles>
    <rootfile full-path="Contents/content.hpf" media-type="application/hwpml-package+xml"/>
  </rootfiles>
</container>`;
}

function buildHeaderXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<ha:HWPDocumentHeaderType xmlns:ha="urn:hancom:hwp:header"
  version="1.1" secCnt="1">
</ha:HWPDocumentHeaderType>`;
}
