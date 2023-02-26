import { gql } from '@apollo/client';

export const GET_HOMEROOM_FINAL_RESULT_LIST_BY_TERM = gql`
  query HomeroomFinalResultListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomFinalResultListByTerm(
      homeroomId: $homeroomId
      term: $term
      page: $page
      size: $size
    ) {
      total
      formatted {
        maSV
        tenSV
        dtb
        xepLoai
      }
    }
  }
`;
