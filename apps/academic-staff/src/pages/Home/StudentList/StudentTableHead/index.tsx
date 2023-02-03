import React from 'react';
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Order, StudentProperty } from '../../../../types';

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: StudentProperty
  ) => void;
  order: Order;
  orderBy: string;
}

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

function StudentTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: StudentProperty) => (event: React.MouseEvent<unknown>) => {
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
