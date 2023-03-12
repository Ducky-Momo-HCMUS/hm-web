import { gql } from '@apollo/client';

export const GET_NOTE_DETAIL = gql`
  query NoteDetail($noteId: Int!) {
    noteDetail(noteId: $noteId) {
      maGC
      ghiChuTag {
        maTag
        tenTag
      }
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      ghiChuHinhAnh {
        id
        url
      }
    }
  }
`;
