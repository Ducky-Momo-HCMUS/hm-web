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
import { NOT_ENROLLED_PAGE_SIZE } from '../../../../constants';
import { useStudentNotEnrolledListLazyQuery } from '../../../../generated-types';

interface NotEnrolledListProps {
  termId: number;
}

function NotEnrolledList({ termId }: NotEnrolledListProps) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [
    getStudentNotEnrolledList,
    {
      loading: studentNotEnrolledListLoading,
      data: studentNotEnrolledListData,
    },
  ] = useStudentNotEnrolledListLazyQuery();

  const { notEnrolledListLength, notEnrolledList } = useMemo(() => {
    return {
      notEnrolledListLength:
        studentNotEnrolledListData?.studentNotEnrolledList.total || 0,
      notEnrolledList:
        studentNotEnrolledListData?.studentNotEnrolledList.data || [],
    };
  }, [
    studentNotEnrolledListData?.studentNotEnrolledList.data,
    studentNotEnrolledListData?.studentNotEnrolledList.total,
  ]);

  useEffect(() => {
    getStudentNotEnrolledList({
      variables: {
        termId,
        page: page + 1,
        size: NOT_ENROLLED_PAGE_SIZE,
      },
      fetchPolicy: 'no-cache',
    });
  }, [getStudentNotEnrolledList, page, termId]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={studentNotEnrolledListLoading}
          data={notEnrolledList}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maMH">MSSV</TableCell>
                  <TableCell key="tenMH">Họ và tên</TableCell>
                  <TableCell key="tenMH">Lớp sinh hoạt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notEnrolledList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>
                      {page * NOT_ENROLLED_PAGE_SIZE + index + 1}
                    </TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.maSH}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={notEnrolledListLength}
            rowsPerPage={NOT_ENROLLED_PAGE_SIZE}
            rowsPerPageOptions={[]}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default NotEnrolledList;
