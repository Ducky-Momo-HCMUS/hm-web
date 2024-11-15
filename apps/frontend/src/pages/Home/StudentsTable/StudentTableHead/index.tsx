import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

interface Column {
  id:
    | 'maSV'
    | 'tenSV'
    | 'tenCN'
    | 'tinhTrang'
    | 'gpa10'
    | 'contact'
    | 'actions';
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
    id: 'tenCN',
    label: 'Chuyên ngành',
    minWidth: 120,
  },
  {
    id: 'tinhTrang',
    label: 'Tình trạng',
    minWidth: 120,
  },
  {
    id: 'gpa10',
    label: 'GPA hệ 10',
    minWidth: 60,
  },
  {
    id: 'contact',
    label: 'Thông tin liên lạc',
    minWidth: 360,
  },
  {
    id: 'actions',
    label: 'Thao tác',
    minWidth: 80,
  },
];

function StudentTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell key="watchlist">Chú ý</TableCell>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default StudentTableHead;
