/* eslint-disable @typescript-eslint/no-shadow */
import React, { SetStateAction, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  DialogActions,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { Image } from 'mui-image';
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
  filePondRef: any;
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
  handleRemoveImage: any;
  isAdding: boolean;
  isNoteStore?: boolean;
  maSV?: String;
  tenSV?: String;
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

function NoteEditor({
  filePondRef,
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
  handleRemoveImage,
  isAdding,
  isNoteStore = false,
  maSV = '',
  tenSV = '',
}: NoteEditorProps) {
  const [url, setUrl] = useState('');
  const [imageId, setImageId] = useState('');

  const handleShowImage = useCallback((imageUrl: string, imageId: string) => {
    setUrl(imageUrl);
    setImageId(imageId);
  }, []);

  return (
    <>
      <Box sx={{ padding: '1rem' }}>
        {isNoteStore && (
          <Box mb={2}>
            {maSV && <Chip label={`${maSV} - ${tenSV}`} color="primary" />}
          </Box>
        )}
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
          <Box p={1}>
            <ImageList
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'nowrap',
              }}
              rowHeight={100}
            >
              {imageList.map((item) => (
                <ImageListItem
                  key={item.id}
                  onClick={() => handleShowImage(item.url, item.id)}
                >
                  <img
                    style={{
                      objectFit: 'contain',
                      cursor: 'pointer',
                      maxWidth: '100%',
                      display: 'block',
                    }}
                    src={`${item.url}`}
                    srcSet={`${item.url}`}
                    alt={item.id}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
        <FilePond
          ref={filePondRef}
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
          {url && (
            <Image
              sx={{ display: 'block', maxWidth: '100%' }}
              src={url}
              srcSet={url}
              duration={0}
            />
          )}
        </Box>
        <DialogActions>
          <Button onClick={() => setUrl('')}>Đóng</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              handleRemoveImage(imageId);
              setUrl('');
            }}
          >
            Xoá ảnh
          </Button>
        </DialogActions>
      </StyledDialog>
      <Box sx={{ padding: '1rem' }} display="flex" justifyContent="flex-end">
        {isAdding ? (
          <Button onClick={handleReset}>Hủy</Button>
        ) : (
          <Button onClick={handleReset}>Đóng</Button>
        )}
        <Button
          sx={{ marginLeft: '0.5rem' }}
          variant="contained"
          onClick={onClickSave}
        >
          Lưu
        </Button>
      </Box>
    </>
  );
}

export default NoteEditor;
