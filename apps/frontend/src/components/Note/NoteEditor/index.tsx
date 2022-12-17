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
import { StyledTextField } from '../../styles';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface NoteEditorProps {
  editorRef: any;
  initialValue: string;
  files: any;
  setFiles: React.Dispatch<SetStateAction<any>>;
  onClickSave: any;
  title: string;
  tags: string[];
  handleChangeValue: any;
  handleSelectTags: any;
}

// const baseUrl = 'http://localhost:3001/v1/actors/files';

// export const makeUploadRequest = ({
//   file,
//   fieldName,
//   progressCallback,
//   successCallback,
//   errorCallback,
// }: any) => {
//   const url = `${baseUrl}/upload`;

//   const formData = new FormData();
//   formData.append(fieldName, file);

//   const request = new XMLHttpRequest();
//   request.open('POST', url);

//   request.upload.onprogress = (e) => {
//     progressCallback(e.lengthComputable, e.loaded, e.total);
//   };

//   request.onload = () => {
//     if (request.status >= 200 && request.status < 300) {
//       const { delete_token: deleteToken } = JSON.parse(request.response);

//       successCallback(deleteToken);
//     } else {
//       errorCallback(request.responseText);
//     }
//   };

//   request.send(formData);

//   return () => {
//     request.abort();
//   };
// };

// export const makeDeleteRequest = ({
//   token,
//   successCallback,
//   errorCallback,
// }: any) => {
//   const url = `${baseUrl}/delete_by_token`;

//   const request = new XMLHttpRequest();
//   request.open('POST', url);

//   request.setRequestHeader('Content-Type', 'application/json');

//   request.onload = () => {
//     if (request.status >= 200 && request.status < 300) {
//       successCallback();
//     } else {
//       errorCallback(request.responseText);
//     }
//   };
//   request.send(JSON.stringify({ token }));
// };

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
  // const revert = (token: any, successCallback: any, errorCallback: any) => {
  //   makeDeleteRequest({
  //     token,
  //     successCallback,
  //     errorCallback,
  //   });
  // };

  // const process = (
  //   fieldName: any,
  //   file: any,
  //   metadata: any,
  //   load: any,
  //   error: any,
  //   progress: any,
  //   abort: () => void
  // ) => {
  //   const abortRequest = makeUploadRequest({
  //     file,
  //     fieldName,
  //     successCallback: load,
  //     errorCallback: error,
  //     progressCallback: progress,
  //   });

  //   return {
  //     abort: () => {
  //       abortRequest();
  //       abort();
  //     },
  //   };
  // };
  return (
    <Box component="form">
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
            {TAGS_OPTIONS.map((item, tagOptionIndex) => (
              <MenuItem key={tagOptionIndex} value={item}>
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
          // server={{ process, revert }}
          allowMultiple
          files={files as any}
          onupdatefiles={setFiles}
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
    </Box>
  );
}

export default NoteEditor;
