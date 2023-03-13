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
import { MOCK_ABSENT_DATA } from '../../mock/absent';

function AbsentList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const { absentListLength, absentListData } = useMemo(() => {
    return {
      absentListLength: MOCK_ABSENT_DATA.data.length,
      absentListData: MOCK_ABSENT_DATA.data,
    };
  }, []);

  return (
    <Box>
      <AsyncDataRenderer loading={false} data={absentListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="maMH">MSSV</TableCell>
                  <TableCell key="tenMH">Họ và tên</TableCell>
                  <TableCell key="tenMH">Mã môn</TableCell>
                  <TableCell key="tenMH">Tên môn học</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {absentListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.maMH}</TableCell>
                    <TableCell>{row.tenMH}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={absentListLength}
            rowsPerPage={NOT_ENROLLED_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default AbsentList;
