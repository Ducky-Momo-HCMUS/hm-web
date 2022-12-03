import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};

export type BookListQueryVariables = Exact<{ [key: string]: never }>;

export type BookListQuery = {
  __typename?: 'Query';
  books?:
    | Array<
        | {
            __typename?: 'Book';
            title?: string | null | undefined;
            author?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const BookListDocument = gql`
  query BookList {
    books {
      title
      author
    }
  }
`;

/**
 * __useBookListQuery__
 *
 * To run a query within a React component, call `useBookListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookListQuery(
  baseOptions?: Apollo.QueryHookOptions<BookListQuery, BookListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookListQuery, BookListQueryVariables>(
    BookListDocument,
    options
  );
}
export function useBookListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BookListQuery,
    BookListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookListQuery, BookListQueryVariables>(
    BookListDocument,
    options
  );
}
export type BookListQueryHookResult = ReturnType<typeof useBookListQuery>;
export type BookListLazyQueryHookResult = ReturnType<
  typeof useBookListLazyQuery
>;
export type BookListQueryResult = Apollo.QueryResult<
  BookListQuery,
  BookListQueryVariables
>;
