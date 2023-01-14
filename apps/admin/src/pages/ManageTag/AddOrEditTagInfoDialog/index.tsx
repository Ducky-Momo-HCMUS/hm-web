import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useCallback, useState } from 'react';

import { StyledTextField } from '../../../components/styles';

interface State {
  tag: string;
}

interface AddOrEditTagInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: any;
  data?: string;
}

function AddOrEditTagInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditTagInfoDialogProps) {
  const [values, setValues] = useState<State>({
    tag: data || '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{data ? <>Chỉnh sửa tag</> : <>Thêm tag</>}</DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Tag"
            name="tag"
            value={values.tag}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('tag')}
            placeholder="Nhập tag..."
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button color="primary" variant="contained" onClick={onClickConfirm}>
            {data ? <>Lưu</> : <>Thêm</>}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrEditTagInfoDialog;
