import { GridColDef } from '@mui/x-data-grid';
import { WorkSheet } from 'xlsx';

export type DataSet = { [index: string]: WorkSheet };
export type Row = any;
export type RowCol = { rows: any[]; columns: GridColDef[] };

export const arrayify = (rows: any[]): Row[] => {
  return rows.map((row) => {
    if (Array.isArray(row)) return row;
    let { length } = Object.keys(row);
    // eslint-disable-next-line no-plusplus
    for (; length > 0; --length) if (row[length - 1] != null) break;
    return Array.from({ length, ...row });
  });
};
