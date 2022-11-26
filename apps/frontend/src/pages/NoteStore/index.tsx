/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Editor as TinyMCEEditor } from 'tinymce';

import Header from '../../components/Header';
import {
  StyledContainer,
  StyledContentWrapper,
  StyledTitle,
} from '../../components/styles';
import { CLASS_OPTIONS, NOTES_LIST } from '../../constants';
import ConfirmDeleteNoteDialog from '../../components/ConfirmDeleteNoteDialog';
import { File } from '../../types';
import NoteEditor from '../../components/NoteEditor';

import NoteCardItem from './NoteCardItem';
import {
  StyledFilterBar,
  StyledGridContainer,
  StyledTextField,
} from './styles';

interface State {
  classes: string[];
  selected: number;
  deleteIndex: number;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

function NoteStore() {
  const [values, setValues] = useState<State>({
    classes: [],
    selected: -1,
    deleteIndex: -1,
    startDate: null,
    endDate: null,
  });

  const handleSelectClasses = useCallback(
    (event: SelectChangeEvent<typeof values.classes>) => {
      const {
        target: { value },
      } = event;
      setValues((v) => ({
        ...v,
        classes: typeof value === 'string' ? value.split(',') : value,
      }));
    },
    []
  );

  const initialValue = useMemo(
    () => (values.selected >= 0 ? NOTES_LIST[values.selected].content : ''),
    [values.selected]
  );

  const [files, setFiles] = useState<File[]>();

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const handleClickSave = useCallback(() => {
    if (editorRef.current) {
      // eslint-disable-next-line no-console
      console.log(editorRef.current.getContent());
    }
  }, [editorRef]);

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <StyledTitle variant="h1">Ghi chú của tôi</StyledTitle>
          <StyledFilterBar>
            <StyledTextField
              sx={{ width: '20%' }}
              id="title-keyword"
              variant="standard"
              label="Tiêu đề"
              placeholder="Nhập tiêu đề..."
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              sx={{ width: '20%' }}
              id="student-keyword"
              variant="standard"
              label="Sinh viên"
              placeholder="Nhập họ tên/MSSV..."
              InputLabelProps={{
                shrink: true,
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày bắt đầu"
                inputFormat="DD/MM/YYYY"
                value={values.startDate}
                onChange={(newValue) => {
                  setValues((v) => ({ ...v, startDate: newValue }));
                }}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              <DatePicker
                label="Ngày kết thúc"
                inputFormat="DD/MM/YYYY"
                value={values.endDate}
                onChange={(newValue) => {
                  setValues((v) => ({ ...v, endDate: newValue }));
                }}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            <FormControl sx={{ width: '10%' }}>
              <InputLabel id="class-select-label">Lớp</InputLabel>
              <Select
                multiple
                renderValue={(selected) => selected.join(', ')}
                labelId="class-select-label"
                id="class-select"
                value={values.classes}
                label="Lớp"
                onChange={handleSelectClasses}
              >
                {CLASS_OPTIONS.map((item) => (
                  <MenuItem value={item}>
                    <Checkbox checked={values.classes.indexOf(item) > -1} />
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StyledFilterBar>
          <StyledGridContainer container spacing={3}>
            {NOTES_LIST.map((item, index) => (
              <NoteCardItem
                data={item}
                onClick={() => setValues({ ...values, selected: index })}
                onClickDelete={() =>
                  setValues({ ...values, deleteIndex: index })
                }
              />
            ))}
          </StyledGridContainer>
          <Pagination
            sx={{ width: 'fit-content', margin: '1rem auto 0' }}
            count={10}
            color="primary"
          />
        </StyledContentWrapper>
      </StyledContainer>
      {values.deleteIndex >= 0 && (
        <ConfirmDeleteNoteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          title={NOTES_LIST[values.deleteIndex].title}
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={() => setValues({ ...values, deleteIndex: -1 })}
        />
      )}
      {values.selected >= 0 && (
        <Modal
          sx={{ marginTop: '4rem' }}
          open={values.selected >= 0}
          onClose={() => setValues({ ...values, selected: -1 })}
        >
          <NoteEditor
            editorRef={editorRef}
            initialValue={initialValue}
            files={files}
            setFiles={setFiles}
            onClickSave={handleClickSave}
          />
        </Modal>
      )}
    </>
  );
}

export default NoteStore;
