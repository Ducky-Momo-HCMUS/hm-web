import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

interface Column {
  id:
    | 'subjectId'
    | 'subjectName'
    | 'class'
    | 'status'
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
  { id: 'diemGK', label: 'GK', minWidth: 60 },
  { id: 'diemTH', label: 'TH', minWidth: 60 },
  { id: 'diemCong', label: 'Cộng', minWidth: 60 },
  { id: 'diemKhac', label: 'Khác', minWidth: 60 },
  { id: 'diemCK', label: 'CK', minWidth: 60 },
  { id: 'dtb', label: 'Tổng', minWidth: 60 },
];

function AcademicTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => (
          <TableCell key={column.id}>
            <TableSortLabel>{column.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default AcademicTableHead;
