import { gql } from '@apollo/client';

export const DELETE_NOTE = gql`
  mutation NoteDelete($noteId: Int!) {
    noteDelete(noteId: $noteId) {
      status
    }
  }
`;
