import { Button, Box, Backdrop, CircularProgress } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { StyledTitle } from '../../components/styles';
import {
  AccountAddInput,
  useAccountAddMutation,
  useAccountListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { GET_ACCOUNT_LIST } from '../../data/queries/account/get-account-list';

import AccountTable from './AccountTable';
import AddOrEditAccountInfoDialog from './AddOrEditAccountInfoDialog';
import ImportAccountInfoDialog from './ImportAccountInfoDialog';

function ManageAccount() {
  const [openAddAccountInfoDialog, setOpenAddAccountInfoDialog] =
    useState(false);

  const handleOpenAddAccountInfoDialog = () => {
    setOpenAddAccountInfoDialog(true);
  };

  const handleCloseAddAccountInfoDialog = () => {
    setOpenAddAccountInfoDialog(false);
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

  const { loading: accountListLoading, data: accountListData } =
    useAccountListQuery({});

  const accountList = useMemo(
    () => accountListData?.accountList.danhSachTaiKhoan || [],
    [accountListData?.accountList]
  );

  const [addAccount, { loading: addAccountLoading }] = useAccountAddMutation();

  const handleAddAccount = useCallback(
    async (payload: AccountAddInput) => {
      setOpenAddAccountInfoDialog(false);
      await addAccount({
        variables: {
          payload,
        },
        refetchQueries: [{ query: GET_ACCOUNT_LIST }, 'AccountList'],
      });
    },
    [addAccount]
  );

  return (
    <>
      <Box display="flex" flexDirection="column" gap={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <StyledTitle variant="h1">Quản lý tài khoản</StyledTitle>
          <Box display="flex" gap={1}>
            <Button
              sx={{ textTransform: 'uppercase' }}
              variant="text"
              onClick={handleOpenAddAccountInfoDialog}
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
        <AsyncDataRenderer loading={accountListLoading} data={accountListData}>
          <AccountTable data={accountList} />
        </AsyncDataRenderer>
        {openAddAccountInfoDialog && (
          <AddOrEditAccountInfoDialog
            open={openAddAccountInfoDialog}
            onClose={handleCloseAddAccountInfoDialog}
            onClickCancel={handleCloseAddAccountInfoDialog}
            onClickConfirm={handleAddAccount}
          />
        )}
        <ImportAccountInfoDialog
          open={openImportAccountInfoDialog}
          onClose={handleCloseImportAccountInfoDialog}
          onClickCancel={handleCloseImportAccountInfoDialog}
          onClickConfirm={handleCloseImportAccountInfoDialog}
          file={file}
          setFile={setFile}
        />
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addAccountLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ManageAccount;
