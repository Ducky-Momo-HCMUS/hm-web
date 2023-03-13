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
import { ENROLLED_PAGE_SIZE } from '../../../../constants';
import { MOCK_ENROLLED_DATA } from '../../mock/enrolled';

function EnrolledList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const { enrolledListLength, enrolledListData } = useMemo(() => {
    return {
      enrolledListLength: MOCK_ENROLLED_DATA.data.length,
      enrolledListData: MOCK_ENROLLED_DATA.data,
    };
  }, []);

  return (
    <Box>
      <AsyncDataRenderer loading={false} data={enrolledListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {enrolledListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>
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
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default EnrolledList;
