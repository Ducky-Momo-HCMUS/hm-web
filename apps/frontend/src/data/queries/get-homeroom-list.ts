import { gql } from '@apollo/client';

export const GET_HOMEROOM_LIST = gql`
  query HomeroomList {
    homeroomList {
      lopSinhHoat {
        maSH
        heDaoTao
        khoa
      }
    }
  }
`;
