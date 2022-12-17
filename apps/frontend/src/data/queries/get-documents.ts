import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query Posts {
    documents {
      id
      name
      url
    }
  }
`;
