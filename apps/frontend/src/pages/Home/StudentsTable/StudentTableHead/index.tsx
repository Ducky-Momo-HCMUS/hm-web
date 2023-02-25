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
  onRequestSort: (property: Property) => void;
  order: Order;
  orderBy: string;
}

interface Column {
  id: 'maSV' | 'tenSV' | 'tenCN' | 'tinhTrang' | 'gpa4' | 'gpa10' | 'contact';
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
    id: 'gpa4',
    label: 'GPA hệ 4',
    minWidth: 60,
  },
  {
    id: 'gpa10',
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

  const createSortHandler = (property: Property) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="watchlist">Chú ý</TableCell>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => {
          if (['maSV', 'tenSV', 'gpa4', 'gpa10'].includes(column.id)) {
            return (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
              >
                <TableSortLabel
                  direction={orderBy === column.id ? order : 'asc'}
                  onClick={() => {
                    if (column.id !== 'contact') {
                      createSortHandler(column.id);
                    }
                  }}
                >
                  {column.label}
                  {orderBy === column.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          }
          return <TableCell key={column.id}>{column.label}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
}

export default StudentTableHead;
