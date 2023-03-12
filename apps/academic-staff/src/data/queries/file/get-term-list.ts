import { gql } from '@apollo/client';

export const GET_TERM_LIST = gql`
  query TermList {
    termList {
      maHK
      namHocBD
      hocKy
    }
  }
`;
