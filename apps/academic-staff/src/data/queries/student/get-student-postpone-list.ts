import { gql } from '@apollo/client';

export const GET_STUDENT_POSTPONE_LIST = gql`
  query StudentPostponeList($termId: Int!, $page: Int!, $size: Int!) {
    studentPostponeList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maMH
        tenMH
      }
    }
  }
`;
