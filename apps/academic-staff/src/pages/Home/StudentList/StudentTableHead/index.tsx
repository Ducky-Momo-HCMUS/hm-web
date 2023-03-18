import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

interface Column {
  id: 'maSV' | 'tenSV' | 'maCN' | 'tinhTrang' | 'sdt' | 'emailSV';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'maSV', label: 'MSSV' },
  {
    id: 'tenSV',
    label: 'Họ tên',
    minWidth: 200,
  },
  {
    id: 'maCN',
    label: 'Chuyên ngành',
    minWidth: 120,
  },
  {
    id: 'tinhTrang',
    label: 'Tình trạng',
    minWidth: 120,
  },
  { id: 'sdt', label: 'Số điện thoại', minWidth: 120 },
  { id: 'emailSV', label: 'Email sinh viên', minWidth: 120 },
];

function StudentTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default StudentTableHead;
