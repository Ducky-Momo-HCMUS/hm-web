import { gql } from '@apollo/client';

export const GET_MAJOR_RESULT_LIST = gql`
  query MajorResultList($page: Int!, $size: Int!) {
    majorResultList(page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        chuyenNganh
      }
    }
  }
`;
