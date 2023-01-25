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

import {
  useHomeroomListQuery,
  useHomeroomStudentListQuery,
} from '../../../generated-types';
import {
  StyledActionsBar,
  StyledContentWrapper,
  StyledTitle,
} from '../../../components/styles';
import { Order, Property } from '../../../types';
import {
  getComparator,
  groupClassesByYear,
  mapStudentDataToTable,
} from '../../../utils';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import StudentTableHead from './StudentTableHead';
import StudentTableRow from './StudentTableRow';
import { StyledFormControl } from './styles';

interface State {
  year: string;
  class: string;
}

function StudentsTable() {
  const [values, setValues] = useState<State>({
    year: '',
    class: '',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<Property>('maSV');

  const { loading: homeroomListLoading, data: homeroomListData } =
    useHomeroomListQuery();
  const homeroomList = useMemo(
    () => homeroomListData?.homeroomList.lopChuNhiem || [],
    [homeroomListData?.homeroomList.lopChuNhiem]
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

  const mappedData = useMemo(
    () => groupClassesByYear(homeroomList),
    [homeroomList]
  );

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { classes } = useMemo(() => {
    const classesByYear = mappedData[values.year || years[0]]?.map(
      (data) => data.maSH
    );
    return {
      years: Object.keys(mappedData),
      classes: classesByYear || [],
    };
  }, [mappedData, values.year, years]);

  const { initialYear, initialClass } = useMemo(() => {
    const classesByYear = mappedData[years[0]]?.map((data) => data.maSH);
    return {
      initialYear: years[0],
      initialClass: classesByYear?.[0] || '',
    };
  }, [mappedData, years]);

  const { loading: homeroomStudentListLoading, data: homeroomStudentListData } =
    useHomeroomStudentListQuery({
      variables: {
        homeroomId: values.class || initialClass,
      },
    });
  const studentListData = useMemo(
    () => homeroomStudentListData?.homeroomStudentList || [],
    [homeroomStudentListData?.homeroomStudentList]
  );

  const selectedClass = useMemo(
    () => values.class || initialClass,
    [values.class, initialClass]
  );

  return (
    <StyledContentWrapper>
      <StyledTitle>Danh sách lớp chủ nhiệm</StyledTitle>
      <AsyncDataRenderer loading={homeroomListLoading} data={homeroomListData}>
        <StyledActionsBar>
          <Box>
            <StyledFormControl>
              <InputLabel id="year-select-label">Khoá</InputLabel>
              <Select
                labelId="year-select-label"
                id="year-select"
                value={values.year || initialYear}
                label="Khoá"
                onChange={handleChange('year')}
              >
                {years.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel id="class-select-label">Lớp</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                value={values.class || initialClass}
                label="Lớp"
                onChange={handleChange('class')}
              >
                {classes.map((item) => (
                  <MenuItem value={item}>{item.toUpperCase()}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Box>
          <Button
            component={Link}
            to={`/classes/${selectedClass}`}
            variant="contained"
          >
            Tổng quan lớp học
          </Button>
        </StyledActionsBar>
      </AsyncDataRenderer>
      <AsyncDataRenderer
        loading={homeroomStudentListLoading}
        data={homeroomStudentListData}
      >
        {(values.class || initialClass) && (
          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader>
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
        )}
      </AsyncDataRenderer>
    </StyledContentWrapper>
  );
}

export default StudentsTable;
