import React from 'react';
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Order, StudentData } from '../../../../types';

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof StudentData
  ) => void;
  order: Order;
  orderBy: string;
}

interface Column {
  id:
    | 'studentId'
    | 'fullName'
    | 'major'
    | 'status'
    | 'gpaFourPointScale'
    | 'gpaTenPointScale'
    | 'contact';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'studentId', label: 'MSSV' },
  {
    id: 'fullName',
    label: 'Họ tên',
    minWidth: 200,
  },
  {
    id: 'major',
    label: 'Chuyên ngành',
    minWidth: 120,
  },
  {
    id: 'status',
    label: 'Tình trạng',
    minWidth: 120,
  },
  {
    id: 'gpaTenPointScale',
    label: 'GPA hệ 4',
    minWidth: 60,
  },
  {
    id: 'gpaFourPointScale',
    label: 'GPA hệ 10',
    minWidth: 60,
  },
  {
    id: 'contact',
    label: 'Thông tin liên lạc',
    minWidth: 380,
  },
];

function StudentTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: keyof StudentData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default StudentTableHead;
