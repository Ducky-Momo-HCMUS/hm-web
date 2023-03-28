import { GridColDef } from '@mui/x-data-grid';
import { WorkSheet } from 'xlsx';
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
    label: 'Bảng điểm toàn bộ sinh viên',
    value: FileType.BangDiemToanBoSinhVien,
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
