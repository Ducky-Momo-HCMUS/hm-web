import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query BookList {
    books {
      title
      author
    }
  }
`;
