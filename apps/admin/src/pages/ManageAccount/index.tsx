import { Button, Box, Backdrop, CircularProgress } from '@mui/material';
import React, { useCallback, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { StyledStickyBox, StyledTitle } from '../../components/styles';
import {
  AccountAddInput,
  AccountAddMutation,
  useAccountAddMutation,
} from '../../generated-types';
import { GET_ACCOUNT_LIST } from '../../data/queries/account/get-account-list';
import { ACCOUNT_LIST_PAGE_SIZE } from '../../constants';

import AccountTable from './AccountTable';
import AddOrEditAccountInfoDialog from './AddOrEditAccountInfoDialog';
import AccountSuccessDialog from './AccountSuccessDialog';

function ManageAccount() {
  const [openAddAccountInfoDialog, setOpenAddAccountInfoDialog] =
    useState(false);
  const [openAccountSuccessDialog, setOpenAccountSuccessDialog] =
    useState(false);
  const [newAccount, setNewAccount] = useState<AccountAddMutation>();

  const handleOpenAddAccountInfoDialog = () => {
    setOpenAddAccountInfoDialog(true);
  };

  const handleCloseAddAccountInfoDialog = () => {
    setOpenAddAccountInfoDialog(false);
  };

  const handleCloseAccountSuccessDialog = () => {
    setOpenAccountSuccessDialog(false);
  };

  const [addAccount, { loading: addAccountLoading }] = useAccountAddMutation({
    onCompleted: (account) => {
      setNewAccount(account);
      setOpenAccountSuccessDialog(true);
    },
  });

  const handleAddAccount = useCallback(
    async (payload: AccountAddInput) => {
      setOpenAddAccountInfoDialog(false);
      await addAccount({
        variables: {
          payload,
        },
        refetchQueries: [
          {
            query: GET_ACCOUNT_LIST,
            variables: { page: 1, size: ACCOUNT_LIST_PAGE_SIZE },
          },
          'AccountList',
        ],
      });
    },
    [addAccount]
  );

  return (
    <>
      <Box display="flex" flexDirection="column" gap={1}>
        <StyledStickyBox>
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
            </Box>
          </Box>
        </StyledStickyBox>
        <AccountTable />
        {openAddAccountInfoDialog && (
          <AddOrEditAccountInfoDialog
            open={openAddAccountInfoDialog}
            onClose={handleCloseAddAccountInfoDialog}
            onClickCancel={handleCloseAddAccountInfoDialog}
            onClickConfirm={handleAddAccount}
          />
        )}
        {openAccountSuccessDialog && (
          <AccountSuccessDialog
            open={openAccountSuccessDialog}
            onClose={handleCloseAccountSuccessDialog}
            data={newAccount as AccountAddMutation}
          />
        )}
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
