import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query Posts {
    photos {
      id
      name
      url
    }
  }
`;
