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
import { useStudentAbsentListLazyQuery } from '../../../../generated-types';

interface AbsentListProps {
  termId: number;
}

function AbsentList({ termId }: AbsentListProps) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [getAbsentList, { loading: absentListLoading, data: absentListData }] =
    useStudentAbsentListLazyQuery();

  const { absentListLength, absentList } = useMemo(() => {
    return {
      absentListLength: absentListData?.studentAbsentList.total || 0,
      absentList: absentListData?.studentAbsentList.data || [],
    };
  }, [
    absentListData?.studentAbsentList.data,
    absentListData?.studentAbsentList.total,
  ]);

  useEffect(() => {
    getAbsentList({
      variables: {
        termId,
        page: page + 1,
        size: NOT_ENROLLED_PAGE_SIZE,
      },
    });
  }, [getAbsentList, page, termId]);

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AsyncDataRenderer
          hasFullWidth
          loading={absentListLoading}
          data={absentList}
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
                {absentList.map((row, index) => (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell>
                      {page * NOT_ENROLLED_PAGE_SIZE * index + 1}
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
            count={absentListLength}
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

export default AbsentList;
