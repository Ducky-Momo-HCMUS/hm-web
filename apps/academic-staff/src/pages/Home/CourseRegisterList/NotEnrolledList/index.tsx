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
import { NOT_ENROLLED_PAGE_SIZE } from '../../../../constants';
import { MOCK_NOT_ENROLLED } from '../../mock/not-enrolled';

function NotEnrolledList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const { notEnrolledListLength, notEnrolledListData } = useMemo(() => {
    return {
      notEnrolledListLength: MOCK_NOT_ENROLLED.data.length,
      notEnrolledListData: MOCK_NOT_ENROLLED.data,
    };
  }, []);

  return (
    <Box>
      <AsyncDataRenderer loading={false} data={notEnrolledListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {notEnrolledListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>
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
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default NotEnrolledList;
