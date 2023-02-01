import { GridColDef } from '@mui/x-data-grid';
import { utils, WorkSheet } from 'xlsx';

export type DataSet = { [index: string]: WorkSheet };
export type Row = any[];
export type RowCol = { rows: Row[]; columns: GridColDef[] };

export const YEARS = [2017, 2018, 2019];
export const TYPES = [
  'Danh sách giáo viên chủ nhiệm',
  'Danh sách hồ sơ sinh viên',
  'Danh sách môn học',
  'Danh sách chuyên ngành',
  'Danh sách kết quả chuyên ngành',
  'Thời khoá biểu',
  'Danh sách đăng ký học phần',
  'Danh sách không đăng ký học phần',
  'Bảng điểm tổng hợp',
  'Bảng điểm lớp học phần',
  'Điểm miễn/bảo lưu',
  'Danh sách hoãn thi',
  'Danh sách vắng thi',
];
export const TERMS = [1, 2, 3];
export const SUBJECTS = [
  'Cơ sở dữ liệu',
  'Nhập môn lập trình',
  'Hệ quản trị cơ sở dữ liệu',
  'Kỹ thuật lập trình',
];
export const CLASSES = ['19KTPM1', '19KTPM2', '19HTTT1', '19HTTT2'];

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
