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
import { ENROLLED_PAGE_SIZE } from '../../../../constants';
import { useStudentEnrolledListLazyQuery } from '../../../../generated-types';

interface EnrolledListProps {
  termId: number;
}

function EnrolledList({ termId }: EnrolledListProps) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [
    getStudentEnrolledList,
    { loading: studentEnrolledListLoading, data: studentEnrolledListData },
  ] = useStudentEnrolledListLazyQuery();

  const { enrolledListLength, enrolledList } = useMemo(() => {
    return {
      enrolledListLength:
        studentEnrolledListData?.studentEnrolledList.total || 0,
      enrolledList: studentEnrolledListData?.studentEnrolledList.data || [],
    };
  }, [
    studentEnrolledListData?.studentEnrolledList.data,
    studentEnrolledListData?.studentEnrolledList.total,
  ]);

  useEffect(() => {
    getStudentEnrolledList({
      variables: {
        termId,
        page: page + 1,
        size: ENROLLED_PAGE_SIZE,
      },
      fetchPolicy: 'no-cache',
    });
  }, [getStudentEnrolledList, page, termId]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={studentEnrolledListLoading}
          data={enrolledList}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maMH">MSSV</TableCell>
                  <TableCell key="tenMH">Họ và tên</TableCell>
                  <TableCell key="soTC">Mã môn</TableCell>
                  <TableCell key="tenCN">Tên môn học</TableCell>
                  <TableCell key="loaiMH">Lớp học phần</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {enrolledList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>
                      {page * ENROLLED_PAGE_SIZE + index + 1}
                    </TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.maMH}</TableCell>
                    <TableCell>{row.tenMH}</TableCell>
                    <TableCell>{row.tenLopHP}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={enrolledListLength}
            rowsPerPage={ENROLLED_PAGE_SIZE}
            rowsPerPageOptions={[]}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default EnrolledList;
