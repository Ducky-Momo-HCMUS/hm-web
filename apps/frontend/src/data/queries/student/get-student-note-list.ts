import { gql } from '@apollo/client';

export const GET_STUDENT_NOTE_LIST = gql`
  query StudentNoteList(
    $studentId: String!
    $tieuDe: String
    $maTag: Int
    $page: Int!
    $size: Int!
  ) {
    studentNoteList(
      studentId: $studentId
      tieuDe: $tieuDe
      maTag: $maTag
      page: $page
      size: $size
    ) {
      total
      data {
        maGC
        ghiChuTag {
          maTag
        }
        tieuDe
        noiDung
        thoiGianTao
        thoiGianSua
      }
    }
  }
`;
