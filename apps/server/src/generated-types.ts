import { GraphQLResolveInfo } from 'graphql';
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contact: ResolverTypeWrapper<Contact>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HomeroomDetail: ResolverTypeWrapper<HomeroomDetail>;
  HomeroomFailList: ResolverTypeWrapper<HomeroomFailList>;
  HomeroomFailListItem: ResolverTypeWrapper<HomeroomFailListItem>;
  HomeroomList: ResolverTypeWrapper<HomeroomList>;
  HomeroomListItem: ResolverTypeWrapper<HomeroomListItem>;
  HomeroomNotEnrolledList: ResolverTypeWrapper<HomeroomNotEnrolledList>;
  HomeroomNotEnrolledListItem: ResolverTypeWrapper<HomeroomNotEnrolledListItem>;
  HomeroomPostponeExamList: ResolverTypeWrapper<HomeroomPostponeExamList>;
  HomeroomPostponeExamListItem: ResolverTypeWrapper<HomeroomPostponeExamListItem>;
  HomeroomStudentListItem: ResolverTypeWrapper<HomeroomStudentListItem>;
  HomeroomTermList: ResolverTypeWrapper<HomeroomTermList>;
  HomeroomTermListItem: ResolverTypeWrapper<HomeroomTermListItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationStatusReponse: ResolverTypeWrapper<MutationStatusReponse>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StudentAllSubjects: ResolverTypeWrapper<StudentAllSubjects>;
  StudentAllTerms: ResolverTypeWrapper<StudentAllTerms>;
  StudentAveragePoint: ResolverTypeWrapper<StudentAveragePoint>;
  StudentDetail: ResolverTypeWrapper<StudentDetail>;
  StudentSubject: ResolverTypeWrapper<StudentSubject>;
  StudentSubjectsByTerm: ResolverTypeWrapper<StudentSubjectsByTerm>;
  StudentTerm: ResolverTypeWrapper<StudentTerm>;
  StudentTrainingPoint: ResolverTypeWrapper<StudentTrainingPoint>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Contact: Contact;
  Float: Scalars['Float'];
  HomeroomDetail: HomeroomDetail;
  HomeroomFailList: HomeroomFailList;
  HomeroomFailListItem: HomeroomFailListItem;
  HomeroomList: HomeroomList;
  HomeroomListItem: HomeroomListItem;
  HomeroomNotEnrolledList: HomeroomNotEnrolledList;
  HomeroomNotEnrolledListItem: HomeroomNotEnrolledListItem;
  HomeroomPostponeExamList: HomeroomPostponeExamList;
  HomeroomPostponeExamListItem: HomeroomPostponeExamListItem;
  HomeroomStudentListItem: HomeroomStudentListItem;
  HomeroomTermList: HomeroomTermList;
  HomeroomTermListItem: HomeroomTermListItem;
  Int: Scalars['Int'];
  LoginResponse: LoginResponse;
  Mutation: {};
  MutationStatusReponse: MutationStatusReponse;
  Query: {};
  String: Scalars['String'];
  StudentAllSubjects: StudentAllSubjects;
  StudentAllTerms: StudentAllTerms;
  StudentAveragePoint: StudentAveragePoint;
  StudentDetail: StudentDetail;
  StudentSubject: StudentSubject;
  StudentSubjectsByTerm: StudentSubjectsByTerm;
  StudentTerm: StudentTerm;
  StudentTrainingPoint: StudentTrainingPoint;
};

