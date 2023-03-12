import { gql } from '@apollo/client';

export const GET_IMPORT_HISTORY = gql`
  query ImportHistory($fileType: FileType!) {
    importHistory(fileType: $fileType) {
      thoiGian
      taiKhoan {
        giaoVien {
          tenGV
        }
      }
    }
  }
`;
