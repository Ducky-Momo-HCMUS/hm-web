import { Button, Box } from '@mui/material';
import React, { useMemo, useState } from 'react';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { StyledTitle } from '../../components/styles';
import { useAllTeacherListQuery } from '../../generated-types';
import { TeacherListItem } from '../../types';

import HomeroomTeacherTable from './HomeroomTeacherTable';
import ImportHomeroomTeacherListDialog from './ImportHomeroomTeacherListDialog';

function ManageHomeroomTeacher() {
  const [file, setFile] = useState<File>();
  const [
    openImportHomeroomTeacherInfoDialog,
    setOpenImportHomeroomTeacherInfoDialog,
  ] = useState(false);

  const handleOpenImportHomeroomTeacherInfoDialog = () => {
    setOpenImportHomeroomTeacherInfoDialog(true);
  };

  const handleCloseImportHomeroomTeacherInfoDialog = () => {
    setOpenImportHomeroomTeacherInfoDialog(false);
  };

  const { loading: allTeacherListLoading, data: allTeacherListData } =
    useAllTeacherListQuery({});

  const teacherList = useMemo(() => {
    const allTeacherList = allTeacherListData?.allTeacherList.data || [];

    return allTeacherList.map((item) => ({
      tenGV: item.tenGV,
      email: item.email,
      lopChuNhiem: item.lopSinhHoat.map((lop) => lop.maSH).join(', '),
    })) as TeacherListItem[];
  }, [allTeacherListData?.allTeacherList.data]);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
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
      <AsyncDataRenderer
        loading={allTeacherListLoading}
        data={allTeacherListData}
      >
        <HomeroomTeacherTable data={teacherList} />
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
