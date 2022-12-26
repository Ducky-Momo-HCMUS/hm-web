import { gql } from '@apollo/client';

export const GET_HOMEROOM_TERM_LIST = gql`
  query HomeroomTermList($homeroomId: String!) {
    homeroomTermList(homeroomId: $homeroomId) {
      hocKyNamHoc {
        maHK
        hocKy
        namHocBD
      }
    }
  }
`;
