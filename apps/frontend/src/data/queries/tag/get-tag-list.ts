import { gql } from '@apollo/client';

export const GET_TAG_LIST = gql`
  query TagList($page: Int, $size: Int) {
    tagList(page: $page, size: $size) {
      total
      data {
        maTag
        tenTag
      }
    }
  }
`;
