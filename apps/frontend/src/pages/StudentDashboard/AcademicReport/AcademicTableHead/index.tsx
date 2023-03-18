import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

interface Column {
  id:
    | 'subjectId'
    | 'subjectName'
    | 'class'
    | 'status'
    | 'soTinChi'
    | 'diemGK'
    | 'diemTH'
    | 'diemCong'
    | 'diemKhac'
    | 'diemCK'
    | 'dtb';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'subjectId', label: 'Mã môn học' },
  {
    id: 'subjectName',
    label: 'Tên môn học',
    minWidth: 200,
  },
  {
    id: 'class',
    label: 'Lớp HP',
    minWidth: 120,
  },
  {
    id: 'status',
    label: 'Tình trạng',
    minWidth: 120,
  },
  {
    id: 'soTinChi',
    label: 'Số TC',
    minWidth: 60,
  },
  { id: 'diemGK', label: 'GK', minWidth: 40 },
  { id: 'diemTH', label: 'TH', minWidth: 40 },
  { id: 'diemCong', label: 'Cộng', minWidth: 60 },
  { id: 'diemKhac', label: 'Khác', minWidth: 60 },
  { id: 'diemCK', label: 'CK', minWidth: 40 },
  { id: 'dtb', label: 'Tổng', minWidth: 60 },
];

function AcademicTableHead() {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default AcademicTableHead;
