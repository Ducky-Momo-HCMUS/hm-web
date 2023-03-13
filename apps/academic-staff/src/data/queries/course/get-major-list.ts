import { gql } from '@apollo/client';

export const GET_MAJOR_LIST = gql`
  query MajorList($page: Int!, $size: Int!) {
    majorList(page: $page, size: $size) {
      total
      data {
        maCN
        tenCN
        tenVietTat
      }
    }
  }
`;
