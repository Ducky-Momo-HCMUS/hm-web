import { gql } from '@apollo/client';

export const GET_HOMEROOM_NOT_ENROLLED_LIST_BY_TERM = gql`
  query HomeroomNotEnrolledListByTerm($homeroomId: String!, $term: Int!) {
    homeroomNotEnrolledListByTerm(homeroomId: $homeroomId, term: $term) {
      data {
        sinhVien {
          maSV
          tenSV
        }
      }
    }
  }
`;
