import React, { SetStateAction } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import { API_KEY, NOTE_EDITOR_CONFIG, TAGS_OPTIONS } from '../../constants';
import { File } from '../../types';
import { StyledTextField } from '../styles';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface NoteEditorProps {
  editorRef: any;
  initialValue: string;
  files: File[] | undefined;
  setFiles: React.Dispatch<SetStateAction<File[] | undefined>>;
  onClickSave: any;
}

function NoteEditor({
  editorRef,
  initialValue,
  files,
  setFiles,
  onClickSave,
}: NoteEditorProps) {
  return (
    <>
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
      <Editor
        apiKey={API_KEY}
        onInit={(evt, editor: any) => {
          // eslint-disable-next-line no-param-reassign
          editorRef.current = editor;
        }}
        initialValue={initialValue}
        init={NOTE_EDITOR_CONFIG}
      />
      <FilePond
        allowMultiple
        files={files as any}
        onupdatefiles={setFiles as any}
        server={{
          load: (source, load) => {
            const myRequest = new Request(source);
            fetch(myRequest).then((response) => {
              response.blob().then((myBlob) => {
                load(myBlob);
              });
            });
          },
        }}
        name="files"
        labelIdle="Kéo thả hoặc đính kèm ảnh tại đây"
      />
      <Box>
        <Button sx={{ width: '50%', borderRadius: 0 }} variant="outlined">
          Hủy ghi chú
        </Button>
        <Button
          sx={{ width: '50%', borderRadius: 0 }}
          variant="contained"
          onClick={onClickSave}
        >
          Lưu ghi chú
        </Button>
      </Box>
    </>
  );
}

export default NoteEditor;
