import { gql } from '@apollo/client';

export const EDIT_NOTE = gql`
  mutation NoteEdit($noteId: Int!, $payload: NoteEditInput!) {
    noteEdit(noteId: $noteId, payload: $payload) {
      tieuDe
      noiDung
    }
  }
`;
