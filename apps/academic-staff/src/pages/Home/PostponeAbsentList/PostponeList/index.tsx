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
import { useStudentPostponeListLazyQuery } from '../../../../generated-types';

interface PostponeListProps {
  termId: number;
}

function PostponeList({ termId }: PostponeListProps) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [
    getPostponeList,
    { loading: postponeListLoading, data: postponeListData },
  ] = useStudentPostponeListLazyQuery();

  const { postponeListLength, postponeList } = useMemo(() => {
    return {
      postponeListLength: postponeListData?.studentPostponeList.total || 0,
      postponeList: postponeListData?.studentPostponeList.data || [],
    };
  }, [
    postponeListData?.studentPostponeList.data,
    postponeListData?.studentPostponeList.total,
  ]);

  useEffect(() => {
    getPostponeList({
      variables: {
        termId,
        page: page + 1,
        size: ENROLLED_PAGE_SIZE,
      },
    });
  }, [getPostponeList, page, termId]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={postponeListLoading}
          data={postponeList}
        >
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
                {postponeList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>
                      {page * ENROLLED_PAGE_SIZE * index + 1}
                    </TableCell>
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
            count={postponeListLength}
            rowsPerPageOptions={[]}
            rowsPerPage={ENROLLED_PAGE_SIZE}
            page={page}
            onPageChange={handleChangePage}
          />
        </AsyncDataRenderer>
      </Paper>
    </Box>
  );
}

export default PostponeList;
