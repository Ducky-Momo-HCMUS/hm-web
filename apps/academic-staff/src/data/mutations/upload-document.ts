import { gql } from '@apollo/client';

export const UPLOAD_DOCUMENT = gql`
  mutation UploadDocument(
    $file: UploadFile!
    $input: UploadDocumentInput!
    $config: UploadFileConfig!
  ) {
    uploadDocument(file: $file, input: $input, config: $config) {
      status
    }
  }
`;
