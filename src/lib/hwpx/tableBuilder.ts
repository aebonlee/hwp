/**
 * 2-pass table building algorithm
 * Ported from hwp2md/internal/parser/hwpx/parser.go buildTable()
 */
import { newTable, type IRTableBlock } from '../ir/types';

export interface CellContext {
  text: string;
  colSpan: number;
  rowSpan: number;
}

/**
 * Build an IR table from parsed rows with proper rowSpan/colSpan handling.
 */
export function buildTable(rows: CellContext[][]): IRTableBlock | null {
  if (rows.length === 0) return null;

  const numRows = rows.length;

  // Pass 1: Calculate actual column count by simulating cell placement
  const tempOccupied: boolean[][] = [];
  for (let i = 0; i < numRows; i++) {
    tempOccupied.push(new Array(100).fill(false));
  }

  let maxCols = 0;
  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    let colIdx = 0;
    for (const cell of rows[rowIdx]) {
      // Skip occupied columns
      while (colIdx < 100 && tempOccupied[rowIdx][colIdx]) {
        colIdx++;
      }
      if (colIdx >= 100) break;

      // Mark cells occupied by this cell's rowSpan and colSpan
      for (let r = rowIdx; r < rowIdx + cell.rowSpan && r < numRows; r++) {
        for (let c = colIdx; c < colIdx + cell.colSpan && c < 100; c++) {
          tempOccupied[r][c] = true;
        }
      }

      colIdx += cell.colSpan;
      if (colIdx > maxCols) maxCols = colIdx;
    }
  }

  if (maxCols === 0) return null;

  // Create the properly sized occupied grid
  const occupiedGrid: boolean[][] = [];
  for (let i = 0; i < numRows; i++) {
    occupiedGrid.push(new Array(maxCols).fill(false));
  }

  const table = newTable(numRows, maxCols);

  // Pass 2: Place cells and mark occupied cells from rowSpan
  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    let colIdx = 0;
    let cellIdx = 0;

    while (colIdx < maxCols && cellIdx < rows[rowIdx].length) {
      // Skip columns occupied by rowSpan from previous rows
      while (colIdx < maxCols && occupiedGrid[rowIdx][colIdx]) {
        colIdx++;
      }

      if (colIdx >= maxCols || cellIdx >= rows[rowIdx].length) break;

      const cell = rows[rowIdx][cellIdx];
      table.cells[rowIdx][colIdx].text = cell.text.trim();
      table.cells[rowIdx][colIdx].colSpan = cell.colSpan;
      table.cells[rowIdx][colIdx].rowSpan = cell.rowSpan;

      // Mark cells occupied by this cell's rowSpan and colSpan
      for (let r = rowIdx; r < rowIdx + cell.rowSpan && r < numRows; r++) {
        for (let c = colIdx; c < colIdx + cell.colSpan && c < maxCols; c++) {
          occupiedGrid[r][c] = true;
        }
      }

      colIdx += cell.colSpan;
      cellIdx++;
    }
  }

  // Check if first row might be header
  if (rows.length > 1) {
    table.hasHeader = true;
    if (table.cells[0]) {
      for (let j = 0; j < maxCols; j++) {
        table.cells[0][j].style.isHeader = true;
      }
    }
  }

  return table;
}

/**
 * Convert a table (rows of cells) to plain text for nested table handling.
 */
export function convertTableToText(rows: CellContext[][]): string {
  const parts: string[] = [];
  for (const row of rows) {
    const cellTexts: string[] = [];
    for (const cell of row) {
      const text = cell.text.trim();
      if (text) {
        cellTexts.push(text.replace(/\n/g, ' '));
      }
    }
    if (cellTexts.length > 0) {
      parts.push(cellTexts.join(' | '));
    }
  }
  return parts.join('\n');
}
