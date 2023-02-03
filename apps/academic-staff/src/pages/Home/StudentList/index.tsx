import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';

import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { Order, StudentProperty } from '../../../types';
import { StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import { useHomeroomStudentListQuery } from '../../../generated-types';

import StudentTableHead from './StudentTableHead';

const CLASSES = ['19CLC1', '19CLC2', '19CLC3'];

interface State {
  class: string;
}

function StudentList() {
  const [values, setValues] = useState<State>({
    class: '',
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<StudentProperty>('maSV');

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    []
  );

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleRequestSort = useCallback(
    (event: React.MouseEvent<unknown>, property: StudentProperty) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [orderBy, order]
  );

  const { loading: homeroomStudentListLoading, data: homeroomStudentListData } =
    useHomeroomStudentListQuery({
      variables: {
        homeroomId: values.class || CLASSES[0],
      },
    });

  const homeroomStudentList = useMemo(
    () => homeroomStudentListData?.homeroomStudentList.sinhVien || [],
    [homeroomStudentListData?.homeroomStudentList]
  );

  return (
    <Box>
      <StyledTitle>Danh sách sinh viên</StyledTitle>
      <StyledFormControl>
        <InputLabel id="class-select-label">Lớp</InputLabel>
        <Select
          labelId="class-select-label"
          id="class-select"
          value={values.class || CLASSES[0]}
          label="Lớp"
          onChange={handleChange('class')}
        >
          {CLASSES.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      <AsyncDataRenderer
        loading={homeroomStudentListLoading}
        data={homeroomStudentListData}
      >
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <StudentTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {[...homeroomStudentList]
                  // ?.sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover tabIndex={-1} key={row.maSV}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.maSV}</TableCell>
                      <TableCell>{row.tenSV}</TableCell>
                      <TableCell>{row.maCN || 'Chưa có'}</TableCell>
                      <TableCell>{row.tinhTrang}</TableCell>
                      <TableCell>{row.sdt}</TableCell>
                      <TableCell>{row.emailSV}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={homeroomStudentList.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage="Số dòng trên trang"
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default StudentList;
