import React, { useCallback, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Header from '../../components/Header';
import {
  StyledContainer,
  StyledContentWrapper,
  StyledFormControl,
  StyledTitle,
} from '../../components/styles';
import NoteCardItem from './NoteCardItem';
import {
  StyledFilterBar,
  StyledGridContainer,
  StyledTextField,
} from './styles';
import { NOTES_LIST } from '../../constants';

interface State {
  class: string;
  deleteIndex: number;
}

function NoteStore() {
  const [values, setValues] = useState<State>({
    class: '19CLC5',
    deleteIndex: -1,
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <StyledTitle variant="h1">Ghi chú của tôi</StyledTitle>
          <StyledFilterBar>
            <StyledTextField
              sx={{ width: '50%' }}
              id="title-keyword"
              variant="standard"
              label="Tiêu đề"
              placeholder="Nhập tiêu đề"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              sx={{ width: '30%' }}
              id="student-keyword"
              variant="standard"
              label="Sinh viên"
              placeholder="Nhập họ tên/MSSV"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledFormControl sx={{ width: '10%' }}>
              <InputLabel id="class-select-label">Lớp</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                value={values.class}
                label="Lớp"
                onChange={handleChange('class')}
              >
                <MenuItem value="19CLC5">19CLC5</MenuItem>
                <MenuItem value="19CLC6">19CLC6</MenuItem>
                <MenuItem value="19CLC7">19CLC7</MenuItem>
              </Select>
            </StyledFormControl>
            {/* TODO: FILTER HERE */}
          </StyledFilterBar>
          <StyledGridContainer container spacing={3}>
            {NOTES_LIST.map((item, index) => (
              <NoteCardItem
                data={item}
                onClickDelete={() =>
                  setValues({ ...values, deleteIndex: index })
                }
              />
            ))}
          </StyledGridContainer>
        </StyledContentWrapper>
      </StyledContainer>
      {values.deleteIndex >= 0 && (
        <Dialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Xác nhận</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              color="text.primary"
            >
              Bạn có đồng ý xoá ghi chú{' '}
              <b>{NOTES_LIST[values.deleteIndex].title}</b> không?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setValues({ ...values, deleteIndex: -1 })}>
              Hủy
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => setValues({ ...values, deleteIndex: -1 })}
            >
              Xoá
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default NoteStore;
