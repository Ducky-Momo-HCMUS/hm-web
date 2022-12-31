import { gql } from '@apollo/client';

export const GET_NOTE_DETAIL = gql`
  query NoteDetail($noteId: String!) {
    noteDetail(noteId: $noteId) {
      maGC
      tag
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      hinhAnh {
        stt
        url
      }
    }
  }
`;
