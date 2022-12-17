import { useReactiveVar } from '@apollo/client';
import { CloudUpload } from '@mui/icons-material';
import { Container, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import useBulkUploadDocumentsMutation from '../../hooks/useBulkUploadDocumentsMutation';
import useDocumentAttacher from '../../hooks/useDocumentAttacher';
import { documentsVar } from '../../utils/graphql/cache';

import { FlexBox, Form, RightColumn, UploadButton } from './styles';

function UploadFile() {
  const [name, setName] = useState('');
  const documents = useReactiveVar(documentsVar);
  const { attachDocuments } = useDocumentAttacher();

  const onUploadCompleted = useCallback((successDocuments: File[]) => {
    console.log('completed', successDocuments);
  }, []);

  const onUploadFailed = useCallback((failedDocuments: File[]) => {
    console.log('failed', failedDocuments);
  }, []);

  const { bulkUploadDocuments } = useBulkUploadDocumentsMutation({
    onUploadCompleted,
    onUploadFailed,
  });

  useEffect(() => {
    console.log('documents', documents);
  }, [documents]);

  return (
    <Container maxWidth="md">
      <Form>
        <FlexBox>
          <input
            type="file"
            name="file"
            multiple
            onChange={(e) => {
              console.log('files', e.target.files);
              attachDocuments(e.target.files as any, e);
            }}
          />
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
              onClick={() => {
                bulkUploadDocuments(documents);
              }}
            >
              Upload
            </UploadButton>
          </RightColumn>
        </FlexBox>
      </Form>
      {/* <PhotoList>
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </PhotoList> */}
    </Container>
  );
}

export default UploadFile;
