import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
// Import React FilePond
// import { FilePondFile } from 'filepond';
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
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {
  Item,
  StyledBreadCrumbs,
  StyledDivider,
  StyledTitle,
} from '../../../components/styles';
import NoteItem from './NoteItem';
import { StyledGridContainer, StyledHeader, StyledIconButton } from './styles';
import { NoteItemData } from '../../../types';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const ROWS_PER_PAGE = 10;
const notesList: NoteItemData[] = [
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
  {
    title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
    lastUpdate: '06/11/2022 10:18',
  },
];

const API_KEY = '0yf7s1ygposevnas5ey2boi88rautg60xy9zjtwyecbyz0nx';
const MAX_FILES = 3;

function NoteInfo() {
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [files, setFiles] = useState([
    {
      source: 'https://picsum.photos/200/300',
      options: { type: 'local' },
    },
  ]);
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

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
              {notesList
                .slice(
                  page * ROWS_PER_PAGE,
                  page * ROWS_PER_PAGE + ROWS_PER_PAGE
                )
                .map((item) => (
                  <NoteItem data={item} />
                ))}
            </List>
            <TablePagination
              rowsPerPageOptions={[ROWS_PER_PAGE]}
              component="div"
              count={notesList.length}
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
              initialValue="<p>This is the initial content of the editor.</p>"
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
                  'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
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
            <Button sx={{ width: '100%' }} variant="contained" onClick={log}>
              Lưu ghi chú
            </Button>
          </Item>
        </Grid>
      </StyledGridContainer>
    </>
  );
}

export default NoteInfo;
