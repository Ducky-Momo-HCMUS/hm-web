import { gql } from '@apollo/client';

export const GET_HOMEROOM_EXAM_ABSENT_LIST_BY_TERM = gql`
  query HomeroomExamAbsentListByTerm($homeroomId: String!, $term: Int!) {
    homeroomExamAbsentListByTerm(homeroomId: $homeroomId, term: $term) {
      data {
        sinhVien {
          maSV
          tenSV
        }
        monHoc {
          tenMH
        }
      }
    }
  }
`;
