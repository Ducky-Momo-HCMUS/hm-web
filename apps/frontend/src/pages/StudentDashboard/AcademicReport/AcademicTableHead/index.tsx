import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

interface Column {
  id:
    | 'subjectId'
    | 'subjectName'
    | 'class'
    | 'status'
    | 'averagePoint'
    | 'theoryTeacher'
    | 'practiceTeacher';
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
    id: 'averagePoint',
    label: 'Điểm tổng kết',
    minWidth: 60,
  },
  {
    id: 'theoryTeacher',
    label: 'GV lý thuyết',
    minWidth: 80,
  },
  {
    id: 'practiceTeacher',
    label: 'GV thực hành',
    minWidth: 80,
  },
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
