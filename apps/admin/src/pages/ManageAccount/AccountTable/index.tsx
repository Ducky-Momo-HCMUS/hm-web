import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Backdrop,
  CircularProgress,
} from '@mui/material';

import Dialog from '../../../components/DeleteDialog';
import {
  AccountEditInput,
  useAccountActivateMutation,
  useAccountDeleteMutation,
  useAccountEditMutation,
  useAccountListLazyQuery,
} from '../../../generated-types';
import { GET_ACCOUNT_LIST } from '../../../data/queries/account/get-account-list';
import EditAccountInfoDialog from '../AddOrEditAccountInfoDialog';
import { ACCOUNT_LIST_PAGE_SIZE } from '../../../constants';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import AccountTableRow from './AccountTableRow';

interface State {
  deleteIndex: number;
  editIndex: number;
  activateIndex: number;
}

function AccountTable() {
  const [page, setPage] = useState(0);

  const [
    getAccountList,
    { loading: accountListLoading, data: accountListData },
  ] = useAccountListLazyQuery();

  useEffect(() => {
    getAccountList({
      variables: {
        page: page + 1,
        size: ACCOUNT_LIST_PAGE_SIZE,
      },
      fetchPolicy: 'no-cache',
    });
  }, [getAccountList, page]);

  const { accountList, accountListLength } = useMemo(
    () => ({
      accountList: accountListData?.accountList.data || [],
      accountListLength: accountListData?.accountList.total || 0,
    }),
    [accountListData?.accountList]
  );

  const [values, setValues] = useState<State>({
    deleteIndex: -1,
    editIndex: -1,
    activateIndex: -1,
  });

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

  const handleClickEdit = useCallback((index: number) => {
    setValues((v) => ({ ...v, editIndex: index }));
  }, []);

  const handleClickActivate = useCallback((index: number) => {
    setValues((v) => ({ ...v, activateIndex: index }));
  }, []);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [deleteAccount, { loading: deleteAccountLoading }] =
    useAccountDeleteMutation();

  const handleDeleteAccount = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteAccount({
      variables: {
        payload: {
          email:
            accountList.find((item) => item.maTK === values.deleteIndex)
              ?.email || '',
        },
      },
      refetchQueries: [
        {
          query: GET_ACCOUNT_LIST,
          variables: {
            page: 1,
            size: ACCOUNT_LIST_PAGE_SIZE,
          },
        },
        'AccountList',
      ],
    });
  }, [accountList, deleteAccount, values.deleteIndex]);

  const [editAccount, { loading: editAccountLoading }] =
    useAccountEditMutation();

  const handleEditAccount = useCallback(
    async (payload: AccountEditInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editAccount({
        variables: {
          payload,
        },
        refetchQueries: [
          {
            query: GET_ACCOUNT_LIST,
            variables: {
              page: 1,
              size: ACCOUNT_LIST_PAGE_SIZE,
            },
          },
          'AccountList',
        ],
      });
    },
    [editAccount]
  );

  const [activateAccount, { loading: activateAccountLoading }] =
    useAccountActivateMutation();

  const handleActivateAccount = useCallback(async () => {
    setValues((v) => ({ ...v, activateIndex: -1 }));
    await activateAccount({
      variables: {
        payload: {
          email:
            accountList.find((item) => item.maTK === values.activateIndex)
              ?.email || '',
        },
      },
      refetchQueries: [
        {
          query: GET_ACCOUNT_LIST,
          variables: {
            page: 1,
            size: ACCOUNT_LIST_PAGE_SIZE,
          },
        },
        'AccountList',
      ],
    });
  }, [accountList, activateAccount, values.activateIndex]);

  return (
    <>
      <AsyncDataRenderer loading={accountListLoading} data={accountListData}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Loại tài khoản</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountList.map((row, index) => (
                <AccountTableRow
                  index={index}
                  key={row.email}
                  data={row}
                  onClickDelete={() => handleClickDelete(row.maTK)}
                  onClickEdit={() => handleClickEdit(row.maTK)}
                  onClickActivate={() => handleClickActivate(row.maTK)}
                />
              ))}
            </TableBody>
          </Table>
          {accountListLength > 0 && (
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={accountListLength}
              page={page}
              rowsPerPage={ACCOUNT_LIST_PAGE_SIZE}
              onPageChange={handleChangePage}
            />
          )}
        </Paper>
      </AsyncDataRenderer>
      {values.deleteIndex >= 0 && (
        <Dialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý khoá tài khoản"
          boldText={
            accountList.find((item) => item.maTK === values.deleteIndex)
              ?.email || ''
          }
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          confirmAction="Khoá"
          onClickConfirm={handleDeleteAccount}
        />
      )}
      {values.activateIndex >= 0 && (
        <Dialog
          open={values.activateIndex >= 0}
          onClose={() => setValues({ ...values, activateIndex: -1 })}
          description="Bạn có đồng ý kích hoạt tài khoản"
          boldText={
            accountList.find((item) => item.maTK === values.activateIndex)
              ?.email || ''
          }
          onClickCancel={() => setValues({ ...values, activateIndex: -1 })}
          confirmAction="Kích hoạt"
          onClickConfirm={handleActivateAccount}
        />
      )}
      {values.editIndex >= 0 && (
        <EditAccountInfoDialog
          open={values.editIndex >= 0}
          onClose={() => setValues({ ...values, editIndex: -1 })}
          onClickCancel={() => setValues({ ...values, editIndex: -1 })}
          onClickConfirm={handleEditAccount}
          data={accountList.find((item) => item.maTK === values.editIndex)}
        />
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={
          deleteAccountLoading || editAccountLoading || activateAccountLoading
        }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default AccountTable;
