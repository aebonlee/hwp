/**
 * Section XML builder for HWPX export
 * Generates section0.xml from IR content.
 *
 * Uses official HWPML 2011 namespaces:
 *   hs = http://www.hancom.co.kr/hwpml/2011/section
 *   hp = http://www.hancom.co.kr/hwpml/2011/paragraph
 *   ht = http://www.hancom.co.kr/hwpml/2011/table
 *   hd = http://www.hancom.co.kr/hwpml/2011/drawing
 *
 * Verified against hwp2md Go parser and real HanCom Office output.
 */
import type { IRDocument, IRBlock, IRParagraph, IRTableBlock, IRListBlock, IRImageBlock, IRRun } from '../ir/types';
import type { HwpxOptions } from './generator';

let paraIdCounter = 0;

function nextParaId(): number {
  return ++paraIdCounter;
}

/**
 * Build section0.xml from IR document content.
 */
export function buildSectionXml(doc: IRDocument, options?: HwpxOptions): string {
  paraIdCounter = 0;
  let body = '';

  // Cover page
  if (options?.coverPage) {
    body += buildCoverPage(options.coverPage);
  }

  for (const block of doc.content) {
    body += blockToXml(block);
  }

  const secPr = buildSecPr(options);

  return `<?xml version="1.0" encoding="UTF-8"?>
<hs:sec xmlns:hs="http://www.hancom.co.kr/hwpml/2011/section"
  xmlns:hp="http://www.hancom.co.kr/hwpml/2011/paragraph"
  xmlns:ht="http://www.hancom.co.kr/hwpml/2011/table"
  xmlns:hd="http://www.hancom.co.kr/hwpml/2011/drawing">
${secPr}
${body}
</hs:sec>`;
}

/**
 * Build section properties — page size, margins, footer.
 */
function buildSecPr(options?: HwpxOptions): string {
  // A4: 210mm x 297mm → HWPU (1mm ≈ 283.465 HWPU)
  const pageW = 59528;  // 210mm
  const pageH = 84188;  // 297mm
  const marginL = 4252;  // ~15mm
  const marginR = 4252;
  const marginT = 5669;  // ~20mm
  const marginB = 4252;
  const headerOffset = 1417;  // ~5mm
  const footerOffset = 1417;

  let footer = '';
  if (options?.pageNumbers !== false) {
    const fid = nextParaId();
    footer = `
    <hs:footerPr>
      <hp:p paraId="${fid}" paraPrIDRef="0">
        <hp:run charPrIDRef="0">
          <hp:t>- </hp:t>
        </hp:run>
        <hp:run charPrIDRef="0">
          <hp:t> -</hp:t>
        </hp:run>
      </hp:p>
    </hs:footerPr>`;
  }

  return `  <hs:secPr textDirection="HORIZONTAL" spaceColumns="0">
    <hs:pagePr landscape="false" width="${pageW}" height="${pageH}">
      <hs:margin header="${headerOffset}" footer="${footerOffset}"
        left="${marginL}" right="${marginR}" top="${marginT}" bottom="${marginB}"
        gutter="0"/>
    </hs:pagePr>${footer}
  </hs:secPr>`;
}

/**
 * Build cover page paragraphs.
 */
function buildCoverPage(cover: { title: string; organization?: string; date?: string; applicant?: string }): string {
  let xml = '';

  // Empty lines for vertical spacing (top)
  for (let i = 0; i < 8; i++) {
    const pid = nextParaId();
    xml += `  <hp:p paraId="${pid}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>\n`;
  }

  // Title (large, centered)
  const titleId = nextParaId();
  xml += `  <hp:p paraId="${titleId}" paraPrIDRef="0" outlineLevel="1">
    <hp:run charPrIDRef="1">
      <hp:t>${escapeXml(cover.title)}</hp:t>
    </hp:run>
  </hp:p>\n`;

  // Empty lines
  for (let i = 0; i < 4; i++) {
    const pid = nextParaId();
    xml += `  <hp:p paraId="${pid}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>\n`;
  }

  // Organization
  if (cover.organization) {
    const orgId = nextParaId();
    xml += `  <hp:p paraId="${orgId}" paraPrIDRef="0">
    <hp:run charPrIDRef="2">
      <hp:t>${escapeXml(cover.organization)}</hp:t>
    </hp:run>
  </hp:p>\n`;
  }

  // Empty lines
  for (let i = 0; i < 2; i++) {
    const pid = nextParaId();
    xml += `  <hp:p paraId="${pid}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>\n`;
  }

  // Date
  if (cover.date) {
    const dateId = nextParaId();
    xml += `  <hp:p paraId="${dateId}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${escapeXml(cover.date)}</hp:t>
    </hp:run>
  </hp:p>\n`;
  }

  // Applicant
  if (cover.applicant) {
    const appId = nextParaId();
    xml += `  <hp:p paraId="${appId}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${escapeXml(cover.applicant)}</hp:t>
    </hp:run>
  </hp:p>\n`;
  }

  // Page break after cover
  const brkId = nextParaId();
  xml += `  <hp:p paraId="${brkId}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:br type="page"/>
    </hp:run>
  </hp:p>\n`;

  return xml;
}

