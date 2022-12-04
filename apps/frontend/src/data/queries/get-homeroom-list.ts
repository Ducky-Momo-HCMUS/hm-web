import { gql } from '@apollo/client';

export const GET_HOMEROOM_LIST = gql`
  query HomeroomList {
    homeroomList {
      maSH
      heDaoTao
      khoa
      maGV
    }
  }
`;
