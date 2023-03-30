import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

interface Column {
  id: 'namHoc' | 'hocKy' | 'tinhTrang' | 'dtb' | 'drl' | 'soTinChi';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'namHoc',
    label: 'Năm học',
    minWidth: 140,
  },
  {
    id: 'hocKy',
    label: 'Học kỳ',
    minWidth: 100,
  },
  {
    id: 'dtb',
    label: 'Điểm trung bình',
    minWidth: 100,
  },
  {
    id: 'drl',
    label: 'Điểm rèn luyện',
    minWidth: 100,
  },
  {
    id: 'soTinChi',
    label: 'Số tín chỉ',
    minWidth: 100,
  },
];

function StudentStatisticsHeader() {
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

export default StudentStatisticsHeader;
