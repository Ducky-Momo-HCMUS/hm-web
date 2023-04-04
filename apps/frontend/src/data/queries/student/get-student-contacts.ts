import { gql } from '@apollo/client';

export const GET_STUDENT_CONTACT_LIST = gql`
  query StudentContactList($studentId: String!, $page: Int!, $size: Int!) {
    studentContactList(studentId: $studentId, page: $page, size: $size) {
      total
      data {
        maLHSV
        mxh
        url
      }
    }
  }
`;
