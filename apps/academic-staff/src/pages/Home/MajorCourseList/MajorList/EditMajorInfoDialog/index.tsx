import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useCallback, useState } from 'react';

import { StyledTextField } from '../../../../../components/styles';
import { CourseEditInput, MajorListItem } from '../../../../../generated-types';

interface State {
  nickname: String;
  name: string;
}

interface EditMajorInfoProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (payload: CourseEditInput) => void;
  data: MajorListItem;
}

function EditMajorInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: EditMajorInfoProps) {
  const [values, setValues] = useState<State>({
    nickname: data.tenVietTat,
    name: data.tenCN,
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa chuyên ngành</DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Tên viết tắt"
            value={values.nickname}
            sx={{ margin: '0.5rem 0', width: '100%', minWidth: '20rem' }}
            variant="filled"
            required
            InputProps={{ disabled: true }}
          />
          <StyledTextField
            label="Tên chuyên ngành"
            value={values.name}
            sx={{ margin: '0.5rem 0', width: '100%', minWidth: '20rem' }}
            variant="filled"
            onChange={handleChange('name')}
            placeholder="Nhập tên chuyên ngành..."
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
              onClickConfirm({ name: values.name });
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default EditMajorInfoDialog;
