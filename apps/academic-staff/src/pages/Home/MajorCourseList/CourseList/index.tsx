import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';
import { COURSE_PAGE_SIZE } from '../../../../constants';
import { useCourseListLazyQuery } from '../../../../generated-types';

function CourseList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [getCourseList, { loading: courseListLoading, data: courseListData }] =
    useCourseListLazyQuery();

  const { courseListLength, courseList } = useMemo(() => {
    return {
      courseListLength: courseListData?.courseList.total || 0,
      courseList: courseListData?.courseList.data || [],
    };
  }, [courseListData?.courseList.data, courseListData?.courseList.total]);

  useEffect(() => {
    getCourseList({
      variables: {
        page: page + 1,
        size: COURSE_PAGE_SIZE,
      },
    });
  }, [getCourseList, page]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={courseListLoading}
          data={courseListData}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maMH">Mã môn học</TableCell>
                  <TableCell key="tenMH">Tên môn học</TableCell>
                  <TableCell key="soTC">Số tín chỉ</TableCell>
                  <TableCell key="tenCN">Chuyên ngành</TableCell>
                  <TableCell key="loaiMH">Loại môn học</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courseList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maMH}>
                    <TableCell>{page * COURSE_PAGE_SIZE + index + 1}</TableCell>
                    <TableCell>{row.maMH}</TableCell>
                    <TableCell>{row.tenMH}</TableCell>
                    <TableCell>{row.soTinChi}</TableCell>
                    <TableCell>{row.tenCN || row.chuyenNganh}</TableCell>
                    <TableCell>{row.loaiMonHoc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={[]}
            count={courseListLength}
            rowsPerPage={COURSE_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default CourseList;
