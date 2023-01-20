import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation NoteAdd($payload: NoteAddInput!) {
    noteAdd(payload: $payload) {
      status
    }
  }
`;
