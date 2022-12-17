import { gql } from '@apollo/client';

export const ADD_PHOTO = gql`
  mutation AddPhoto($file: UploadFile!, $input: AddPhotoInput!) {
    addPhoto(file: $file, input: $input) {
      code
      success
      message
      documentUniqueId
    }
  }
`;
