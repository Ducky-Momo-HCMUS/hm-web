import { gql } from '@apollo/client';

export const GET_HOMEROOM_WATCH_LIST = gql`
  query HomeroomWatchList(
    $homeroomId: String!
    $page: Int!
    $size: Int!
    $sortBy: String
    $sortOrder: String
  ) {
    homeroomWatchList(
      homeroomId: $homeroomId
      page: $page
      size: $size
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      total
      data {
        sinhVien {
          maSV
          tenSV
          tenCN
          tinhTrang
          gpa4
          gpa10
          sdt
          emailSV
          lienHeSV {
            mxh
            url
          }
        }
      }
    }
  }
`;
