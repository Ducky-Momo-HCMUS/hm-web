import React from 'react';
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Order, Property } from '../../../../types';

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: Property) => void;
  order: Order;
  orderBy: string;
}

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

function HomeroomTeacherTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: Property) => (event: React.MouseEvent<unknown>) => {
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

export default HomeroomTeacherTableHead;
