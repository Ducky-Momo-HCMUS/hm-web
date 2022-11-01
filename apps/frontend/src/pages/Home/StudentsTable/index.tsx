import React, { useCallback, useState } from 'react';
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
import {
  StyledActionsBar,
  StyledContentWrapper,
  StyledFormControl,
} from '../../../components/styles';
import StudentTableRow from './StudentTableRow';
import { STUDENTS_DATA } from '../../../constants';
import StudentTableHead from './StudentTableHead';
import { Order, StudentData } from '../../../types';
import { getComparator } from '../../../utils';

interface State {
  year: string;
  class: string;
}

function StudentsTable() {
  const [values, setValues] = useState<State>({
    year: '2019',
    class: '19CLC5',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof StudentData>('studentId');

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
    (event: React.MouseEvent<unknown>, property: keyof StudentData) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [orderBy, order]
  );

  return (
    <StyledContentWrapper>
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
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
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
              <MenuItem value="19CLC5">19CLC5</MenuItem>
              <MenuItem value="19CLC6">19CLC6</MenuItem>
              <MenuItem value="19CLC7">19CLC7</MenuItem>
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
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <StudentTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {STUDENTS_DATA.sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StudentTableRow data={row} index={index + 1} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={STUDENTS_DATA.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </StyledContentWrapper>
  );
}

export default StudentsTable;
