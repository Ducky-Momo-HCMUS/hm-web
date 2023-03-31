import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

import {
  StyledHeader,
  StyledTableCell,
} from '../../../../../components/styles';
import { SubjectDetailResult } from '../../../../../generated-types';
import { renderGPA10WithProperColor } from '../../../../../utils/student';

interface Column {
  id: 'maMH' | 'tenMH' | 'soTC' | 'namHoc' | 'hocKy' | 'dtb';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'maMH', label: 'Mã môn học', minWidth: 120 },
  {
    id: 'tenMH',
    label: 'Tên môn học',
    minWidth: 500,
  },
  {
    id: 'soTC',
    label: 'Số tín chỉ',
    minWidth: 60,
  },
  {
    id: 'namHoc',
    label: 'Năm học',
    minWidth: 120,
  },
  {
    id: 'hocKy',
    label: 'Học kỳ',
    minWidth: 60,
  },
  {
    id: 'dtb',
    label: 'Điểm',
    minWidth: 60,
  },
];

interface AcademicTableProps {
  header: string;
  description?: string;
  data: SubjectDetailResult[];
}

function AcademicTable({ header, description, data }: AcademicTableProps) {
  return (
    <Paper>
      <StyledHeader>
        {header}{' '}
        <Typography sx={{ fontWeight: 'normal' }} component="span">
          {description ? `(${description})` : ''}
        </Typography>
      </StyledHeader>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow hover tabIndex={-1} key={item.maMH}>
                <TableCell>{item.maMH}</TableCell>
                <TableCell>{item.tenMH}</TableCell>
                <TableCell>{item.soTC}</TableCell>
                <TableCell>
                  {item.namHoc} - {item.namHoc + 1}
                </TableCell>
                <TableCell>{item.hocKy}</TableCell>
                <StyledTableCell>
                  {renderGPA10WithProperColor(item.dtb)}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AcademicTable;
