/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
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

import { AccountAddMutation } from '../../../generated-types';

interface AccountSuccessDialogProps {
  open: boolean;
  onClose: any;
  data: AccountAddMutation;
}

interface KeyValueRowProps {
  id: string;
  value: string;
}

function KeyValueRow({ id, value }: KeyValueRowProps) {
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {id}
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
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle display="flex" alignItems="center">
        <Typography sx={{ marginLeft: '1rem' }} variant="h6" component="span">
          Tài khoản
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ marginLeft: '1.5rem' }}>
        <Table>
          <TableBody>
            <KeyValueRow id="Email" value={account.email} />
            {account.matKhau && (
              <KeyValueRow id="Mật khẩu" value={account.matKhau} />
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
