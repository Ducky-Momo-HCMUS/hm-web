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
import { NOTES_LIST, ROWS_PER_PAGE } from '../../../mocks';
import { mapImageUrlToFile } from '../../../utils';
import { File } from '../../../types';
import DeleteNoteDialog from '../../../components/DeleteDialog';

import NoteItem from './NoteItem';
import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';

interface State {
  selected: number;
  page: number;
  title: string;
  tags: string[];
  deleteIndex: number;
}

function NoteInfo() {
  const { id } = useParams();

  const [values, setValues] = useState<State>({
    selected: -1,
    page: 0,
    title: '',
    tags: [],
    deleteIndex: -1,
  });

  const [files, setFiles] = useState<File[]>();

  const initialValue = useMemo(
    () => (values.selected >= 0 ? NOTES_LIST[values.selected].content : ''),
    [values.selected]
  );

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

  useEffect(() => {
    if (values.selected >= 0) {
      setValues((v) => ({ ...v, title: NOTES_LIST[values.selected].title }));
      setValues((v) => ({ ...v, tags: NOTES_LIST[values.selected].tags }));
      setFiles(mapImageUrlToFile(NOTES_LIST[values.selected].images));
    }
  }, [values.selected]);

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
                {NOTES_LIST.slice(
                  page * ROWS_PER_PAGE,
                  page * ROWS_PER_PAGE + ROWS_PER_PAGE
                ).map((item, index) => (
                  <NoteItem
                    index={index}
                    selected={values.selected}
                    data={item}
                    onClick={() =>
                      handleSelectValue('selected', (page + 1) * index)
                    }
                    onClickDelete={() => handleClickDelete(index)}
                  />
                ))}
              </List>
              <TablePagination
                rowsPerPageOptions={[ROWS_PER_PAGE]}
                component="div"
                count={NOTES_LIST.length}
                rowsPerPage={ROWS_PER_PAGE}
                page={page}
                onPageChange={handleChangePage}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
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
          </Item>
        </Grid>
      </StyledGridContainer>
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

export default NoteInfo;
