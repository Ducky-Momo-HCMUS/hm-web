/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface DeleteDialogProps {
  description: string;
  boldText: string;
  confirmAction?: string;
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: any;
}

function DeleteDialog({
  description,
  boldText,
  confirmAction = '',
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
}: DeleteDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">Xác nhận</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description" color="text.primary">
          {description} <b>{boldText}</b> không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel}>Hủy</Button>
        <Button
          color={
            confirmAction
              ? confirmAction === 'Khoá'
                ? 'error'
                : 'success'
              : 'error'
          }
          variant="contained"
          onClick={onClickConfirm}
        >
          {confirmAction || 'Xoá'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
