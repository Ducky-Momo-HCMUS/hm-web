import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
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
import { CLASS_OPTIONS, NOTES_LIST, TAGS_OPTIONS } from '../../mocks';
import DeleteNoteDialog from '../../components/DeleteDialog';
import { CustomisedFile } from '../../types';
import NoteEditor from '../../components/Note/NoteEditor';
import { mapImageUrlToFile } from '../../utils';

import NoteCardItem from './NoteCardItem';
import {
  StyledDialog,
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
  title: string;
  tags: string[];
}

function NoteStore() {
  const [values, setValues] = useState<State>({
    classes: [],
    selected: -1,
    deleteIndex: -1,
    startDate: null,
    endDate: null,
    title: '',
    tags: [],
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

  const [files, setFiles] = useState<CustomisedFile[]>();

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const handleClickSave = useCallback(() => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }, [editorRef]);

  const handleChangeValue = useCallback(
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectTags = useCallback(
    (event: SelectChangeEvent<typeof values.tags>) => {
      const {
        target: { value },
      } = event;
      setValues((v) => ({
        ...v,
        tags: typeof value === 'string' ? value.split(',') : value,
      }));
    },
    []
  );

  useEffect(() => {
    if (values.selected >= 0) {
      setValues((v) => ({ ...v, title: NOTES_LIST[values.selected].title }));
      setValues((v) => ({ ...v, tags: NOTES_LIST[values.selected].tags }));
      setFiles(mapImageUrlToFile(NOTES_LIST[values.selected].images));
    }
  }, [values.selected]);

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
              sx={{ width: '15%' }}
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
            <FormControl variant="standard" sx={{ width: '10%' }}>
              <InputLabel
                sx={{ fontWeight: 'bold' }}
                shrink
                id="class-select-label"
              >
                Lớp
              </InputLabel>
              <Select
                sx={{
                  '& .MuiSelect-select .notranslate::after':
                    values.classes.length === 0
                      ? {
                          content: `"Chọn lớp..."`,
                          opacity: 0.42,
                        }
                      : {},
                }}
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
            <FormControl variant="standard" sx={{ width: '15%' }}>
              <InputLabel
                sx={{ fontWeight: 'bold' }}
                shrink
                id="class-select-label"
              >
                Tag
              </InputLabel>
              <Select
                sx={{
                  '& .MuiSelect-select .notranslate::after':
                    values.tags.length === 0
                      ? {
                          content: `"Chọn tag..."`,
                          opacity: 0.42,
                        }
                      : {},
                }}
                multiple
                renderValue={(selected) => selected.join(', ')}
                labelId="tag-select-label"
                id="tag-select"
                value={values.tags}
                label="Tag"
                onChange={handleSelectTags}
              >
                {TAGS_OPTIONS.map((item) => (
                  <MenuItem value={item}>
                    <Checkbox checked={values.tags.indexOf(item) > -1} />
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
                onClickExpand={() => setValues({ ...values, selected: -1 })}
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
      {values.selected >= 0 && (
        <StyledDialog
          open={values.selected >= 0}
          onClose={() => setValues({ ...values, selected: -1 })}
        >
          <NoteEditor
            editorRef={editorRef}
            initialValue={initialValue}
            files={files}
            setFiles={setFiles}
            onClickSave={handleClickSave}
            title={values.title}
            tags={values.tags}
            handleChangeValue={handleChangeValue}
            handleSelectTags={handleSelectTags}
          />
        </StyledDialog>
      )}
      {values.deleteIndex >= 0 && (
        <DeleteNoteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý xoá ghi chú"
          boldText={NOTES_LIST[values.deleteIndex].title}
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={() => setValues({ ...values, deleteIndex: -1 })}
        />
      )}
    </>
  );
}

export default NoteStore;
