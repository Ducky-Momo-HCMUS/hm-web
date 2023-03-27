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

import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import {
  useHomeroomAllListQuery,
  useHomeroomStudentListLazyQuery,
} from '../../../generated-types';
import { MenuProps, STUDENT_LIST_PAGE_SIZE } from '../../../constants';

import StudentTableHead from './StudentTableHead';

interface State {
  class: string;
}

function StudentList() {
  const [values, setValues] = useState<State>({
    class: '',
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

  const { loading: homeroomAllListLoading, data: homeroomAllListData } =
    useHomeroomAllListQuery({});

  const homeroomAllList = useMemo(
    () => homeroomAllListData?.homeroomAllList.map((item) => item.maSH) || [],
    [homeroomAllListData?.homeroomAllList]
  );

  const [
    getHomeroomStudentList,
    { loading: homeroomStudentListLoading, data: homeroomStudentListData },
  ] = useHomeroomStudentListLazyQuery();

  useEffect(() => {
    if (!homeroomAllListLoading) {
      getHomeroomStudentList({
        variables: {
          homeroomId:
            values.class.length > 0 ? values.class : homeroomAllList[0],
          page: page + 1,
          size: STUDENT_LIST_PAGE_SIZE,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [
    getHomeroomStudentList,
    homeroomAllList,
    homeroomAllListLoading,
    page,
    values.class,
  ]);

  const { studentListLength, studentListData } = useMemo(() => {
    return {
      studentListLength:
        homeroomStudentListData?.homeroomStudentList.total || 0,
      studentListData: homeroomStudentListData?.homeroomStudentList.data || [],
    };
  }, [homeroomStudentListData?.homeroomStudentList]);

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Danh sách sinh viên</StyledTitle>
        <AsyncDataRenderer
          loading={homeroomAllListLoading}
          data={homeroomAllListData}
        >
          <StyledFormControl>
            <InputLabel id="class-select-label">Lớp</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={values.class || homeroomAllList[0] || ''}
              label="Lớp"
              onChange={handleChange('class')}
              MenuProps={MenuProps}
            >
              {homeroomAllList &&
                homeroomAllList.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>
      </StyledStickyBox>

      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={homeroomStudentListLoading}
          data={studentListData}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <StudentTableHead />
              <TableBody>
                {studentListData
                  // ?.sort(getComparator(order, orderBy))
                  .map((row, index) => (
                    <TableRow hover tabIndex={-1} key={row.maSV}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.maSV}</TableCell>
                      <TableCell>{row.tenSV}</TableCell>
                      <TableCell>{row.tenCN || 'Chưa có'}</TableCell>
                      <TableCell>{row.tinhTrang}</TableCell>
                      <TableCell>{row.sdt}</TableCell>
                      <TableCell>{row.emailSV}</TableCell>
                    </TableRow>
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
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default StudentList;
