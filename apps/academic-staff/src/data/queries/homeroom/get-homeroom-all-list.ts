import { gql } from '@apollo/client';

export const GET_HOMEROOM_ALL_LIST = gql`
  query HomeroomAllList {
    homeroomAllList {
      danhSachLopSH
    }
  }
`;
