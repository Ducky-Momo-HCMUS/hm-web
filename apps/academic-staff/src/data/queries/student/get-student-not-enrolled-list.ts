import { gql } from '@apollo/client';

export const GET_STUDENT_NOT_ENROLLED_LIST = gql`
  query StudentNotEnrolledList($termId: Int!, $page: Int!, $size: Int!) {
    studentNotEnrolledList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maSH
      }
    }
  }
`;
