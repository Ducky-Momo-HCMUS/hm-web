import { CloudUpload } from '@mui/icons-material';
import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';

import PhotoCard from '../../components/PhotoCard';
import { usePhoto } from '../../hooks/usePhoto';

import {
  FlexBox,
  Form,
  ImageField,
  ImageFieldLabel,
  PhotoList,
  RightColumn,
  UploadButton,
} from './styles';

interface Target extends EventTarget {
  files: FileList;
}

function UploadFile() {
  const { photos, addPhoto } = usePhoto();
  const [name, setName] = useState('');
  const [file, setFile] = useState<File>();
  const [src, setSrc] = useState('');

  const selectImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const image = (event.target as Target).files[0];
      setFile(image);
      const reader = new FileReader();
      reader.onload = () => setSrc(reader.result as string);
      reader.readAsDataURL(image);
    };
    input.click();
  };

  const uploadPhoto = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!file) return;
    await addPhoto({ file, name });
    setName('');
    setSrc('');
    setFile(undefined);
  };

  return (
    <Container maxWidth="md">
      <Form onSubmit={uploadPhoto}>
        <FlexBox>
          <ImageField src={src} onClick={selectImage} tabIndex={0}>
            {!src && <ImageFieldLabel>Select your image</ImageFieldLabel>}
          </ImageField>
          <RightColumn>
            <TextField
              type="text"
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              variant="outlined"
            />
            <UploadButton
              variant="contained"
              startIcon={<CloudUpload />}
              onClick={() => uploadPhoto()}
            >
              Upload
            </UploadButton>
          </RightColumn>
        </FlexBox>
      </Form>
      <PhotoList>
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </PhotoList>
    </Container>
  );
}

export default UploadFile;
