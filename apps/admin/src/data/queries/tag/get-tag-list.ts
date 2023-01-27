import { gql } from '@apollo/client';

export const GET_TAG_LIST = gql`
  query TagList {
    tagList {
      tags {
        maTag
        tenTag
      }
    }
  }
`;
