import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
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
  useHomeroomAddWatchlistMutation,
  useHomeroomDeleteWatchlistMutation,
  useHomeroomListQuery,
  useHomeroomStudentListLazyQuery,
  useHomeroomWatchListLazyQuery,
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
import { GET_HOMEROOM_WATCH_LIST } from '../../../data/queries/homeroom/get-homeroom-watch-list';

import StudentTableHead from './StudentTableHead';
import StudentTableRow from './StudentTableRow';
import { StyledFormControl } from './styles';

const TYPES = ['Tất cả', 'Cần chú ý'];

interface State {
  year: string;
  class: string;
  type: string;
  selected: string[];
}

function StudentsTable() {
  const [values, setValues] = useState<State>({
    year: '',
    class: '',
    type: TYPES[0],
    selected: [],
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

  const [
    getHomeroomWatchList,
    { loading: homeroomWatchListLoading, data: homeroomWatchListData },
  ] = useHomeroomWatchListLazyQuery();
  const { watchListLength, watchListData } = useMemo(() => {
    return {
      watchListLength: homeroomWatchListData?.homeroomWatchList.total || 0,
      watchListData:
        homeroomWatchListData?.homeroomWatchList.data?.map(
          (item) => item.sinhVien
        ) || [],
    };
  }, [
    homeroomWatchListData?.homeroomWatchList.data,
    homeroomWatchListData?.homeroomWatchList.total,
  ]);

  const { homeroomLoading, homeroomData, homeroomLength } = useMemo(
    () => ({
      homeroomLoading:
        values.type === 'Tất cả'
          ? homeroomStudentListLoading
          : homeroomWatchListLoading,
      homeroomData: values.type === 'Tất cả' ? studentListData : watchListData,
      homeroomLength:
        values.type === 'Tất cả' ? studentListLength : watchListLength,
    }),
    [
      homeroomStudentListLoading,
      homeroomWatchListLoading,
      studentListData,
      studentListLength,
      values.type,
      watchListData,
      watchListLength,
    ]
  );

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

      getHomeroomWatchList({
        variables: {
          homeroomId: values.class.length > 0 ? values.class : initialClass,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [
    getHomeroomStudentList,
    getHomeroomWatchList,
    initialClass,
    page,
    values.class,
    values.type,
  ]);

  const initialSelected = useMemo(
    () => watchListData.map((item) => item.maSV),
    [watchListData]
  );

  useEffect(() => {
    setValues((v) => ({
      ...v,
      selected: initialSelected,
    }));
  }, [initialSelected]);

  const selectedClass = useMemo(
    () => values.class || initialClass,
    [values.class, initialClass]
  );

  const handleCheck = useCallback(
    (maSV: string) => {
      setValues((v) => ({
        ...v,
        selected:
          values.selected.findIndex((item) => item === maSV) > -1
            ? values.selected.filter((item) => item !== maSV)
            : [...values.selected, maSV],
      }));
    },
    [values.selected]
  );

  const [addStudentToWatchlist, { loading: addStudentToWatchlistLoading }] =
    useHomeroomAddWatchlistMutation();

  const [
    removeStudentFromWatchlist,
    { loading: removeStudentFromWatchlistLoading },
  ] = useHomeroomDeleteWatchlistMutation();

  const handleUpdateWatchlist = useCallback(() => {
    const studentAddPayload = values.selected.filter(
      (item) =>
        initialSelected.findIndex((initialItem) => initialItem === item) === -1
    );
    const studentDeletePayload = initialSelected.filter(
      (item) =>
        values.selected.findIndex((selectedItem) => selectedItem === item) ===
        -1
    );

    if (studentAddPayload.length > 0) {
      addStudentToWatchlist({
        variables: {
          payload: {
            maSV: studentAddPayload,
          },
        },
        refetchQueries: [
          {
            query: GET_HOMEROOM_WATCH_LIST,
            variables: { homeroomId: selectedClass },
          },
          'HomeroomWatchList',
        ],
      });
    }

    if (studentDeletePayload.length > 0) {
      removeStudentFromWatchlist({
        variables: {
          payload: {
            maSV: studentDeletePayload,
          },
        },
        refetchQueries: [
          {
            query: GET_HOMEROOM_WATCH_LIST,
            variables: { homeroomId: selectedClass },
          },
          'HomeroomWatchList',
        ],
      });
    }
  }, [
    addStudentToWatchlist,
    initialSelected,
    removeStudentFromWatchlist,
    selectedClass,
    values.selected,
  ]);

  return (
    <>
      <StyledContentWrapper>
        <StyledTitle>Danh sách lớp chủ nhiệm</StyledTitle>
        <AsyncDataRenderer
          loading={homeroomListLoading}
          data={homeroomListData}
        >
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
              <StyledFormControl>
                <InputLabel id="type-select-label">Loại</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  value={values.type}
                  label="Loại"
                  onChange={handleChange('type')}
                >
                  {TYPES.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
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
        <AsyncDataRenderer loading={homeroomLoading} data={homeroomData}>
          {(values.class || initialClass) && (
            <Paper
              sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}
            >
              <TableContainer sx={{ maxHeight: 350 }}>
                <Table stickyHeader>
                  <StudentTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                  />
                  <TableBody>
                    {homeroomData
                      // ?.sort(getComparator(order, orderBy))
                      .map((row, index) => (
                        <StudentTableRow
                          key={row.maSV}
                          checked={values.selected.includes(row.maSV)}
                          data={mapStudentDataToTable(row)}
                          index={page * STUDENT_LIST_PAGE_SIZE + index + 1}
                          handleCheck={handleCheck}
                        />
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={homeroomLength}
                rowsPerPage={STUDENT_LIST_PAGE_SIZE}
                page={page}
                onPageChange={handleChangePage}
              />
            </Paper>
          )}
        </AsyncDataRenderer>
        {!_isEqual(values.selected, initialSelected) && (
          <Button
            sx={{ marginTop: '1rem' }}
            variant="contained"
            color="primary"
            onClick={handleUpdateWatchlist}
          >
            Lưu thay đổi
          </Button>
        )}
      </StyledContentWrapper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addStudentToWatchlistLoading || removeStudentFromWatchlistLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default StudentsTable;
