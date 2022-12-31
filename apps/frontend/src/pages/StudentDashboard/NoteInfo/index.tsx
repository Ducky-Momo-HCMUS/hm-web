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
  Box,
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
  useNoteDetailLazyQuery,
  useStudentNoteListQuery,
} from '../../../generated-types';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import NoteItem from './NoteItem';
import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';

interface State {
  selected: string;
  page: number;
  title: string;
  tags: string[];
  deleteIndex: number;
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
    selected: '',
    page: 0,
    title: '',
    tags: [],
    deleteIndex: -1,
  });

  const [files, setFiles] = useState<File[]>();

  useEffect(() => {
    if (values.selected.length > 0) {
      getNoteDetail({
        variables: {
          noteId: values.selected,
        },
      });
    }
  }, [values.selected]);

  useEffect(() => {
    if (noteDetail) {
      setValues((v) => ({
        ...v,
        title: noteDetail.tieuDe,
      }));
      setValues((v) => ({ ...v, tags: noteDetail.tag as string[] }));
      setFiles(mapImageUrlToFile(noteDetail.hinhAnh.map((item) => item.url)));
    }
  }, [noteDetail]);

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const handleClickSave = useCallback(() => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }, [editorRef]);

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
    setValues((v) => ({ ...v, [prop]: value }));
  }, []);

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

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
          onClickConfirm={() => setValues({ ...values, deleteIndex: -1 })}
        />
      )}
    </>
  );
}

export default NoteInfo;
