/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import { GridColDef } from '@mui/x-data-grid';
import { WorkSheet, Range } from 'xlsx';
import _groupBy from 'lodash/groupBy';

import { FileType, TermListItem } from '../../../../generated-types';

export type DataSet = { [index: string]: WorkSheet };
export type Row = any;
export type RowCol = { rows: any[]; columns: GridColDef[] };

export const TYPES = [
  {
    label: 'Danh sách giáo viên chủ nhiệm',
    value: FileType.DanhSachGvcn,
  },
  {
    label: 'Danh sách môn học',
    value: FileType.DanhSachMonHoc,
  },
  {
    label: 'Danh sách chuyên ngành',
    value: FileType.DanhSachChuyenNganh,
  },
  {
    label: 'Danh sách kết quả chuyên ngành',
    value: FileType.KetQuaChuyenNganh,
  },
  {
    label: 'Chứng chỉ ngoại ngữ',
    value: FileType.ChungChiNgoaiNgu,
  },
  {
    label: 'Bảng điểm toàn bộ sinh viên',
    value: FileType.BangDiemToanBoSinhVien,
  },
  { label: 'Thời khoá biểu', value: FileType.ThoiKhoaBieu },
  {
    label: 'Danh sách hồ sơ sinh viên',
    value: FileType.HoSoSinhVien,
  },
  {
    label: 'Danh sách không đăng ký học phần',
    value: FileType.DanhSachSinhVienKhongDkhp,
  },
  {
    label: 'Danh sách hoãn thi',
    value: FileType.DanhSachSinhVienHoanThi,
  },
  {
    label: 'Danh sách vắng thi',
    value: FileType.DanhSachSinhVienVangThi,
  },
  {
    label: 'Điểm rèn luyện',
    value: FileType.DiemRenLuyen,
  },
  {
    label: 'Thống kê đăng ký học phần',
    value: FileType.ThongKeDkhp,
  },

  {
    label: 'Bảng điểm lớp học phần',
    value: FileType.DiemThiTheoLopHocPhan,
  },
];

export const arrayify = (rows: any[]): Row[] => {
  return rows.map((row) => {
    if (Array.isArray(row)) return row;
    let { length } = Object.keys(row);
    // eslint-disable-next-line no-plusplus
    for (; length > 0; --length) if (row[length - 1] != null) break;
    return Array.from({ length, ...row });
  });
};

export const groupTermsByYear = (termList: TermListItem[]) => {
  return _groupBy(termList, (term) => term.namHocBD);
};

export type Cell = boolean | number | string | Date | undefined;

/**
 * Unmerge and fill each merged cell.
 * @note inline operation
 */
const unmergeCell = (aoa: Cell[][], merge: Range) => {
  let value: Cell | undefined;
  forEachRow: for (let row = merge.s.r; row <= merge.e.r; row += 1) {
    for (let col = merge.s.c; col <= merge.e.c; col += 1) {
      const possible = aoa[row][col];
      if (possible) {
        value = possible;
        break forEachRow;
      }
    }
  }
  if (!value) {
    return;
  }
  for (let row = merge.s.r; row <= merge.e.r; row += 1) {
    for (let col = merge.s.c; col <= merge.e.c; col += 1) {
      aoa[row][col] = value;
    }
  }
};

/**
 * Unmerge and fill-in all merged cells
 * @note inline operation
 * @returns unmerged matrix
 * @example
 *      Input:
 *      +---+----------+------------+
 *      | # |   Name   |  Homeroom  |
 *      +---+----------+------------+
 *      | 1 |          |   19CLC1   |
 *      +---+   John   +------------+
 *      | 2 |          |   19CLC2   |
 *      +---+----------+------------+
 *      Output:
 *      +---+----------+------------+
 *      | # |   Name   |  Homeroom  |
 *      +---+----------+------------+
 *      | 1 |   John   |   19CLC1   |
 *      +---+----------+------------+
 *      | 2 |   John   |   19CLC2   |
 *      +---+----------+------------+
 */
export const unmergeSheet = (aoa: Cell[][], merges: Range[] | undefined) => {
  if (!Array.isArray(merges)) {
    return aoa;
  }
  for (const merge of merges) {
    unmergeCell(aoa, merge);
  }
  return aoa;
};
