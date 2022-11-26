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
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  Link,
  List,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination,
  Typography,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import NoteEditor from '../../../components/NoteEditor';
import {
  Item,
  StyledBreadCrumbs,
  StyledDivider,
  StyledTextField,
  StyledTitle,
} from '../../../components/styles';
import { NOTES_LIST, ROWS_PER_PAGE, TAGS_OPTIONS } from '../../../constants';
import { mapImageUrlToFile } from '../../../utils';
import { File } from '../../../types';
import ConfirmDeleteNoteDialog from '../../../components/ConfirmDeleteNoteDialog';

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
      // eslint-disable-next-line no-console
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
        <Link underline="hover" color="inherit" href={`/students/${id}`}>
          {id} - Nguyễn Ngọc Thanh Tâm
        </Link>
        <Typography color="text.primary">Ghi chú sinh viên</Typography>
      </StyledBreadCrumbs>
      <StyledGridContainer container spacing={3} columns={20}>
        <Grid item xs={8}>
          <Item>
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
                    aria-label="filter note"
                    color="inherit"
                  >
                    <FilterAltOutlinedIcon fontSize="inherit" />
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
                  onClick={() => handleSelectValue('selected', index)}
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
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <StyledTextField
                sx={{ width: '70%' }}
                label="Tiêu đề"
                name="title"
                variant="filled"
                placeholder="Nhập tiêu đề..."
                value={values.title}
                onChange={handleChangeValue('title')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl sx={{ width: 180 }} variant="filled">
                <InputLabel id="tag-select-label">Tag</InputLabel>
                <Select
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
            </Box>
            <NoteEditor
              editorRef={editorRef}
              initialValue={initialValue}
              files={files}
              setFiles={setFiles}
              onClickSave={handleClickSave}
            />
          </Item>
        </Grid>
      </StyledGridContainer>
      {values.deleteIndex >= 0 && (
        <ConfirmDeleteNoteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          title={NOTES_LIST[values.deleteIndex].title}
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={() => setValues({ ...values, deleteIndex: -1 })}
        />
      )}
    </>
  );
}

export default NoteInfo;
