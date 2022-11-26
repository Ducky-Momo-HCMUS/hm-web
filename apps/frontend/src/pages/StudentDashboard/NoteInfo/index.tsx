import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { FilePond, registerPlugin } from 'react-filepond';
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  TablePagination,
  Typography,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import {
  Item,
  StyledBreadCrumbs,
  StyledDivider,
  StyledTitle,
} from '../../../components/styles';
import {
  API_KEY,
  MAX_FILES,
  NOTES_LIST,
  ROWS_PER_PAGE,
} from '../../../constants';
import { mapImageUrlToFile } from '../../../utils';
import { File } from '../../../types';

import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';
import NoteItem from './NoteItem';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function NoteInfo() {
  const { id } = useParams();

  const [selected, setSelected] = useState<number>(-1);
  const initialValue = useMemo(
    () => (selected >= 0 ? NOTES_LIST[selected].content : ''),
    [selected]
  );
  const [files, setFiles] = useState<File[]>();
  useEffect(() => {
    if (selected >= 0) {
      setFiles(mapImageUrlToFile(NOTES_LIST[selected].images));
    }
  }, [selected]);

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
                  selected={selected}
                  data={item}
                  onClick={() => setSelected(index)}
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
            <Editor
              apiKey={API_KEY}
              onInit={(evt, editor) => {
                editorRef.current = editor;
              }}
              initialValue={initialValue}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'code',
                ],
                toolbar:
                  'undo redo | blocks | formatselect | ' +
                  'bold italic backcolor link | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
              }}
            />
            <FilePond
              allowMultiple
              files={files as any}
              onupdatefiles={setFiles as any}
              server={{
                load: (source, load) => {
                  const myRequest = new Request(source);
                  fetch(myRequest).then(function (response) {
                    response.blob().then(function (myBlob) {
                      load(myBlob);
                    });
                  });
                },
              }}
              maxFiles={MAX_FILES}
              name="files"
              labelIdle="Kéo thả hoặc đính kèm ảnh tại đây"
            />
            <Button
              sx={{ width: '100%' }}
              variant="contained"
              onClick={handleClickSave}
            >
              Lưu ghi chú
            </Button>
          </Item>
        </Grid>
      </StyledGridContainer>
    </>
  );
}

export default NoteInfo;
