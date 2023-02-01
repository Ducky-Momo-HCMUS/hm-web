import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContainer,
  StyledContentWrapper,
  StyledTitle,
} from '../../components/styles';
import { CLASS_OPTIONS } from '../../mocks';
import DeleteDialog from '../../components/DeleteDialog';
import { File } from '../../types';
import NoteEditor from '../../components/Note/NoteEditor';
import { mapImageUrlToFile } from '../../utils';
import {
  NoteAddInput,
  NoteEditInput,
  useNoteAddMutation,
  useNoteDeleteMutation,
  useNoteDetailLazyQuery,
  useNoteEditMutation,
  useNoteListQuery,
  useTagListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { GET_NOTE_LIST } from '../../data/queries/note/get-note-list';

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
  filterTags: string[];
  isAdding: boolean;
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

function NoteStore() {
  const [values, setValues] = useState<State>({
    classes: [],
    selected: -1,
    deleteIndex: -1,
    startDate: null,
    endDate: null,
    title: '',
    tags: [],
    filterTags: [],
    isAdding: false,
  });

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  const { data: noteListData, loading: noteListLoading } = useNoteListQuery({});
  const noteList = useMemo(
    () => noteListData?.noteList || [],
    [noteListData?.noteList]
  );

  const handleSelectClasses = useCallback(
    (event: SelectChangeEvent<string[]>) => {
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

  const [files, setFiles] = useState<File[]>();

  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleChangeValue = useCallback(
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleSelectFilterTags = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;
      setValues((v) => ({
        ...v,
        filterTags: typeof value === 'string' ? value.split(',') : value,
      }));
    },
    []
  );

  const handleSelectTags = useCallback((event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setValues((v) => ({
      ...v,
      tags: typeof value === 'string' ? value.split(',') : value,
    }));
  }, []);

  const [getNoteDetail, { data: noteDetailData, loading: noteDetailLoading }] =
    useNoteDetailLazyQuery();

  const noteDetail = useMemo(
    () => noteDetailData?.noteDetail,
    [noteDetailData?.noteDetail]
  );

  useEffect(() => {
    if (values.selected > 0) {
      getNoteDetail({
        variables: {
          noteId: values.selected,
        },
      });
    }
  }, [getNoteDetail, values.isAdding, values.selected]);

  useEffect(() => {
    if (noteDetail && !values.isAdding) {
      setValues((v) => ({
        ...v,
        title: noteDetail.tieuDe,
        tags: noteDetail.ghiChuTag.map((item) => item.tenTag),
      }));
      setFiles(
        mapImageUrlToFile(noteDetail.ghiChuHinhAnh.map((item) => item.url))
      );
    }
  }, [noteDetail, values.isAdding, values.selected]);

  const [deleteNote, { loading: deleteNoteLoading }] = useNoteDeleteMutation();
  const handleDeleteNote = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteNote({
      variables: {
        noteId: values.deleteIndex,
      },
      refetchQueries: [{ query: GET_NOTE_LIST }, 'NoteList'],
    });
  }, [deleteNote, values.deleteIndex]);

  const [addNote, { loading: addNoteLoading }] = useNoteAddMutation();
  const [editNote, { loading: editNoteLoading }] = useNoteEditMutation();

  const handleClickSave = useCallback(async () => {
    if (values.isAdding) {
      const payload = {
        tieuDe: values.title,
        maTag: values.tags.map(
          (tenTag) => tagList.find((tag) => tag.tenTag === tenTag)?.maTag
        ),
        noiDung: editorRef.current?.getContent() || '',
        url: ['https://picsum.photos/200'],
      } as NoteAddInput;

      await addNote({
        variables: {
          payload,
        },
        refetchQueries: [{ query: GET_NOTE_LIST }, 'NoteList'],
      });

      setValues((v) => ({ ...v, selected: -1 }));
      return;
    }

    const payload = {
      tieuDe: values.title,
      noiDung: editorRef.current?.getContent() || '',
      maTag: values.tags.map(
        (tenTag) => tagList.find((tag) => tag.tenTag === tenTag)?.maTag
      ),
      url: ['https://picsum.photos/200'],
    } as NoteEditInput;

    await editNote({
      variables: {
        noteId: values.selected,
        payload,
      },
      refetchQueries: [{ query: GET_NOTE_LIST }, 'NoteList'],
    });

    setValues((v) => ({ ...v, selected: -1 }));
  }, [
    addNote,
    editNote,
    tagList,
    values.isAdding,
    values.selected,
    values.tags,
    values.title,
  ]);

  const handleReset = useCallback(() => {
    setValues((v) => ({
      ...v,
      selected: 0,
      isAdding: true,
      title: '',
      tags: [],
    }));
    setFiles([]);
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  }, [editorRef]);

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <StyledTitle variant="h1">Ghi chú của tôi</StyledTitle>
            <Button variant="contained" onClick={handleReset}>
              Tạo ghi chú mới
            </Button>
          </Box>
          <StyledBreadCrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Typography color="text.primary">Ghi chú của tôi</Typography>
          </StyledBreadCrumbs>
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
            <AsyncDataRenderer loading={tagListLoading}>
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
                      values.filterTags.length === 0
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
                  value={values.filterTags}
                  MenuProps={MenuProps}
                  label="Tag"
                  onChange={handleSelectFilterTags}
                >
                  {tagList.map((item) => (
                    <MenuItem value={item.tenTag}>
                      <Checkbox
                        checked={values.tags.indexOf(item.tenTag) > -1}
                      />
                      <ListItemText primary={item.tenTag} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AsyncDataRenderer>
          </StyledFilterBar>
          <AsyncDataRenderer loading={noteListLoading}>
            <StyledGridContainer container spacing={3}>
              {noteList.map((item) => (
                <NoteCardItem
                  data={item}
                  onClick={() =>
                    setValues({
                      ...values,
                      selected: item.maGC,
                      isAdding: false,
                    })
                  }
                  onClickDelete={() =>
                    setValues({ ...values, deleteIndex: item.maGC })
                  }
                  onClickExpand={() => setValues({ ...values, selected: -1 })}
                />
              ))}
            </StyledGridContainer>
          </AsyncDataRenderer>
          <Pagination
            sx={{ width: 'fit-content', margin: '1rem auto 0' }}
            count={10}
            color="primary"
          />
        </StyledContentWrapper>
      </StyledContainer>
      {values.selected >= 0 && (
        <AsyncDataRenderer loading={noteDetailLoading} data={noteDetailData}>
          <StyledDialog
            open={values.selected >= 0}
            onClose={() => setValues({ ...values, selected: -1 })}
          >
            <NoteEditor
              tagList={tagList}
              editorRef={editorRef}
              initialValue={
                values.isAdding ? '' : (noteDetail?.noiDung as string)
              }
              files={files}
              setFiles={setFiles}
              onClickSave={handleClickSave}
              title={values.title}
              tags={values.tags}
              handleChangeValue={handleChangeValue}
              handleSelectTags={handleSelectTags}
              handleReset={handleReset}
              isAdding={values.isAdding}
            />
          </StyledDialog>
        </AsyncDataRenderer>
      )}
      {values.deleteIndex >= 0 && (
        <DeleteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues((v) => ({ ...v, deleteIndex: -1 }))}
          description="Bạn có đồng ý xoá ghi chú"
          boldText={
            noteList.find((item) => item.maGC === values.deleteIndex)?.tieuDe ||
            ''
          }
          onClickCancel={() => setValues((v) => ({ ...v, deleteIndex: -1 }))}
          onClickConfirm={handleDeleteNote}
        />
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={deleteNoteLoading || addNoteLoading || editNoteLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default NoteStore;
