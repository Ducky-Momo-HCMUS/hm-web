import { Button, Box } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { StyledTitle } from '../../components/styles';
import { ACCOUNTS_DATA } from '../../mocks/account';

import AccountTable from './AccountTable';
import AddOrEditAccountInfoDialog from './AddOrEditAccountInfoDialog';
import ImportAccountInfoDialog from './ImportAccountInfoDialog';

function ManageAccount() {
  const [openAddOrEditAccountInfoDialog, setOpenAddOrEditAccountInfoDialog] =
    useState(false);

  const handleOpenAddOrEditAccountInfoDialog = () => {
    setOpenAddOrEditAccountInfoDialog(true);
  };

  const handleCloseAddOrEditAccountInfoDialog = () => {
    setOpenAddOrEditAccountInfoDialog(false);
  };

  const [file, setFile] = useState<File>();
  const [openImportAccountInfoDialog, setOpenImportAccountInfoDialog] =
    useState(false);

  const handleOpenImportAccountInfoDialog = () => {
    setOpenImportAccountInfoDialog(true);
  };

  const handleCloseImportAccountInfoDialog = () => {
    setOpenImportAccountInfoDialog(false);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <StyledTitle variant="h1">Quản lý tài khoản</StyledTitle>
        <Box display="flex" gap={1}>
          <Button
            sx={{ textTransform: 'uppercase' }}
            variant="text"
            onClick={handleOpenAddOrEditAccountInfoDialog}
          >
            <AddIcon />
            Thêm tài khoản
          </Button>
          <Button
            sx={{ textTransform: 'uppercase' }}
            variant="contained"
            onClick={handleOpenImportAccountInfoDialog}
          >
            Import tài khoản
          </Button>
        </Box>
      </Box>
      <AccountTable data={ACCOUNTS_DATA} />
      <AddOrEditAccountInfoDialog
        open={openAddOrEditAccountInfoDialog}
        onClose={handleCloseAddOrEditAccountInfoDialog}
        onClickCancel={handleCloseAddOrEditAccountInfoDialog}
        onClickConfirm={handleCloseAddOrEditAccountInfoDialog}
      />
      <ImportAccountInfoDialog
        open={openImportAccountInfoDialog}
        onClose={handleCloseImportAccountInfoDialog}
        onClickCancel={handleCloseImportAccountInfoDialog}
        onClickConfirm={handleCloseImportAccountInfoDialog}
        file={file}
        setFile={setFile}
      />
    </Box>
  );
}

export default ManageAccount;
