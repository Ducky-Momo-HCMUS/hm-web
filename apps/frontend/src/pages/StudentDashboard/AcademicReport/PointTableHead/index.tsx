import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

interface Column {
  id:
    | 'subjectId'
    | 'subjectName'
    | 'class'
    | 'status'
    | 'midtermPoint'
    | 'practicePoint'
    | 'finalPoint'
    | 'averagePoint';
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
    id: 'midtermPoint',
    label: 'Điểm GK',
    minWidth: 60,
  },
  {
    id: 'practicePoint',
    label: 'Điểm TH',
    minWidth: 60,
  },
  {
    id: 'finalPoint',
    label: 'Điểm CK',
    minWidth: 60,
  },
  {
    id: 'averagePoint',
    label: 'Điểm Tổng',
    minWidth: 60,
  },
];

function PointTableHead() {
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

export default PointTableHead;
