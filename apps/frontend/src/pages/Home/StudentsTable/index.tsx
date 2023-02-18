import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
  useHomeroomStudentListLazyQuery,
} from '../../../generated-types';
import {
  StyledActionsBar,
  StyledContentWrapper,
  StyledTitle,
} from '../../../components/styles';
import { Order, Property } from '../../../types';
import {
  // getComparator,
  groupClassesByYear,
  mapStudentDataToTable,
} from '../../../utils';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { STUDENT_LIST_PAGE_SIZE } from '../../../constants';

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

  const [
    getHomeroomStudentList,
    { loading: homeroomStudentListLoading, data: homeroomStudentListData },
  ] = useHomeroomStudentListLazyQuery();
  const { studentListLength, studentListData } = useMemo(() => {
    return {
      studentListLength:
        homeroomStudentListData?.homeroomStudentList.total || 0,
      studentListData: homeroomStudentListData?.homeroomStudentList.data || [],
    };
  }, [homeroomStudentListData?.homeroomStudentList]);

  useEffect(() => {
    if (values.class.length > 0 || initialClass.length > 0) {
      getHomeroomStudentList({
        variables: {
          homeroomId: values.class.length > 0 ? values.class : initialClass,
          page: page + 1,
          size: STUDENT_LIST_PAGE_SIZE,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [getHomeroomStudentList, initialClass, page, values.class]);

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
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
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
                  <MenuItem key={item} value={item}>
                    {item.toUpperCase()}
                  </MenuItem>
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
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader>
                <StudentTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {studentListData
                    // ?.sort(getComparator(order, orderBy))
                    .map((row, index) => (
                      <StudentTableRow
                        key={row.maSV}
                        data={mapStudentDataToTable(row)}
                        index={page * STUDENT_LIST_PAGE_SIZE + index + 1}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={studentListLength}
              rowsPerPage={STUDENT_LIST_PAGE_SIZE}
              page={page}
              onPageChange={handleChangePage}
            />
          </Paper>
        )}
      </AsyncDataRenderer>
    </StyledContentWrapper>
  );
}

export default StudentsTable;
