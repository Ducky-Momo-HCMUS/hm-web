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

import { API_KEY, NOTE_EDITOR_CONFIG, TAGS_OPTIONS } from '../../../mocks';
import { File } from '../../../types';
import { StyledTextField } from '../../styles';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface NoteEditorProps {
  editorRef: any;
  initialValue: string;
  files: File[] | undefined;
  setFiles: React.Dispatch<SetStateAction<File[] | undefined>>;
  onClickSave: any;
  title: string;
  tags: string[];
  handleChangeValue: any;
  handleSelectTags: any;
}

function NoteEditor({
  editorRef,
  initialValue,
  files,
  setFiles,
  onClickSave,
  title,
  tags,
  handleChangeValue,
  handleSelectTags,
}: NoteEditorProps) {
  return (
    <>
      <Box sx={{ padding: '1rem' }}>
        <StyledTextField
          sx={{ width: '100%' }}
          label="Tiêu đề"
          name="title"
          variant="filled"
          placeholder="Nhập tiêu đề..."
          value={title}
          onChange={handleChangeValue('title')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl sx={{ width: '100%', margin: '1rem 0' }} variant="filled">
          <InputLabel shrink id="tag-select-label">
            Tag
          </InputLabel>
          <Select
            sx={{
              '& .MuiSelect-select .notranslate::after':
                tags.length === 0
                  ? {
                      content: `"Chọn tag..."`,
                      opacity: 0.42,
                    }
                  : {},
            }}
            multiple
            renderValue={(selected) => selected.join(', ')}
            labelId="tag-select-label"
            id="tag-select"
            value={tags}
            label="Tag"
            onChange={handleSelectTags}
          >
            {TAGS_OPTIONS.map((item) => (
              <MenuItem value={item}>
                <Checkbox checked={tags.indexOf(item) > -1} />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Editor
          apiKey={API_KEY}
          onInit={(evt, editor: any) => {
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
      </Box>

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