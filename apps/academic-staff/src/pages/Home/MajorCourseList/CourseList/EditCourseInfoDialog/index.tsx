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
import {
  CourseEditInput,
  CourseListItem,
} from '../../../../../generated-types';

interface State {
  id: String;
  name: string;
}

interface EditCourseInfoProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (payload: CourseEditInput) => void;
  data: CourseListItem;
}

function EditCourseInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: EditCourseInfoProps) {
  const [values, setValues] = useState<State>({
    id: data.maMH,
    name: data.tenMH,
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa môn học</DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Mã môn học"
            value={values.id}
            sx={{ margin: '0.5rem 0', width: '100%', minWidth: '20rem' }}
            variant="filled"
            required
            InputProps={{ disabled: true }}
          />
          <StyledTextField
            label="Tên môn học"
            value={values.name}
            sx={{ margin: '0.5rem 0', width: '100%', minWidth: '20rem' }}
            variant="filled"
            onChange={handleChange('name')}
            placeholder="Nhập tên môn học..."
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

export default EditCourseInfoDialog;
