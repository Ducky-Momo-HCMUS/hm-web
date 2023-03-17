import { gql } from '@apollo/client';

export const GET_COLUMN_HEADER_LIST = gql`
  query ColumnHeaderList($fileType: FileType!) {
    columnHeaderList(fileType: $fileType) {
      key
      value
      index
    }
  }
`;
