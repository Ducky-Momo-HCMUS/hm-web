/* eslint-disable prefer-object-spread */
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
  FormControl,
  InputLabel,
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
  StyledStickyBox,
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
  useNoteSearchLazyQuery,
  useTagListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { GET_NOTE_LIST } from '../../data/queries/note/get-note-list';
import { NOTE_STORE_LIST_PAGE_SIZE } from '../../constants';

import NoteCardItem from './NoteCardItem';
import {
  StyledCard,
  StyledDialog,
  StyledFilterBox,
  StyledGridContainer,
  StyledTextField,
} from './styles';

interface State {
  selected: number;
  deleteIndex: number;
  title: string;
  tags: string[];
  isAdding: boolean;
}

interface FilterState {
  title: string;
  content: string;
  student: string;
  tag: string;
  class: string;
  start: Dayjs | null;
  end: Dayjs | null;
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
    selected: -1,
    deleteIndex: -1,
    title: '',
    tags: [],
    isAdding: false,
  });

  const [filterValues, setFilterValues] = useState<FilterState>({
    title: '',
    content: '',
    student: '',
    tag: '',
    class: '',
    start: null,
    end: null,
  });

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  const [files, setFiles] = useState<File[]>();
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleChangeValue = useCallback(
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleChangeFilterValue = useCallback(
    (prop: keyof FilterState) => (event: ChangeEvent<HTMLInputElement>) => {
      setFilterValues((v) => ({ ...v, [prop]: event.target.value }));
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

  const handleSelectFilterClass = useCallback(
    (event: SelectChangeEvent<string>) => {
      const {
        target: { value },
      } = event;
      setFilterValues((v) => ({
        ...v,
        class: value,
      }));
    },
    []
  );

  const handleSelectFilterTag = useCallback(
    (event: SelectChangeEvent<string>) => {
      const {
        target: { value },
      } = event;
      setFilterValues((v) => ({
        ...v,
        tag: value,
      }));
    },
    []
  );

  const [getNoteDetail, { data: noteDetailData }] = useNoteDetailLazyQuery();

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
        fetchPolicy: 'no-cache',
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

  const [page, setPage] = useState(1);
  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const args = useMemo(() => {
    let params = Object.assign(
      {},
      { page },
      { size: NOTE_STORE_LIST_PAGE_SIZE },
      filterValues.title && { tieuDe: filterValues.title },
      filterValues.start && { start: filterValues.start },
      filterValues.end && { end: filterValues.end },
      filterValues.tag && { tag: filterValues.tag },
      filterValues.class && { class: filterValues.class }
    );

    if (filterValues.student) {
      if (Number.isNaN(Number(filterValues.student))) {
        params = {
          ...params,
          tenSV: filterValues.student,
        };
      } else {
        params = {
          ...params,
          maSV: filterValues.student,
        };
      }
    }

    return params;
  }, [
    filterValues.class,
    filterValues.end,
    filterValues.start,
    filterValues.student,
    filterValues.tag,
    filterValues.title,
    page,
  ]);

  const [searchNote, { loading: searchNoteLoading, data: searchNoteData }] =
    useNoteSearchLazyQuery();

  useEffect(() => {
    searchNote({ variables: args });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchNote, page]);

  const lastPage = useMemo(
    () => searchNoteData?.noteSearch.lastPage,
    [searchNoteData?.noteSearch.lastPage]
  );

  const noteList = useMemo(() => {
    return searchNoteData?.noteSearch.data || [];
  }, [searchNoteData?.noteSearch.data]);

  const handleSearchNote = useCallback(() => {
    searchNote({
      variables: args,
    });
  }, [args, searchNote]);

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <StyledStickyBox>
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
          </StyledStickyBox>
          <StyledCard>
            <StyledFilterBox>
              <StyledTextField
                sx={{ width: '20%' }}
                id="title-keyword"
                variant="standard"
                label="Tiêu đề"
                placeholder="Nhập tiêu đề..."
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChangeFilterValue('title')}
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
                onChange={handleChangeFilterValue('student')}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ngày bắt đầu"
                  inputFormat="DD/MM/YYYY"
                  value={filterValues.start}
                  onChange={(newValue) => {
                    setFilterValues((v) => ({ ...v, start: newValue }));
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
                  value={filterValues.end}
                  onChange={(newValue) => {
                    setFilterValues((v) => ({ ...v, end: newValue }));
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
                      filterValues.class.length === 0
                        ? {
                            content: `"Chọn lớp..."`,
                            opacity: 0.42,
                          }
                        : {},
                  }}
                  labelId="class-select-label"
                  id="class-select"
                  label="Lớp"
                  onChange={handleSelectFilterClass}
                >
                  {CLASS_OPTIONS.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <AsyncDataRenderer loading={tagListLoading} data={tagListData}>
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
                        filterValues.tag.length === 0
                          ? {
                              content: `"Chọn tag..."`,
                              opacity: 0.42,
                            }
                          : {},
                    }}
                    labelId="tag-select-label"
                    id="tag-select"
                    MenuProps={MenuProps}
                    label="Tag"
                    onChange={handleSelectFilterTag}
                  >
                    {tagList.map((item) => (
                      <MenuItem value={item.tenTag}>{item.tenTag}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </AsyncDataRenderer>
            </StyledFilterBox>
            <Button
              sx={{ marginTop: '1rem' }}
              variant="contained"
              color="primary"
              onClick={handleSearchNote}
            >
              Lọc
            </Button>
          </StyledCard>
          <AsyncDataRenderer loading={searchNoteLoading} data={noteList}>
            <StyledGridContainer
              sx={{ overflowY: 'auto', height: '20rem', padding: '1rem 0' }}
              container
              spacing={3}
            >
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
            <Pagination
              sx={{ width: 'fit-content', margin: '1rem auto 0' }}
              count={lastPage}
              color="primary"
              onChange={handleChangePage}
            />
          </AsyncDataRenderer>
        </StyledContentWrapper>
      </StyledContainer>
      {values.selected >= 0 && (
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
