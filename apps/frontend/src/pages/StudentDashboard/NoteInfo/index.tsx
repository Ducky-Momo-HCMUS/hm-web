import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Editor as TinyMCEEditor } from 'tinymce';
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Link,
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
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

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
    () => studentNoteListData?.studentNoteList?.danhSachGhiChu || [],
    [studentNoteListData?.studentNoteList?.danhSachGhiChu]
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
      });
    }
  }, [getNoteDetail, values.selected]);

  const editorRef = useRef<TinyMCEEditor | null>(null);

  useEffect(() => {
    if (noteDetail) {
      setValues((v) => ({
        ...v,
        title: noteDetail.tieuDe,
      }));
      if (editorRef.current) {
        editorRef.current.setContent(noteDetail.noiDung);
      }
      setValues((v) => ({ ...v, tags: noteDetail.tag as string[] }));
      setFiles(mapImageUrlToFile(noteDetail.hinhAnh.map((item) => item.url)));
    }
  }, [noteDetail]);

  const [addNote, { loading: addNoteLoading }] = useNoteAddMutation();
  const [editNote, { loading: editNoteLoading }] = useNoteEditMutation();

  const handleClickSave = useCallback(async () => {
    if (values.isAdding) {
      const payload = {
        tieuDe: values.title,
        tag: values.tags,
        noiDung: editorRef.current?.getContent() || '',
        maSV: id,
        url: ['https://picsum.photos/200'],
      } as NoteAddInput;

      await addNote({
        variables: {
          payload,
        },
      });

      return;
    }

    const payload = {
      tieuDe: values.title,
      noiDung: editorRef.current?.getContent() || '',
      maTag: [1, 2],
      url: ['https://picsum.photos/200'],
    } as NoteEditInput;

    await editNote({
      variables: {
        noteId: values.selected,
        payload,
      },
    });
  }, [
    addNote,
    editNote,
    id,
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
    });
  }, [deleteNote, values]);

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
        <Link underline="hover" color="inherit" href="/">
          Trang chủ
        </Link>
        <Typography color="text.primary">
          {id} - Nguyễn Ngọc Thanh Tâm
        </Typography>
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
                        onClickDelete={() => handleClickDelete(index)}
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
        <AsyncDataRenderer loading={noteDetailLoading} data={noteDetailData}>
          <Grid item xs={12}>
            <Item>
              <NoteEditor
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
          boldText={studentNoteList[values.deleteIndex].tieuDe}
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
