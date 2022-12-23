import { gql } from '@apollo/client';

export const GET_HOMEROOM_FAIL_LIST = gql`
  query HomeroomFailList($homeroomId: String!, $term: Int!) {
    homeroomFailList(homeroomId: $homeroomId, term: $term) {
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
