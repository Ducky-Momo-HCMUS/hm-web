import { gql } from '@apollo/client';

export const GET_HOMEROOM_POSTPONE_EXAM_LIST = gql`
  query HomeroomPostponeExamList($homeroomId: String!) {
    homeroomPostponeExamList(homeroomId: $homeroomId) {
      hoanThi {
        maSV
        tenSV
        tenMH
        tenLopHP
      }
    }
  }
`;
