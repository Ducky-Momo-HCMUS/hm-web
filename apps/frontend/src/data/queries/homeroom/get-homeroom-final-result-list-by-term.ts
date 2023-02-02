import { gql } from '@apollo/client';

export const GET_HOMEROOM_FINAL_RESULT_LIST_BY_TERM = gql`
  query HomeroomFinalResultListByTerm($homeroomId: String!, $term: Int!) {
    homeroomFinalResultListByTerm(homeroomId: $homeroomId, term: $term) {
      danhSachKetQua {
        maSV
        hoTen
        dtb
        xepLoai
      }
    }
  }
`;
