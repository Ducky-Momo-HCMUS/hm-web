import { GridColDef } from '@mui/x-data-grid';
import { utils, WorkSheet } from 'xlsx';
import _groupBy from 'lodash/groupBy';

import { FileType, TermListItem } from '../../../../generated-types';

export type DataSet = { [index: string]: WorkSheet };
export type Row = any[];
export type RowCol = { rows: Row[]; columns: GridColDef[] };

export const TYPES = [
  {
    label: 'Danh sách giáo viên chủ nhiệm',
    value: FileType.DanhSachGvcn,
    endpoint: 'teachers',
  },
  {
    label: 'Danh sách môn học',
    value: FileType.DanhSachMonHoc,
    endpoint: 'courses',
  },
  {
    label: 'Danh sách chuyên ngành',
    value: FileType.DanhSachChuyenNganh,
    endpoint: 'majors',
  },
  {
    label: 'Danh sách kết quả chuyên ngành',
    value: FileType.KetQuaChuyenNganh,
    endpoint: 'major-result',
  },
  {
    label: 'Danh sách hồ sơ sinh viên',
    value: FileType.HoSoSinhVien,
    endpoint: 'students-info',
  },
  // 'Danh sách đăng ký học phần',
  {
    label: 'Danh sách không đăng ký học phần',
    value: FileType.DanhSachSinhVienKhongDkhp,
    endpoint: 'unregister',
  },
  {
    label: 'Danh sách hoãn thi',
    value: FileType.DanhSachSinhVienHoanThi,
    endpoint: 'postpone',
  },
  {
    label: 'Danh sách vắng thi',
    value: FileType.DanhSachSinhVienVangThi,
    endpoint: 'absent',
  },
  {
    label: 'Điểm rèn luyện',
    value: FileType.DiemRenLuyen,
    endpoint: 'training-point',
  },
  {
    label: 'Thống kê đăng ký học phần',
    value: FileType.ThongKeDkhp,
    endpoint: 'registration-statistic',
  },
  {
    label: 'Bảng điểm toàn bộ sinh viên',
    value: FileType.BangDiemToanBoSinhVien,
    endpoint: 'student-status',
  },
  {
    label: 'Bảng điểm lớp học phần',
    value: FileType.DiemThiTheoLopHocPhan,
    endpoint: 'score',
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const arrayify = (rows: any[]): Row[] => {
  return rows.map((row) => {
    if (Array.isArray(row)) return row;
    let { length } = Object.keys(row);
    // eslint-disable-next-line no-plusplus
    for (; length > 0; --length) if (row[length - 1] != null) break;
    return Array.from({ length, ...row });
  });
};

/* this method returns `rows` and `columns` data for sheet change */
export const getRowsCols = (data: DataSet, sheetName: string): RowCol => {
  const sheet = data[sheetName];
  const endCell = Object.keys(sheet)[Object.keys(sheet).length - 2];

  return {
    rows: utils
      .sheet_to_json<Row>(data[sheetName], { header: 1 })
      .filter((row) => row.length > 0)
      .map((r, id) => ({ ...r, id })),
    columns: Array.from(
      {
        length: utils.decode_range(`A1:${endCell}`).e.c + 1,
      },
      (_, i) => ({
        field: String(i),
        headerName: utils.encode_col(i),
        editable: false,
        minWidth: 200,
        maxWidth: 400,
      })
    ),
  };
};

export const groupTermsByYear = (termList: TermListItem[]) => {
  return _groupBy(termList, (term) => term.namHocBD);
};
