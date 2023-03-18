import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

interface Column {
  id: 'maSH' | 'tenGVCN' | 'email';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'tenGVCN', label: 'Họ và tên' },
  {
    id: 'maSH',
    label: 'Lớp chủ nhiệm',
    minWidth: 200,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
  },
];

function HomeroomTeacherTableHead() {
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

export default HomeroomTeacherTableHead;
