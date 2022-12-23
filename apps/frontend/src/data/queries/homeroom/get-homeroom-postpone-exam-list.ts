import { gql } from '@apollo/client';

export const GET_HOMEROOM_POSTPONE_EXAM_LIST = gql`
  query HomeroomPostponeExamList($homeroomId: String!, $term: Int!) {
    homeroomPostponeExamList(homeroomId: $homeroomId, term: $term) {
      hoanThi {
        maSV
        tenSV
        tenMH
        tenLopHP
      }
    }
  }
`;
