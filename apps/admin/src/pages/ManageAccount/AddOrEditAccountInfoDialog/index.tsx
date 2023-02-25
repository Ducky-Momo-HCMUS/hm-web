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
import React, { useCallback, useMemo, useState } from 'react';

import { ACCOUNT_STATUSES, ACCOUNT_TYPES } from '../../../mocks/account';
import { StyledTextField } from '../../../components/styles';
import {
  AccountAddInput,
  AccountEditInput,
  AccountListItem,
} from '../../../generated-types';

interface State {
  email: string;
  fullName: string;
  type: string;
  status: string;
}

interface AddOrEditAccountInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (payload: AccountAddInput | AccountEditInput) => void;
  data?: AccountListItem;
}

function AddOrEditAccountInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditAccountInfoDialogProps) {
  const { type, status } = useMemo(() => {
    if (!data) {
      return {
        type: '',
        status: '',
      };
    }

    const { gvcn, gvu, hoatDong } = data as AccountListItem;
    const getType = () => {
      if (gvcn && gvu) {
        return 'Giáo vụ, Giáo viên chủ nhiệm';
      }

      if (gvcn) {
        return 'Giáo viên chủ nhiệm';
      }

      if (gvu) {
        return 'Giáo vụ';
      }

      return '';
    };
    return {
      type: getType(),
      status: hoatDong ? 'Hoạt động' : 'Không hoạt động',
    };
  }, [data]);

  const [values, setValues] = useState<State>({
    email: data ? data.email : '',
    fullName: data ? data.tenGV : '',
    type: data ? type : '',
    status: data ? status : '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectAccountType = useCallback(
    (event: SelectChangeEvent<string>) => {
      setValues((v) => ({
        ...v,
        type: event.target.value,
      }));
    },
    []
  );

  const handleSelectAccountStatus = useCallback(
    (event: SelectChangeEvent<string>) => {
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
        {data ? 'Chỉnh sửa tài khoản' : 'Thêm tài khoản'}
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
          <StyledTextField
            label="Họ tên"
            name="fullName"
            value={values.fullName}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('fullName')}
            placeholder="Nhập họ tên..."
            required
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: !!data,
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
              {ACCOUNT_TYPES.map((item) => (
                <MenuItem key={item} value={item}>
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!data && (
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
                {ACCOUNT_STATUSES.map((item) => (
                  <MenuItem key={item} value={item}>
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              onClickConfirm({
                email: values.email,
                name: values.fullName,
                isStaff: values.type.includes('Giáo vụ'),
                isTeacher: values.type.includes('Giáo viên chủ nhiệm'),
              });
            }}
          >
            {data ? 'Lưu' : 'Thêm'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrEditAccountInfoDialog;
