import { gql } from '@apollo/client';

export const GET_ACCOUNT_LIST = gql`
  query AccountList {
    accountList {
      danhSachTaiKhoan {
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
