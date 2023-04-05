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
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Link } from 'react-router-dom';
import { FilePond } from 'react-filepond';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContainer,
  StyledContentWrapper,
  StyledStickyBox,
  StyledTitle,
} from '../../components/styles';
import DeleteDialog from '../../components/DeleteDialog';
import NoteEditor from '../../components/Note/NoteEditor';
import {
  NoteAddInput,
  NoteEditInput,
  NoteImage,
  useHomeroomListQuery,
  useNoteAddMutation,
  useNoteDeleteMutation,
  useNoteDetailLazyQuery,
  useNoteEditMutation,
  useNoteSearchLazyQuery,
  useTagListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { NOTE_STORE_LIST_PAGE_SIZE } from '../../constants';
import { SEARCH_NOTE } from '../../data/queries/note/search-note';

import NoteCardItem from './NoteCardItem';
import {
  StyledCard,
  StyledDialog,
  StyledFilterBox,
  StyledGridContainer,
  StyledIconButton,
  StyledTextField,
  StyledFormControl,
} from './styles';

interface State {
  selected: number;
  deleteIndex: number;
  title: string;
  tags: string[];
  isAdding: boolean;
  images: NoteImage[];
  maSV: String;
  tenSV: String;
}

interface FilterState {
  type: string;
  title: string;
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

const TYPES = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Ghi chú chung', value: 'general' },
  { label: 'Ghi chú sinh viên', value: 'student' },
];

function NoteStore() {
  const [values, setValues] = useState<State>({
    selected: -1,
    deleteIndex: -1,
    title: '',
    tags: [],
    isAdding: false,
    images: [],
    maSV: '',
    tenSV: '',
  });

  const [filterValues, setFilterValues] = useState<FilterState>({
    type: TYPES[0].value,
    title: '',
    student: '',
    tag: '',
    class: '',
    start: null,
    end: null,
  });

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({
    variables: {
      page: 1,
      size: 1000,
    },
  });
  const tagList = useMemo(
    () => tagListData?.tagList.data || [],
    [tagListData?.tagList.data]
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

  const handleSelectType = useCallback((event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setFilterValues((v) => ({
      ...v,
      type: value,
    }));
  }, []);

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
        images: noteDetail.ghiChuHinhAnh || [],
      }));
    }
  }, [noteDetail, values.isAdding]);

  const [deleteNote, { loading: deleteNoteLoading }] = useNoteDeleteMutation();
  const handleDeleteNote = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteNote({
      variables: {
        noteId: values.deleteIndex,
      },
      refetchQueries: [
        {
          query: SEARCH_NOTE,
          variables: {
            page: 1,
            size: NOTE_STORE_LIST_PAGE_SIZE,
            type: TYPES[0].value,
          },
        },
        'NoteSearch',
      ],
    });
  }, [deleteNote, values.deleteIndex]);

  const [addNote] = useNoteAddMutation();
  const [editNote] = useNoteEditMutation();

  const filePondRef = useRef<FilePond | null>(null);

  const handleReset = useCallback(() => {
    setValues((v) => ({
      ...v,
      selected: -1,
      isAdding: false,
      title: '',
      tags: [],
      images: [],
      maSV: '',
      tenSV: '',
    }));
    setFiles([]);
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
    if (filePondRef.current) {
      filePondRef.current.removeFiles();
    }
  }, []);

  const handleClickSave = useCallback(async () => {
    if (values.isAdding) {
      const payload = {
        tieuDe: values.title,
        maTag: values.tags.map(
          (tenTag) => tagList.find((tag) => tag.tenTag === tenTag)?.maTag
        ),
        noiDung: editorRef.current?.getContent() || '',
        images: files,
      } as NoteAddInput;

      await addNote({
        variables: {
          payload,
        },
        refetchQueries: [
          {
            query: SEARCH_NOTE,
            variables: {
              page: 1,
              size: NOTE_STORE_LIST_PAGE_SIZE,
              type: TYPES[0].value,
            },
          },
          'NoteSearch',
        ],
      });

      handleReset();
      return;
    }

    const payload = {
      tieuDe: values.title,
      noiDung: editorRef.current?.getContent() || '',
      removeTagIds:
        noteDetail?.ghiChuTag
          .filter((tag) => !values.tags.find((item) => item === tag.tenTag))
          .map((ghiChuTag) => ghiChuTag.maTag) || [],
      removeImageIds: noteDetail?.ghiChuHinhAnh
        .filter(
          (hinhAnh) => !values.images.find((item) => item.id === hinhAnh.id)
        )
        .map((ghiChuHinhAnh) => ghiChuHinhAnh.id),
      addTagIds:
        values.tags
          .filter(
            (tag) => !noteDetail?.ghiChuTag.find((item) => item.tenTag === tag)
          )
          .map((ghiChuTag) => tagList.find((item) => item.tenTag === ghiChuTag))
          .map((addTag) => addTag?.maTag) || [],
      images: files,
    } as NoteEditInput;

    await editNote({
      variables: {
        noteId: values.selected,
        payload,
      },
      refetchQueries: [
        {
          query: SEARCH_NOTE,
          variables: {
            page: 1,
            size: NOTE_STORE_LIST_PAGE_SIZE,
            type: TYPES[0].value,
          },
        },
        'NoteSearch',
      ],
    });

    handleReset();
  }, [
    addNote,
    editNote,
    files,
    handleReset,
    noteDetail?.ghiChuHinhAnh,
    noteDetail?.ghiChuTag,
    tagList,
    values.images,
    values.isAdding,
    values.selected,
    values.tags,
    values.title,
  ]);

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
      filterValues.tag && { maTag: filterValues.tag },
      filterValues.class && { maSH: filterValues.class },
      filterValues.type && { type: filterValues.type }
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
    filterValues.type,
    page,
  ]);

  const [searchNote, { loading: searchNoteLoading, data: searchNoteData }] =
    useNoteSearchLazyQuery();

  useEffect(() => {
    searchNote({ variables: args, fetchPolicy: 'no-cache' });
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
      fetchPolicy: 'no-cache',
    });
  }, [args, searchNote]);

  const handleResetFilter = useCallback(() => {
    setFilterValues({
      type: TYPES[0].value,
      title: '',
      student: '',
      tag: '',
      class: '',
      start: null,
      end: null,
    });
    searchNote({
      variables: {
        page: 1,
        size: NOTE_STORE_LIST_PAGE_SIZE,
        type: TYPES[0].value,
      },
    });
  }, [searchNote]);

  const { loading: homeroomListLoading, data: homeroomListData } =
    useHomeroomListQuery();
  const homeroomList = useMemo(
    () => homeroomListData?.homeroomList.lopChuNhiem || [],
    [homeroomListData?.homeroomList.lopChuNhiem]
  );

  const [openFilterBox, setOpenFilterBox] = useState(false);

  const handleRemoveImage = useCallback((imageId: string) => {
    setValues((v) => ({
      ...v,
      images: v.images.filter((image) => image.id !== imageId),
    }));
  }, []);

  return (
    <>
      <StyledContainer>
        <Header isAuthenticated />
        <StyledContentWrapper>
          <StyledStickyBox sx={{ paddingBottom: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <StyledTitle variant="h1">Ghi chú của tôi</StyledTitle>
              <Box>
                <StyledIconButton
                  size="large"
                  aria-label="add note"
                  color="primary"
                  onClick={() => {
                    handleReset();
                    setValues((v) => ({ ...v, isAdding: true }));
                  }}
                >
                  <AddBoxIcon fontSize="inherit" />
                </StyledIconButton>
                {openFilterBox ? (
                  <StyledIconButton
                    size="large"
                    aria-label="close filter note"
                    color="primary"
                    onClick={() => setOpenFilterBox(false)}
                  >
                    <FilterAltOffIcon fontSize="inherit" />
                  </StyledIconButton>
                ) : (
                  <StyledIconButton
                    size="large"
                    aria-label="open filter note"
                    color="primary"
                    onClick={() => setOpenFilterBox(true)}
                  >
                    <FilterAltIcon fontSize="inherit" />
                  </StyledIconButton>
                )}
              </Box>
            </Box>
            <StyledBreadCrumbs aria-label="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <Typography color="text.primary">Ghi chú của tôi</Typography>
            </StyledBreadCrumbs>
          </StyledStickyBox>
          {openFilterBox && (
            <StyledCard>
              <Box mb={2}>
                <StyledFormControl>
                  <InputLabel id="type-select-label">Loại</InputLabel>
                  <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={filterValues.type}
                    label="Loại"
                    onChange={handleSelectType}
                  >
                    {TYPES.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </Box>
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
                  value={filterValues.title}
                />
                {filterValues.type === TYPES[2].value && (
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
                    value={filterValues.student}
                  />
                )}
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
                <AsyncDataRenderer
                  loading={homeroomListLoading}
                  data={homeroomListData}
                >
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
                      value={filterValues.class}
                    >
                      {homeroomList.map((item) => (
                        <MenuItem value={item.maSH}>{item.maSH}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </AsyncDataRenderer>
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
                      value={filterValues.tag}
                    >
                      {tagList.map((item) => (
                        <MenuItem value={item.maTag}>{item.tenTag}</MenuItem>
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
              <Button
                sx={{ marginTop: '1rem', marginLeft: '1rem' }}
                variant="outlined"
                color="primary"
                onClick={handleResetFilter}
              >
                Reset
              </Button>
            </StyledCard>
          )}
          <AsyncDataRenderer loading={searchNoteLoading} data={noteList}>
            <StyledGridContainer
              sx={{ overflowY: 'auto', paddingBottom: '1rem' }}
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
                      maSV: item.maSV || '',
                      tenSV: item.sinhVien?.tenSV || '',
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
              page={page}
              count={lastPage}
              color="primary"
              onChange={handleChangePage}
            />
          </AsyncDataRenderer>
        </StyledContentWrapper>
      </StyledContainer>
      <StyledDialog
        open={values.selected >= 0 || values.isAdding}
        onClose={() => {
          setValues({ ...values, selected: -1, isAdding: false });
        }}
      >
        <NoteEditor
          isNoteStore
          maSV={values.maSV}
          tenSV={values.tenSV}
          filePondRef={filePondRef}
          tagList={tagList}
          imageList={values.images}
          editorRef={editorRef}
          initialValue={values.isAdding ? '' : (noteDetail?.noiDung as string)}
          setFiles={setFiles}
          onClickSave={handleClickSave}
          title={values.title}
          tags={values.tags}
          handleChangeValue={handleChangeValue}
          handleSelectTags={handleSelectTags}
          handleReset={handleReset}
          handleRemoveImage={handleRemoveImage}
          isAdding={values.isAdding}
        />
      </StyledDialog>
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
        open={deleteNoteLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default NoteStore;
