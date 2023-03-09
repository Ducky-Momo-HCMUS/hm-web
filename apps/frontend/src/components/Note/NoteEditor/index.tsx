/* eslint-disable @typescript-eslint/no-shadow */
import React, { SetStateAction, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  ImageList,
  ImageListItem,
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

import { API_KEY, NOTE_EDITOR_CONFIG } from '../../../mocks';
import { StyledTextField } from '../../styles';
import { NoteImage, Tag } from '../../../generated-types';

import { StyledDialog } from './styles';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface NoteEditorProps {
  tagList: Tag[];
  imageList: NoteImage[];
  editorRef: any;
  initialValue: string;
  setFiles: React.Dispatch<SetStateAction<File[] | undefined>>;
  onClickSave: any;
  title: string;
  tags: string[];
  handleChangeValue: any;
  handleSelectTags: any;
  handleReset: any;
  isAdding: boolean;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '164px',
  width: '164px',
};

function NoteEditor({
  tagList,
  imageList,
  editorRef,
  initialValue,
  setFiles,
  onClickSave,
  title,
  tags,
  handleChangeValue,
  handleSelectTags,
  handleReset,
  isAdding,
}: NoteEditorProps) {
  const [url, setUrl] = useState('');
  const handleShowImage = useCallback((imageUrl: string) => {
    setUrl(imageUrl);
  }, []);

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
            MenuProps={MenuProps}
          >
            {tagList.map((item) => (
              <MenuItem key={item.maTag} value={item.tenTag}>
                <Checkbox checked={tags.indexOf(item.tenTag) > -1} />
                <ListItemText primary={item.tenTag} />
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
        {!!imageList.length && (
          <ImageList cols={2} rowHeight={200}>
            {imageList.map((item) => (
              <ImageListItem
                key={item.id}
                onClick={() => handleShowImage(item.url)}
              >
                <img
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                  src={`${item.url}`}
                  srcSet={`${item.url}`}
                  alt={item.id}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}

        <FilePond
          allowMultiple
          onupdatefiles={async (files) => {
            if (files.length > 0) {
              setFiles(files.map((image) => image.file) as File[]);
            }
          }}
          onremovefile={() => {
            setFiles([]);
          }}
          name="files"
          labelIdle="Kéo thả hoặc đính kèm ảnh tại đây"
        />
      </Box>
      <StyledDialog open={!!url.length} onClose={() => setUrl('')}>
        <Box>
          <img
            style={{
              display: 'block',
            }}
            src={url}
            srcSet={url}
            alt="selected"
            loading="lazy"
          />
        </Box>
      </StyledDialog>
      <Box>
        {isAdding && (
          <Button
            sx={{ width: '50%', borderRadius: 0 }}
            variant="outlined"
            onClick={handleReset}
          >
            Hủy ghi chú
          </Button>
        )}
        <Button
          sx={{ width: isAdding ? '50%' : '100%', borderRadius: 0 }}
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
