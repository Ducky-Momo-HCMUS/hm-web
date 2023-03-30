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
import { MAJOR_PAGE_SIZE } from '../../../../constants';
import { useMajorListLazyQuery } from '../../../../generated-types';

function MajorList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [getMajorList, { loading: majorListLoading, data: majorListData }] =
    useMajorListLazyQuery();

  const { majorListLength, majorList } = useMemo(() => {
    return {
      majorListLength: majorListData?.majorList.total || 0,
      majorList: majorListData?.majorList.data || [],
    };
  }, [majorListData?.majorList.data, majorListData?.majorList.total]);

  useEffect(() => {
    getMajorList({
      variables: {
        page: page + 1,
        size: MAJOR_PAGE_SIZE,
      },
    });
  }, [getMajorList, page]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={majorListLoading}
          data={majorListData}
        >
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell key="index">STT</TableCell>
                  <TableCell key="tenVietTat">Mã chuyên ngành</TableCell>
                  <TableCell key="tenMH">Tên chuyên ngành</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {majorList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={row.maCN}>
                    <TableCell>{page * MAJOR_PAGE_SIZE + index + 1}</TableCell>
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
            rowsPerPageOptions={[]}
            rowsPerPage={MAJOR_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default MajorList;
