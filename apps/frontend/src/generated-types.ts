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
  studentAllSubjects: StudentAllSubjects;
  studentAllTerms: StudentAllTerms;
  studentAveragePoint: StudentAveragePoint;
  studentAveragePointByTerm: StudentAveragePoint;
  studentDetail: StudentDetail;
  studentDetailSubjectsResult: StudentDetailSubjectsResult;
  studentNoteList: StudentNoteList;
  studentOverviewResult: StudentOverviewResult;
  studentParentInfoList: StudentParentInfoList;
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

export type QueryNoteDetailArgs = {
  noteId: Scalars['Int'];
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

export type QueryStudentTrainingPointArgs = {
  studentId: Scalars['String'];
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
  gpa_4: Scalars['Float'];
  gpa_10: Scalars['Float'];
  lienHeSV: Array<StudentContact>;
  maSH: Scalars['String'];
  maSV: Scalars['String'];
  ngoaiNgu: Scalars['Boolean'];
  sdt: Scalars['String'];
  tenCN: Scalars['String'];
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
  xepLoai: Scalars['String'];
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
  maGC: Scalars['Int'];
  noiDung: Scalars['String'];
  tag: Array<Maybe<Scalars['String']>>;
  thoiGianSua: Scalars['String'];
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type StudentNoteList = {
  __typename?: 'StudentNoteList';
  danhSachGhiChu: Array<StudentNote>;
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

export type StudentParentInfoList = {
  __typename?: 'StudentParentInfoList';
  dsPhuHuynh: Array<StudentParentInfo>;
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

export type SubjectDetailResult = {
  __typename?: 'SubjectDetailResult';
  diem: Scalars['Float'];
  hocKy: Scalars['Int'];
  maMH: Scalars['String'];
  namHoc: Scalars['Int'];
  soTC: Scalars['Int'];
  tenMH: Scalars['String'];
};

export type EditPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  newPassword: Scalars['String'];
  passwordConfirm: Scalars['String'];
}>;

export type EditPasswordMutation = {
  __typename?: 'Mutation';
  editPassword?:
    | {
        __typename?: 'MutationStatusReponse';
        status?: number | null | undefined;
      }
    | null
    | undefined;
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

export type StudentAddContactMutationVariables = Exact<{
  studentId: Scalars['String'];
  payload: StudentAddContactInput;
}>;

export type StudentAddContactMutation = {
  __typename?: 'Mutation';
  studentAddContact: {
    __typename?: 'StudentContactResponse';
    maLHSV: number;
    maSV: string;
    mxh: string;
    url: string;
  };
};

export type StudentAddParentInfoMutationVariables = Exact<{
  studentId: Scalars['String'];
  payload: StudentAddParentInfoInput;
}>;

export type StudentAddParentInfoMutation = {
  __typename?: 'Mutation';
  studentAddParentInfo: {
    __typename?: 'StudentParentInfo';
    maPH: number;
    tenPH: string;
    quanHe: string;
    sdt: string;
    sua: boolean;
    lienHePH: Array<{
      __typename?: 'StudentParentContact';
      maLHPH?: number | null | undefined;
      mxh: string;
      url: string;
    }>;
  };
};

export type StudentDeleteContactMutationVariables = Exact<{
  contactId: Scalars['Int'];
}>;

export type StudentDeleteContactMutation = {
  __typename?: 'Mutation';
  studentDeleteContact: {
    __typename?: 'StudentDeleteContactResponse';
    status: number;
  };
};

export type StudentDeleteParentInfoMutationVariables = Exact<{
  parentId: Scalars['Int'];
}>;

export type StudentDeleteParentInfoMutation = {
  __typename?: 'Mutation';
  studentDeleteParentInfo: {
    __typename?: 'StudentDeleteParentInfoResponse';
    status: number;
  };
};

export type StudentEditContactMutationVariables = Exact<{
  contactId: Scalars['Int'];
  payload: StudentEditContactInput;
}>;

export type StudentEditContactMutation = {
  __typename?: 'Mutation';
  studentEditContact: {
    __typename?: 'StudentContactResponse';
    maLHSV: number;
    maSV: string;
    mxh: string;
    url: string;
  };
};

export type StudentEditParentInfoMutationVariables = Exact<{
  parentId: Scalars['Int'];
  payload: StudentEditParentInfoInput;
}>;

export type StudentEditParentInfoMutation = {
  __typename?: 'Mutation';
  studentEditParentInfo: {
    __typename?: 'StudentParentInfo';
    maPH: number;
    tenPH: string;
    quanHe: string;
    sdt: string;
    sua: boolean;
    lienHePH: Array<{
      __typename?: 'StudentParentContact';
      maLHPH?: number | null | undefined;
      mxh: string;
      url: string;
    }>;
  };
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

export type StudentDetailSubjectsResultQueryVariables = Exact<{
  studentId: Scalars['String'];
  subject: Scalars['String'];
}>;

export type StudentDetailSubjectsResultQuery = {
  __typename?: 'Query';
  studentDetailSubjectsResult: {
    __typename?: 'StudentDetailSubjectsResult';
    tichLuy: number;
    monHoc: Array<{
      __typename?: 'SubjectDetailResult';
      maMH: string;
      tenMH: string;
      soTC: number;
      namHoc: number;
      hocKy: number;
      diem: number;
    }>;
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
    tenCN: string;
    gpa_4: number;
    gpa_10: number;
    ngoaiNgu: boolean;
    tinhTrang: string;
    maSH: string;
    xepLoai: string;
    lienHeSV: Array<{
      __typename?: 'StudentContact';
      maLHSV: number;
      mxh: string;
      url: string;
    }>;
  };
};

export type StudentNoteListQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentNoteListQuery = {
  __typename?: 'Query';
  studentNoteList: {
    __typename?: 'StudentNoteList';
    danhSachGhiChu: Array<{
      __typename?: 'StudentNote';
      maGC: number;
      tag: Array<string | null | undefined>;
      tieuDe: string;
      noiDung: string;
      thoiGianTao: string;
      thoiGianSua: string;
    }>;
  };
};

export type StudentOverviewResultQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentOverviewResultQuery = {
  __typename?: 'Query';
  studentOverviewResult: {
    __typename?: 'StudentOverviewResult';
    tenCN: string;
    daiCuong: number;
    coSoNganh: number;
    chuyenNganh: number;
    tuChonTuDo: number;
    tuChonChuyenNganh: number;
    totNghiep: number;
    tongTC: number;
    dtb: number;
  };
};

export type StudentParentInfoListQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentParentInfoListQuery = {
  __typename?: 'Query';
  studentParentInfoList: {
    __typename?: 'StudentParentInfoList';
    dsPhuHuynh: Array<{
      __typename?: 'StudentParentInfo';
      maPH: number;
      tenPH: string;
      quanHe: string;
      sdt: string;
      sua: boolean;
      lienHePH: Array<{
        __typename?: 'StudentParentContact';
        maLHPH?: number | null | undefined;
        mxh: string;
        url: string;
      }>;
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

export const EditPasswordDocument = gql`
  mutation EditPassword(
    $email: String!
    $password: String!
    $newPassword: String!
    $passwordConfirm: String!
  ) {
    editPassword(
      email: $email
      password: $password
      newPassword: $newPassword
      passwordConfirm: $passwordConfirm
    ) {
      status
    }
  }
`;
export type EditPasswordMutationFn = Apollo.MutationFunction<
  EditPasswordMutation,
  EditPasswordMutationVariables
>;

/**
 * __useEditPasswordMutation__
 *
 * To run a mutation, you first call `useEditPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPasswordMutation, { data, loading, error }] = useEditPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      newPassword: // value for 'newPassword'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useEditPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditPasswordMutation,
    EditPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EditPasswordMutation,
    EditPasswordMutationVariables
  >(EditPasswordDocument, options);
}
export type EditPasswordMutationHookResult = ReturnType<
  typeof useEditPasswordMutation
>;
export type EditPasswordMutationResult =
  Apollo.MutationResult<EditPasswordMutation>;
export type EditPasswordMutationOptions = Apollo.BaseMutationOptions<
  EditPasswordMutation,
  EditPasswordMutationVariables
>;
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
export const StudentAddContactDocument = gql`
  mutation StudentAddContact(
    $studentId: String!
    $payload: StudentAddContactInput!
  ) {
    studentAddContact(studentId: $studentId, payload: $payload) {
      maLHSV
      maSV
      mxh
      url
    }
  }
`;
export type StudentAddContactMutationFn = Apollo.MutationFunction<
  StudentAddContactMutation,
  StudentAddContactMutationVariables
>;

/**
 * __useStudentAddContactMutation__
 *
 * To run a mutation, you first call `useStudentAddContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentAddContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentAddContactMutation, { data, loading, error }] = useStudentAddContactMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useStudentAddContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentAddContactMutation,
    StudentAddContactMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentAddContactMutation,
    StudentAddContactMutationVariables
  >(StudentAddContactDocument, options);
}
export type StudentAddContactMutationHookResult = ReturnType<
  typeof useStudentAddContactMutation
>;
export type StudentAddContactMutationResult =
  Apollo.MutationResult<StudentAddContactMutation>;
export type StudentAddContactMutationOptions = Apollo.BaseMutationOptions<
  StudentAddContactMutation,
  StudentAddContactMutationVariables
>;
export const StudentAddParentInfoDocument = gql`
  mutation StudentAddParentInfo(
    $studentId: String!
    $payload: StudentAddParentInfoInput!
  ) {
    studentAddParentInfo(studentId: $studentId, payload: $payload) {
      maPH
      tenPH
      quanHe
      sdt
      sua
      lienHePH {
        maLHPH
        mxh
        url
      }
    }
  }
`;
export type StudentAddParentInfoMutationFn = Apollo.MutationFunction<
  StudentAddParentInfoMutation,
  StudentAddParentInfoMutationVariables
>;

/**
 * __useStudentAddParentInfoMutation__
 *
 * To run a mutation, you first call `useStudentAddParentInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentAddParentInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentAddParentInfoMutation, { data, loading, error }] = useStudentAddParentInfoMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useStudentAddParentInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentAddParentInfoMutation,
    StudentAddParentInfoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentAddParentInfoMutation,
    StudentAddParentInfoMutationVariables
  >(StudentAddParentInfoDocument, options);
}
export type StudentAddParentInfoMutationHookResult = ReturnType<
  typeof useStudentAddParentInfoMutation
>;
export type StudentAddParentInfoMutationResult =
  Apollo.MutationResult<StudentAddParentInfoMutation>;
export type StudentAddParentInfoMutationOptions = Apollo.BaseMutationOptions<
  StudentAddParentInfoMutation,
  StudentAddParentInfoMutationVariables
>;
export const StudentDeleteContactDocument = gql`
  mutation StudentDeleteContact($contactId: Int!) {
    studentDeleteContact(contactId: $contactId) {
      status
    }
  }
`;
export type StudentDeleteContactMutationFn = Apollo.MutationFunction<
  StudentDeleteContactMutation,
  StudentDeleteContactMutationVariables
>;

/**
 * __useStudentDeleteContactMutation__
 *
 * To run a mutation, you first call `useStudentDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentDeleteContactMutation, { data, loading, error }] = useStudentDeleteContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *   },
 * });
 */
export function useStudentDeleteContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentDeleteContactMutation,
    StudentDeleteContactMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentDeleteContactMutation,
    StudentDeleteContactMutationVariables
  >(StudentDeleteContactDocument, options);
}
export type StudentDeleteContactMutationHookResult = ReturnType<
  typeof useStudentDeleteContactMutation
>;
export type StudentDeleteContactMutationResult =
  Apollo.MutationResult<StudentDeleteContactMutation>;
export type StudentDeleteContactMutationOptions = Apollo.BaseMutationOptions<
  StudentDeleteContactMutation,
  StudentDeleteContactMutationVariables
>;
export const StudentDeleteParentInfoDocument = gql`
  mutation StudentDeleteParentInfo($parentId: Int!) {
    studentDeleteParentInfo(parentId: $parentId) {
      status
    }
  }
`;
export type StudentDeleteParentInfoMutationFn = Apollo.MutationFunction<
  StudentDeleteParentInfoMutation,
  StudentDeleteParentInfoMutationVariables
>;

/**
 * __useStudentDeleteParentInfoMutation__
 *
 * To run a mutation, you first call `useStudentDeleteParentInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentDeleteParentInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentDeleteParentInfoMutation, { data, loading, error }] = useStudentDeleteParentInfoMutation({
 *   variables: {
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useStudentDeleteParentInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentDeleteParentInfoMutation,
    StudentDeleteParentInfoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentDeleteParentInfoMutation,
    StudentDeleteParentInfoMutationVariables
  >(StudentDeleteParentInfoDocument, options);
}
export type StudentDeleteParentInfoMutationHookResult = ReturnType<
  typeof useStudentDeleteParentInfoMutation
>;
export type StudentDeleteParentInfoMutationResult =
  Apollo.MutationResult<StudentDeleteParentInfoMutation>;
export type StudentDeleteParentInfoMutationOptions = Apollo.BaseMutationOptions<
  StudentDeleteParentInfoMutation,
  StudentDeleteParentInfoMutationVariables
>;
export const StudentEditContactDocument = gql`
  mutation StudentEditContact(
    $contactId: Int!
    $payload: StudentEditContactInput!
  ) {
    studentEditContact(contactId: $contactId, payload: $payload) {
      maLHSV
      maSV
      mxh
      url
    }
  }
`;
export type StudentEditContactMutationFn = Apollo.MutationFunction<
  StudentEditContactMutation,
  StudentEditContactMutationVariables
>;

/**
 * __useStudentEditContactMutation__
 *
 * To run a mutation, you first call `useStudentEditContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentEditContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentEditContactMutation, { data, loading, error }] = useStudentEditContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useStudentEditContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentEditContactMutation,
    StudentEditContactMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentEditContactMutation,
    StudentEditContactMutationVariables
  >(StudentEditContactDocument, options);
}
export type StudentEditContactMutationHookResult = ReturnType<
  typeof useStudentEditContactMutation
>;
export type StudentEditContactMutationResult =
  Apollo.MutationResult<StudentEditContactMutation>;
export type StudentEditContactMutationOptions = Apollo.BaseMutationOptions<
  StudentEditContactMutation,
  StudentEditContactMutationVariables
>;
export const StudentEditParentInfoDocument = gql`
  mutation StudentEditParentInfo(
    $parentId: Int!
    $payload: StudentEditParentInfoInput!
  ) {
    studentEditParentInfo(parentId: $parentId, payload: $payload) {
      maPH
      tenPH
      quanHe
      sdt
      sua
      lienHePH {
        maLHPH
        mxh
        url
      }
    }
  }
`;
export type StudentEditParentInfoMutationFn = Apollo.MutationFunction<
  StudentEditParentInfoMutation,
  StudentEditParentInfoMutationVariables
>;

/**
 * __useStudentEditParentInfoMutation__
 *
 * To run a mutation, you first call `useStudentEditParentInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentEditParentInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentEditParentInfoMutation, { data, loading, error }] = useStudentEditParentInfoMutation({
 *   variables: {
 *      parentId: // value for 'parentId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useStudentEditParentInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StudentEditParentInfoMutation,
    StudentEditParentInfoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    StudentEditParentInfoMutation,
    StudentEditParentInfoMutationVariables
  >(StudentEditParentInfoDocument, options);
}
export type StudentEditParentInfoMutationHookResult = ReturnType<
  typeof useStudentEditParentInfoMutation
>;
export type StudentEditParentInfoMutationResult =
  Apollo.MutationResult<StudentEditParentInfoMutation>;
export type StudentEditParentInfoMutationOptions = Apollo.BaseMutationOptions<
  StudentEditParentInfoMutation,
  StudentEditParentInfoMutationVariables
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
export const StudentDetailSubjectsResultDocument = gql`
  query StudentDetailSubjectsResult($studentId: String!, $subject: String!) {
    studentDetailSubjectsResult(studentId: $studentId, subject: $subject) {
      tichLuy
      monHoc {
        maMH
        tenMH
        soTC
        namHoc
        hocKy
        diem
      }
    }
  }
`;

/**
 * __useStudentDetailSubjectsResultQuery__
 *
 * To run a query within a React component, call `useStudentDetailSubjectsResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentDetailSubjectsResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentDetailSubjectsResultQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useStudentDetailSubjectsResultQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentDetailSubjectsResultQuery,
    StudentDetailSubjectsResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentDetailSubjectsResultQuery,
    StudentDetailSubjectsResultQueryVariables
  >(StudentDetailSubjectsResultDocument, options);
}
export function useStudentDetailSubjectsResultLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentDetailSubjectsResultQuery,
    StudentDetailSubjectsResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentDetailSubjectsResultQuery,
    StudentDetailSubjectsResultQueryVariables
  >(StudentDetailSubjectsResultDocument, options);
}
export type StudentDetailSubjectsResultQueryHookResult = ReturnType<
  typeof useStudentDetailSubjectsResultQuery
>;
export type StudentDetailSubjectsResultLazyQueryHookResult = ReturnType<
  typeof useStudentDetailSubjectsResultLazyQuery
>;
export type StudentDetailSubjectsResultQueryResult = Apollo.QueryResult<
  StudentDetailSubjectsResultQuery,
  StudentDetailSubjectsResultQueryVariables
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
      tenCN
      gpa_4
      gpa_10
      ngoaiNgu
      tinhTrang
      maSH
      xepLoai
      lienHeSV {
        maLHSV
        mxh
        url
      }
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
export const StudentNoteListDocument = gql`
  query StudentNoteList($studentId: String!) {
    studentNoteList(studentId: $studentId) {
      danhSachGhiChu {
        maGC
        tag
        tieuDe
        noiDung
        thoiGianTao
        thoiGianSua
      }
    }
  }
`;

/**
 * __useStudentNoteListQuery__
 *
 * To run a query within a React component, call `useStudentNoteListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentNoteListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentNoteListQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentNoteListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentNoteListQuery,
    StudentNoteListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentNoteListQuery, StudentNoteListQueryVariables>(
    StudentNoteListDocument,
    options
  );
}
export function useStudentNoteListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentNoteListQuery,
    StudentNoteListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentNoteListQuery,
    StudentNoteListQueryVariables
  >(StudentNoteListDocument, options);
}
export type StudentNoteListQueryHookResult = ReturnType<
  typeof useStudentNoteListQuery
>;
export type StudentNoteListLazyQueryHookResult = ReturnType<
  typeof useStudentNoteListLazyQuery
>;
export type StudentNoteListQueryResult = Apollo.QueryResult<
  StudentNoteListQuery,
  StudentNoteListQueryVariables
>;
export const StudentOverviewResultDocument = gql`
  query StudentOverviewResult($studentId: String!) {
    studentOverviewResult(studentId: $studentId) {
      tenCN
      daiCuong
      coSoNganh
      chuyenNganh
      tuChonTuDo
      tuChonChuyenNganh
      totNghiep
      tongTC
      dtb
    }
  }
`;

/**
 * __useStudentOverviewResultQuery__
 *
 * To run a query within a React component, call `useStudentOverviewResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentOverviewResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentOverviewResultQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentOverviewResultQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentOverviewResultQuery,
    StudentOverviewResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentOverviewResultQuery,
    StudentOverviewResultQueryVariables
  >(StudentOverviewResultDocument, options);
}
export function useStudentOverviewResultLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentOverviewResultQuery,
    StudentOverviewResultQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentOverviewResultQuery,
    StudentOverviewResultQueryVariables
  >(StudentOverviewResultDocument, options);
}
export type StudentOverviewResultQueryHookResult = ReturnType<
  typeof useStudentOverviewResultQuery
>;
export type StudentOverviewResultLazyQueryHookResult = ReturnType<
  typeof useStudentOverviewResultLazyQuery
>;
export type StudentOverviewResultQueryResult = Apollo.QueryResult<
  StudentOverviewResultQuery,
  StudentOverviewResultQueryVariables
>;
export const StudentParentInfoListDocument = gql`
  query StudentParentInfoList($studentId: String!) {
    studentParentInfoList(studentId: $studentId) {
      dsPhuHuynh {
        maPH
        tenPH
        quanHe
        sdt
        sua
        lienHePH {
          maLHPH
          mxh
          url
        }
      }
    }
  }
`;

/**
 * __useStudentParentInfoListQuery__
 *
 * To run a query within a React component, call `useStudentParentInfoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentParentInfoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentParentInfoListQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentParentInfoListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentParentInfoListQuery,
    StudentParentInfoListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentParentInfoListQuery,
    StudentParentInfoListQueryVariables
  >(StudentParentInfoListDocument, options);
}
export function useStudentParentInfoListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentParentInfoListQuery,
    StudentParentInfoListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentParentInfoListQuery,
    StudentParentInfoListQueryVariables
  >(StudentParentInfoListDocument, options);
}
export type StudentParentInfoListQueryHookResult = ReturnType<
  typeof useStudentParentInfoListQuery
>;
export type StudentParentInfoListLazyQueryHookResult = ReturnType<
  typeof useStudentParentInfoListLazyQuery
>;
export type StudentParentInfoListQueryResult = Apollo.QueryResult<
  StudentParentInfoListQuery,
  StudentParentInfoListQueryVariables
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