function blockToXml(block: IRBlock): string {
  switch (block.type) {
    case 'paragraph':
      return block.paragraph ? paragraphToXml(block.paragraph) : '';
    case 'table':
      return block.table ? tableToXml(block.table) : '';
    case 'list':
      return block.list ? listToXml(block.list) : '';
    case 'image':
      return block.image ? imageToXml(block.image) : '';
    default:
      return '';
  }
}

function getCharPrIdForHeading(level: number): string {
  switch (level) {
    case 1: return '1';  // 16pt bold
    case 2: return '2';  // 13pt bold
    case 3: return '3';  // 11pt bold
    default: return '3'; // h4-h6 also 11pt bold
  }
}

/**
 * Render inline runs as XML. If paragraph has parsed runs, use them;
 * otherwise fall back to plain text.
 */
function runsToXml(runs: IRRun[], fallbackText: string): string {
  if (runs.length > 0) {
    return runs.map(run => {
      const charPr = run.style.bold ? ' charPrIDRef="4"' : ' charPrIDRef="0"';
      return `    <hp:run${charPr}>\n      <hp:t>${escapeXml(run.text)}</hp:t>\n    </hp:run>\n`;
    }).join('');
  }
  return `    <hp:run charPrIDRef="0">\n      <hp:t>${escapeXml(fallbackText)}</hp:t>\n    </hp:run>\n`;
}

function paragraphToXml(p: IRParagraph): string {
  const pid = nextParaId();

  // Heading: use outlineLevel attribute (real HWPX spec)
  const outlineAttr = p.style.headingLevel
    ? ` outlineLevel="${p.style.headingLevel}"`
    : '';
  const charPrForHeading = p.style.headingLevel
    ? getCharPrIdForHeading(p.style.headingLevel)
    : null;

  // Blockquote: add indent styling via text prefix
  if (p.style.isQuote) {
    return `  <hp:p paraId="${pid}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${escapeXml('\u2502 ' + p.text)}</hp:t>
    </hp:run>
  </hp:p>
`;
  }

  // Heading with specific charPr
  if (charPrForHeading) {
    return `  <hp:p paraId="${pid}" paraPrIDRef="0"${outlineAttr}>
    <hp:run charPrIDRef="${charPrForHeading}">
      <hp:t>${escapeXml(p.text)}</hp:t>
    </hp:run>
  </hp:p>
`;
  }

  // Regular paragraph with inline runs
  let xml = `  <hp:p paraId="${pid}" paraPrIDRef="0"${outlineAttr}>\n`;
  xml += runsToXml(p.runs, p.text);
  xml += `  </hp:p>\n`;
  return xml;
}

/**
 * Table: uses ht: prefix (http://www.hancom.co.kr/hwpml/2011/table)
 */
function tableToXml(t: IRTableBlock): string {
  if (!t.cells || t.cells.length === 0) return '';

  let xml = `  <ht:tbl>\n`;

  for (let i = 0; i < t.cells.length; i++) {
    xml += `    <ht:tr>\n`;
    for (let j = 0; j < t.cells[i].length; j++) {
      const cell = t.cells[i][j];
      const spanAttrs: string[] = [];
      if (cell.colSpan > 1) spanAttrs.push(`gridSpan="${cell.colSpan}"`);
      if (cell.rowSpan > 1) spanAttrs.push(`rowSpan="${cell.rowSpan}"`);

      const isHeader = i === 0 && t.hasHeader;
      const charPrId = isHeader ? '4' : '0';  // bold for header
      const cellPid = nextParaId();

      xml += `      <ht:tc${spanAttrs.length > 0 ? ' ' + spanAttrs.join(' ') : ''}>\n`;
      xml += `        <hp:p paraId="${cellPid}" paraPrIDRef="0">\n`;
      xml += `          <hp:run charPrIDRef="${charPrId}">\n`;
      xml += `            <hp:t>${escapeXml(cell.text)}</hp:t>\n`;
      xml += `          </hp:run>\n`;
      xml += `        </hp:p>\n`;
      xml += `      </ht:tc>\n`;
    }
    xml += `    </ht:tr>\n`;
  }

  xml += `  </ht:tbl>\n`;
  return xml;
}

/**
 * Lists: uses numId/ilvl attributes on hp:p (real HWPX spec).
 */
function listToXml(l: IRListBlock): string {
  let xml = '';
  const numId = l.ordered ? '2' : '1';  // 1=bullet, 2=decimal (defined in header)
  for (let i = 0; i < l.items.length; i++) {
    const item = l.items[i];
    const ilvl = item.level || 0;
    const pid = nextParaId();
    xml += `  <hp:p paraId="${pid}" paraPrIDRef="0" numId="${numId}" ilvl="${ilvl}">\n`;
    xml += `    <hp:run charPrIDRef="0">\n`;
    xml += `      <hp:t>${escapeXml(item.text)}</hp:t>\n`;
    xml += `    </hp:run>\n`;
    xml += `  </hp:p>\n`;
  }
  return xml;
}

function imageToXml(img: IRImageBlock): string {
  const pid = nextParaId();
  // Basic image placeholder — full image embedding would require BinData
  return `  <hp:p paraId="${pid}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>[Image: ${escapeXml(img.alt || img.id)}]</hp:t>
    </hp:run>
  </hp:p>
`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
