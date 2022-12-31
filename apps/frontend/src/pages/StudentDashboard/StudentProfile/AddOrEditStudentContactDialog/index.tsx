import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useCallback, useState } from 'react';

import { StyledTextField } from '../../../../components/styles';
import { Contact } from '../../../../generated-types';

interface State {
  mxh: string;
  url: string;
}

interface AddOrEditStudentContactDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (mxh: string, url: string) => void;
  data?: Contact;
}

function AddOrEditStudentContactDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditStudentContactDialogProps) {
  const [values, setValues] = useState<State>({
    mxh: data ? data.mxh : '',
    url: data ? data.url : '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data ? 'Chỉnh sửa thông tin liên lạc' : 'Thêm thông tin liên lạc'}
      </DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Tiêu đề"
            name="mxh"
            value={values.mxh}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('mxh')}
            placeholder="Nhập tên mạng xã hội..."
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <StyledTextField
            label="URL"
            name="url"
            value={values.url}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('url')}
            placeholder="Nhập link mạng xã hội..."
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              onClickConfirm(values.mxh, values.url);
            }}
          >
            {data ? 'Lưu' : 'Thêm'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrEditStudentContactDialog;
