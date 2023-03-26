import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

import { StyledTextField, StyledMuiLink } from '../../../../components/styles';
import {
  StudentAddParentInfoInput,
  StudentEditParentInfoInput,
  StudentParentContact,
  StudentParentInfo,
} from '../../../../generated-types';
import { RELATIONSHIP_OPTIONS } from '../../../../mocks/parent';

interface State {
  tenPH: string;
  quanHe: string;
  sdt: string;
  lienHePH: StudentParentContact[];
  mxh: string;
  url: string;
}

interface AddOrEditParentInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: (
    parentInfo: StudentAddParentInfoInput | StudentEditParentInfoInput
  ) => void;
  data?: StudentParentInfo;
}

function AddOrEditParentInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  data,
}: AddOrEditParentInfoDialogProps) {
  const [values, setValues] = useState<State>({
    tenPH: data ? data.tenPH : '',
    quanHe: data ? data.quanHe : '',
    sdt: data ? data.sdt : '',
    lienHePH: data ? data.lienHePH : [],
    mxh: '',
    url: '',
  });

  const handleReset = useCallback(() => {
    setValues((v) => ({
      ...v,
      tenPH: '',
      quanHe: '',
      sdt: '',
      lienHePH: [],
      mxh: '',
      url: '',
    }));
  }, []);

  const handleChange = useCallback(
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectRelationship = useCallback(
    (event: SelectChangeEvent<string>) => {
      setValues((v) => ({
        ...v,
        quanHe: event.target.value,
      }));
    },
    []
  );

  const handleAddContactRow = useCallback(() => {
    // TODO: check required field
    setValues((v) => ({
      ...v,
      lienHePH: [...values.lienHePH, { mxh: values.mxh, url: values.url }],
    }));

    setValues((v) => ({
      ...v,
      mxh: '',
      url: '',
    }));
  }, [values.lienHePH, values.mxh, values.url]);

  const handleRemoveContactRow = useCallback(
    (contact: StudentParentContact) => () => {
      setValues((v) => ({
        ...v,
        lienHePH: [
          ...values.lienHePH.filter((item) => item.mxh !== contact.mxh),
        ],
      }));
    },
    [values.lienHePH]
  );

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
        handleReset();
      }}
    >
      <DialogTitle>
        {data ? 'Chỉnh sửa thông tin phụ huynh' : 'Thêm thông tin phụ huynh'}
      </DialogTitle>
      <DialogContent>
        <Box component="form">
          <StyledTextField
            label="Họ tên"
            name="tenPH"
            value={values.tenPH}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('tenPH')}
            placeholder="Nhập họ tên phụ huynh..."
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
            <InputLabel shrink id="relationship-select-label">
              Quan hệ
            </InputLabel>
            <Select
              sx={{
                '& .MuiSelect-select .notranslate::after':
                  values.lienHePH.length === 0
                    ? {
                        content: `"Chọn quan hệ"`,
                        opacity: 0.42,
                      }
                    : {},
              }}
              labelId="relationship-select-label"
              id="relationship-select"
              label="Quan hệ"
              value={values.quanHe}
              onChange={handleSelectRelationship}
            >
              {RELATIONSHIP_OPTIONS.map((item) => (
                <MenuItem key={item} value={item}>
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <StyledTextField
            type="number"
            label="Số điện thoại"
            name="phoneNumber"
            value={values.sdt ? Number(values.sdt) : ''}
            sx={{ margin: '0.5rem 0', width: '100%' }}
            variant="filled"
            onChange={handleChange('sdt')}
            placeholder="Nhập số điện thoại..."
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          {values.lienHePH.map((social) => (
            <Box display="flex" justifyContent="space-between">
              <Tooltip title={social.url} placement="top">
                <StyledMuiLink href={social.url}>{social.mxh}</StyledMuiLink>
              </Tooltip>
              <IconButton onClick={handleRemoveContactRow(social)}>
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between">
            <StyledTextField
              label="Mạng xã hội"
              name="mxh"
              value={values.mxh}
              sx={{ margin: '0.5rem 0', width: '50%', marginRight: '1rem' }}
              variant="filled"
              onChange={handleChange('mxh')}
              placeholder="Nhập tên mạng xã hội..."
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              label="URL"
              name="url"
              value={values.url}
              sx={{ margin: '0.5rem 0', width: '40%', marginRight: '1rem' }}
              variant="filled"
              onChange={handleChange('url')}
              placeholder="Nhập URL..."
              InputLabelProps={{
                shrink: true,
              }}
            />
            <IconButton onClick={handleAddContactRow}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              onClickConfirm({
                tenPH: values.tenPH,
                quanHe: values.quanHe,
                sdt: values.sdt,
                lienHePH: values.lienHePH,
              });
              handleReset();
            }}
          >
            {data ? 'Lưu' : 'Thêm'}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default AddOrEditParentInfoDialog;
