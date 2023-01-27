import { Button, Box } from '@mui/material';
import React, { useState } from 'react';

import { StyledTitle } from '../../components/styles';
import { TEACHERS_DATA } from '../../mocks/teacher';

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
      <HomeroomTeacherTable data={TEACHERS_DATA} />
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
