import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useCallback, useState } from 'react';

import { CLASS_LIST } from '../../../mocks/teacher';
import { StyledTextField } from '../../../components/styles';
import { TeacherListItem } from '../../../types';

interface State {
  fullName: string;
  className: string;
}

interface AddOrEditHomeroomTeacherInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: any;
  data?: TeacherListItem;
}

function AddOrEditHomeroomTeacherInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditHomeroomTeacherInfoDialogProps) {
  const [values, setValues] = useState<State>({
    fullName: data ? data.tenGV : '',
    className: data ? data.lopChuNhiem : '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectClass = useCallback(
    (event: SelectChangeEvent<typeof values.className>) => {
      setValues((v) => ({
        ...v,
        type: event.target.value,
      }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data ? <>Chỉnh sửa lớp của GVCN</> : <>Thêm giáo viên chủ nhiệm</>}
      </DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Họ tên"
            name="fullName"
            value={values.fullName}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('fullName')}
            placeholder="Nhập họ tên..."
            required
            disabled={data !== undefined}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            required
          >
            <InputLabel shrink id="class-select-label">
              Lớp chủ nhiệm
            </InputLabel>
            <Select
              sx={{
                '& .MuiSelect-select .notranslate::after':
                  values.className.length === 0
                    ? {
                        content: `"Chọn lớp chủ nhiệm"`,
                        opacity: 0.42,
                      }
                    : {},
              }}
              labelId="class-select-label"
              id="class-select"
              label="Lớp chủ nhiệm"
              value={values.className}
              onChange={handleSelectClass}
            >
              {CLASS_LIST.map((type) => (
                <MenuItem key={type} value={type}>
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default AddOrEditHomeroomTeacherInfoDialog;
