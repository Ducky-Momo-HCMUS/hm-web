import { gql } from '@apollo/client';

export const UPLOAD_DOCUMENT = gql`
  mutation UploadDocument($file: UploadFile!, $input: UploadDocumentInput!) {
    uploadDocument(file: $file, input: $input) {
      status
    }
  }
`;
