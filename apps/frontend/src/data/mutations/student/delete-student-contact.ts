import { gql } from '@apollo/client';

export const DELETE_STUDENT_CONTACT = gql`
  mutation StudentDeleteContact($contactId: Int!) {
    studentDeleteContact(contactId: $contactId) {
      status
    }
  }
`;
