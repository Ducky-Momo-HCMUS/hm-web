import { gql } from '@apollo/client';

export const GET_STUDENT_ENROLLED_LIST = gql`
  query StudentEnrolledList($termId: Int!, $page: Int!, $size: Int!) {
    studentEnrolledList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maMH
        tenMH
        tenLopHP
      }
    }
  }
`;
