/**
 * Markdown → HWPX generator
 * Creates an HWPX file from markdown content.
 *
 * Namespaces follow the official HWPML 2011 spec
 * (verified against hwp2md Go parser and real HanCom Office output).
 */
import JSZip from 'jszip';
import { markdownToIR } from '../markdown/parser';
import { buildSectionXml } from './sectionBuilder';
import { buildManifestXml } from './manifestBuilder';

export interface HwpxCoverPage {
  title: string;
  organization?: string;
  date?: string;
  applicant?: string;
}

export interface HwpxOptions {
  pageNumbers?: boolean;
  coverPage?: HwpxCoverPage;
}

/**
 * Generate an HWPX file (as Blob) from markdown content.
 */
export async function generateHwpx(markdown: string, title: string, options?: HwpxOptions): Promise<Blob> {
  const ir = markdownToIR(markdown);
  if (title) ir.metadata.title = title;

  const opts: HwpxOptions = {
    pageNumbers: true,
    ...options,
  };

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
  zip.file('Contents/section0.xml', buildSectionXml(ir, opts));

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

/**
 * Build header.xml with correct hh: prefix and HWPML 2011 namespace.
 */
function buildHeaderXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<hh:head xmlns:hh="http://www.hancom.co.kr/hwpml/2011/head"
  version="1.1" secCnt="1">
  <hh:beginNum page="1" footnote="1" endnote="1" figure="1" table="1" equation="1"/>
  <hh:refList>
    <hh:fontfaces itemCnt="2">
      <hh:fontface lang="HANGUL" fontCnt="1">
        <hh:font id="0" face="함초롬돋움" type="TTF"/>
      </hh:fontface>
      <hh:fontface lang="LATIN" fontCnt="1">
        <hh:font id="0" face="함초롬돋움" type="TTF"/>
      </hh:fontface>
    </hh:fontfaces>
    <hh:charProperties itemCnt="5">
      <hh:charPr id="0" height="1000" bold="false" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="1" height="1600" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="2" height="1300" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="3" height="1100" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="4" height="1000" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
    </hh:charProperties>
    <hh:paraProperties itemCnt="1">
      <hh:paraPr id="0" align="JUSTIFY">
        <hh:lineSpacing type="PERCENT" value="160"/>
      </hh:paraPr>
    </hh:paraProperties>
  </hh:refList>
</hh:head>`;
}
