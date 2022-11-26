import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

interface ConfirmDeleteNoteDialogProps {
  open: boolean;
  onClose: any;
  title: string;
  onClickCancel: any;
  onClickConfirm: any;
}

function ConfirmDeleteNoteDialog({
  open,
  onClose,
  title,
  onClickCancel,
  onClickConfirm,
}: ConfirmDeleteNoteDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-note-dialog-title"
      aria-describedby="delete-note-dialog-description"
    >
      <DialogTitle id="delete-note-dialog-title">Xác nhận</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="delete-note-dialog-description"
          color="text.primary"
        >
          Bạn có đồng ý xoá ghi chú <b>{title}</b> không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickCancel}>Hủy</Button>
        <Button color="error" variant="contained" onClick={onClickConfirm}>
          Xoá
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDeleteNoteDialog;
