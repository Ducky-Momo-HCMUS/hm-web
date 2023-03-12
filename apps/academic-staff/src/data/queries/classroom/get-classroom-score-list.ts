import { gql } from '@apollo/client';

export const GET_CLASSROOM_SCORE_LIST = gql`
  query ClassroomScoreList($id: Int!, $termId: Int!, $page: Int!, $size: Int!) {
    classroomScoreList(id: $id, termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        diemCK
        diemCong
        diemGK
        diemKhac
        diemTH
        dtb
      }
    }
  }
`;
