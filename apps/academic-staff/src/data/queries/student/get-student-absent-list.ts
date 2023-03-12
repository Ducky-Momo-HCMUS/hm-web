import { gql } from '@apollo/client';

export const GET_STUDENT_ABSENT_LIST = gql`
  query StudentAbsentList($termId: Int!, $page: Int!, $size: Int!) {
    studentAbsentList(termId: $termId, page: $page, size: $size) {
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
