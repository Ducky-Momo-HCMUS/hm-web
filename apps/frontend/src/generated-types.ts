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
  homeroomList: HomeroomList;
  homeroomStudentList?: Maybe<Array<HomeroomStudentListItem>>;
  studentAllSubjects: StudentAllSubjects;
  studentAllTerms: StudentAllTerms;
  studentSubjectsByTerm: StudentSubjectsByTerm;
  studentTrainingPointByTerm: StudentTrainingPoint;
};

export type QueryHomeroomStudentListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryStudentAllSubjectsArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentAllTermsArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentSubjectsByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentTrainingPointByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type StudentAllSubjects = {
  __typename?: 'StudentAllSubjects';
  monhoc: Array<StudentSubject>;
};

export type StudentAllTerms = {
  __typename?: 'StudentAllTerms';
  hocKyNamHoc: Array<StudentTerm>;
};

export type StudentSubject = {
  __typename?: 'StudentSubject';
  dtb?: Maybe<Scalars['Float']>;
  gvlt: Scalars['String'];
  gvth: Scalars['String'];
  maMH: Scalars['String'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type StudentSubjectsByTerm = {
  __typename?: 'StudentSubjectsByTerm';
  monhoc: Array<StudentSubject>;
};

export type StudentTerm = {
  __typename?: 'StudentTerm';
  hocKy: Scalars['Int'];
  maHK: Scalars['Int'];
  namHocBD: Scalars['Int'];
};

export type StudentTrainingPoint = {
  __typename?: 'StudentTrainingPoint';
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

export type StudentAllSubjectsQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentAllSubjectsQuery = {
  __typename?: 'Query';
  studentAllSubjects: {
    __typename?: 'StudentAllSubjects';
    monhoc: Array<{
      __typename?: 'StudentSubject';
      maMH: string;
      tenMH: string;
      tenLopHP: string;
      dtb?: number | null | undefined;
      gvlt: string;
      gvth: string;
      tinhTrang: string;
    }>;
  };
};

export type StudentAllTermsQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentAllTermsQuery = {
  __typename?: 'Query';
  studentAllTerms: {
    __typename?: 'StudentAllTerms';
    hocKyNamHoc: Array<{
      __typename?: 'StudentTerm';
      maHK: number;
      hocKy: number;
      namHocBD: number;
    }>;
  };
};

export type StudentSubjectsByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type StudentSubjectsByTermQuery = {
  __typename?: 'Query';
  studentSubjectsByTerm: {
    __typename?: 'StudentSubjectsByTerm';
    monhoc: Array<{
      __typename?: 'StudentSubject';
      maMH: string;
      tenMH: string;
      tenLopHP: string;
      dtb?: number | null | undefined;
      gvlt: string;
      gvth: string;
      tinhTrang: string;
    }>;
  };
};

export type StudentTrainingPointByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type StudentTrainingPointByTermQuery = {
  __typename?: 'Query';
  studentTrainingPointByTerm: {
    __typename?: 'StudentTrainingPoint';
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
export const StudentAllSubjectsDocument = gql`
  query StudentAllSubjects($studentId: String!) {
    studentAllSubjects(studentId: $studentId) {
      monhoc {
        maMH
        tenMH
        tenLopHP
        dtb
        gvlt
        gvth
        tinhTrang
      }
    }
  }
`;

/**
 * __useStudentAllSubjectsQuery__
 *
 * To run a query within a React component, call `useStudentAllSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentAllSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentAllSubjectsQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentAllSubjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentAllSubjectsQuery,
    StudentAllSubjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentAllSubjectsQuery,
    StudentAllSubjectsQueryVariables
  >(StudentAllSubjectsDocument, options);
}
export function useStudentAllSubjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentAllSubjectsQuery,
    StudentAllSubjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentAllSubjectsQuery,
    StudentAllSubjectsQueryVariables
  >(StudentAllSubjectsDocument, options);
}
export type StudentAllSubjectsQueryHookResult = ReturnType<
  typeof useStudentAllSubjectsQuery
>;
export type StudentAllSubjectsLazyQueryHookResult = ReturnType<
  typeof useStudentAllSubjectsLazyQuery
>;
export type StudentAllSubjectsQueryResult = Apollo.QueryResult<
  StudentAllSubjectsQuery,
  StudentAllSubjectsQueryVariables
>;
export const StudentAllTermsDocument = gql`
  query StudentAllTerms($studentId: String!) {
    studentAllTerms(studentId: $studentId) {
      hocKyNamHoc {
        maHK
        hocKy
        namHocBD
      }
    }
  }
`;

/**
 * __useStudentAllTermsQuery__
 *
 * To run a query within a React component, call `useStudentAllTermsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentAllTermsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentAllTermsQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentAllTermsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentAllTermsQuery,
    StudentAllTermsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentAllTermsQuery, StudentAllTermsQueryVariables>(
    StudentAllTermsDocument,
    options
  );
}
export function useStudentAllTermsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentAllTermsQuery,
    StudentAllTermsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentAllTermsQuery,
    StudentAllTermsQueryVariables
  >(StudentAllTermsDocument, options);
}
export type StudentAllTermsQueryHookResult = ReturnType<
  typeof useStudentAllTermsQuery
>;
export type StudentAllTermsLazyQueryHookResult = ReturnType<
  typeof useStudentAllTermsLazyQuery
>;
export type StudentAllTermsQueryResult = Apollo.QueryResult<
  StudentAllTermsQuery,
  StudentAllTermsQueryVariables
>;
export const StudentSubjectsByTermDocument = gql`
  query StudentSubjectsByTerm($studentId: String!, $term: Int!) {
    studentSubjectsByTerm(studentId: $studentId, term: $term) {
      monhoc {
        maMH
        tenMH
        tenLopHP
        dtb
        gvlt
        gvth
        tinhTrang
      }
    }
  }
`;

/**
 * __useStudentSubjectsByTermQuery__
 *
 * To run a query within a React component, call `useStudentSubjectsByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentSubjectsByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentSubjectsByTermQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useStudentSubjectsByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentSubjectsByTermQuery,
    StudentSubjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentSubjectsByTermQuery,
    StudentSubjectsByTermQueryVariables
  >(StudentSubjectsByTermDocument, options);
}
export function useStudentSubjectsByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentSubjectsByTermQuery,
    StudentSubjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentSubjectsByTermQuery,
    StudentSubjectsByTermQueryVariables
  >(StudentSubjectsByTermDocument, options);
}
export type StudentSubjectsByTermQueryHookResult = ReturnType<
  typeof useStudentSubjectsByTermQuery
>;
export type StudentSubjectsByTermLazyQueryHookResult = ReturnType<
  typeof useStudentSubjectsByTermLazyQuery
>;
export type StudentSubjectsByTermQueryResult = Apollo.QueryResult<
  StudentSubjectsByTermQuery,
  StudentSubjectsByTermQueryVariables
>;
export const StudentTrainingPointByTermDocument = gql`
  query StudentTrainingPointByTerm($studentId: String!, $term: Int!) {
    studentTrainingPointByTerm(studentId: $studentId, term: $term) {
      drl
      xepLoai
    }
  }
`;

/**
 * __useStudentTrainingPointByTermQuery__
 *
 * To run a query within a React component, call `useStudentTrainingPointByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentTrainingPointByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentTrainingPointByTermQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useStudentTrainingPointByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentTrainingPointByTermQuery,
    StudentTrainingPointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentTrainingPointByTermQuery,
    StudentTrainingPointByTermQueryVariables
  >(StudentTrainingPointByTermDocument, options);
}
export function useStudentTrainingPointByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentTrainingPointByTermQuery,
    StudentTrainingPointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentTrainingPointByTermQuery,
    StudentTrainingPointByTermQueryVariables
  >(StudentTrainingPointByTermDocument, options);
}
export type StudentTrainingPointByTermQueryHookResult = ReturnType<
  typeof useStudentTrainingPointByTermQuery
>;
export type StudentTrainingPointByTermLazyQueryHookResult = ReturnType<
  typeof useStudentTrainingPointByTermLazyQuery
>;
export type StudentTrainingPointByTermQueryResult = Apollo.QueryResult<
  StudentTrainingPointByTermQuery,
  StudentTrainingPointByTermQueryVariables
>;
