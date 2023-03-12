import React, { useCallback, useMemo, useState } from 'react';
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

import { MOCK_COURSE_DATA } from './mock';

function CourseList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const { courseListLength, courseListData } = useMemo(() => {
    return {
      courseListLength: MOCK_COURSE_DATA.data.length,
      courseListData: MOCK_COURSE_DATA.data,
    };
  }, []);

  return (
    <Box>
      <AsyncDataRenderer loading={false} data={courseListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {courseListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maMH}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.maMH}</TableCell>
                    <TableCell>{row.tenMH}</TableCell>
                    <TableCell>{row.soTinChi}</TableCell>
                    <TableCell>{row.tenCN}</TableCell>
                    <TableCell>{row.loaiMonHoc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={courseListLength}
            rowsPerPage={COURSE_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default CourseList;
