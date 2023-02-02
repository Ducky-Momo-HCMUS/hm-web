import React, { useState, useCallback } from 'react';
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

import DeleteDialog from '../../../components/DeleteDialog';
import {
  AccountEditInput,
  AccountListItem,
  useAccountDeleteMutation,
  useAccountEditMutation,
} from '../../../generated-types';
import { GET_ACCOUNT_LIST } from '../../../data/queries/account/get-account-list';
import EditAccountInfoDialog from '../AddOrEditAccountInfoDialog';

import AccountTableRow from './AccountTableRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}
interface AccountInfoTableProps {
  data: AccountListItem[];
}

function AccountTable({ data }: AccountInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [values, setValues] = useState<State>({
    deleteIndex: -1,
    editIndex: -1,
  });

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

  const handleClickEdit = useCallback((index: number) => {
    setValues((v) => ({ ...v, editIndex: index }));
  }, []);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    []
  );

  const [deleteAccount, { loading: deleteAccountLoading }] =
    useAccountDeleteMutation();

  const handleDeleteAccount = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteAccount({
      variables: {
        accountId: values.deleteIndex,
      },
      refetchQueries: [{ query: GET_ACCOUNT_LIST }, 'AccountList'],
    });
  }, [deleteAccount, values.deleteIndex]);

  const [editAccount, { loading: editAccountLoading }] =
    useAccountEditMutation();

  const handleEditAccount = useCallback(
    async (payload: AccountEditInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editAccount({
        variables: {
          accountId: values.editIndex,
          payload,
        },
      });
    },
    [editAccount, values.editIndex]
  );

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Họ tên</TableCell>
              <TableCell>Loại tài khoản</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <AccountTableRow
                  index={index}
                  key={row.email}
                  data={row}
                  onClickDelete={() => handleClickDelete(row.maTK)}
                  onClickEdit={() => handleClickEdit(row.maTK)}
                />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length || 0}
          page={page}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Số dòng trên trang"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {values.deleteIndex >= 0 && (
          <DeleteDialog
            open={values.deleteIndex >= 0}
            onClose={() => setValues({ ...values, deleteIndex: -1 })}
            description="Bạn có đồng ý xoá tài khoản"
            boldText={
              data.find((item) => item.maTK === values.deleteIndex)?.email || ''
            }
            onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
            onClickConfirm={handleDeleteAccount}
          />
        )}
        {values.editIndex >= 0 && (
          <EditAccountInfoDialog
            open={values.editIndex >= 0}
            onClose={() => setValues({ ...values, editIndex: -1 })}
            onClickCancel={() => setValues({ ...values, editIndex: -1 })}
            onClickConfirm={handleEditAccount}
            data={data.find((item) => item.maTK === values.editIndex)}
          />
        )}
      </Paper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={deleteAccountLoading || editAccountLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default AccountTable;
