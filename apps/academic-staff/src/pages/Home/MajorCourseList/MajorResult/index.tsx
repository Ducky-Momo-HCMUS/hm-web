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
import { MAJOR_RESULT_PAGE_SIZE } from '../../../../constants';
import { useMajorResultListLazyQuery } from '../../../../generated-types';

function MajorList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [
    getMajorResultList,
    { loading: majorResultListLoading, data: majorResultListData },
  ] = useMajorResultListLazyQuery();

  const { majorResultListLength, majorResultList } = useMemo(() => {
    return {
      majorResultListLength: majorResultListData?.majorResultList.total || 0,
      majorResultList: majorResultListData?.majorResultList.data || [],
    };
  }, [
    majorResultListData?.majorResultList.data,
    majorResultListData?.majorResultList.total,
  ]);

  useEffect(() => {
    getMajorResultList({
      variables: {
        page: page + 1,
        size: MAJOR_RESULT_PAGE_SIZE,
      },
    });
  }, [getMajorResultList, page]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={majorResultListLoading}
          data={majorResultListData}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="tenVietTat">MSSV</TableCell>
                  <TableCell key="tenMH">Họ và tên</TableCell>
                  <TableCell key="tenMH">Chuyên ngành</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {majorResultList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maSV}>
                    <TableCell>
                      {page * MAJOR_RESULT_PAGE_SIZE + index + 1}
                    </TableCell>
                    <TableCell>{row.maSV}</TableCell>
                    <TableCell>{row.tenSV}</TableCell>
                    <TableCell>{row.chuyenNganh}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={majorResultListLength}
            rowsPerPage={MAJOR_RESULT_PAGE_SIZE}
            rowsPerPageOptions={[]}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default MajorList;
