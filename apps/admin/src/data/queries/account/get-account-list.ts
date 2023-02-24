import { gql } from '@apollo/client';

export const GET_ACCOUNT_LIST = gql`
  query AccountList($page: Int!, $size: Int!) {
    accountList(page: $page, size: $size) {
      total
      data {
        maTK
        email
        tenGV
        hoatDong
        gvcn
        gvu
      }
    }
  }
`;
