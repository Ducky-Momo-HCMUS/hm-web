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
  noteAdd: NoteAddResponse;
  noteDelete: NoteDeleteResponse;
  noteEdit: NoteEditResponse;
  resetPassword?: Maybe<MutationStatusReponse>;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationNoteAddArgs = {
  payload: NoteAddInput;
};

export type MutationNoteDeleteArgs = {
  noteId: Scalars['Int'];
};

export type MutationNoteEditArgs = {
  noteId: Scalars['Int'];
  payload: NoteEditInput;
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

export type NoteAddInput = {
  maSV: Scalars['String'];
  noiDung: Scalars['String'];
  tag: Array<Scalars['String']>;
  tieuDe: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type NoteAddResponse = {
  __typename?: 'NoteAddResponse';
  status: Scalars['Int'];
};

export type NoteDeleteResponse = {
  __typename?: 'NoteDeleteResponse';
  status: Scalars['Int'];
};

export type NoteDetail = {
  __typename?: 'NoteDetail';
  hinhAnh: Array<NoteImage>;
  maGC: Scalars['Int'];
  noiDung: Scalars['String'];
  tag: Array<Maybe<Scalars['String']>>;
  thoiGianSua: Scalars['String'];
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteEditInput = {
  maTag: Array<Scalars['Int']>;
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type NoteEditResponse = {
  __typename?: 'NoteEditResponse';
  status: Scalars['Int'];
};

export type NoteImage = {
  __typename?: 'NoteImage';
  stt: Scalars['Int'];
  url: Scalars['String'];
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
  noteDetail: NoteDetail;
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

export type QueryNoteDetailArgs = {
  noteId: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?:
    | { __typename?: 'LoginResponse'; token?: string | null | undefined }
    | null
    | undefined;
};

export type NoteAddMutationVariables = Exact<{
  payload: NoteAddInput;
}>;

export type NoteAddMutation = {
  __typename?: 'Mutation';
  noteAdd: { __typename?: 'NoteAddResponse'; status: number };
};

export type NoteDeleteMutationVariables = Exact<{
  noteId: Scalars['Int'];
}>;

export type NoteDeleteMutation = {
  __typename?: 'Mutation';
  noteDelete: { __typename?: 'NoteDeleteResponse'; status: number };
};

export type NoteEditMutationVariables = Exact<{
  noteId: Scalars['Int'];
  payload: NoteEditInput;
}>;

export type NoteEditMutation = {
  __typename?: 'Mutation';
  noteEdit: { __typename?: 'NoteEditResponse'; status: number };
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

export type NoteDetailQueryVariables = Exact<{
  noteId: Scalars['Int'];
}>;

export type NoteDetailQuery = {
  __typename?: 'Query';
  noteDetail: {
    __typename?: 'NoteDetail';
    maGC: number;
    tag: Array<string | null | undefined>;
    tieuDe: string;
    noiDung: string;
    thoiGianTao: string;
    thoiGianSua: string;
    hinhAnh: Array<{ __typename?: 'NoteImage'; stt: number; url: string }>;
  };
};

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const NoteAddDocument = gql`
  mutation NoteAdd($payload: NoteAddInput!) {
    noteAdd(payload: $payload) {
      status
    }
  }
`;
export type NoteAddMutationFn = Apollo.MutationFunction<
  NoteAddMutation,
  NoteAddMutationVariables
>;

/**
 * __useNoteAddMutation__
 *
 * To run a mutation, you first call `useNoteAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNoteAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [noteAddMutation, { data, loading, error }] = useNoteAddMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useNoteAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    NoteAddMutation,
    NoteAddMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<NoteAddMutation, NoteAddMutationVariables>(
    NoteAddDocument,
    options
  );
}
export type NoteAddMutationHookResult = ReturnType<typeof useNoteAddMutation>;
export type NoteAddMutationResult = Apollo.MutationResult<NoteAddMutation>;
export type NoteAddMutationOptions = Apollo.BaseMutationOptions<
  NoteAddMutation,
  NoteAddMutationVariables
>;
export const NoteDeleteDocument = gql`
  mutation NoteDelete($noteId: Int!) {
    noteDelete(noteId: $noteId) {
      status
    }
  }
`;
export type NoteDeleteMutationFn = Apollo.MutationFunction<
  NoteDeleteMutation,
  NoteDeleteMutationVariables
>;

/**
 * __useNoteDeleteMutation__
 *
 * To run a mutation, you first call `useNoteDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNoteDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [noteDeleteMutation, { data, loading, error }] = useNoteDeleteMutation({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    NoteDeleteMutation,
    NoteDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<NoteDeleteMutation, NoteDeleteMutationVariables>(
    NoteDeleteDocument,
    options
  );
}
export type NoteDeleteMutationHookResult = ReturnType<
  typeof useNoteDeleteMutation
>;
export type NoteDeleteMutationResult =
  Apollo.MutationResult<NoteDeleteMutation>;
export type NoteDeleteMutationOptions = Apollo.BaseMutationOptions<
  NoteDeleteMutation,
  NoteDeleteMutationVariables
>;
export const NoteEditDocument = gql`
  mutation NoteEdit($noteId: Int!, $payload: NoteEditInput!) {
    noteEdit(noteId: $noteId, payload: $payload) {
      status
    }
  }
`;
export type NoteEditMutationFn = Apollo.MutationFunction<
  NoteEditMutation,
  NoteEditMutationVariables
>;

/**
 * __useNoteEditMutation__
 *
 * To run a mutation, you first call `useNoteEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNoteEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [noteEditMutation, { data, loading, error }] = useNoteEditMutation({
 *   variables: {
 *      noteId: // value for 'noteId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useNoteEditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    NoteEditMutation,
    NoteEditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<NoteEditMutation, NoteEditMutationVariables>(
    NoteEditDocument,
    options
  );
}
export type NoteEditMutationHookResult = ReturnType<typeof useNoteEditMutation>;
export type NoteEditMutationResult = Apollo.MutationResult<NoteEditMutation>;
export type NoteEditMutationOptions = Apollo.BaseMutationOptions<
  NoteEditMutation,
  NoteEditMutationVariables
>;
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
export const NoteDetailDocument = gql`
  query NoteDetail($noteId: Int!) {
    noteDetail(noteId: $noteId) {
      maGC
      tag
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      hinhAnh {
        stt
        url
      }
    }
  }
`;

/**
 * __useNoteDetailQuery__
 *
 * To run a query within a React component, call `useNoteDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteDetailQuery({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    NoteDetailQuery,
    NoteDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NoteDetailQuery, NoteDetailQueryVariables>(
    NoteDetailDocument,
    options
  );
}
export function useNoteDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NoteDetailQuery,
    NoteDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NoteDetailQuery, NoteDetailQueryVariables>(
    NoteDetailDocument,
    options
  );
}
export type NoteDetailQueryHookResult = ReturnType<typeof useNoteDetailQuery>;
export type NoteDetailLazyQueryHookResult = ReturnType<
  typeof useNoteDetailLazyQuery
>;
export type NoteDetailQueryResult = Apollo.QueryResult<
  NoteDetailQuery,
  NoteDetailQueryVariables
>;
