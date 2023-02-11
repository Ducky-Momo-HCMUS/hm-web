import { gql } from '@apollo/client';

export const GET_HOMEROOM_FAIL_LIST_BY_TERM = gql`
  query HomeroomFailListByTerm($homeroomId: String!, $term: Int!) {
    homeroomFailListByTerm(homeroomId: $homeroomId, term: $term) {
      total
      data {
        dtb
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
