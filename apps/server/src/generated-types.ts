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

export type AccountAddInput = {
  email: Scalars['String'];
  gvcn: Scalars['Boolean'];
  gvu: Scalars['Boolean'];
  hoatDong: Scalars['Boolean'];
  tenGV: Scalars['String'];
};

export type AccountAddResponse = {
  __typename?: 'AccountAddResponse';
  status: Scalars['Int'];
};

export type AccountDeleteResponse = {
  __typename?: 'AccountDeleteResponse';
  status: Scalars['Int'];
};

export type AccountEditInput = {
  email: Scalars['String'];
  gvcn: Scalars['Boolean'];
  gvu: Scalars['Boolean'];
  hoatDong: Scalars['Boolean'];
  tenGV: Scalars['String'];
};

export type AccountEditResponse = {
  __typename?: 'AccountEditResponse';
  status: Scalars['Int'];
};

export type AccountList = {
  __typename?: 'AccountList';
  danhSachTaiKhoan: Array<AccountListItem>;
};

export type AccountListItem = {
  __typename?: 'AccountListItem';
  email: Scalars['String'];
  gvcn: Scalars['Boolean'];
  gvu: Scalars['Boolean'];
  hoatDong: Scalars['Boolean'];
  maTK: Scalars['Int'];
  tenGV: Scalars['String'];
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

export type HomeroomExamAbsentList = {
  __typename?: 'HomeroomExamAbsentList';
  danhSachVangThi: Array<HomeroomExamAbsentListItem>;
};

export type HomeroomExamAbsentListItem = {
  __typename?: 'HomeroomExamAbsentListItem';
  hoTen: Scalars['String'];
  lopHP?: Maybe<Scalars['String']>;
  maSV: Scalars['String'];
  monHoc?: Maybe<Scalars['String']>;
};

export type HomeroomExamPostponedList = {
  __typename?: 'HomeroomExamPostponedList';
  danhSachHoanThi: Array<HomeroomExamPostponedListItem>;
};

export type HomeroomExamPostponedListItem = {
  __typename?: 'HomeroomExamPostponedListItem';
  hoTen: Scalars['String'];
  lopHP?: Maybe<Scalars['String']>;
  maSV: Scalars['String'];
  monHoc?: Maybe<Scalars['String']>;
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

export type HomeroomFinalResultList = {
  __typename?: 'HomeroomFinalResultList';
  danhSachKetQua: Array<HomeroomFinalResultListItem>;
};

export type HomeroomFinalResultListItem = {
  __typename?: 'HomeroomFinalResultListItem';
  dtb?: Maybe<Scalars['Float']>;
  hoTen: Scalars['String'];
  maSV: Scalars['String'];
  xepLoai?: Maybe<Scalars['String']>;
};

export type HomeroomLearnOverview = {
  __typename?: 'HomeroomLearnOverview';
  chungChiNgoaiNgu?: Maybe<Scalars['Int']>;
  gioi?: Maybe<Scalars['Int']>;
  kha?: Maybe<Scalars['Int']>;
  trungBinh?: Maybe<Scalars['Int']>;
  trungBinhKha?: Maybe<Scalars['Int']>;
  xuatSac?: Maybe<Scalars['Int']>;
  yeu?: Maybe<Scalars['Int']>;
};

export type HomeroomList = {
  __typename?: 'HomeroomList';
  lopChuNhiem: Array<HomeroomListItem>;
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

export type HomeroomNumberOverview = {
  __typename?: 'HomeroomNumberOverview';
  nam: Scalars['Int'];
  nu: Scalars['Int'];
  tong: Scalars['Int'];
};

export type HomeroomOverviewReport = {
  __typename?: 'HomeroomOverviewReport';
  drl: HomeroomTrainingPointOverview;
  hocTap: HomeroomLearnOverview;
  siSo: HomeroomNumberOverview;
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

export type HomeroomStudentList = {
  __typename?: 'HomeroomStudentList';
  sinhVien: Array<HomeroomStudentListItem>;
};

export type HomeroomStudentListItem = {
  __typename?: 'HomeroomStudentListItem';
  gpa4?: Maybe<Scalars['Float']>;
  gpa10?: Maybe<Scalars['Float']>;
  lienHe?: Maybe<Array<Contact>>;
  maCN?: Maybe<Scalars['String']>;
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

export type HomeroomTrainingPointOverview = {
  __typename?: 'HomeroomTrainingPointOverview';
  gioi?: Maybe<Scalars['Int']>;
  kha?: Maybe<Scalars['Int']>;
  trungBinh?: Maybe<Scalars['Int']>;
  trungBinhKha?: Maybe<Scalars['Int']>;
  xuatSac?: Maybe<Scalars['Int']>;
  yeu?: Maybe<Scalars['Int']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accountAdd: AccountAddResponse;
  accountDelete: AccountDeleteResponse;
  accountEdit: AccountEditResponse;
  editPassword?: Maybe<MutationStatusReponse>;
  forgotPassword?: Maybe<MutationStatusReponse>;
  login?: Maybe<LoginResponse>;
  noteAdd: NoteAddResponse;
  noteDelete: NoteDeleteResponse;
  noteEdit: NoteEditResponse;
  resetPassword?: Maybe<MutationStatusReponse>;
  studentAddContact: StudentContactResponse;
  studentAddParentInfo: StudentParentInfo;
  studentDeleteContact: StudentDeleteContactResponse;
  studentDeleteParentInfo: StudentDeleteParentInfoResponse;
  studentEditContact: StudentContactResponse;
  studentEditParentInfo: StudentParentInfo;
  tagAdd: Tag;
  tagDelete: TagDeleteResponse;
  tagEdit: Tag;
};

export type MutationAccountAddArgs = {
  payload: AccountAddInput;
};

export type MutationAccountDeleteArgs = {
  accountId: Scalars['Int'];
};

export type MutationAccountEditArgs = {
  accountId: Scalars['Int'];
  payload: AccountEditInput;
};

export type MutationEditPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
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

export type MutationStudentAddContactArgs = {
  payload: StudentAddContactInput;
  studentId: Scalars['String'];
};

export type MutationStudentAddParentInfoArgs = {
  payload: StudentAddParentInfoInput;
  studentId: Scalars['String'];
};

export type MutationStudentDeleteContactArgs = {
  contactId: Scalars['Int'];
};

export type MutationStudentDeleteParentInfoArgs = {
  parentId: Scalars['Int'];
};

export type MutationStudentEditContactArgs = {
  contactId: Scalars['Int'];
  payload: StudentEditContactInput;
};

export type MutationStudentEditParentInfoArgs = {
  parentId: Scalars['Int'];
  payload: StudentEditParentInfoInput;
};

export type MutationTagAddArgs = {
  payload: TagAddInput;
};

export type MutationTagDeleteArgs = {
  tagId: Scalars['Int'];
};

export type MutationTagEditArgs = {
  payload: TagEditInput;
  tagId: Scalars['Int'];
};

export type MutationStatusReponse = {
  __typename?: 'MutationStatusReponse';
  status?: Maybe<Scalars['Int']>;
};

export type NoteAddInput = {
  maSV?: InputMaybe<Scalars['String']>;
  maTag: Array<Scalars['Int']>;
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type NoteAddResponse = {
  __typename?: 'NoteAddResponse';
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteDeleteResponse = {
  __typename?: 'NoteDeleteResponse';
  status: Scalars['Int'];
};

export type NoteDetail = {
  __typename?: 'NoteDetail';
  ghiChuHinhAnh: Array<NoteImage>;
  ghiChuTag: Array<NoteTag>;
  maGC: Scalars['Int'];
  noiDung: Scalars['String'];
  thoiGianSua?: Maybe<Scalars['String']>;
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
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteImage = {
  __typename?: 'NoteImage';
  stt: Scalars['Int'];
  url: Scalars['String'];
};

export type NoteListItem = {
  __typename?: 'NoteListItem';
  maGC: Scalars['Int'];
  maSV?: Maybe<Scalars['String']>;
  noiDung: Scalars['String'];
  thoiGianSua?: Maybe<Scalars['String']>;
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteTag = {
  __typename?: 'NoteTag';
  maTag: Scalars['Int'];
  tenTag: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  accountList: AccountList;
  homeroomDetail: HomeroomDetail;
  homeroomExamAbsentListByTerm: HomeroomExamAbsentList;
  homeroomExamPostponedListByTerm: HomeroomExamPostponedList;
  homeroomFailListByTerm: HomeroomFailList;
  homeroomFinalResultListByTerm: HomeroomFinalResultList;
  homeroomList: HomeroomList;
  homeroomNotEnrolledListByTerm: HomeroomNotEnrolledList;
  homeroomOverviewReportByTerm: HomeroomOverviewReport;
  homeroomPostponeExamListByTerm: HomeroomPostponeExamList;
  homeroomStudentList: HomeroomStudentList;
  homeroomTermList: HomeroomTermList;
  noteDetail: NoteDetail;
  noteList: Array<NoteListItem>;
  studentAllTerms: StudentAllTerms;
  studentAveragePointByTerm: StudentAveragePoint;
  studentDetail: StudentDetail;
  studentDetailSubjectsResult: StudentDetailSubjectsResult;
  studentNoteList: Array<StudentNote>;
  studentOverviewResult: StudentOverviewResult;
  studentParentInfoList: Array<StudentParentInfo>;
  studentSubjectsByTerm: StudentSubjectsByTerm;
  studentTrainingPointByTerm: StudentTrainingPoint;
  tagList: TagList;
};

export type QueryHomeroomDetailArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomExamAbsentListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomExamPostponedListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomFailListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomFinalResultListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomNotEnrolledListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomOverviewReportByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
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

export type QueryStudentAllTermsArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentAveragePointByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentDetailArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentDetailSubjectsResultArgs = {
  studentId: Scalars['String'];
  subject: Scalars['String'];
};

export type QueryStudentNoteListArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentOverviewResultArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentParentInfoListArgs = {
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

export type StudentAddContactInput = {
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentAddParentInfoInput = {
  lienHePH: Array<StudentParentContactInput>;
  quanHe: Scalars['String'];
  sdt: Scalars['String'];
  tenPH: Scalars['String'];
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

export type StudentContact = {
  __typename?: 'StudentContact';
  maLHSV: Scalars['Int'];
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentContactResponse = {
  __typename?: 'StudentContactResponse';
  maLHSV: Scalars['Int'];
  maSV: Scalars['String'];
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentDeleteContactResponse = {
  __typename?: 'StudentDeleteContactResponse';
  status: Scalars['Int'];
};

export type StudentDeleteParentInfoResponse = {
  __typename?: 'StudentDeleteParentInfoResponse';
  status: Scalars['Int'];
};

export type StudentDetail = {
  __typename?: 'StudentDetail';
  dob: Scalars['String'];
  emailCaNhan: Scalars['String'];
  emailSV: Scalars['String'];
  gioiTinh: Scalars['Int'];
  gpa_4?: Maybe<Scalars['Float']>;
  gpa_10?: Maybe<Scalars['Float']>;
  lienHeSV?: Maybe<Array<StudentContact>>;
  maSH: Scalars['String'];
  maSV: Scalars['String'];
  ngoaiNgu: Scalars['Boolean'];
  sdt: Scalars['String'];
  tenCN?: Maybe<Scalars['String']>;
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
  xepLoai?: Maybe<Scalars['String']>;
};

export type StudentDetailSubjectsResult = {
  __typename?: 'StudentDetailSubjectsResult';
  monHoc: Array<SubjectDetailResult>;
  tichLuy: Scalars['Int'];
};

export type StudentEditContactInput = {
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentEditParentInfoInput = {
  lienHePH: Array<StudentParentContactInput>;
  quanHe: Scalars['String'];
  sdt: Scalars['String'];
  tenPH: Scalars['String'];
};

export type StudentNote = {
  __typename?: 'StudentNote';
  ghiChuTag: Array<StudentTagListItem>;
  maGC: Scalars['Int'];
  noiDung: Scalars['String'];
  thoiGianSua: Scalars['String'];
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type StudentOverviewResult = {
  __typename?: 'StudentOverviewResult';
  chuyenNganh: Scalars['Int'];
  coSoNganh: Scalars['Int'];
  daiCuong: Scalars['Int'];
  dtb: Scalars['Float'];
  tenCN: Scalars['String'];
  tongTC: Scalars['Int'];
  totNghiep: Scalars['Int'];
  tuChonChuyenNganh: Scalars['Int'];
  tuChonTuDo: Scalars['Int'];
};

export type StudentParentContact = {
  __typename?: 'StudentParentContact';
  maLHPH?: Maybe<Scalars['Int']>;
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentParentContactInput = {
  maLHPH?: InputMaybe<Scalars['Int']>;
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type StudentParentInfo = {
  __typename?: 'StudentParentInfo';
  lienHePH: Array<StudentParentContact>;
  maPH: Scalars['Int'];
  quanHe: Scalars['String'];
  sdt: Scalars['String'];
  sua: Scalars['Boolean'];
  tenPH: Scalars['String'];
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

export type StudentTag = {
  __typename?: 'StudentTag';
  maTag: Scalars['Int'];
  tenTag: Scalars['String'];
};

export type StudentTagListItem = {
  __typename?: 'StudentTagListItem';
  tag?: Maybe<StudentTag>;
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

export type SubjectDetailResult = {
  __typename?: 'SubjectDetailResult';
  diem: Scalars['Float'];
  hocKy: Scalars['Int'];
  maMH: Scalars['String'];
  namHoc: Scalars['Int'];
  soTC: Scalars['Int'];
  tenMH: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  maTag: Scalars['Int'];
  tenTag: Scalars['String'];
};

export type TagAddInput = {
  tenTag: Scalars['String'];
};

export type TagDeleteResponse = {
  __typename?: 'TagDeleteResponse';
  status: Scalars['Int'];
};

export type TagEditInput = {
  tenTag: Scalars['String'];
};

export type TagList = {
  __typename?: 'TagList';
  tags: Array<Tag>;
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
  AccountAddInput: AccountAddInput;
  AccountAddResponse: ResolverTypeWrapper<AccountAddResponse>;
  AccountDeleteResponse: ResolverTypeWrapper<AccountDeleteResponse>;
  AccountEditInput: AccountEditInput;
  AccountEditResponse: ResolverTypeWrapper<AccountEditResponse>;
  AccountList: ResolverTypeWrapper<AccountList>;
  AccountListItem: ResolverTypeWrapper<AccountListItem>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contact: ResolverTypeWrapper<Contact>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HomeroomDetail: ResolverTypeWrapper<HomeroomDetail>;
  HomeroomExamAbsentList: ResolverTypeWrapper<HomeroomExamAbsentList>;
  HomeroomExamAbsentListItem: ResolverTypeWrapper<HomeroomExamAbsentListItem>;
  HomeroomExamPostponedList: ResolverTypeWrapper<HomeroomExamPostponedList>;
  HomeroomExamPostponedListItem: ResolverTypeWrapper<HomeroomExamPostponedListItem>;
  HomeroomFailList: ResolverTypeWrapper<HomeroomFailList>;
  HomeroomFailListItem: ResolverTypeWrapper<HomeroomFailListItem>;
  HomeroomFinalResultList: ResolverTypeWrapper<HomeroomFinalResultList>;
  HomeroomFinalResultListItem: ResolverTypeWrapper<HomeroomFinalResultListItem>;
  HomeroomLearnOverview: ResolverTypeWrapper<HomeroomLearnOverview>;
  HomeroomList: ResolverTypeWrapper<HomeroomList>;
  HomeroomListItem: ResolverTypeWrapper<HomeroomListItem>;
  HomeroomNotEnrolledList: ResolverTypeWrapper<HomeroomNotEnrolledList>;
  HomeroomNotEnrolledListItem: ResolverTypeWrapper<HomeroomNotEnrolledListItem>;
  HomeroomNumberOverview: ResolverTypeWrapper<HomeroomNumberOverview>;
  HomeroomOverviewReport: ResolverTypeWrapper<HomeroomOverviewReport>;
  HomeroomPostponeExamList: ResolverTypeWrapper<HomeroomPostponeExamList>;
  HomeroomPostponeExamListItem: ResolverTypeWrapper<HomeroomPostponeExamListItem>;
  HomeroomStudentList: ResolverTypeWrapper<HomeroomStudentList>;
  HomeroomStudentListItem: ResolverTypeWrapper<HomeroomStudentListItem>;
  HomeroomTermList: ResolverTypeWrapper<HomeroomTermList>;
  HomeroomTermListItem: ResolverTypeWrapper<HomeroomTermListItem>;
  HomeroomTrainingPointOverview: ResolverTypeWrapper<HomeroomTrainingPointOverview>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationStatusReponse: ResolverTypeWrapper<MutationStatusReponse>;
  NoteAddInput: NoteAddInput;
  NoteAddResponse: ResolverTypeWrapper<NoteAddResponse>;
  NoteDeleteResponse: ResolverTypeWrapper<NoteDeleteResponse>;
  NoteDetail: ResolverTypeWrapper<NoteDetail>;
  NoteEditInput: NoteEditInput;
  NoteEditResponse: ResolverTypeWrapper<NoteEditResponse>;
  NoteImage: ResolverTypeWrapper<NoteImage>;
  NoteListItem: ResolverTypeWrapper<NoteListItem>;
  NoteTag: ResolverTypeWrapper<NoteTag>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StudentAddContactInput: StudentAddContactInput;
  StudentAddParentInfoInput: StudentAddParentInfoInput;
  StudentAllTerms: ResolverTypeWrapper<StudentAllTerms>;
  StudentAveragePoint: ResolverTypeWrapper<StudentAveragePoint>;
  StudentContact: ResolverTypeWrapper<StudentContact>;
  StudentContactResponse: ResolverTypeWrapper<StudentContactResponse>;
  StudentDeleteContactResponse: ResolverTypeWrapper<StudentDeleteContactResponse>;
  StudentDeleteParentInfoResponse: ResolverTypeWrapper<StudentDeleteParentInfoResponse>;
  StudentDetail: ResolverTypeWrapper<StudentDetail>;
  StudentDetailSubjectsResult: ResolverTypeWrapper<StudentDetailSubjectsResult>;
  StudentEditContactInput: StudentEditContactInput;
  StudentEditParentInfoInput: StudentEditParentInfoInput;
  StudentNote: ResolverTypeWrapper<StudentNote>;
  StudentOverviewResult: ResolverTypeWrapper<StudentOverviewResult>;
  StudentParentContact: ResolverTypeWrapper<StudentParentContact>;
  StudentParentContactInput: StudentParentContactInput;
  StudentParentInfo: ResolverTypeWrapper<StudentParentInfo>;
  StudentSubject: ResolverTypeWrapper<StudentSubject>;
  StudentSubjectsByTerm: ResolverTypeWrapper<StudentSubjectsByTerm>;
  StudentTag: ResolverTypeWrapper<StudentTag>;
  StudentTagListItem: ResolverTypeWrapper<StudentTagListItem>;
  StudentTerm: ResolverTypeWrapper<StudentTerm>;
  StudentTrainingPoint: ResolverTypeWrapper<StudentTrainingPoint>;
  SubjectDetailResult: ResolverTypeWrapper<SubjectDetailResult>;
  Tag: ResolverTypeWrapper<Tag>;
  TagAddInput: TagAddInput;
  TagDeleteResponse: ResolverTypeWrapper<TagDeleteResponse>;
  TagEditInput: TagEditInput;
  TagList: ResolverTypeWrapper<TagList>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountAddInput: AccountAddInput;
  AccountAddResponse: AccountAddResponse;
  AccountDeleteResponse: AccountDeleteResponse;
  AccountEditInput: AccountEditInput;
  AccountEditResponse: AccountEditResponse;
  AccountList: AccountList;
  AccountListItem: AccountListItem;
  Boolean: Scalars['Boolean'];
  Contact: Contact;
  Float: Scalars['Float'];
  HomeroomDetail: HomeroomDetail;
  HomeroomExamAbsentList: HomeroomExamAbsentList;
  HomeroomExamAbsentListItem: HomeroomExamAbsentListItem;
  HomeroomExamPostponedList: HomeroomExamPostponedList;
  HomeroomExamPostponedListItem: HomeroomExamPostponedListItem;
  HomeroomFailList: HomeroomFailList;
  HomeroomFailListItem: HomeroomFailListItem;
  HomeroomFinalResultList: HomeroomFinalResultList;
  HomeroomFinalResultListItem: HomeroomFinalResultListItem;
  HomeroomLearnOverview: HomeroomLearnOverview;
  HomeroomList: HomeroomList;
  HomeroomListItem: HomeroomListItem;
  HomeroomNotEnrolledList: HomeroomNotEnrolledList;
  HomeroomNotEnrolledListItem: HomeroomNotEnrolledListItem;
  HomeroomNumberOverview: HomeroomNumberOverview;
  HomeroomOverviewReport: HomeroomOverviewReport;
  HomeroomPostponeExamList: HomeroomPostponeExamList;
  HomeroomPostponeExamListItem: HomeroomPostponeExamListItem;
  HomeroomStudentList: HomeroomStudentList;
  HomeroomStudentListItem: HomeroomStudentListItem;
  HomeroomTermList: HomeroomTermList;
  HomeroomTermListItem: HomeroomTermListItem;
  HomeroomTrainingPointOverview: HomeroomTrainingPointOverview;
  Int: Scalars['Int'];
  LoginResponse: LoginResponse;
  Mutation: {};
  MutationStatusReponse: MutationStatusReponse;
  NoteAddInput: NoteAddInput;
  NoteAddResponse: NoteAddResponse;
  NoteDeleteResponse: NoteDeleteResponse;
  NoteDetail: NoteDetail;
  NoteEditInput: NoteEditInput;
  NoteEditResponse: NoteEditResponse;
  NoteImage: NoteImage;
  NoteListItem: NoteListItem;
  NoteTag: NoteTag;
  Query: {};
  String: Scalars['String'];
  StudentAddContactInput: StudentAddContactInput;
  StudentAddParentInfoInput: StudentAddParentInfoInput;
  StudentAllTerms: StudentAllTerms;
  StudentAveragePoint: StudentAveragePoint;
  StudentContact: StudentContact;
  StudentContactResponse: StudentContactResponse;
  StudentDeleteContactResponse: StudentDeleteContactResponse;
  StudentDeleteParentInfoResponse: StudentDeleteParentInfoResponse;
  StudentDetail: StudentDetail;
  StudentDetailSubjectsResult: StudentDetailSubjectsResult;
  StudentEditContactInput: StudentEditContactInput;
  StudentEditParentInfoInput: StudentEditParentInfoInput;
  StudentNote: StudentNote;
  StudentOverviewResult: StudentOverviewResult;
  StudentParentContact: StudentParentContact;
  StudentParentContactInput: StudentParentContactInput;
  StudentParentInfo: StudentParentInfo;
  StudentSubject: StudentSubject;
  StudentSubjectsByTerm: StudentSubjectsByTerm;
  StudentTag: StudentTag;
  StudentTagListItem: StudentTagListItem;
  StudentTerm: StudentTerm;
  StudentTrainingPoint: StudentTrainingPoint;
  SubjectDetailResult: SubjectDetailResult;
  Tag: Tag;
  TagAddInput: TagAddInput;
  TagDeleteResponse: TagDeleteResponse;
  TagEditInput: TagEditInput;
  TagList: TagList;
};

export type AccountAddResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountAddResponse'] = ResolversParentTypes['AccountAddResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountDeleteResponse'] = ResolversParentTypes['AccountDeleteResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountEditResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountEditResponse'] = ResolversParentTypes['AccountEditResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountList'] = ResolversParentTypes['AccountList']
> = {
  danhSachTaiKhoan?: Resolver<
    Array<ResolversTypes['AccountListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountListItem'] = ResolversParentTypes['AccountListItem']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gvcn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  gvu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hoatDong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type HomeroomExamAbsentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentList'] = ResolversParentTypes['HomeroomExamAbsentList']
> = {
  danhSachVangThi?: Resolver<
    Array<ResolversTypes['HomeroomExamAbsentListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamAbsentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentListItem'] = ResolversParentTypes['HomeroomExamAbsentListItem']
> = {
  hoTen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lopHP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monHoc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamPostponedListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamPostponedList'] = ResolversParentTypes['HomeroomExamPostponedList']
> = {
  danhSachHoanThi?: Resolver<
    Array<ResolversTypes['HomeroomExamPostponedListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamPostponedListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamPostponedListItem'] = ResolversParentTypes['HomeroomExamPostponedListItem']
> = {
  hoTen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lopHP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monHoc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type HomeroomFinalResultListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFinalResultList'] = ResolversParentTypes['HomeroomFinalResultList']
> = {
  danhSachKetQua?: Resolver<
    Array<ResolversTypes['HomeroomFinalResultListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFinalResultListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFinalResultListItem'] = ResolversParentTypes['HomeroomFinalResultListItem']
> = {
  dtb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hoTen?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xepLoai?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomLearnOverviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomLearnOverview'] = ResolversParentTypes['HomeroomLearnOverview']
> = {
  chungChiNgoaiNgu?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  gioi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kha?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trungBinh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trungBinhKha?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  xuatSac?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yeu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomList'] = ResolversParentTypes['HomeroomList']
> = {
  lopChuNhiem?: Resolver<
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

export type HomeroomNumberOverviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomNumberOverview'] = ResolversParentTypes['HomeroomNumberOverview']
> = {
  nam?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nu?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tong?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomOverviewReportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomOverviewReport'] = ResolversParentTypes['HomeroomOverviewReport']
> = {
  drl?: Resolver<
    ResolversTypes['HomeroomTrainingPointOverview'],
    ParentType,
    ContextType
  >;
  hocTap?: Resolver<
    ResolversTypes['HomeroomLearnOverview'],
    ParentType,
    ContextType
  >;
  siSo?: Resolver<
    ResolversTypes['HomeroomNumberOverview'],
    ParentType,
    ContextType
  >;
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

export type HomeroomStudentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentList'] = ResolversParentTypes['HomeroomStudentList']
> = {
  sinhVien?: Resolver<
    Array<ResolversTypes['HomeroomStudentListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomStudentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentListItem'] = ResolversParentTypes['HomeroomStudentListItem']
> = {
  gpa4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gpa10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lienHe?: Resolver<
    Maybe<Array<ResolversTypes['Contact']>>,
    ParentType,
    ContextType
  >;
  maCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type HomeroomTrainingPointOverviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomTrainingPointOverview'] = ResolversParentTypes['HomeroomTrainingPointOverview']
> = {
  gioi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kha?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trungBinh?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trungBinhKha?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  xuatSac?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yeu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  accountAdd?: Resolver<
    ResolversTypes['AccountAddResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAccountAddArgs, 'payload'>
  >;
  accountDelete?: Resolver<
    ResolversTypes['AccountDeleteResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAccountDeleteArgs, 'accountId'>
  >;
  accountEdit?: Resolver<
    ResolversTypes['AccountEditResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAccountEditArgs, 'accountId' | 'payload'>
  >;
  editPassword?: Resolver<
    Maybe<ResolversTypes['MutationStatusReponse']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationEditPasswordArgs,
      'email' | 'newPassword' | 'password' | 'passwordConfirm'
    >
  >;
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
  noteAdd?: Resolver<
    ResolversTypes['NoteAddResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationNoteAddArgs, 'payload'>
  >;
  noteDelete?: Resolver<
    ResolversTypes['NoteDeleteResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationNoteDeleteArgs, 'noteId'>
  >;
  noteEdit?: Resolver<
    ResolversTypes['NoteEditResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationNoteEditArgs, 'noteId' | 'payload'>
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
  studentAddContact?: Resolver<
    ResolversTypes['StudentContactResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentAddContactArgs, 'payload' | 'studentId'>
  >;
  studentAddParentInfo?: Resolver<
    ResolversTypes['StudentParentInfo'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentAddParentInfoArgs, 'payload' | 'studentId'>
  >;
  studentDeleteContact?: Resolver<
    ResolversTypes['StudentDeleteContactResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentDeleteContactArgs, 'contactId'>
  >;
  studentDeleteParentInfo?: Resolver<
    ResolversTypes['StudentDeleteParentInfoResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentDeleteParentInfoArgs, 'parentId'>
  >;
  studentEditContact?: Resolver<
    ResolversTypes['StudentContactResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentEditContactArgs, 'contactId' | 'payload'>
  >;
  studentEditParentInfo?: Resolver<
    ResolversTypes['StudentParentInfo'],
    ParentType,
    ContextType,
    RequireFields<MutationStudentEditParentInfoArgs, 'parentId' | 'payload'>
  >;
  tagAdd?: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<MutationTagAddArgs, 'payload'>
  >;
  tagDelete?: Resolver<
    ResolversTypes['TagDeleteResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationTagDeleteArgs, 'tagId'>
  >;
  tagEdit?: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<MutationTagEditArgs, 'payload' | 'tagId'>
  >;
};

export type MutationStatusReponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutationStatusReponse'] = ResolversParentTypes['MutationStatusReponse']
> = {
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteAddResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteAddResponse'] = ResolversParentTypes['NoteAddResponse']
> = {
  noiDung?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteDeleteResponse'] = ResolversParentTypes['NoteDeleteResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteDetailResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteDetail'] = ResolversParentTypes['NoteDetail']
> = {
  ghiChuHinhAnh?: Resolver<
    Array<ResolversTypes['NoteImage']>,
    ParentType,
    ContextType
  >;
  ghiChuTag?: Resolver<
    Array<ResolversTypes['NoteTag']>,
    ParentType,
    ContextType
  >;
  maGC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  noiDung?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thoiGianSua?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  thoiGianTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteEditResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteEditResponse'] = ResolversParentTypes['NoteEditResponse']
> = {
  noiDung?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteImage'] = ResolversParentTypes['NoteImage']
> = {
  stt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteListItem'] = ResolversParentTypes['NoteListItem']
> = {
  maGC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maSV?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noiDung?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thoiGianSua?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  thoiGianTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteTag'] = ResolversParentTypes['NoteTag']
> = {
  maTag?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  accountList?: Resolver<
    ResolversTypes['AccountList'],
    ParentType,
    ContextType
  >;
  homeroomDetail?: Resolver<
    ResolversTypes['HomeroomDetail'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomDetailArgs, 'homeroomId'>
  >;
  homeroomExamAbsentListByTerm?: Resolver<
    ResolversTypes['HomeroomExamAbsentList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomExamAbsentListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomExamPostponedListByTerm?: Resolver<
    ResolversTypes['HomeroomExamPostponedList'],
    ParentType,
    ContextType,
    RequireFields<
      QueryHomeroomExamPostponedListByTermArgs,
      'homeroomId' | 'term'
    >
  >;
  homeroomFailListByTerm?: Resolver<
    ResolversTypes['HomeroomFailList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomFailListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomFinalResultListByTerm?: Resolver<
    ResolversTypes['HomeroomFinalResultList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomFinalResultListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomList?: Resolver<
    ResolversTypes['HomeroomList'],
    ParentType,
    ContextType
  >;
  homeroomNotEnrolledListByTerm?: Resolver<
    ResolversTypes['HomeroomNotEnrolledList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomNotEnrolledListByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomOverviewReportByTerm?: Resolver<
    ResolversTypes['HomeroomOverviewReport'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomOverviewReportByTermArgs, 'homeroomId' | 'term'>
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
    ResolversTypes['HomeroomStudentList'],
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
  noteDetail?: Resolver<
    ResolversTypes['NoteDetail'],
    ParentType,
    ContextType,
    RequireFields<QueryNoteDetailArgs, 'noteId'>
  >;
  noteList?: Resolver<
    Array<ResolversTypes['NoteListItem']>,
    ParentType,
    ContextType
  >;
  studentAllTerms?: Resolver<
    ResolversTypes['StudentAllTerms'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAllTermsArgs, 'studentId'>
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
  studentDetailSubjectsResult?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentDetailSubjectsResultArgs, 'studentId' | 'subject'>
  >;
  studentNoteList?: Resolver<
    Array<ResolversTypes['StudentNote']>,
    ParentType,
    ContextType,
    RequireFields<QueryStudentNoteListArgs, 'studentId'>
  >;
  studentOverviewResult?: Resolver<
    ResolversTypes['StudentOverviewResult'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentOverviewResultArgs, 'studentId'>
  >;
  studentParentInfoList?: Resolver<
    Array<ResolversTypes['StudentParentInfo']>,
    ParentType,
    ContextType,
    RequireFields<QueryStudentParentInfoListArgs, 'studentId'>
  >;
  studentSubjectsByTerm?: Resolver<
    ResolversTypes['StudentSubjectsByTerm'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentSubjectsByTermArgs, 'studentId' | 'term'>
  >;
  studentTrainingPointByTerm?: Resolver<
    ResolversTypes['StudentTrainingPoint'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentTrainingPointByTermArgs, 'studentId' | 'term'>
  >;
  tagList?: Resolver<ResolversTypes['TagList'], ParentType, ContextType>;
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

export type StudentContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentContact'] = ResolversParentTypes['StudentContact']
> = {
  maLHSV?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mxh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentContactResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentContactResponse'] = ResolversParentTypes['StudentContactResponse']
> = {
  maLHSV?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mxh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentDeleteContactResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentDeleteContactResponse'] = ResolversParentTypes['StudentDeleteContactResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentDeleteParentInfoResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentDeleteParentInfoResponse'] = ResolversParentTypes['StudentDeleteParentInfoResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  gpa_4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gpa_10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lienHeSV?: Resolver<
    Maybe<Array<ResolversTypes['StudentContact']>>,
    ParentType,
    ContextType
  >;
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ngoaiNgu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xepLoai?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentDetailSubjectsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentDetailSubjectsResult'] = ResolversParentTypes['StudentDetailSubjectsResult']
> = {
  monHoc?: Resolver<
    Array<ResolversTypes['SubjectDetailResult']>,
    ParentType,
    ContextType
  >;
  tichLuy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentNoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentNote'] = ResolversParentTypes['StudentNote']
> = {
  ghiChuTag?: Resolver<
    Array<ResolversTypes['StudentTagListItem']>,
    ParentType,
    ContextType
  >;
  maGC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  noiDung?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thoiGianSua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thoiGianTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentOverviewResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentOverviewResult'] = ResolversParentTypes['StudentOverviewResult']
> = {
  chuyenNganh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  coSoNganh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  daiCuong?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tenCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tongTC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totNghiep?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tuChonChuyenNganh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tuChonTuDo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentParentContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentParentContact'] = ResolversParentTypes['StudentParentContact']
> = {
  maLHPH?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mxh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentParentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentParentInfo'] = ResolversParentTypes['StudentParentInfo']
> = {
  lienHePH?: Resolver<
    Array<ResolversTypes['StudentParentContact']>,
    ParentType,
    ContextType
  >;
  maPH?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quanHe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sua?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tenPH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type StudentTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTag'] = ResolversParentTypes['StudentTag']
> = {
  maTag?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentTagListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTagListItem'] = ResolversParentTypes['StudentTagListItem']
> = {
  tag?: Resolver<Maybe<ResolversTypes['StudentTag']>, ParentType, ContextType>;
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

export type SubjectDetailResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubjectDetailResult'] = ResolversParentTypes['SubjectDetailResult']
> = {
  diem?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hocKy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namHoc?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soTC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = {
  maTag?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagDeleteResponse'] = ResolversParentTypes['TagDeleteResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagList'] = ResolversParentTypes['TagList']
> = {
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountAddResponse?: AccountAddResponseResolvers<ContextType>;
  AccountDeleteResponse?: AccountDeleteResponseResolvers<ContextType>;
  AccountEditResponse?: AccountEditResponseResolvers<ContextType>;
  AccountList?: AccountListResolvers<ContextType>;
  AccountListItem?: AccountListItemResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  HomeroomDetail?: HomeroomDetailResolvers<ContextType>;
  HomeroomExamAbsentList?: HomeroomExamAbsentListResolvers<ContextType>;
  HomeroomExamAbsentListItem?: HomeroomExamAbsentListItemResolvers<ContextType>;
  HomeroomExamPostponedList?: HomeroomExamPostponedListResolvers<ContextType>;
  HomeroomExamPostponedListItem?: HomeroomExamPostponedListItemResolvers<ContextType>;
  HomeroomFailList?: HomeroomFailListResolvers<ContextType>;
  HomeroomFailListItem?: HomeroomFailListItemResolvers<ContextType>;
  HomeroomFinalResultList?: HomeroomFinalResultListResolvers<ContextType>;
  HomeroomFinalResultListItem?: HomeroomFinalResultListItemResolvers<ContextType>;
  HomeroomLearnOverview?: HomeroomLearnOverviewResolvers<ContextType>;
  HomeroomList?: HomeroomListResolvers<ContextType>;
  HomeroomListItem?: HomeroomListItemResolvers<ContextType>;
  HomeroomNotEnrolledList?: HomeroomNotEnrolledListResolvers<ContextType>;
  HomeroomNotEnrolledListItem?: HomeroomNotEnrolledListItemResolvers<ContextType>;
  HomeroomNumberOverview?: HomeroomNumberOverviewResolvers<ContextType>;
  HomeroomOverviewReport?: HomeroomOverviewReportResolvers<ContextType>;
  HomeroomPostponeExamList?: HomeroomPostponeExamListResolvers<ContextType>;
  HomeroomPostponeExamListItem?: HomeroomPostponeExamListItemResolvers<ContextType>;
  HomeroomStudentList?: HomeroomStudentListResolvers<ContextType>;
  HomeroomStudentListItem?: HomeroomStudentListItemResolvers<ContextType>;
  HomeroomTermList?: HomeroomTermListResolvers<ContextType>;
  HomeroomTermListItem?: HomeroomTermListItemResolvers<ContextType>;
  HomeroomTrainingPointOverview?: HomeroomTrainingPointOverviewResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationStatusReponse?: MutationStatusReponseResolvers<ContextType>;
  NoteAddResponse?: NoteAddResponseResolvers<ContextType>;
  NoteDeleteResponse?: NoteDeleteResponseResolvers<ContextType>;
  NoteDetail?: NoteDetailResolvers<ContextType>;
  NoteEditResponse?: NoteEditResponseResolvers<ContextType>;
  NoteImage?: NoteImageResolvers<ContextType>;
  NoteListItem?: NoteListItemResolvers<ContextType>;
  NoteTag?: NoteTagResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StudentAllTerms?: StudentAllTermsResolvers<ContextType>;
  StudentAveragePoint?: StudentAveragePointResolvers<ContextType>;
  StudentContact?: StudentContactResolvers<ContextType>;
  StudentContactResponse?: StudentContactResponseResolvers<ContextType>;
  StudentDeleteContactResponse?: StudentDeleteContactResponseResolvers<ContextType>;
  StudentDeleteParentInfoResponse?: StudentDeleteParentInfoResponseResolvers<ContextType>;
  StudentDetail?: StudentDetailResolvers<ContextType>;
  StudentDetailSubjectsResult?: StudentDetailSubjectsResultResolvers<ContextType>;
  StudentNote?: StudentNoteResolvers<ContextType>;
  StudentOverviewResult?: StudentOverviewResultResolvers<ContextType>;
  StudentParentContact?: StudentParentContactResolvers<ContextType>;
  StudentParentInfo?: StudentParentInfoResolvers<ContextType>;
  StudentSubject?: StudentSubjectResolvers<ContextType>;
  StudentSubjectsByTerm?: StudentSubjectsByTermResolvers<ContextType>;
  StudentTag?: StudentTagResolvers<ContextType>;
  StudentTagListItem?: StudentTagListItemResolvers<ContextType>;
  StudentTerm?: StudentTermResolvers<ContextType>;
  StudentTrainingPoint?: StudentTrainingPointResolvers<ContextType>;
  SubjectDetailResult?: SubjectDetailResultResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagDeleteResponse?: TagDeleteResponseResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
};
