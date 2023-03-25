import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from '@mui/material';
import React, { ChangeEvent, useCallback, useState } from 'react';

import { StyledTextField } from '../../../../components/styles';
import {
  StudentAddContactInput,
  StudentContact,
  StudentEditContactInput,
} from '../../../../generated-types';

interface State {
  mxh: string;
  url: string;
}

interface AddOrEditStudentContactDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (
    payload: StudentEditContactInput | StudentAddContactInput
  ) => void;
  data?: StudentContact;
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

  const [chooseFromList, setChooseFromList] = useState(false);

  const handleSelectChooseFromList = (event: ChangeEvent<HTMLInputElement>) => {
    setChooseFromList(event.target.checked);
  };

  const handleSelectSocial = (event: SelectChangeEvent) => {
    setValues((v) => ({ ...v, mxh: event.target.value }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data
          ? 'Chỉnh sửa thông tin mạng xã hội'
          : 'Thêm thông tin mạng xã hội'}
      </DialogTitle>
      <DialogContent>
        <Box component="form">
          <FormControl sx={{ display: 'block' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={chooseFromList}
                  onChange={handleSelectChooseFromList}
                />
              }
              label="Chọn từ danh sách mạng xã hội phổ biến"
            />
          </FormControl>
          {chooseFromList ? (
            <FormControl
              sx={{
                marginTop: '1rem',
                width: '100%',
                backgroundColor: '#f5f5f5',
              }}
              required
            >
              <InputLabel id="social-select-label">Mạng xã hội</InputLabel>
              <Select
                name="mxh"
                labelId="social-select-label"
                id="social-select"
                label="Mạng xã hội"
                value={values.mxh}
                onChange={handleSelectSocial}
              >
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Zalo">Zalo</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <StyledTextField
              label="Tên"
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
          )}
          <StyledTextField
            label="Thông tin"
            name="url"
            value={values.url}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('url')}
            placeholder="Nhập thông tin mạng xã hội..."
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
              onClickConfirm({ mxh: values.mxh, url: values.url });
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
