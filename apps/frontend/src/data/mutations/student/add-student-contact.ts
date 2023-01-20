import { gql } from '@apollo/client';

export const ADD_STUDENT_CONTACT = gql`
  mutation StudentAddContact(
    $studentId: String!
    $payload: StudentAddContactInput!
  ) {
    studentAddContact(studentId: $studentId, payload: $payload) {
      maLHSV
      maSV
      mxh
      url
    }
  }
`;
