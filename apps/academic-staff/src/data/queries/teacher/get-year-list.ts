import { gql } from '@apollo/client';

export const GET_YEAR_LIST = gql`
  query YearList {
    yearList {
      danhSachKhoa
    }
  }
`;
