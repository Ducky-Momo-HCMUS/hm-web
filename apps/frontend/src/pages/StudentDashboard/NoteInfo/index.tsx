/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Editor as TinyMCEEditor } from 'tinymce';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  List,
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination,
  Typography,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';
import { FilePond } from 'react-filepond';

import NoteEditor from '../../../components/Note/NoteEditor';
import {
  Item,
  StyledBreadCrumbs,
  StyledDivider,
  StyledStickyBox,
  StyledTitle,
  StyledTextField,
} from '../../../components/styles';
import { ROWS_PER_PAGE } from '../../../mocks';
import DeleteNoteDialog from '../../../components/DeleteDialog';
import {
  NoteAddInput,
  NoteEditInput,
  useNoteAddMutation,
  useNoteDeleteMutation,
  useNoteDetailLazyQuery,
  useNoteEditMutation,
  useTagListQuery,
  NoteImage,
  useStudentNoteListLazyQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { GET_STUDENT_NOTE_LIST } from '../../../data/queries/student/get-student-note-list';
import { STUDENT_NOTE_LIST_PAGE_SIZE } from '../../../constants';

import NoteItem from './NoteItem';
import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';

interface State {
  selected: number;
  images: NoteImage[];
  page: number;
  title: string;
  tags: string[];
  deleteIndex: number;
  isAdding: boolean;
}

interface FilterState {
  title: string;
  tag: string;
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

function NoteInfo() {
  const { id = '' } = useParams();

  const [
    getStudentNoteList,
    { loading: studentNoteListLoading, data: studentNoteListData },
  ] = useStudentNoteListLazyQuery();

  const studentNoteList = useMemo(
    () => studentNoteListData?.studentNoteList || [],
    [studentNoteListData?.studentNoteList]
  );

  const [getNoteDetail, { loading: noteDetailLoading, data: noteDetailData }] =
    useNoteDetailLazyQuery();

  const noteDetail = useMemo(
    () => noteDetailData?.noteDetail,
    [noteDetailData?.noteDetail]
  );

  const [values, setValues] = useState<State>({
    selected: -1,
    page: 0,
    title: '',
    tags: [],
    deleteIndex: -1,
    isAdding: true,
    images: [],
  });

  const [filterValues, setFilterValues] = useState<FilterState>({
    title: '',
    tag: '',
  });

  const [files, setFiles] = useState<File[]>();

  useEffect(() => {
    if (values.selected >= 0) {
      getNoteDetail({
        variables: {
          noteId: values.selected,
        },
        fetchPolicy: 'no-cache',
      });
    }
  }, [getNoteDetail, values.selected]);

  const editorRef = useRef<TinyMCEEditor | null>(null);

  useEffect(() => {
    if (noteDetail) {
      setValues((v) => ({
        ...v,
        title: noteDetail.tieuDe,
        tags: noteDetail.ghiChuTag.map((item) => item.tenTag),
        images: noteDetail.ghiChuHinhAnh,
      }));
      if (editorRef.current) {
        editorRef.current.setContent(noteDetail.noiDung);
      }
    }
  }, [noteDetail]);

  const [addNote, { loading: addNoteLoading }] = useNoteAddMutation();
  const [editNote, { loading: editNoteLoading }] = useNoteEditMutation();

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  const filePondRef = useRef<FilePond | null>(null);

  const handleReset = useCallback(() => {
    setValues((v) => ({
      ...v,
      selected: -1,
      title: '',
      tags: [],
      isAdding: true,
      images: [],
    }));
    setFiles([]);
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
    if (filePondRef.current) {
      filePondRef.current.removeFile();
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
        maSV: id,
        images: files,
      } as NoteAddInput;

      await addNote({
        variables: {
          payload,
        },
        refetchQueries: [
          {
            query: GET_STUDENT_NOTE_LIST,
            variables: {
              studentId: id,
            },
          },
          'StudentNoteList',
        ],
      });

      handleReset();

      return;
    }

    const payload = {
      tieuDe: values.title,
      noiDung: editorRef.current?.getContent() || '',
      removeTagIds: noteDetail?.ghiChuTag
        .filter((tag) => !values.tags.find((item) => item === tag.tenTag))
        .map((ghiChuTag) => ghiChuTag.maTag),
      addTagIds: values.tags
        .filter(
          (tag) => !noteDetail?.ghiChuTag.find((item) => item.tenTag === tag)
        )
        .map((ghiChuTag) => tagList.find((item) => item.tenTag === ghiChuTag))
        .map((addTag) => addTag?.maTag),
      images: files,
    } as NoteEditInput;

    await editNote({
      variables: {
        noteId: values.selected,
        payload,
      },
      refetchQueries: [
        {
          query: GET_STUDENT_NOTE_LIST,
          variables: {
            studentId: id,
          },
        },
        'StudentNoteList',
      ],
    });

    handleReset();
  }, [
    addNote,
    editNote,
    files,
    handleReset,
    id,
    noteDetail?.ghiChuTag,
    tagList,
    values.isAdding,
    values.selected,
    values.tags,
    values.title,
  ]);

  const [page, setPage] = useState(0);
  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage);
    },
    [setPage]
  );

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

  const handleSelectValue = useCallback((prop: keyof State, value: any) => {
    setValues((v) => ({ ...v, [prop]: value, isAdding: false }));
  }, []);

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

  const [deleteNote, { loading: deleteNoteLoading }] = useNoteDeleteMutation();

  const handleDeleteNote = useCallback(async () => {
    setValues({ ...values, deleteIndex: -1 });
    await deleteNote({
      variables: {
        noteId: values.deleteIndex,
      },
      refetchQueries: [
        {
          query: GET_STUDENT_NOTE_LIST,
          variables: {
            studentId: id,
          },
        },
        'StudentNoteList',
      ],
    });

    if (values.selected === values.deleteIndex) {
      handleReset();
    }
  }, [deleteNote, handleReset, id, values]);

  const args = useMemo(() => {
    const params = Object.assign(
      {},
      { studentId: id },
      { page: page + 1 },
      { size: STUDENT_NOTE_LIST_PAGE_SIZE },
      filterValues.title && { tieuDe: filterValues.title },
      filterValues.tag && { maTag: filterValues.tag }
    );

    return params;
  }, [filterValues.tag, filterValues.title, id, page]);

  useEffect(() => {
    getStudentNoteList({
      variables: args,
      fetchPolicy: 'no-cache',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStudentNoteList, id, page]);

  const [openFilterBox, setOpenFilterBox] = useState(false);

  const handleFilterNote = useCallback(() => {
    console.log('args', args);
    getStudentNoteList({
      variables: args,
      fetchPolicy: 'no-cache',
    });
  }, [args, getStudentNoteList]);

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

  return (
    <>
      <StyledStickyBox>
        <StyledTitle variant="h1">Ghi chú sinh viên</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Typography color="text.primary">{id}</Typography>
          <Typography color="text.primary">Ghi chú sinh viên</Typography>
        </StyledBreadCrumbs>
      </StyledStickyBox>
      <StyledGridContainer
        sx={{ marginTop: '1.5rem' }}
        container
        spacing={3}
        columns={20}
      >
        <Grid sx={{ paddingTop: '0!important' }} item xs={8}>
          <Item sx={{ height: '100%' }}>
            <Box sx={{ padding: '1rem 1rem 0 1rem' }}>
              <StyledHeader>
                <Typography component="p" variant="h5">
                  Danh sách ghi chú
                </Typography>
                <Box>
                  <StyledIconButton
                    size="large"
                    aria-label="add note"
                    color="inherit"
                    onClick={handleReset}
                  >
                    <AddCircleOutlineOutlinedIcon fontSize="inherit" />
                  </StyledIconButton>
                  {openFilterBox ? (
                    <StyledIconButton
                      size="large"
                      aria-label="close filter note"
                      color="inherit"
                      onClick={() => {
                        setOpenFilterBox(false);
                        setFilterValues({
                          title: '',
                          tag: '',
                        });
                      }}
                    >
                      <FilterAltOffOutlinedIcon fontSize="inherit" />
                    </StyledIconButton>
                  ) : (
                    <StyledIconButton
                      size="large"
                      aria-label="open filter note"
                      color="inherit"
                      onClick={() => setOpenFilterBox(true)}
                    >
                      <FilterAltOutlinedIcon fontSize="inherit" />
                    </StyledIconButton>
                  )}
                </Box>
              </StyledHeader>

              {openFilterBox && (
                <>
                  <Box mb={2}>
                    <StyledTextField
                      sx={{ width: '100%', marginBottom: '1.5rem' }}
                      label="Tiêu đề"
                      name="title"
                      variant="filled"
                      placeholder="Nhập tiêu đề..."
                      value={filterValues.title}
                      onChange={handleChangeFilterValue('title')}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <AsyncDataRenderer
                      loading={tagListLoading}
                      data={tagListData}
                    >
                      <FormControl variant="filled" sx={{ width: '100%' }}>
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
                            <MenuItem value={item.maTag}>
                              {item.tenTag}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </AsyncDataRenderer>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleFilterNote}
                  >
                    Lọc
                  </Button>
                </>
              )}
              {/* <StyledDivider /> */}
              <List>
                <AsyncDataRenderer
                  loading={studentNoteListLoading}
                  data={studentNoteListData}
                >
                  {studentNoteList
                    .slice(
                      page * ROWS_PER_PAGE,
                      page * ROWS_PER_PAGE + ROWS_PER_PAGE
                    )
                    .map((item) => (
                      <NoteItem
                        key={item.maGC}
                        selected={values.selected}
                        data={item}
                        onClick={() => handleSelectValue('selected', item.maGC)}
                        onClickDelete={() => handleClickDelete(item.maGC)}
                        tags={item.ghiChuTag.map(
                          (item) =>
                            tagList.find((tag) => item.maTag === tag.maTag)
                              ?.tenTag || ''
                        )}
                      />
                    ))}
                </AsyncDataRenderer>
                {!!studentNoteList.length && (
                  <TablePagination
                    rowsPerPageOptions={[ROWS_PER_PAGE]}
                    component="div"
                    count={studentNoteList.length}
                    rowsPerPage={ROWS_PER_PAGE}
                    page={page}
                    onPageChange={handleChangePage}
                  />
                )}
              </List>
            </Box>
          </Item>
        </Grid>
        <AsyncDataRenderer
          loading={noteDetailLoading || tagListLoading}
          data={values.selected >= 0 ? noteDetailData : tagListData}
        >
          <Grid item xs={12} sx={{ paddingTop: '0!important' }}>
            <Item>
              <NoteEditor
                filePondRef={filePondRef}
                tagList={tagList}
                imageList={values.images}
                editorRef={editorRef}
                initialValue={noteDetail?.noiDung || ''}
                setFiles={setFiles}
                onClickSave={handleClickSave}
                title={values.title}
                tags={values.tags}
                handleChangeValue={handleChangeValue}
                handleSelectTags={handleSelectTags}
                handleReset={handleReset}
                isAdding={values.isAdding}
              />
            </Item>
          </Grid>
        </AsyncDataRenderer>
      </StyledGridContainer>
      {values.deleteIndex >= 0 && (
        <DeleteNoteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý xoá ghi chú"
          boldText={
            studentNoteList.find((item) => item.maGC === values.deleteIndex)
              ?.tieuDe || ''
          }
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
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

export default NoteInfo;
