import { gql } from '@apollo/client';

export const GET_IMPORT_STATUS_HISTORY = gql`
  query ImportStatusHistory($fileType: FileType!) {
    importStatusHistory(fileType: $fileType) {
      thoiGian
      trangThai
      error {
        message
      }
    }
  }
`;
