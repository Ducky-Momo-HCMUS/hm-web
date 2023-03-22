import { gql } from '@apollo/client';

export const GET_HOMEROOM_EXAM_ABSENT_LIST_BY_TERM = gql`
  query HomeroomExamAbsentListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomExamAbsentListByTerm(
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
