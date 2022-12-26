import { gql } from '@apollo/client';

export const GET_HOMEROOM_FAIL_LIST_BY_TERM = gql`
  query HomeroomFailListByTerm($homeroomId: String!, $term: Int!) {
    homeroomFailListByTerm(homeroomId: $homeroomId, term: $term) {
      dsRotMon {
        maSV
        tenSV
        tenMH
        tenLopHP
        dtb
        vang
      }
    }
  }
`;
