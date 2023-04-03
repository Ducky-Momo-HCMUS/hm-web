/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

import { AccountAddMutation } from '../../../generated-types';

interface AccountSuccessDialogProps {
  open: boolean;
  onClose: any;
  data: AccountAddMutation;
}

interface KeyValueRowProps {
  key: string;
  value: string;
}

function KeyValueRow({ key, value }: KeyValueRowProps) {
  return (
    <TableRow key={key}>
      <TableCell component="th" scope="row">
        {key}
      </TableCell>
      <TableCell align="left">{value}</TableCell>
    </TableRow>
  );
}

function AccountSuccessDialog({
  open,
  onClose,
  data,
}: AccountSuccessDialogProps) {
  const account = data.accountAdd;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle display="flex" alignItems="center">
        <ErrorOutlinedIcon sx={{ color: 'red' }} fontSize="medium" />{' '}
        <Typography sx={{ marginLeft: '1rem' }} variant="h6" component="span">
          Tài khoản
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ marginLeft: '1.5rem' }}>
        <Table sx={{ width: 'fit-content' }}>
          <TableBody>
            <KeyValueRow key="Email" value={account.email} />
            {account.matKhau && (
              <KeyValueRow key="Mật khẩu" value={account.matKhau} />
            )}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AccountSuccessDialog;
