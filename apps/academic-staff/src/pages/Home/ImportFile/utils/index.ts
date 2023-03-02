import { GridColDef } from '@mui/x-data-grid';
import { utils, WorkSheet } from 'xlsx';

export type DataSet = { [index: string]: WorkSheet };
export type Row = any[];
export type RowCol = { rows: Row[]; columns: GridColDef[] };

export const YEARS = [2017, 2018, 2019];
export const TYPES = [
  { label: 'Danh sách giáo viên chủ nhiệm', endpoint: 'teachers' },
  { label: 'Danh sách hồ sơ sinh viên', endpoint: 'students-info' },
  { label: 'Danh sách môn học', endpoint: 'courses' },
  { label: 'Danh sách chuyên ngành', endpoint: 'majors' },
  { label: 'Danh sách kết quả chuyên ngành', endpoint: 'major-result' },
  // 'Danh sách đăng ký học phần',
  { label: 'Danh sách không đăng ký học phần', endpoint: 'unregister' },
  { label: 'Điểm rèn luyện', endpoint: 'training-point' },
  { label: 'Bảng điểm lớp học phần', endpoint: 'score' },
  { label: 'Danh sách hoãn thi', endpoint: 'postpone' },
  { label: 'Danh sách vắng thi', endpoint: 'absent' },
  { label: 'Tình trạng sinh viên', endpoint: 'student-status' },
  { label: 'Thống kê đăng ký học phần', endpoint: 'registration-statistic' },
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
