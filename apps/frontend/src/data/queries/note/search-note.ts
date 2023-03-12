import { gql } from '@apollo/client';

export const SEARCH_NOTE = gql`
  query NoteSearch(
    $tieuDe: String
    $maSV: String
    $tenSV: String
    $start: Date
    $end: Date
    $maSH: String
    $maTag: Int
    $page: Int!
    $size: Int!
  ) {
    noteSearch(
      tieuDe: $tieuDe
      maSV: $maSV
      tenSV: $tenSV
      start: $start
      end: $end
      maSH: $maSH
      maTag: $maTag
      page: $page
      size: $size
    ) {
      total
      lastPage
      data {
        maGC
        tieuDe
        noiDung
        thoiGianTao
        thoiGianSua
        maSV
      }
    }
  }
`;
