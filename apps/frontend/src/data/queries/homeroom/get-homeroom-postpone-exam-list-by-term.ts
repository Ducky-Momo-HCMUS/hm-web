import { gql } from '@apollo/client';

export const GET_HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM = gql`
  query HomeroomPostponeExamListByTerm($homeroomId: String!, $term: Int!) {
    homeroomPostponeExamListByTerm(homeroomId: $homeroomId, term: $term) {
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
