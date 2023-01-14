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

import { ACCOUNT_STATUSES, ACCOUNT_TYPES } from '../../../mocks/account';
import { StyledTextField } from '../../../components/styles';
import { AccountInfo } from '../../../types';

interface State {
  email: string;
  type: string;
  status: string;
}

interface AddOrEditAccountInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: any;
  data?: AccountInfo;
}

function AddOrEditAccountInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditAccountInfoDialogProps) {
  const [values, setValues] = useState<State>({
    email: data ? data.email : '',
    type: data ? data.type : '',
    status: data ? data.status : '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectAccountType = useCallback(
    (event: SelectChangeEvent<typeof values.type>) => {
      setValues((v) => ({
        ...v,
        type: event.target.value,
      }));
    },
    []
  );

  const handleSelectAccountStatus = useCallback(
    (event: SelectChangeEvent<typeof values.type>) => {
      setValues((v) => ({
        ...v,
        status: event.target.value,
      }));
    },
    []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data ? <>Chỉnh sửa tài khoản</> : <>Thêm tài khoản</>}
      </DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Email"
            name="email"
            value={values.email}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('email')}
            placeholder="Nhập email đăng nhập..."
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            required
          >
            <InputLabel shrink id="account-type-select-label">
              Loại tài khoản
            </InputLabel>
            <Select
              sx={{
                '& .MuiSelect-select .notranslate::after':
                  values.type.length === 0
                    ? {
                        content: `"Chọn loại tài khoản"`,
                        opacity: 0.42,
                      }
                    : {},
              }}
              labelId="account-type-select-label"
              id="account-type-select"
              label="Loại tài khoản"
              value={values.type}
              onChange={handleSelectAccountType}
            >
              {ACCOUNT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            required
          >
            <InputLabel shrink id="account-status-select-label">
              Trạng thái
            </InputLabel>
            <Select
              sx={{
                '& .MuiSelect-select .notranslate::after':
                  values.type.length === 0
                    ? {
                        content: `"Chọn trạng thái"`,
                        opacity: 0.42,
                      }
                    : {},
              }}
              labelId="account-status-select-label"
              id="account-status-select"
              label="Trạng thái"
              value={values.status}
              onChange={handleSelectAccountStatus}
            >
              {ACCOUNT_STATUSES.map((type) => (
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

export default AddOrEditAccountInfoDialog;
