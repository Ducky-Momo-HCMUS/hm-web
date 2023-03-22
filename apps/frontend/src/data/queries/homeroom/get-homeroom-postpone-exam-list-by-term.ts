import { gql } from '@apollo/client';

export const GET_HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM = gql`
  query HomeroomPostponeExamListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomPostponeExamListByTerm(
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
        monHoc {
          tenMH
        }
      }
      total
    }
  }
`;
