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

export type HomeroomDetail = {
  __typename?: 'HomeroomDetail';
  soLuongSV: Scalars['Int'];
  tenGV: Scalars['String'];
};

export type HomeroomFailList = {
  __typename?: 'HomeroomFailList';
  dsRotMon: Array<HomeroomFailListItem>;
};

export type HomeroomFailListItem = {
  __typename?: 'HomeroomFailListItem';
  dtb: Scalars['Float'];
  maSV: Scalars['String'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tenSV: Scalars['String'];
  vang: Scalars['Boolean'];
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

export type HomeroomNotEnrolledList = {
  __typename?: 'HomeroomNotEnrolledList';
  khongDangKy: Array<HomeroomNotEnrolledListItem>;
};

export type HomeroomNotEnrolledListItem = {
  __typename?: 'HomeroomNotEnrolledListItem';
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type HomeroomPostponeExamList = {
  __typename?: 'HomeroomPostponeExamList';
  hoanThi: Array<HomeroomPostponeExamListItem>;
};

export type HomeroomPostponeExamListItem = {
  __typename?: 'HomeroomPostponeExamListItem';
  maSV: Scalars['String'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tenSV: Scalars['String'];
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

export type HomeroomTermList = {
  __typename?: 'HomeroomTermList';
  hocKyNamHoc: Array<HomeroomTermListItem>;
};

export type HomeroomTermListItem = {
  __typename?: 'HomeroomTermListItem';
  hocKy: Scalars['Int'];
  maHK: Scalars['Int'];
  namHocBD: Scalars['Int'];
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
  homeroomDetail: HomeroomDetail;
  homeroomFailList: HomeroomFailList;
  homeroomFailListByTerm: HomeroomFailList;
  homeroomList: HomeroomList;
  homeroomNotEnrolledList: HomeroomNotEnrolledList;
  homeroomNotEnrolledListByTerm: HomeroomNotEnrolledList;
  homeroomPostponeExamList: HomeroomPostponeExamList;
  homeroomPostponeExamListByTerm: HomeroomPostponeExamList;
  homeroomStudentList?: Maybe<Array<HomeroomStudentListItem>>;
  homeroomTermList: HomeroomTermList;
  studentAllSubjects: StudentAllSubjects;
  studentAllTerms: StudentAllTerms;
  studentAveragePoint: StudentAveragePoint;
  studentAveragePointByTerm: StudentAveragePoint;
  studentDetail: StudentDetail;
  studentSubjectsByTerm: StudentSubjectsByTerm;
  studentTrainingPoint: StudentTrainingPoint;
  studentTrainingPointByTerm: StudentTrainingPoint;
};

export type QueryHomeroomDetailArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomFailListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomFailListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomNotEnrolledListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomNotEnrolledListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomPostponeExamListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomPostponeExamListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomStudentListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomTermListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryStudentAllSubjectsArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentAllTermsArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentAveragePointArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentAveragePointByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentDetailArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentSubjectsByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentTrainingPointArgs = {
  studentId: Scalars['String'];
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

export type StudentAveragePoint = {
  __typename?: 'StudentAveragePoint';
  dtbTong: Scalars['Float'];
  xepLoai: Scalars['String'];
};

export type StudentDetail = {
  __typename?: 'StudentDetail';
  dob: Scalars['String'];
  emailCaNhan: Scalars['String'];
  emailSV: Scalars['String'];
  gioiTinh: Scalars['Int'];
  gpa_4: Scalars['Float'];
  gpa_10: Scalars['Float'];
  maCN: Scalars['String'];
  maSH?: Maybe<Scalars['String']>;
  maSV: Scalars['String'];
  ngoaiNgu: Scalars['Boolean'];
  sdt: Scalars['String'];
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
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

export type HomeroomDetailQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomDetailQuery = {
  __typename?: 'Query';
  homeroomDetail: {
    __typename?: 'HomeroomDetail';
    tenGV: string;
    soLuongSV: number;
  };
};

export type HomeroomFailListByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type HomeroomFailListByTermQuery = {
  __typename?: 'Query';
  homeroomFailListByTerm: {
    __typename?: 'HomeroomFailList';
    dsRotMon: Array<{
      __typename?: 'HomeroomFailListItem';
      maSV: string;
      tenSV: string;
      tenMH: string;
      tenLopHP: string;
      dtb: number;
      vang: boolean;
    }>;
  };
};

export type HomeroomFailListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomFailListQuery = {
  __typename?: 'Query';
  homeroomFailList: {
    __typename?: 'HomeroomFailList';
    dsRotMon: Array<{
      __typename?: 'HomeroomFailListItem';
      maSV: string;
      tenSV: string;
      tenMH: string;
      tenLopHP: string;
      dtb: number;
      vang: boolean;
    }>;
  };
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

export type HomeroomNotEnrolledListByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type HomeroomNotEnrolledListByTermQuery = {
  __typename?: 'Query';
  homeroomNotEnrolledListByTerm: {
    __typename?: 'HomeroomNotEnrolledList';
    khongDangKy: Array<{
      __typename?: 'HomeroomNotEnrolledListItem';
      maSV: string;
      tenSV: string;
    }>;
  };
};

export type HomeroomNotEnrolledListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomNotEnrolledListQuery = {
  __typename?: 'Query';
  homeroomNotEnrolledList: {
    __typename?: 'HomeroomNotEnrolledList';
    khongDangKy: Array<{
      __typename?: 'HomeroomNotEnrolledListItem';
      maSV: string;
      tenSV: string;
    }>;
  };
};

export type HomeroomPostponeExamListByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type HomeroomPostponeExamListByTermQuery = {
  __typename?: 'Query';
  homeroomPostponeExamListByTerm: {
    __typename?: 'HomeroomPostponeExamList';
    hoanThi: Array<{
      __typename?: 'HomeroomPostponeExamListItem';
      maSV: string;
      tenSV: string;
      tenMH: string;
      tenLopHP: string;
    }>;
  };
};

export type HomeroomPostponeExamListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomPostponeExamListQuery = {
  __typename?: 'Query';
  homeroomPostponeExamList: {
    __typename?: 'HomeroomPostponeExamList';
    hoanThi: Array<{
      __typename?: 'HomeroomPostponeExamListItem';
      maSV: string;
      tenSV: string;
      tenMH: string;
      tenLopHP: string;
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

export type HomeroomTermListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomTermListQuery = {
  __typename?: 'Query';
  homeroomTermList: {
    __typename?: 'HomeroomTermList';
    hocKyNamHoc: Array<{
      __typename?: 'HomeroomTermListItem';
      maHK: number;
      hocKy: number;
      namHocBD: number;
    }>;
  };
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

export type StudentAveragePointByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type StudentAveragePointByTermQuery = {
  __typename?: 'Query';
  studentAveragePointByTerm: {
    __typename?: 'StudentAveragePoint';
    dtbTong: number;
    xepLoai: string;
  };
};

export type StudentAveragePointQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentAveragePointQuery = {
  __typename?: 'Query';
  studentAveragePoint: {
    __typename?: 'StudentAveragePoint';
    dtbTong: number;
    xepLoai: string;
  };
};

export type StudentDetailQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentDetailQuery = {
  __typename?: 'Query';
  studentDetail: {
    __typename?: 'StudentDetail';
    maSV: string;
    tenSV: string;
    gioiTinh: number;
    dob: string;
    emailSV: string;
    emailCaNhan: string;
    sdt: string;
    maCN: string;
    gpa_4: number;
    gpa_10: number;
    ngoaiNgu: boolean;
    tinhTrang: string;
    maSH?: string | null | undefined;
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

export type StudentTrainingPointQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentTrainingPointQuery = {
  __typename?: 'Query';
  studentTrainingPoint: {
    __typename?: 'StudentTrainingPoint';
    drl: number;
    xepLoai: string;
  };
};

export const HomeroomDetailDocument = gql`
  query HomeroomDetail($homeroomId: String!) {
    homeroomDetail(homeroomId: $homeroomId) {
      tenGV
      soLuongSV
    }
  }
`;

/**
 * __useHomeroomDetailQuery__
 *
 * To run a query within a React component, call `useHomeroomDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomDetailQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomDetailQuery,
    HomeroomDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeroomDetailQuery, HomeroomDetailQueryVariables>(
    HomeroomDetailDocument,
    options
  );
}
export function useHomeroomDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomDetailQuery,
    HomeroomDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomeroomDetailQuery, HomeroomDetailQueryVariables>(
    HomeroomDetailDocument,
    options
  );
}
export type HomeroomDetailQueryHookResult = ReturnType<
  typeof useHomeroomDetailQuery
>;
export type HomeroomDetailLazyQueryHookResult = ReturnType<
  typeof useHomeroomDetailLazyQuery
>;
export type HomeroomDetailQueryResult = Apollo.QueryResult<
  HomeroomDetailQuery,
  HomeroomDetailQueryVariables
>;
export const HomeroomFailListByTermDocument = gql`
  query HomeroomFailListByTerm($homeroomId: String!, $term: Int!) {
    homeroomFailListByTerm(homeroomId: $homeroomId, term: $term) {
      dsRotMon {
        maSV
        tenSV
        tenMH
        tenLopHP
        dtb
        vang
      }
    }
  }
`;

/**
 * __useHomeroomFailListByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomFailListByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomFailListByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomFailListByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useHomeroomFailListByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomFailListByTermQuery,
    HomeroomFailListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomFailListByTermQuery,
    HomeroomFailListByTermQueryVariables
  >(HomeroomFailListByTermDocument, options);
}
export function useHomeroomFailListByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomFailListByTermQuery,
    HomeroomFailListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomFailListByTermQuery,
    HomeroomFailListByTermQueryVariables
  >(HomeroomFailListByTermDocument, options);
}
export type HomeroomFailListByTermQueryHookResult = ReturnType<
  typeof useHomeroomFailListByTermQuery
>;
export type HomeroomFailListByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomFailListByTermLazyQuery
>;
export type HomeroomFailListByTermQueryResult = Apollo.QueryResult<
  HomeroomFailListByTermQuery,
  HomeroomFailListByTermQueryVariables
>;
export const HomeroomFailListDocument = gql`
  query HomeroomFailList($homeroomId: String!) {
    homeroomFailList(homeroomId: $homeroomId) {
      dsRotMon {
        maSV
        tenSV
        tenMH
        tenLopHP
        dtb
        vang
      }
    }
  }
`;

/**
 * __useHomeroomFailListQuery__
 *
 * To run a query within a React component, call `useHomeroomFailListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomFailListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomFailListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomFailListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomFailListQuery,
    HomeroomFailListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeroomFailListQuery, HomeroomFailListQueryVariables>(
    HomeroomFailListDocument,
    options
  );
}
export function useHomeroomFailListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomFailListQuery,
    HomeroomFailListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomFailListQuery,
    HomeroomFailListQueryVariables
  >(HomeroomFailListDocument, options);
}
export type HomeroomFailListQueryHookResult = ReturnType<
  typeof useHomeroomFailListQuery
>;
export type HomeroomFailListLazyQueryHookResult = ReturnType<
  typeof useHomeroomFailListLazyQuery
>;
export type HomeroomFailListQueryResult = Apollo.QueryResult<
  HomeroomFailListQuery,
  HomeroomFailListQueryVariables
>;
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
export const HomeroomNotEnrolledListByTermDocument = gql`
  query HomeroomNotEnrolledListByTerm($homeroomId: String!, $term: Int!) {
    homeroomNotEnrolledListByTerm(homeroomId: $homeroomId, term: $term) {
      khongDangKy {
        maSV
        tenSV
      }
    }
  }
`;

/**
 * __useHomeroomNotEnrolledListByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomNotEnrolledListByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomNotEnrolledListByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomNotEnrolledListByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useHomeroomNotEnrolledListByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomNotEnrolledListByTermQuery,
    HomeroomNotEnrolledListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomNotEnrolledListByTermQuery,
    HomeroomNotEnrolledListByTermQueryVariables
  >(HomeroomNotEnrolledListByTermDocument, options);
}
export function useHomeroomNotEnrolledListByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomNotEnrolledListByTermQuery,
    HomeroomNotEnrolledListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomNotEnrolledListByTermQuery,
    HomeroomNotEnrolledListByTermQueryVariables
  >(HomeroomNotEnrolledListByTermDocument, options);
}
export type HomeroomNotEnrolledListByTermQueryHookResult = ReturnType<
  typeof useHomeroomNotEnrolledListByTermQuery
>;
export type HomeroomNotEnrolledListByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomNotEnrolledListByTermLazyQuery
>;
export type HomeroomNotEnrolledListByTermQueryResult = Apollo.QueryResult<
  HomeroomNotEnrolledListByTermQuery,
  HomeroomNotEnrolledListByTermQueryVariables
>;
export const HomeroomNotEnrolledListDocument = gql`
  query HomeroomNotEnrolledList($homeroomId: String!) {
    homeroomNotEnrolledList(homeroomId: $homeroomId) {
      khongDangKy {
        maSV
        tenSV
      }
    }
  }
`;

/**
 * __useHomeroomNotEnrolledListQuery__
 *
 * To run a query within a React component, call `useHomeroomNotEnrolledListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomNotEnrolledListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomNotEnrolledListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomNotEnrolledListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomNotEnrolledListQuery,
    HomeroomNotEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomNotEnrolledListQuery,
    HomeroomNotEnrolledListQueryVariables
  >(HomeroomNotEnrolledListDocument, options);
}
export function useHomeroomNotEnrolledListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomNotEnrolledListQuery,
    HomeroomNotEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomNotEnrolledListQuery,
    HomeroomNotEnrolledListQueryVariables
  >(HomeroomNotEnrolledListDocument, options);
}
export type HomeroomNotEnrolledListQueryHookResult = ReturnType<
  typeof useHomeroomNotEnrolledListQuery
>;
export type HomeroomNotEnrolledListLazyQueryHookResult = ReturnType<
  typeof useHomeroomNotEnrolledListLazyQuery
>;
export type HomeroomNotEnrolledListQueryResult = Apollo.QueryResult<
  HomeroomNotEnrolledListQuery,
  HomeroomNotEnrolledListQueryVariables
>;
export const HomeroomPostponeExamListByTermDocument = gql`
  query HomeroomPostponeExamListByTerm($homeroomId: String!, $term: Int!) {
    homeroomPostponeExamListByTerm(homeroomId: $homeroomId, term: $term) {
      hoanThi {
        maSV
        tenSV
        tenMH
        tenLopHP
      }
    }
  }
`;

/**
 * __useHomeroomPostponeExamListByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomPostponeExamListByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomPostponeExamListByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomPostponeExamListByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useHomeroomPostponeExamListByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomPostponeExamListByTermQuery,
    HomeroomPostponeExamListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomPostponeExamListByTermQuery,
    HomeroomPostponeExamListByTermQueryVariables
  >(HomeroomPostponeExamListByTermDocument, options);
}
export function useHomeroomPostponeExamListByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomPostponeExamListByTermQuery,
    HomeroomPostponeExamListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomPostponeExamListByTermQuery,
    HomeroomPostponeExamListByTermQueryVariables
  >(HomeroomPostponeExamListByTermDocument, options);
}
export type HomeroomPostponeExamListByTermQueryHookResult = ReturnType<
  typeof useHomeroomPostponeExamListByTermQuery
>;
export type HomeroomPostponeExamListByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomPostponeExamListByTermLazyQuery
>;
export type HomeroomPostponeExamListByTermQueryResult = Apollo.QueryResult<
  HomeroomPostponeExamListByTermQuery,
  HomeroomPostponeExamListByTermQueryVariables
>;
export const HomeroomPostponeExamListDocument = gql`
  query HomeroomPostponeExamList($homeroomId: String!) {
    homeroomPostponeExamList(homeroomId: $homeroomId) {
      hoanThi {
        maSV
        tenSV
        tenMH
        tenLopHP
      }
    }
  }
`;

/**
 * __useHomeroomPostponeExamListQuery__
 *
 * To run a query within a React component, call `useHomeroomPostponeExamListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomPostponeExamListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomPostponeExamListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomPostponeExamListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomPostponeExamListQuery,
    HomeroomPostponeExamListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomPostponeExamListQuery,
    HomeroomPostponeExamListQueryVariables
  >(HomeroomPostponeExamListDocument, options);
}
export function useHomeroomPostponeExamListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomPostponeExamListQuery,
    HomeroomPostponeExamListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomPostponeExamListQuery,
    HomeroomPostponeExamListQueryVariables
  >(HomeroomPostponeExamListDocument, options);
}
export type HomeroomPostponeExamListQueryHookResult = ReturnType<
  typeof useHomeroomPostponeExamListQuery
>;
export type HomeroomPostponeExamListLazyQueryHookResult = ReturnType<
  typeof useHomeroomPostponeExamListLazyQuery
>;
export type HomeroomPostponeExamListQueryResult = Apollo.QueryResult<
  HomeroomPostponeExamListQuery,
  HomeroomPostponeExamListQueryVariables
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
export const HomeroomTermListDocument = gql`
  query HomeroomTermList($homeroomId: String!) {
    homeroomTermList(homeroomId: $homeroomId) {
      hocKyNamHoc {
        maHK
        hocKy
        namHocBD
      }
    }
  }
`;

/**
 * __useHomeroomTermListQuery__
 *
 * To run a query within a React component, call `useHomeroomTermListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomTermListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomTermListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *   },
 * });
 */
export function useHomeroomTermListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomTermListQuery,
    HomeroomTermListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeroomTermListQuery, HomeroomTermListQueryVariables>(
    HomeroomTermListDocument,
    options
  );
}
export function useHomeroomTermListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomTermListQuery,
    HomeroomTermListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomTermListQuery,
    HomeroomTermListQueryVariables
  >(HomeroomTermListDocument, options);
}
export type HomeroomTermListQueryHookResult = ReturnType<
  typeof useHomeroomTermListQuery
>;
export type HomeroomTermListLazyQueryHookResult = ReturnType<
  typeof useHomeroomTermListLazyQuery
>;
export type HomeroomTermListQueryResult = Apollo.QueryResult<
  HomeroomTermListQuery,
  HomeroomTermListQueryVariables
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
export const StudentAveragePointByTermDocument = gql`
  query StudentAveragePointByTerm($studentId: String!, $term: Int!) {
    studentAveragePointByTerm(studentId: $studentId, term: $term) {
      dtbTong
      xepLoai
    }
  }
`;

/**
 * __useStudentAveragePointByTermQuery__
 *
 * To run a query within a React component, call `useStudentAveragePointByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentAveragePointByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentAveragePointByTermQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useStudentAveragePointByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentAveragePointByTermQuery,
    StudentAveragePointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentAveragePointByTermQuery,
    StudentAveragePointByTermQueryVariables
  >(StudentAveragePointByTermDocument, options);
}
export function useStudentAveragePointByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentAveragePointByTermQuery,
    StudentAveragePointByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentAveragePointByTermQuery,
    StudentAveragePointByTermQueryVariables
  >(StudentAveragePointByTermDocument, options);
}
export type StudentAveragePointByTermQueryHookResult = ReturnType<
  typeof useStudentAveragePointByTermQuery
>;
export type StudentAveragePointByTermLazyQueryHookResult = ReturnType<
  typeof useStudentAveragePointByTermLazyQuery
>;
export type StudentAveragePointByTermQueryResult = Apollo.QueryResult<
  StudentAveragePointByTermQuery,
  StudentAveragePointByTermQueryVariables
>;
export const StudentAveragePointDocument = gql`
  query StudentAveragePoint($studentId: String!) {
    studentAveragePoint(studentId: $studentId) {
      dtbTong
      xepLoai
    }
  }
`;

/**
 * __useStudentAveragePointQuery__
 *
 * To run a query within a React component, call `useStudentAveragePointQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentAveragePointQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentAveragePointQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentAveragePointQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentAveragePointQuery,
    StudentAveragePointQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentAveragePointQuery,
    StudentAveragePointQueryVariables
  >(StudentAveragePointDocument, options);
}
export function useStudentAveragePointLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentAveragePointQuery,
    StudentAveragePointQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentAveragePointQuery,
    StudentAveragePointQueryVariables
  >(StudentAveragePointDocument, options);
}
export type StudentAveragePointQueryHookResult = ReturnType<
  typeof useStudentAveragePointQuery
>;
export type StudentAveragePointLazyQueryHookResult = ReturnType<
  typeof useStudentAveragePointLazyQuery
>;
export type StudentAveragePointQueryResult = Apollo.QueryResult<
  StudentAveragePointQuery,
  StudentAveragePointQueryVariables
>;
export const StudentDetailDocument = gql`
  query StudentDetail($studentId: String!) {
    studentDetail(studentId: $studentId) {
      maSV
      tenSV
      gioiTinh
      dob
      emailSV
      emailCaNhan
      sdt
      maCN
      gpa_4
      gpa_10
      ngoaiNgu
      tinhTrang
      maSH
    }
  }
`;

/**
 * __useStudentDetailQuery__
 *
 * To run a query within a React component, call `useStudentDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentDetailQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentDetailQuery,
    StudentDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentDetailQuery, StudentDetailQueryVariables>(
    StudentDetailDocument,
    options
  );
}
export function useStudentDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentDetailQuery,
    StudentDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StudentDetailQuery, StudentDetailQueryVariables>(
    StudentDetailDocument,
    options
  );
}
export type StudentDetailQueryHookResult = ReturnType<
  typeof useStudentDetailQuery
>;
export type StudentDetailLazyQueryHookResult = ReturnType<
  typeof useStudentDetailLazyQuery
>;
export type StudentDetailQueryResult = Apollo.QueryResult<
  StudentDetailQuery,
  StudentDetailQueryVariables
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
export const StudentTrainingPointDocument = gql`
  query StudentTrainingPoint($studentId: String!) {
    studentTrainingPoint(studentId: $studentId) {
      drl
      xepLoai
    }
  }
`;

/**
 * __useStudentTrainingPointQuery__
 *
 * To run a query within a React component, call `useStudentTrainingPointQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentTrainingPointQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentTrainingPointQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentTrainingPointQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentTrainingPointQuery,
    StudentTrainingPointQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentTrainingPointQuery,
    StudentTrainingPointQueryVariables
  >(StudentTrainingPointDocument, options);
}
export function useStudentTrainingPointLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentTrainingPointQuery,
    StudentTrainingPointQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentTrainingPointQuery,
    StudentTrainingPointQueryVariables
  >(StudentTrainingPointDocument, options);
}
export type StudentTrainingPointQueryHookResult = ReturnType<
  typeof useStudentTrainingPointQuery
>;
export type StudentTrainingPointLazyQueryHookResult = ReturnType<
  typeof useStudentTrainingPointLazyQuery
>;
export type StudentTrainingPointQueryResult = Apollo.QueryResult<
  StudentTrainingPointQuery,
  StudentTrainingPointQueryVariables
>;
