import { gql } from '@apollo/client';

export const GET_STUDENT_NOTE_LIST = gql`
  query StudentNoteList(
    $studentId: String!
    $tieuDe: String
    $maTag: Int
    $start: Date
    $end: Date
    $page: Int!
    $size: Int!
  ) {
    studentNoteList(
      studentId: $studentId
      tieuDe: $tieuDe
      maTag: $maTag
      start: $start
      end: $end
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
