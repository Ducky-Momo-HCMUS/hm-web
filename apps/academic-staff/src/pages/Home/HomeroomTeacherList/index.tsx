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

import { useTeacherListQuery } from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledTitle } from '../../../components/styles';
import { Order, Property } from '../../../types';

import { StyledFormControl } from './styles';
import HomeroomTeacherTableHead from './HomeroomTeacherTableHead';

const YEARS = ['19', '20', '21'];

interface State {
  year: string;
}

function HomeroomTeacherList() {
  const [values, setValues] = useState<State>({
    year: '',
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<Property>('maSH');

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
    (event: React.MouseEvent<unknown>, property: Property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [orderBy, order]
  );

  const { loading: teacherListLoading, data: teacherListData } =
    useTeacherListQuery({
      variables: {
        year: values.year || YEARS[0],
      },
    });

  const teacherList = useMemo(
    () => teacherListData?.teacherList.danhSachGVCN || [],
    [teacherListData?.teacherList.danhSachGVCN]
  );

  return (
    <Box>
      <StyledTitle>Danh sách giáo viên chủ nhiệm</StyledTitle>
      <StyledFormControl>
        <InputLabel id="year-select-label">Khoá</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={values.year || YEARS[0]}
          label="Khoá"
          onChange={handleChange('year')}
        >
          {YEARS.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      <AsyncDataRenderer loading={teacherListLoading} data={teacherListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <HomeroomTeacherTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {[...teacherList]
                  // ?.sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover tabIndex={-1} key={row.email}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.tenGVCN}</TableCell>
                      <TableCell>{row.maSH}</TableCell>
                      <TableCell>{row.email}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={teacherList.length}
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

export default HomeroomTeacherList;
