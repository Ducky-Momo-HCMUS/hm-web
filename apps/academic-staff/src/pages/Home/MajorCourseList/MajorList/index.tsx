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
import { MAJOR_PAGE_SIZE } from '../../../../constants';

import { MOCK_MAJOR_DATA } from './mock';

function MajorList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const { majorListLength, majorListData } = useMemo(() => {
    return {
      majorListLength: MOCK_MAJOR_DATA.data.length,
      majorListData: MOCK_MAJOR_DATA.data,
    };
  }, []);

  return (
    <Box>
      <AsyncDataRenderer loading={false} data={majorListData}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="tenVietTat">Mã chuyên ngành</TableCell>
                  <TableCell key="tenMH">Tên chuyên ngành</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {majorListData.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maCN}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.tenVietTat}</TableCell>
                    <TableCell>{row.tenCN}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={majorListLength}
            rowsPerPage={MAJOR_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default MajorList;
