import { gql } from '@apollo/client';

export const EDIT_STUDENT_CONTACT = gql`
  mutation StudentEditContact(
    $contactId: Int!
    $payload: StudentEditContactInput!
  ) {
    studentEditContact(contactId: $contactId, payload: $payload) {
      maLHSV
      maSV
      mxh
      url
    }
  }
`;
