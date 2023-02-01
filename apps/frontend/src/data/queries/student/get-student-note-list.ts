import { gql } from '@apollo/client';

export const GET_STUDENT_NOTE_LIST = gql`
  query StudentNoteList($studentId: String!) {
    studentNoteList(studentId: $studentId) {
      maGC
      ghiChuTag {
        tag {
          maTag
          tenTag
        }
      }
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
    }
  }
`;
