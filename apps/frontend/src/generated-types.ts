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

export type Contact = {
  __typename?: 'Contact';
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type HomeroomList = {
  __typename?: 'HomeroomList';
  lopSinhHoat: Array<HomeroomListItem>;
};

export type HomeroomListItem = {
  __typename?: 'HomeroomListItem';
  heDaoTao: Scalars['String'];
  khoa: Scalars['Int'];
  maSH: Scalars['String'];
};

export type HomeroomStudentListItem = {
  __typename?: 'HomeroomStudentListItem';
  gpa4: Scalars['Float'];
  gpa10: Scalars['Float'];
  lienHe: Array<Contact>;
  maCN: Scalars['String'];
  maSV: Scalars['String'];
  sdt: Scalars['String'];
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  forgotPassword?: Maybe<MutationStatusReponse>;
  login?: Maybe<LoginResponse>;
  resetPassword?: Maybe<MutationStatusReponse>;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  id: Scalars['Int'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
  token: Scalars['String'];
};

export type MutationStatusReponse = {
  __typename?: 'MutationStatusReponse';
  status?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  allSubjects?: Maybe<Array<Subject>>;
  allTerms?: Maybe<Array<Term>>;
  homeroomList: HomeroomList;
  homeroomStudentList?: Maybe<Array<HomeroomStudentListItem>>;
  subjectsByTerm?: Maybe<Array<Subject>>;
  trainingPointByTerm: TrainingPoint;
};

export type QueryAllSubjectsArgs = {
  studentId: Scalars['String'];
};

export type QueryAllTermsArgs = {
  studentId: Scalars['String'];
};

export type QueryHomeroomStudentListArgs = {
  homeroomId: Scalars['String'];
};

export type QuerySubjectsByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryTrainingPointByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type Subject = {
  __typename?: 'Subject';
  dtb?: Maybe<Scalars['Float']>;
  gvlt: Scalars['String'];
  gvth: Scalars['String'];
  maMH: Scalars['String'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type Term = {
  __typename?: 'Term';
  hocKy: Scalars['Int'];
  maHK: Scalars['Int'];
  namHocBD: Scalars['Int'];
};

export type TrainingPoint = {
  __typename?: 'TrainingPoint';
  drl: Scalars['Int'];
  xepLoai: Scalars['String'];
};

export type HomeroomListQueryVariables = Exact<{ [key: string]: never }>;

export type HomeroomListQuery = {
  __typename?: 'Query';
  homeroomList: {
    __typename?: 'HomeroomList';
    lopSinhHoat: Array<{
      __typename?: 'HomeroomListItem';
      maSH: string;
      heDaoTao: string;
      khoa: number;
    }>;
  };
};

export type HomeroomStudentListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomStudentListQuery = {
  __typename?: 'Query';
  homeroomStudentList?:
    | Array<{
        __typename?: 'HomeroomStudentListItem';
        maSV: string;
        tenSV: string;
        maCN: string;
        tinhTrang: string;
        gpa4: number;
        gpa10: number;
        sdt: string;
        lienHe: Array<{ __typename?: 'Contact'; mxh: string; url: string }>;
      }>
    | null
    | undefined;
};

export type AllSubjectsQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type AllSubjectsQuery = {
  __typename?: 'Query';
  allSubjects?:
    | Array<{
        __typename?: 'Subject';
        maMH: string;
        tenMH: string;
        tenLopHP: string;
        dtb?: number | null | undefined;
        gvlt: string;
        gvth: string;
        tinhTrang: string;
      }>
    | null
    | undefined;
};

export type AllTermsQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type AllTermsQuery = {
  __typename?: 'Query';
  allTerms?:
    | Array<{
        __typename?: 'Term';
        maHK: number;
        hocKy: number;
        namHocBD: number;
      }>
    | null
    | undefined;
};

export type SubjectsByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type SubjectsByTermQuery = {
  __typename?: 'Query';
  subjectsByTerm?:
    | Array<{
        __typename?: 'Subject';
        maMH: string;
        tenMH: string;
        tenLopHP: string;
        dtb?: number | null | undefined;
        gvlt: string;
        gvth: string;
        tinhTrang: string;
      }>
    | null
    | undefined;
};

export type TrainingPointByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type TrainingPointByTermQuery = {
  __typename?: 'Query';
  trainingPointByTerm: {
    __typename?: 'TrainingPoint';
    drl: number;
    xepLoai: string;
  };
};

export const HomeroomListDocument = gql`
  query HomeroomList {
    homeroomList {
      lopSinhHoat {
        maSH
        heDaoTao
        khoa
      }
    }
  }
`;

/**
 * __useHomeroomListQuery__
 *
 * To run a query within a React component, call `useHomeroomListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomListQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeroomListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HomeroomListQuery,
    HomeroomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeroomListQuery, HomeroomListQueryVariables>(
    HomeroomListDocument,
    options
  );
}
export function useHomeroomListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomListQuery,
    HomeroomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomeroomListQuery, HomeroomListQueryVariables>(
    HomeroomListDocument,
    options
  );
}
export type HomeroomListQueryHookResult = ReturnType<
  typeof useHomeroomListQuery
>;
export type HomeroomListLazyQueryHookResult = ReturnType<
  typeof useHomeroomListLazyQuery
>;
export type HomeroomListQueryResult = Apollo.QueryResult<
  HomeroomListQuery,
  HomeroomListQueryVariables
>;
export const HomeroomStudentListDocument = gql`
  query HomeroomStudentList($homeroomId: String!) {
    homeroomStudentList(homeroomId: $homeroomId) {
      maSV
      tenSV
      maCN
      tinhTrang
      gpa4
      gpa10
      sdt
      lienHe {
        mxh
        url
      }
    }
  }
`;

/**
 * __useHomeroomStudentListQuery__
 *
 * To run a query within a React component, call `useHomeroomStudentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomStudentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomStudentListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomStudentListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomStudentListQuery,
    HomeroomStudentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomStudentListQuery,
    HomeroomStudentListQueryVariables
  >(HomeroomStudentListDocument, options);
}
export function useHomeroomStudentListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomStudentListQuery,
    HomeroomStudentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomStudentListQuery,
    HomeroomStudentListQueryVariables
  >(HomeroomStudentListDocument, options);
}
export type HomeroomStudentListQueryHookResult = ReturnType<
  typeof useHomeroomStudentListQuery
>;
export type HomeroomStudentListLazyQueryHookResult = ReturnType<
  typeof useHomeroomStudentListLazyQuery
>;
export type HomeroomStudentListQueryResult = Apollo.QueryResult<
  HomeroomStudentListQuery,
  HomeroomStudentListQueryVariables
>;
export const AllSubjectsDocument = gql`
  query AllSubjects($studentId: String!) {
    allSubjects(studentId: $studentId) {
      maMH
      tenMH
      tenLopHP
      dtb
      gvlt
      gvth
      tinhTrang
    }
  }
`;

/**
 * __useAllSubjectsQuery__
 *
 * To run a query within a React component, call `useAllSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSubjectsQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useAllSubjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllSubjectsQuery,
    AllSubjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllSubjectsQuery, AllSubjectsQueryVariables>(
    AllSubjectsDocument,
    options
  );
}
export function useAllSubjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllSubjectsQuery,
    AllSubjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllSubjectsQuery, AllSubjectsQueryVariables>(
    AllSubjectsDocument,
    options
  );
}
export type AllSubjectsQueryHookResult = ReturnType<typeof useAllSubjectsQuery>;
export type AllSubjectsLazyQueryHookResult = ReturnType<
  typeof useAllSubjectsLazyQuery
>;
export type AllSubjectsQueryResult = Apollo.QueryResult<
  AllSubjectsQuery,
  AllSubjectsQueryVariables
>;
export const AllTermsDocument = gql`
  query AllTerms($studentId: String!) {
    allTerms(studentId: $studentId) {
      maHK
      hocKy
      namHocBD
    }
  }
`;

/**
 * __useAllTermsQuery__
 *
 * To run a query within a React component, call `useAllTermsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTermsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTermsQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useAllTermsQuery(
  baseOptions: Apollo.QueryHookOptions<AllTermsQuery, AllTermsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTermsQuery, AllTermsQueryVariables>(
    AllTermsDocument,
    options
  );
}
export function useAllTermsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTermsQuery,
    AllTermsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTermsQuery, AllTermsQueryVariables>(
    AllTermsDocument,
    options
  );
}
export type AllTermsQueryHookResult = ReturnType<typeof useAllTermsQuery>;
export type AllTermsLazyQueryHookResult = ReturnType<
  typeof useAllTermsLazyQuery
>;
export type AllTermsQueryResult = Apollo.QueryResult<
  AllTermsQuery,
  AllTermsQueryVariables
>;
export const SubjectsByTermDocument = gql`
  query SubjectsByTerm($studentId: String!, $term: Int!) {
    subjectsByTerm(studentId: $studentId, term: $term) {
      maMH
      tenMH
      tenLopHP
      dtb
      gvlt
      gvth
      tinhTrang
    }
  }
`;

/**
 * __useSubjectsByTermQuery__
 *
 * To run a query within a React component, call `useSubjectsByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectsByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectsByTermQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSubjectsByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubjectsByTermQuery,
    SubjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SubjectsByTermQuery, SubjectsByTermQueryVariables>(
    SubjectsByTermDocument,
    options
  );
}
export function useSubjectsByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubjectsByTermQuery,
    SubjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SubjectsByTermQuery, SubjectsByTermQueryVariables>(
    SubjectsByTermDocument,
    options
  );
}
export type SubjectsByTermQueryHookResult = ReturnType<
  typeof useSubjectsByTermQuery
>;
export type SubjectsByTermLazyQueryHookResult = ReturnType<
  typeof useSubjectsByTermLazyQuery
>;
export type SubjectsByTermQueryResult = Apollo.QueryResult<
  SubjectsByTermQuery,
  SubjectsByTermQueryVariables
>;
export const TrainingPointByTermDocument = gql`
  query TrainingPointByTerm($studentId: String!, $term: Int!) {
    trainingPointByTerm(studentId: $studentId, term: $term) {
      drl
      xepLoai
    }
  }
`;

/**
 * __useTrainingPointByTermQuery__
 *
 * To run a query within a React component, call `useTrainingPointByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrainingPointByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrainingPointByTermQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useTrainingPointByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    TrainingPointByTermQuery,
    TrainingPointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    TrainingPointByTermQuery,
    TrainingPointByTermQueryVariables
  >(TrainingPointByTermDocument, options);
}
export function useTrainingPointByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TrainingPointByTermQuery,
    TrainingPointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    TrainingPointByTermQuery,
    TrainingPointByTermQueryVariables
  >(TrainingPointByTermDocument, options);
}
export type TrainingPointByTermQueryHookResult = ReturnType<
  typeof useTrainingPointByTermQuery
>;
export type TrainingPointByTermLazyQueryHookResult = ReturnType<
  typeof useTrainingPointByTermLazyQuery
>;
export type TrainingPointByTermQueryResult = Apollo.QueryResult<
  TrainingPointByTermQuery,
  TrainingPointByTermQueryVariables
>;