export type ContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']
> = {
  mxh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomDetailResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomDetail'] = ResolversParentTypes['HomeroomDetail']
> = {
  soLuongSV?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailList'] = ResolversParentTypes['HomeroomFailList']
> = {
  dsRotMon?: Resolver<
    Array<ResolversTypes['HomeroomFailListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailListItem'] = ResolversParentTypes['HomeroomFailListItem']
> = {
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vang?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomList'] = ResolversParentTypes['HomeroomList']
> = {
  lopSinhHoat?: Resolver<
    Array<ResolversTypes['HomeroomListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomListItem'] = ResolversParentTypes['HomeroomListItem']
> = {
  heDaoTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  khoa?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomNotEnrolledListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomNotEnrolledList'] = ResolversParentTypes['HomeroomNotEnrolledList']
> = {
  khongDangKy?: Resolver<
    Array<ResolversTypes['HomeroomNotEnrolledListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomNotEnrolledListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomNotEnrolledListItem'] = ResolversParentTypes['HomeroomNotEnrolledListItem']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomPostponeExamListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomPostponeExamList'] = ResolversParentTypes['HomeroomPostponeExamList']
> = {
  hoanThi?: Resolver<
    Array<ResolversTypes['HomeroomPostponeExamListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomPostponeExamListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomPostponeExamListItem'] = ResolversParentTypes['HomeroomPostponeExamListItem']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomStudentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentListItem'] = ResolversParentTypes['HomeroomStudentListItem']
> = {
  gpa4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpa10?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lienHe?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType>;
  maCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomTermListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomTermList'] = ResolversParentTypes['HomeroomTermList']
> = {
  hocKyNamHoc?: Resolver<
    Array<ResolversTypes['HomeroomTermListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomTermListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomTermListItem'] = ResolversParentTypes['HomeroomTermListItem']
> = {
  hocKy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maHK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  namHocBD?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']
> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  forgotPassword?: Resolver<
    Maybe<ResolversTypes['MutationStatusReponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'email'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['LoginResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >;
  resetPassword?: Resolver<
    Maybe<ResolversTypes['MutationStatusReponse']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationResetPasswordArgs,
      'id' | 'password' | 'passwordConfirm' | 'token'
    >
  >;
};

export type MutationStatusReponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutationStatusReponse'] = ResolversParentTypes['MutationStatusReponse']
> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  homeroomDetail?: Resolver<
    ResolversTypes['HomeroomDetail'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomDetailArgs, 'homeroomId'>
  >;
  homeroomFailList?: Resolver<
    ResolversTypes['HomeroomFailList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomFailListArgs, 'homeroomId'>
  >;
  homeroomFailListByTerm?: Resolver<
    ResolversTypes['HomeroomFailList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomFailListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomList?: Resolver<
    ResolversTypes['HomeroomList'],
    ParentType,
    ContextType
  >;
  homeroomNotEnrolledList?: Resolver<
    ResolversTypes['HomeroomNotEnrolledList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomNotEnrolledListArgs, 'homeroomId'>
  >;
  homeroomNotEnrolledListByTerm?: Resolver<
    ResolversTypes['HomeroomNotEnrolledList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomNotEnrolledListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomPostponeExamList?: Resolver<
    ResolversTypes['HomeroomPostponeExamList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomPostponeExamListArgs, 'homeroomId'>
  >;
  homeroomPostponeExamListByTerm?: Resolver<
    ResolversTypes['HomeroomPostponeExamList'],
    ParentType,
    ContextType,
    RequireFields<
      QueryHomeroomPostponeExamListByTermArgs,
      'homeroomId' | 'term'
    >
  >;
  homeroomStudentList?: Resolver<
    Maybe<Array<ResolversTypes['HomeroomStudentListItem']>>,
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomStudentListArgs, 'homeroomId'>
  >;
  homeroomTermList?: Resolver<
    ResolversTypes['HomeroomTermList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomTermListArgs, 'homeroomId'>
  >;
  studentAllSubjects?: Resolver<
    ResolversTypes['StudentAllSubjects'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAllSubjectsArgs, 'studentId'>
  >;
  studentAllTerms?: Resolver<
    ResolversTypes['StudentAllTerms'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAllTermsArgs, 'studentId'>
  >;
  studentAveragePoint?: Resolver<
    ResolversTypes['StudentAveragePoint'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAveragePointArgs, 'studentId'>
  >;
  studentAveragePointByTerm?: Resolver<
    ResolversTypes['StudentAveragePoint'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAveragePointByTermArgs, 'studentId' | 'term'>
  >;
  studentDetail?: Resolver<
    ResolversTypes['StudentDetail'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentDetailArgs, 'studentId'>
  >;
  studentSubjectsByTerm?: Resolver<
    ResolversTypes['StudentSubjectsByTerm'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentSubjectsByTermArgs, 'studentId' | 'term'>
  >;
  studentTrainingPoint?: Resolver<
    ResolversTypes['StudentTrainingPoint'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentTrainingPointArgs, 'studentId'>
  >;
  studentTrainingPointByTerm?: Resolver<
    ResolversTypes['StudentTrainingPoint'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentTrainingPointByTermArgs, 'studentId' | 'term'>
  >;
};

export type StudentAllSubjectsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAllSubjects'] = ResolversParentTypes['StudentAllSubjects']
> = {
  monhoc?: Resolver<
    Array<ResolversTypes['StudentSubject']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAllTermsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAllTerms'] = ResolversParentTypes['StudentAllTerms']
> = {
  hocKyNamHoc?: Resolver<
    Array<ResolversTypes['StudentTerm']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAveragePointResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAveragePoint'] = ResolversParentTypes['StudentAveragePoint']
> = {
  dtbTong?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xepLoai?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentDetailResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentDetail'] = ResolversParentTypes['StudentDetail']
> = {
  dob?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailCaNhan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gioiTinh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gpa_4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpa_10?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ngoaiNgu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentSubject'] = ResolversParentTypes['StudentSubject']
> = {
  dtb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gvlt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gvth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentSubjectsByTermResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentSubjectsByTerm'] = ResolversParentTypes['StudentSubjectsByTerm']
> = {
  monhoc?: Resolver<
    Array<ResolversTypes['StudentSubject']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentTermResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTerm'] = ResolversParentTypes['StudentTerm']
> = {
  hocKy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maHK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  namHocBD?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentTrainingPointResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTrainingPoint'] = ResolversParentTypes['StudentTrainingPoint']
> = {
  drl?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xepLoai?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Contact?: ContactResolvers<ContextType>;
  HomeroomDetail?: HomeroomDetailResolvers<ContextType>;
  HomeroomFailList?: HomeroomFailListResolvers<ContextType>;
  HomeroomFailListItem?: HomeroomFailListItemResolvers<ContextType>;
  HomeroomList?: HomeroomListResolvers<ContextType>;
  HomeroomListItem?: HomeroomListItemResolvers<ContextType>;
  HomeroomNotEnrolledList?: HomeroomNotEnrolledListResolvers<ContextType>;
  HomeroomNotEnrolledListItem?: HomeroomNotEnrolledListItemResolvers<ContextType>;
  HomeroomPostponeExamList?: HomeroomPostponeExamListResolvers<ContextType>;
  HomeroomPostponeExamListItem?: HomeroomPostponeExamListItemResolvers<ContextType>;
  HomeroomStudentListItem?: HomeroomStudentListItemResolvers<ContextType>;
  HomeroomTermList?: HomeroomTermListResolvers<ContextType>;
  HomeroomTermListItem?: HomeroomTermListItemResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationStatusReponse?: MutationStatusReponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StudentAllSubjects?: StudentAllSubjectsResolvers<ContextType>;
  StudentAllTerms?: StudentAllTermsResolvers<ContextType>;
  StudentAveragePoint?: StudentAveragePointResolvers<ContextType>;
  StudentDetail?: StudentDetailResolvers<ContextType>;
  StudentSubject?: StudentSubjectResolvers<ContextType>;
  StudentSubjectsByTerm?: StudentSubjectsByTermResolvers<ContextType>;
  StudentTerm?: StudentTermResolvers<ContextType>;
  StudentTrainingPoint?: StudentTrainingPointResolvers<ContextType>;
};
