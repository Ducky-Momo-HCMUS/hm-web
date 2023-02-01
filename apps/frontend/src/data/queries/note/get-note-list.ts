import { gql } from '@apollo/client';

export const GET_NOTE_LIST = gql`
  query NoteList {
    noteList {
      maGC
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      maSV
    }
  }
`;
