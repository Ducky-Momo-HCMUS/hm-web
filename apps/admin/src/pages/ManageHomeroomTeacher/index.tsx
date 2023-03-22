import { Box } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { StyledStickyBox, StyledTitle } from '../../components/styles';
import { TEACHER_LIST_PAGE_SIZE } from '../../constants';
import { useAllTeacherListLazyQuery } from '../../generated-types';
import { TeacherListItem } from '../../types';

import HomeroomTeacherTable from './HomeroomTeacherTable';

function ManageHomeroomTeacher() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [
    getAllTeacherList,
    { loading: allTeacherListLoading, data: allTeacherListData },
  ] = useAllTeacherListLazyQuery();

  const { teacherList, teacherListLength } = useMemo(() => {
    const allTeacherList = allTeacherListData?.allTeacherList.data || [];

    return {
      teacherList: allTeacherList.map((item) => ({
        maGV: item.maGV,
        tenGV: item.tenGV,
        email: item.email,
        lopChuNhiem: item.lopSinhHoat.map((lop) => lop.maSH),
      })) as TeacherListItem[],
      teacherListLength: allTeacherListData?.allTeacherList.total || 0,
    };
  }, [
    allTeacherListData?.allTeacherList.data,
    allTeacherListData?.allTeacherList.total,
  ]);

  useEffect(() => {
    getAllTeacherList({
      variables: {
        page: page + 1,
        size: TEACHER_LIST_PAGE_SIZE,
      },
    });
  }, [getAllTeacherList, page]);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <StyledStickyBox>
        <Box>
          <StyledTitle variant="h1">Quản lý GVCN</StyledTitle>
        </Box>
      </StyledStickyBox>
      <AsyncDataRenderer
        loading={allTeacherListLoading}
        data={allTeacherListData}
      >
        <HomeroomTeacherTable
          data={teacherList}
          page={page}
          handleChangePage={handleChangePage}
          total={teacherListLength}
        />
      </AsyncDataRenderer>
    </Box>
  );
}

export default ManageHomeroomTeacher;
