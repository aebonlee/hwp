/**
 * IR 타입 브릿지 — kordoc IRBlock[] ��� hwp IRDocument 변환
 *
 * kordoc의 IRBlock은 flat 구조 (type + text/table/level 등)이고,
 * hwp의 IRBlock은 discriminated union + 중첩 객체 구조 (paragraph/table/image/list)이다.
 */
import type { IRBlock as KordocBlock, IRTable as KordocTable, DocumentMetadata } from '@kordoc/types';
import type {
  IRDocument, IRBlock as HwpBlock, IRParagraph, IRTableBlock, IRCell,
  IRListBlock, IRListItem, IRImageBlock, IRMetadata
} from '../ir/types';

/**
 * kordoc IRBlock[] → hwp IRDocument 변환
 */
export function kordocToHwpIR(
  blocks: KordocBlock[],
  metadata?: DocumentMetadata
): IRDocument {
  const doc: IRDocument = {
    version: '1.0',
    metadata: convertMetadata(metadata),
    content: blocks.map(convertBlock),
  };
  return doc;
}

/**
 * hwp IRDocument → kordoc IRBlock[] 변환
 */
export function hwpIRToKordocBlocks(doc: IRDocument): KordocBlock[] {
  return doc.content.map(reverseConvertBlock);
}

// ─── kordoc → hwp ─────────────────────────────────────

function convertMetadata(meta?: DocumentMetadata): IRMetadata {
  if (!meta) return {};
  return {
    title: meta.title,
    author: meta.author,
    creator: meta.creator,
    created: meta.createdAt,
    modified: meta.modifiedAt,
    description: meta.description,
    keywords: meta.keywords?.join(', '),
  };
}

function convertBlock(block: KordocBlock): HwpBlock {
  switch (block.type) {
    case 'heading':
      return {
        type: 'paragraph',
        paragraph: {
          text: block.text || '',
          runs: [{ text: block.text || '', style: { bold: true } }],
          style: { headingLevel: block.level || 1 },
        },
      };

    case 'table':
      return {
        type: 'table',
        table: convertTable(block.table),
      };

    case 'image':
      return {
        type: 'image',
        image: convertImage(block),
      };

    case 'list':
      return {
        type: 'list',
        list: convertList(block),
      };

    case 'separator':
      return {
        type: 'paragraph',
        paragraph: {
          text: '---',
          runs: [{ text: '---', style: {} }],
          style: {},
        },
      };

    case 'paragraph':
    default:
      return {
        type: 'paragraph',
        paragraph: convertParagraph(block),
      };
  }
}

function convertParagraph(block: KordocBlock): IRParagraph {
  const text = block.text || '';
  return {
    text,
    runs: [{
      text,
      style: {
        bold: block.style?.bold,
        italic: block.style?.italic,
      },
    }],
    style: {},
  };
}

function convertTable(table?: KordocTable): IRTableBlock {
  if (!table) return { rows: 0, cols: 0, cells: [] };

  const cells: IRCell[][] = [];
  for (let r = 0; r < table.rows; r++) {
    const row: IRCell[] = [];
    for (let c = 0; c < table.cols; c++) {
      const cell = table.cells[r]?.[c];
      row.push({
        text: cell?.text || '',
        rowSpan: cell?.rowSpan || 1,
        colSpan: cell?.colSpan || 1,
        style: {
          isHeader: table.hasHeader && r === 0,
        },
      });
    }
    cells.push(row);
  }

  return {
    rows: table.rows,
    cols: table.cols,
    cells,
    hasHeader: table.hasHeader,
  };
}

function convertImage(block: KordocBlock): IRImageBlock {
  return {
    id: block.imageData?.filename || `img_${Date.now()}`,
    format: block.imageData?.mimeType?.split('/')[1] || 'png',
    data: block.imageData?.data,
    alt: block.text,
  };
}

function convertList(block: KordocBlock): IRListBlock {
  const ordered = block.listType === 'ordered';
  const items: IRListItem[] = [];

  if (block.children) {
    for (const child of block.children) {
      items.push({
        text: child.text || '',
        level: 0,
        children: child.children?.map(c => ({
          text: c.text || '',
          level: 1,
        })),
      });
    }
  } else if (block.text) {
    // 단일 텍스트 리스트 아이템
    items.push({ text: block.text, level: 0 });
  }

  return { ordered, items };
}

// ─── hwp �� kordoc ─────────────────────────────────────

function reverseConvertBlock(block: HwpBlock): KordocBlock {
  switch (block.type) {
    case 'paragraph':
      if (block.paragraph?.style.headingLevel) {
        return {
          type: 'heading',
          text: block.paragraph.text,
          level: block.paragraph.style.headingLevel,
        };
      }
      return {
        type: 'paragraph',
        text: block.paragraph?.text || '',
      };

    case 'table':
      return {
        type: 'table',
        table: reverseConvertTable(block.table),
      };

    case 'image':
      return {
        type: 'image',
        text: block.image?.alt || block.image?.path || '',
        imageData: block.image?.data ? {
          data: block.image.data,
          mimeType: `image/${block.image.format || 'png'}`,
        } : undefined,
      };

    case 'list':
      return {
        type: 'list',
        text: block.list?.items.map(i => i.text).join('\n') || '',
        listType: block.list?.ordered ? 'ordered' : 'unordered',
        children: block.list?.items.map(item => ({
          type: 'paragraph' as const,
          text: item.text,
          children: item.children?.map(c => ({
            type: 'paragraph' as const,
            text: c.text,
          })),
        })),
      };

    default:
      return { type: 'paragraph', text: '' };
  }
}

function reverseConvertTable(table?: IRTableBlock): KordocTable | undefined {
  if (!table) return undefined;
  return {
    rows: table.rows,
    cols: table.cols,
    cells: table.cells.map(row =>
      row.map(cell => ({
        text: cell.text,
        colSpan: cell.colSpan,
        rowSpan: cell.rowSpan,
      }))
    ),
    hasHeader: table.hasHeader || false,
  };
}
