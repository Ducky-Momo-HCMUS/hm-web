import { gql } from '@apollo/client';

export const GET_STUDENT_NOTE_LIST = gql`
  query StudentNoteList($studentId: String!) {
    studentNoteList(studentId: $studentId) {
      danhSachGhiChu {
        maGC
        tag
        tieuDe
        noiDung
        thoiGianTao
        thoiGianSua
      }
    }
  }
`;
