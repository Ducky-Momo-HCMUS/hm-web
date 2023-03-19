import {
  Box,
  Button,
  Checkbox,
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
import { TeacherEditInput } from '../../../generated-types';

interface State {
  fullName: string;
  className: string[];
}

interface AddOrEditHomeroomTeacherInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (payload: TeacherEditInput) => void;
  data?: TeacherListItem;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function AddOrEditHomeroomTeacherInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditHomeroomTeacherInfoDialogProps) {
  const [values, setValues] = useState<State>({
    fullName: data ? data.tenGV : '',
    className: data ? data.lopChuNhiem : [],
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectClass = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;
      setValues((v) => ({
        ...v,
        className: typeof value === 'string' ? value.split(',') : value,
      }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data ? 'Chỉnh sửa lớp của GVCN' : 'Thêm giáo viên chủ nhiệm'}
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
              multiple
              renderValue={(selected) => selected.join(', ')}
              labelId="class-select-label"
              id="class-select"
              label="Lớp chủ nhiệm"
              value={values.className}
              onChange={handleSelectClass}
              MenuProps={MenuProps}
            >
              {CLASS_LIST.map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={values.className.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => onClickConfirm({ lopSH: values.className })}
          >
            {data ? 'Lưu' : 'Thêm'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrEditHomeroomTeacherInfoDialog;
