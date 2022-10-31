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
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  StyledActionsBar,
  StyledContentWrapper,
  StyledFormControl,
} from '../../../components/styles';
import StudentRow from './StudentRow';
import { STUDENTS_DATA } from '../../../constants';

interface State {
  year: string;
  class: string;
}

interface Column {
  id:
    | 'index'
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
  { id: 'index', label: 'STT' },
  { id: 'studentId', label: 'MSSV' },
  {
    id: 'fullName',
    label: 'Họ tên',
    minWidth: 170,
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
    minWidth: 100,
  },
  {
    id: 'gpaFourPointScale',
    label: 'GPA hệ 10',
    minWidth: 100,
  },
  {
    id: 'contact',
    label: 'Thông tin liên lạc',
    minWidth: 300,
  },
];

function StudentsTable() {
  const [values, setValues] = useState<State>({
    year: '2019',
    class: '19CLC5',
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {STUDENTS_DATA.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => {
                return <StudentRow data={row} />;
              })}
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
