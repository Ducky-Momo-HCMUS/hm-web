import { Button, Box } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { StyledStickyBox, StyledTitle } from '../../components/styles';
import { TEACHER_LIST_PAGE_SIZE } from '../../constants';
import { useAllTeacherListLazyQuery } from '../../generated-types';
import { TeacherListItem } from '../../types';

import HomeroomTeacherTable from './HomeroomTeacherTable';
import ImportHomeroomTeacherListDialog from './ImportHomeroomTeacherListDialog';

function ManageHomeroomTeacher() {
  const [file, setFile] = useState<File>();
  const [
    openImportHomeroomTeacherInfoDialog,
    setOpenImportHomeroomTeacherInfoDialog,
  ] = useState(false);

  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleOpenImportHomeroomTeacherInfoDialog = () => {
    setOpenImportHomeroomTeacherInfoDialog(true);
  };

  const handleCloseImportHomeroomTeacherInfoDialog = () => {
    setOpenImportHomeroomTeacherInfoDialog(false);
  };

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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <StyledTitle variant="h1">Quản lý GVCN</StyledTitle>
          <Box display="flex" gap={1}>
            <Button
              sx={{ textTransform: 'uppercase' }}
              variant="contained"
              onClick={handleOpenImportHomeroomTeacherInfoDialog}
            >
              Import danh sách GVCN
            </Button>
          </Box>
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
      <ImportHomeroomTeacherListDialog
        open={openImportHomeroomTeacherInfoDialog}
        onClose={handleCloseImportHomeroomTeacherInfoDialog}
        onClickCancel={handleCloseImportHomeroomTeacherInfoDialog}
        onClickConfirm={handleCloseImportHomeroomTeacherInfoDialog}
        file={file}
        setFile={setFile}
      />
    </Box>
  );
}

export default ManageHomeroomTeacher;
