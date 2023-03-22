import { gql } from '@apollo/client';

export const GET_HOMEROOM_NOT_ENROLLED_LIST_BY_TERM = gql`
  query HomeroomNotEnrolledListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomNotEnrolledListByTerm(
      homeroomId: $homeroomId
      term: $term
      page: $page
      size: $size
    ) {
      data {
        sinhVien {
          maSV
          tenSV
        }
      }
      total
    }
  }
`;
