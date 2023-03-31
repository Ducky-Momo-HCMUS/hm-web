import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

import {
  useTeacherListLazyQuery,
  useYearListQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import { MenuProps, TEACHER_LIST_PAGE_SIZE } from '../../../constants';

import { StyledFormControl } from './styles';
import HomeroomTeacherTableHead from './HomeroomTeacherTableHead';

interface State {
  year: string;
}

function HomeroomTeacherList() {
  const [values, setValues] = useState<State>({
    year: '',
  });

  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const { loading: yearListLoading, data: yearListData } = useYearListQuery({
    fetchPolicy: 'no-cache',
  });

  const yearList = useMemo(
    () => yearListData?.yearList.map((item) => item.khoa.toString()) || [],
    [yearListData?.yearList]
  );

  const [
    getTeacherList,
    { loading: teacherListLoading, data: teacherListData },
  ] = useTeacherListLazyQuery();

  const { teacherList, teacherListLength } = useMemo(() => {
    return {
      teacherList: teacherListData?.teacherList.data || [],
      teacherListLength: teacherListData?.teacherList.total || 0,
    };
  }, [teacherListData?.teacherList.data, teacherListData?.teacherList.total]);

  useEffect(() => {
    if (Number(values.year) || Number(yearList[0])) {
      getTeacherList({
        variables: {
          year: Number(values.year) || Number(yearList[0]),
          page: page + 1,
          size: TEACHER_LIST_PAGE_SIZE,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [getTeacherList, page, values.year, yearList]);

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Danh sách giáo viên chủ nhiệm</StyledTitle>
        <AsyncDataRenderer loading={yearListLoading} data={yearListData}>
          <StyledFormControl>
            <InputLabel id="year-select-label">Khoá</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={values.year || yearList[0]}
              label="Khoá"
              onChange={handleChange('year')}
              MenuProps={MenuProps}
            >
              {yearList.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>
      </StyledStickyBox>

      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={teacherListLoading}
          data={teacherList}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <HomeroomTeacherTableHead />
              <TableBody>
                {teacherList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.email}>
                    <TableCell>
                      {page * TEACHER_LIST_PAGE_SIZE + index + 1}
                    </TableCell>
                    <TableCell>{row.tenGV}</TableCell>
                    <TableCell>{row.maSH}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={teacherListLength}
            rowsPerPage={TEACHER_LIST_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default HomeroomTeacherList;
