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
  CircularProgress,
  Grid,
  List,
  SelectChangeEvent,
  TablePagination,
  Typography,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SortIcon from '@mui/icons-material/Sort';

import NoteEditor from '../../../components/Note/NoteEditor';
import {
  Item,
  StyledBreadCrumbs,
  StyledDivider,
  StyledTitle,
} from '../../../components/styles';
import { ROWS_PER_PAGE } from '../../../mocks';
import { mapImageUrlToFile } from '../../../utils';
import { File } from '../../../types';
import DeleteNoteDialog from '../../../components/DeleteDialog';
import {
  NoteAddInput,
  NoteEditInput,
  useNoteAddMutation,
  useNoteDeleteMutation,
  useNoteDetailLazyQuery,
  useStudentNoteListQuery,
  useNoteEditMutation,
  useTagListQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { GET_STUDENT_NOTE_LIST } from '../../../data/queries/student/get-student-note-list';

import NoteItem from './NoteItem';
import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';

interface State {
  selected: number;
  page: number;
  title: string;
  tags: string[];
  deleteIndex: number;
  isAdding: boolean;
}

function NoteInfo() {
  const { id = '' } = useParams();

  const { loading: studentNoteListLoading, data: studentNoteListData } =
    useStudentNoteListQuery({
      variables: {
        studentId: id,
      },
    });

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
      }));
      if (editorRef.current) {
        editorRef.current.setContent(noteDetail.noiDung);
      }
      setFiles(
        mapImageUrlToFile(noteDetail.ghiChuHinhAnh.map((item) => item.url))
      );
    }
  }, [noteDetail]);

  const [addNote, { loading: addNoteLoading }] = useNoteAddMutation();
  const [editNote, { loading: editNoteLoading }] = useNoteEditMutation();

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  const handleClickSave = useCallback(async () => {
    if (values.isAdding) {
      const payload = {
        tieuDe: values.title,
        maTag: values.tags.map(
          (tenTag) => tagList.find((tag) => tag.tenTag === tenTag)?.maTag
        ),
        noiDung: editorRef.current?.getContent() || '',
        maSV: id,
        url: ['https://picsum.photos/200'],
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
  }, [
    addNote,
    editNote,
    id,
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
  }, [deleteNote, id, values]);

  const handleReset = useCallback(() => {
    setValues((v) => ({ ...v, selected: -1, title: '', tags: [] }));
    setFiles([]);
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
  }, [editorRef]);

  return (
    <>
      <StyledTitle variant="h1">Ghi chú sinh viên</StyledTitle>
      <StyledBreadCrumbs aria-label="breadcrumb">
        <Link to="/">Trang chủ</Link>
        <Typography color="text.primary">{id}</Typography>
        <Typography color="text.primary">Ghi chú sinh viên</Typography>
      </StyledBreadCrumbs>
      <StyledGridContainer container spacing={3} columns={20}>
        <Grid item xs={8}>
          <Item>
            <Box sx={{ padding: '1rem 1rem 0 1rem' }}>
              <List>
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
                    <StyledIconButton
                      size="large"
                      aria-label="sort note"
                      color="inherit"
                    >
                      <SortIcon fontSize="inherit" />
                    </StyledIconButton>
                  </Box>
                </StyledHeader>
                <StyledDivider />
                <AsyncDataRenderer
                  loading={studentNoteListLoading}
                  data={studentNoteListData}
                >
                  {studentNoteList
                    .slice(
                      page * ROWS_PER_PAGE,
                      page * ROWS_PER_PAGE + ROWS_PER_PAGE
                    )
                    .map((item, index) => (
                      <NoteItem
                        selected={values.selected}
                        data={item}
                        onClick={() => handleSelectValue('selected', item.maGC)}
                        onClickDelete={() => handleClickDelete(item.maGC)}
                      />
                    ))}
                </AsyncDataRenderer>
              </List>
              <TablePagination
                rowsPerPageOptions={[ROWS_PER_PAGE]}
                component="div"
                count={studentNoteList.length}
                rowsPerPage={ROWS_PER_PAGE}
                page={page}
                onPageChange={handleChangePage}
              />
            </Box>
          </Item>
        </Grid>
        <AsyncDataRenderer
          loading={noteDetailLoading || tagListLoading}
          data={noteDetailData && tagListData}
        >
          <Grid item xs={12}>
            <Item>
              <NoteEditor
                tagList={tagList}
                editorRef={editorRef}
                initialValue={noteDetail?.noiDung || ''}
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
