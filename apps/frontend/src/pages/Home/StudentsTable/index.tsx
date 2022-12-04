import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { useHomeroomStudentListQuery } from '../../../generated-types';
import {
  StyledActionsBar,
  StyledContentWrapper,
  StyledFormControl,
  StyledTitle,
} from '../../../components/styles';
import { CLASS_OPTIONS, YEAR_OPTIONS } from '../../../constants';
import { Order, Property } from '../../../types';
import { getComparator, mapStudentDataToTable } from '../../../utils';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import StudentTableHead from './StudentTableHead';
import StudentTableRow from './StudentTableRow';

interface State {
  year: string;
  class: string;
}

function StudentsTable() {
  const [values, setValues] = useState<State>({
    year: '2019',
    class: '19clc5',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<Property>('maSV');

  const { loading, data } = useHomeroomStudentListQuery({
    variables: {
      homeroomId: values.class,
    },
  });
  const studentListData = useMemo(
    () => data?.homeroomStudentList || [],
    [data?.homeroomStudentList]
  );

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

  return (
    <StyledContentWrapper>
      <StyledTitle>Danh sách lớp chủ nhiệm</StyledTitle>
      <StyledActionsBar>
        <Box>
          <StyledFormControl>
            <InputLabel id="year-select-label">Khoá</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={values.year}
              label="Khoá"
              onChange={handleChange('year')}
            >
              {YEAR_OPTIONS.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="class-select-label">Lớp</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={values.class}
              label="Lớp"
              onChange={handleChange('class')}
            >
              {CLASS_OPTIONS.map((item) => (
                <MenuItem value={item}>{item.toUpperCase()}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Box>
        <Button
          component={Link}
          to={`/class/${values.class.toLowerCase()}`}
          variant="contained"
        >
          Tổng quan lớp học
        </Button>
      </StyledActionsBar>
      <AsyncDataRenderer loading={loading} data={data}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <StudentTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {[...studentListData]
                  ?.sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <StudentTableRow
                      data={mapStudentDataToTable(row)}
                      index={index + 1}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={studentListData?.length || 0}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage="Số dòng trên trang"
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </AsyncDataRenderer>
    </StyledContentWrapper>
  );
}

export default StudentsTable;
