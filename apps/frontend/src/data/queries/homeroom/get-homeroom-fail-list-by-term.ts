import { gql } from '@apollo/client';

export const GET_HOMEROOM_FAIL_LIST_BY_TERM = gql`
  query HomeroomFailListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomFailListByTerm(
      homeroomId: $homeroomId
      term: $term
      page: $page
      size: $size
    ) {
      total
      data {
        dtb
        vang
        sinhVien {
          maSV
          tenSV
        }
        lopHocPhan {
          tenLopHP
          monHoc {
            tenMH
          }
        }
      }
    }
  }
`;
