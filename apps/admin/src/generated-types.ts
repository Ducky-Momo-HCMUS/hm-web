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
  Date: any;
  UploadFile: any;
};

export type AccountActivateInput = {
  email: Scalars['String'];
};

export type AccountActivateResponse = {
  __typename?: 'AccountActivateResponse';
  email: Scalars['String'];
  maTK: Scalars['Int'];
};

export type AccountAddInput = {
  email: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isTeacher: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AccountAddResponse = {
  __typename?: 'AccountAddResponse';
  email: Scalars['String'];
  maTK: Scalars['Int'];
};

export type AccountDeleteInput = {
  email: Scalars['String'];
};

export type AccountDeleteResponse = {
  __typename?: 'AccountDeleteResponse';
  email: Scalars['String'];
  maTK: Scalars['Int'];
};

export type AccountEditInput = {
  email: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isTeacher: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AccountEditResponse = {
  __typename?: 'AccountEditResponse';
  maTK: Scalars['Int'];
  tenGV: Scalars['String'];
};

export type AccountList = {
  __typename?: 'AccountList';
  data: Array<AccountListItem>;
  total: Scalars['Int'];
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

export type AllTeacherList = {
  __typename?: 'AllTeacherList';
  data: Array<AllTeacherListItem>;
  total: Scalars['Int'];
};

export type AllTeacherListItem = {
  __typename?: 'AllTeacherListItem';
  email: Scalars['String'];
  lopSinhHoat: Array<HomeroomInfo>;
  maGV: Scalars['Int'];
  tenGV: Scalars['String'];
};

export type AuthorInfo = {
  __typename?: 'AuthorInfo';
  tenGV: Scalars['String'];
};

export type ClassroomListItem = {
  __typename?: 'ClassroomListItem';
  maHP: Scalars['Int'];
  tenLopHP: Scalars['String'];
};

export type ClassroomScoreList = {
  __typename?: 'ClassroomScoreList';
  data: Array<ClassroomScoreListItem>;
  total: Scalars['Int'];
};

export type ClassroomScoreListItem = {
  __typename?: 'ClassroomScoreListItem';
  diemCK: Scalars['Float'];
  diemCong: Scalars['Float'];
  diemGK: Scalars['Float'];
  diemKhac: Scalars['Float'];
  diemTH: Scalars['Float'];
  dtb: Scalars['Float'];
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type ColumnHeader = {
  __typename?: 'ColumnHeader';
  index: Scalars['Int'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ColumnHeaderConfig = {
  index: Scalars['Int'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type CourseList = {
  __typename?: 'CourseList';
  data: Array<CourseListItem>;
  total: Scalars['Int'];
};

export type CourseListItem = {
  __typename?: 'CourseListItem';
  chuyenNganh?: Maybe<Scalars['String']>;
  loaiMonHoc: Scalars['String'];
  maCN?: Maybe<Scalars['String']>;
  maMH: Scalars['String'];
  soTinChi: Scalars['Int'];
  tenCN?: Maybe<Scalars['String']>;
  tenMH: Scalars['String'];
};

export type Document = {
  __typename?: 'Document';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export const FileType = {
  BangDiemToanBoSinhVien: 'BANG_DIEM_TOAN_BO_SINH_VIEN',
  DanhSachChuyenNganh: 'DANH_SACH_CHUYEN_NGANH',
  DanhSachGvcn: 'DANH_SACH_GVCN',
  DanhSachMonHoc: 'DANH_SACH_MON_HOC',
  DanhSachSinhVienHoanThi: 'DANH_SACH_SINH_VIEN_HOAN_THI',
  DanhSachSinhVienKhongDkhp: 'DANH_SACH_SINH_VIEN_KHONG_DKHP',
  DanhSachSinhVienVangThi: 'DANH_SACH_SINH_VIEN_VANG_THI',
  DiemRenLuyen: 'DIEM_REN_LUYEN',
  DiemThiTheoLopHocPhan: 'DIEM_THI_THEO_LOP_HOC_PHAN',
  HoSoSinhVien: 'HO_SO_SINH_VIEN',
  KetQuaChuyenNganh: 'KET_QUA_CHUYEN_NGANH',
  TaiKhoan: 'TAI_KHOAN',
  ThoiKhoaBieu: 'THOI_KHOA_BIEU',
  ThongKeDkhp: 'THONG_KE_DKHP',
} as const;

export type FileType = typeof FileType[keyof typeof FileType];
export type HomeroomAddWatchlistInput = {
  maSV: Array<Scalars['String']>;
};

export type HomeroomAddWatchlistResponse = {
  __typename?: 'HomeroomAddWatchlistResponse';
  status: Scalars['Int'];
};

export type HomeroomAllListItem = {
  __typename?: 'HomeroomAllListItem';
  maSH: Scalars['String'];
};

export type HomeroomDeleteWatchlistInput = {
  maSV: Array<Scalars['String']>;
};

export type HomeroomDeleteWatchlistResponse = {
  __typename?: 'HomeroomDeleteWatchlistResponse';
  status: Scalars['Int'];
};

export type HomeroomDetail = {
  __typename?: 'HomeroomDetail';
  giaoVien: TeacherInfo;
  siSo: Scalars['Int'];
};

export type HomeroomExamAbsentList = {
  __typename?: 'HomeroomExamAbsentList';
  data: Array<HomeroomExamAbsentListItem>;
};

export type HomeroomExamAbsentListItem = {
  __typename?: 'HomeroomExamAbsentListItem';
  monHoc: HomeroomExamAbsentListSubject;
  sinhVien: HomeroomExamAbsentListStudentInfo;
};

export type HomeroomExamAbsentListStudentInfo = {
  __typename?: 'HomeroomExamAbsentListStudentInfo';
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type HomeroomExamAbsentListSubject = {
  __typename?: 'HomeroomExamAbsentListSubject';
  tenMH: Scalars['String'];
};

export type HomeroomFailList = {
  __typename?: 'HomeroomFailList';
  data: Array<HomeroomFailListItem>;
  total: Scalars['Int'];
};

export type HomeroomFailListItem = {
  __typename?: 'HomeroomFailListItem';
  dtb: Scalars['Float'];
  lopHocPhan: HomeroomFailListStudentCourse;
  sinhVien: HomeroomFailListStudentInfo;
  vang: Scalars['Boolean'];
};

export type HomeroomFailListStudentCourse = {
  __typename?: 'HomeroomFailListStudentCourse';
  monHoc: HomeroomFailListSubject;
  tenLopHP: Scalars['String'];
};

export type HomeroomFailListStudentInfo = {
  __typename?: 'HomeroomFailListStudentInfo';
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type HomeroomFailListSubject = {
  __typename?: 'HomeroomFailListSubject';
  tenMH: Scalars['String'];
};

export type HomeroomFinalResultList = {
  __typename?: 'HomeroomFinalResultList';
  formatted: Array<HomeroomFinalResultListItem>;
  total: Scalars['Int'];
};

export type HomeroomFinalResultListItem = {
  __typename?: 'HomeroomFinalResultListItem';
  dtb?: Maybe<Scalars['Float']>;
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
  xepLoai?: Maybe<Scalars['String']>;
};

export type HomeroomInfo = {
  __typename?: 'HomeroomInfo';
  maSH: Scalars['String'];
};

export type HomeroomLearnOverview = {
  __typename?: 'HomeroomLearnOverview';
  chungChiNgoaiNgu: Scalars['Int'];
  gioi: Scalars['Int'];
  kem: Scalars['Int'];
  kha: Scalars['Int'];
  trungBinh: Scalars['Int'];
  xuatSac: Scalars['Int'];
  yeu: Scalars['Int'];
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
  data: Array<HomeroomNotEnrolledListItem>;
};

export type HomeroomNotEnrolledListItem = {
  __typename?: 'HomeroomNotEnrolledListItem';
  sinhVien: HomeroomNotEnrolledListStudentInfo;
};

export type HomeroomNotEnrolledListStudentInfo = {
  __typename?: 'HomeroomNotEnrolledListStudentInfo';
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
  data: Array<HomeroomPostponeExamListItem>;
};

export type HomeroomPostponeExamListItem = {
  __typename?: 'HomeroomPostponeExamListItem';
  monHoc: HomeroomPostponeExamListSubject;
  sinhVien: HomeroomPostponeExamListStudentInfo;
};

export type HomeroomPostponeExamListStudentInfo = {
  __typename?: 'HomeroomPostponeExamListStudentInfo';
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type HomeroomPostponeExamListSubject = {
  __typename?: 'HomeroomPostponeExamListSubject';
  tenMH: Scalars['String'];
};

export type HomeroomStudentList = {
  __typename?: 'HomeroomStudentList';
  data?: Maybe<Array<HomeroomStudentListItem>>;
  total: Scalars['Int'];
};

export type HomeroomStudentListItem = {
  __typename?: 'HomeroomStudentListItem';
  emailSV: Scalars['String'];
  gpa4?: Maybe<Scalars['Float']>;
  gpa10?: Maybe<Scalars['Float']>;
  lienHeSV?: Maybe<Array<Contact>>;
  maSV: Scalars['String'];
  sdt: Scalars['String'];
  tenCN?: Maybe<Scalars['String']>;
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type HomeroomTermListItem = {
  __typename?: 'HomeroomTermListItem';
  hocKy: Scalars['Int'];
  maHK: Scalars['Int'];
  namHocBD: Scalars['Int'];
};

export type HomeroomTrainingPointOverview = {
  __typename?: 'HomeroomTrainingPointOverview';
  gioi: Scalars['Int'];
  kem: Scalars['Int'];
  kha: Scalars['Int'];
  trungBinh: Scalars['Int'];
  xuatSac: Scalars['Int'];
  yeu: Scalars['Int'];
};

export type HomeroomWatchList = {
  __typename?: 'HomeroomWatchList';
  data?: Maybe<Array<HomeroomWatchListItem>>;
  total: Scalars['Int'];
};

export type HomeroomWatchListItem = {
  __typename?: 'HomeroomWatchListItem';
  sinhVien: HomeroomStudentListItem;
};

export type ImportAuthor = {
  __typename?: 'ImportAuthor';
  giaoVien: AuthorInfo;
};

export type ImportHistory = {
  __typename?: 'ImportHistory';
  taiKhoan?: Maybe<ImportAuthor>;
  thoiGian?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
};

export type MajorList = {
  __typename?: 'MajorList';
  data: Array<MajorListItem>;
  total: Scalars['Int'];
};

export type MajorListItem = {
  __typename?: 'MajorListItem';
  maCN: Scalars['Int'];
  tenCN: Scalars['String'];
  tenVietTat: Scalars['String'];
};

export type MajorResultList = {
  __typename?: 'MajorResultList';
  data: Array<MajorResultListItem>;
  total: Scalars['Int'];
};

export type MajorResultListItem = {
  __typename?: 'MajorResultListItem';
  chuyenNganh?: Maybe<Scalars['String']>;
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountActivate: AccountActivateResponse;
  accountAdd: AccountAddResponse;
  accountDelete: AccountDeleteResponse;
  accountEdit: AccountEditResponse;
  editPassword?: Maybe<MutationStatusReponse>;
  forgotPassword?: Maybe<MutationStatusReponse>;
  homeroomAddWatchlist: HomeroomAddWatchlistResponse;
  homeroomDeleteWatchlist: HomeroomDeleteWatchlistResponse;
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
  teacherDelete: AllTeacherListItem;
  teacherEdit: AllTeacherListItem;
  uploadDocument: UploadDocumentResponse;
};

export type MutationAccountActivateArgs = {
  payload: AccountActivateInput;
};

export type MutationAccountAddArgs = {
  payload: AccountAddInput;
};

export type MutationAccountDeleteArgs = {
  payload: AccountDeleteInput;
};

export type MutationAccountEditArgs = {
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

export type MutationHomeroomAddWatchlistArgs = {
  payload: HomeroomAddWatchlistInput;
};

export type MutationHomeroomDeleteWatchlistArgs = {
  payload: HomeroomDeleteWatchlistInput;
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

export type MutationTeacherDeleteArgs = {
  teacherId: Scalars['Int'];
};

export type MutationTeacherEditArgs = {
  payload: TeacherEditInput;
  teacherId: Scalars['Int'];
};

export type MutationUploadDocumentArgs = {
  config: UploadFileConfig;
  file: Scalars['UploadFile'];
  input: UploadDocumentInput;
};

export type MutationStatusReponse = {
  __typename?: 'MutationStatusReponse';
  status?: Maybe<Scalars['Int']>;
};

export type NoteAddInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['UploadFile']>>>;
  maSV?: InputMaybe<Scalars['String']>;
  maTag: Array<Scalars['Int']>;
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
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
  maSV?: Maybe<Scalars['String']>;
  noiDung: Scalars['String'];
  sinhVien?: Maybe<StudentDetail>;
  thoiGianSua?: Maybe<Scalars['String']>;
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteEditInput = {
  addTagIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['UploadFile']>>>;
  noiDung: Scalars['String'];
  removeImageIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  removeTagIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tieuDe: Scalars['String'];
};

export type NoteEditResponse = {
  __typename?: 'NoteEditResponse';
  noiDung: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type NoteImage = {
  __typename?: 'NoteImage';
  id: Scalars['String'];
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

export type NoteSearch = {
  __typename?: 'NoteSearch';
  data: Array<NoteListItem>;
  lastPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type NoteTag = {
  __typename?: 'NoteTag';
  maTag: Scalars['Int'];
  tenTag: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  accountList: AccountList;
  allTeacherList: AllTeacherList;
  classroomList: Array<ClassroomListItem>;
  classroomScoreList: ClassroomScoreList;
  columnHeaderList: Array<ColumnHeader>;
  courseList: CourseList;
  documents: Array<Document>;
  homeroomAllList: Array<HomeroomAllListItem>;
  homeroomDetail: HomeroomDetail;
  homeroomExamAbsentListByTerm: HomeroomExamAbsentList;
  homeroomFailListByTerm: HomeroomFailList;
  homeroomFinalResultListByTerm: HomeroomFinalResultList;
  homeroomList: HomeroomList;
  homeroomNotEnrolledListByTerm: HomeroomNotEnrolledList;
  homeroomOverviewReportByTerm: HomeroomOverviewReport;
  homeroomPostponeExamListByTerm: HomeroomPostponeExamList;
  homeroomStudentList: HomeroomStudentList;
  homeroomTermList: Array<HomeroomTermListItem>;
  homeroomWatchList: HomeroomWatchList;
  importHistory: ImportHistory;
  majorList: MajorList;
  majorResultList: MajorResultList;
  noteDetail: NoteDetail;
  noteList: Array<NoteListItem>;
  noteSearch: NoteSearch;
  studentAbsentList: StudentAbsentList;
  studentAllTerms: Array<StudentTerm>;
  studentAveragePointByTerm: StudentAveragePoint;
  studentDetail: StudentDetail;
  studentDetailSubjectsResult: StudentDetailSubjectsResult;
  studentEnrolledList: StudentEnrolledList;
  studentNotEnrolledList: StudentNotEnrolledList;
  studentNoteList: StudentNoteList;
  studentOverviewResult?: Maybe<StudentOverviewResult>;
  studentParentInfoList: StudentParentInfoList;
  studentPostponeList: StudentPostponeList;
  studentSubjectsByTerm: Array<StudentSubject>;
  studentTrainingPointByTerm: StudentTrainingPoint;
  studentTrainingPointList: StudentTrainingPointList;
  tagList: TagList;
  teacherList: TeacherList;
  teacherSearchStudentList: TeacherStudentList;
  termList: Array<TermListItem>;
  yearList: Array<YearListItem>;
};

export type QueryAccountListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type QueryAllTeacherListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type QueryClassroomListArgs = {
  courseId?: InputMaybe<Scalars['String']>;
  termId: Scalars['Int'];
};

export type QueryClassroomScoreListArgs = {
  id: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryColumnHeaderListArgs = {
  fileType: FileType;
};

export type QueryCourseListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type QueryHomeroomDetailArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomExamAbsentListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomFailListByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomFinalResultListByTermArgs = {
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
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
  page: Scalars['Int'];
  size: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type QueryHomeroomTermListArgs = {
  homeroomId: Scalars['String'];
};

export type QueryHomeroomWatchListArgs = {
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type QueryImportHistoryArgs = {
  fileType: FileType;
};

export type QueryMajorListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type QueryMajorResultListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
};

export type QueryNoteDetailArgs = {
  noteId: Scalars['Int'];
};

export type QueryNoteSearchArgs = {
  end?: InputMaybe<Scalars['Date']>;
  maSH?: InputMaybe<Scalars['String']>;
  maSV?: InputMaybe<Scalars['String']>;
  maTag?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
  start?: InputMaybe<Scalars['Date']>;
  tenSV?: InputMaybe<Scalars['String']>;
  tieuDe?: InputMaybe<Scalars['String']>;
};

export type QueryStudentAbsentListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
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

export type QueryStudentEnrolledListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryStudentNotEnrolledListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryStudentNoteListArgs = {
  end?: InputMaybe<Scalars['Date']>;
  maTag?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
  start?: InputMaybe<Scalars['Date']>;
  studentId: Scalars['String'];
  tieuDe?: InputMaybe<Scalars['String']>;
};

export type QueryStudentOverviewResultArgs = {
  studentId: Scalars['String'];
};

export type QueryStudentParentInfoListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  studentId: Scalars['String'];
};

export type QueryStudentPostponeListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryStudentSubjectsByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentTrainingPointByTermArgs = {
  studentId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryStudentTrainingPointListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryTeacherListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  year: Scalars['Int'];
};

export type QueryTeacherSearchStudentListArgs = {
  maSV?: InputMaybe<Scalars['String']>;
  tenSV?: InputMaybe<Scalars['String']>;
};

export type SheetConfig = {
  index: Scalars['Int'];
  value: Scalars['String'];
};

export type StudentAbsentList = {
  __typename?: 'StudentAbsentList';
  data: Array<StudentAbsentListItem>;
  total: Scalars['Int'];
};

export type StudentAbsentListItem = {
  __typename?: 'StudentAbsentListItem';
  maMH: Scalars['String'];
  maSV: Scalars['String'];
  tenMH: Scalars['String'];
  tenSV: Scalars['String'];
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

export type StudentAveragePoint = {
  __typename?: 'StudentAveragePoint';
  dtb: Scalars['Float'];
  xepLoai?: Maybe<Scalars['String']>;
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

export type StudentEnrolledList = {
  __typename?: 'StudentEnrolledList';
  data: Array<StudentEnrolledListItem>;
  total: Scalars['Int'];
};

export type StudentEnrolledListItem = {
  __typename?: 'StudentEnrolledListItem';
  maMH: Scalars['String'];
  maSV: Scalars['String'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tenSV: Scalars['String'];
};

export type StudentNotEnrolledList = {
  __typename?: 'StudentNotEnrolledList';
  data: Array<StudentNotEnrolledListItem>;
  total: Scalars['Int'];
};

export type StudentNotEnrolledListItem = {
  __typename?: 'StudentNotEnrolledListItem';
  maSH: Scalars['String'];
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
};

export type StudentNote = {
  __typename?: 'StudentNote';
  ghiChuTag: Array<StudentTag>;
  maGC: Scalars['Int'];
  noiDung: Scalars['String'];
  thoiGianSua: Scalars['String'];
  thoiGianTao: Scalars['String'];
  tieuDe: Scalars['String'];
};

export type StudentNoteList = {
  __typename?: 'StudentNoteList';
  data: Array<StudentNote>;
  total: Scalars['Int'];
};

export type StudentOverviewResult = {
  __typename?: 'StudentOverviewResult';
  batBuocChuyenNganh: Scalars['Int'];
  coSoNganh: Scalars['Int'];
  daiCuong: Scalars['Int'];
  dtb: Scalars['Float'];
  tenCN: Scalars['String'];
  tongTC: Scalars['Int'];
  tongTCDaHoc: Scalars['Int'];
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
  data: Array<StudentParentInfo>;
  total: Scalars['Int'];
};

export type StudentPostponeList = {
  __typename?: 'StudentPostponeList';
  data: Array<StudentPostponeListItem>;
  total: Scalars['Int'];
};

export type StudentPostponeListItem = {
  __typename?: 'StudentPostponeListItem';
  maMH: Scalars['String'];
  maSV: Scalars['String'];
  tenMH: Scalars['String'];
  tenSV: Scalars['String'];
};

export type StudentSubject = {
  __typename?: 'StudentSubject';
  diemCK?: Maybe<Scalars['Float']>;
  diemCong?: Maybe<Scalars['Float']>;
  diemGK?: Maybe<Scalars['Float']>;
  diemKhac?: Maybe<Scalars['Float']>;
  diemTH?: Maybe<Scalars['Float']>;
  dtb?: Maybe<Scalars['Float']>;
  maMH: Scalars['String'];
  soTinChi: Scalars['Int'];
  tenLopHP: Scalars['String'];
  tenMH: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type StudentTag = {
  __typename?: 'StudentTag';
  maTag: Scalars['Int'];
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

export type StudentTrainingPointList = {
  __typename?: 'StudentTrainingPointList';
  data: Array<StudentTrainingPointListItem>;
  total: Scalars['Int'];
};

export type StudentTrainingPointListItem = {
  __typename?: 'StudentTrainingPointListItem';
  drl: Scalars['Int'];
  maSV: Scalars['String'];
  tenSV: Scalars['String'];
  xepLoai: Scalars['String'];
};

export type SubjectDetailResult = {
  __typename?: 'SubjectDetailResult';
  dtb: Scalars['Float'];
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

export type TeacherEditInput = {
  lopSH: Array<Scalars['String']>;
};

export type TeacherInfo = {
  __typename?: 'TeacherInfo';
  tenGV: Scalars['String'];
};

export type TeacherList = {
  __typename?: 'TeacherList';
  data: Array<TeacherListItem>;
  total: Scalars['Int'];
};

export type TeacherListItem = {
  __typename?: 'TeacherListItem';
  email: Scalars['String'];
  maSH: Scalars['String'];
  tenGV: Scalars['String'];
};

export type TeacherSearchStudentListItem = {
  __typename?: 'TeacherSearchStudentListItem';
  gpa4?: Maybe<Scalars['Float']>;
  gpa10?: Maybe<Scalars['Float']>;
  maSV: Scalars['String'];
  tenCN?: Maybe<Scalars['String']>;
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type TeacherStudentList = {
  __typename?: 'TeacherStudentList';
  data: Array<TeacherSearchStudentListItem>;
  total: Scalars['Int'];
};

export type TermListItem = {
  __typename?: 'TermListItem';
  hocKy: Scalars['Int'];
  maHK: Scalars['Int'];
  namHocBD: Scalars['Int'];
};

export type UploadDocumentInput = {
  hocKy?: InputMaybe<Scalars['Int']>;
  maMH?: InputMaybe<Scalars['String']>;
  namHoc?: InputMaybe<Scalars['Int']>;
  tenLopHP?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type UploadDocumentResponse = {
  __typename?: 'UploadDocumentResponse';
  status: Scalars['Int'];
};

export type UploadFileConfig = {
  headers: Array<ColumnHeaderConfig>;
  sheet: SheetConfig;
  start: Scalars['Int'];
};

export type YearListItem = {
  __typename?: 'YearListItem';
  khoa: Scalars['Int'];
};

export type UploadDocumentMutationVariables = Exact<{
  file: Scalars['UploadFile'];
  input: UploadDocumentInput;
  config: UploadFileConfig;
}>;

export type UploadDocumentMutation = {
  __typename?: 'Mutation';
  uploadDocument: { __typename?: 'UploadDocumentResponse'; status: number };
};

export type ClassroomListQueryVariables = Exact<{
  termId: Scalars['Int'];
  courseId?: InputMaybe<Scalars['String']>;
}>;

export type ClassroomListQuery = {
  __typename?: 'Query';
  classroomList: Array<{
    __typename?: 'ClassroomListItem';
    maHP: number;
    tenLopHP: string;
  }>;
};

export type ClassroomScoreListQueryVariables = Exact<{
  id: Scalars['Int'];
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type ClassroomScoreListQuery = {
  __typename?: 'Query';
  classroomScoreList: {
    __typename?: 'ClassroomScoreList';
    total: number;
    data: Array<{
      __typename?: 'ClassroomScoreListItem';
      maSV: string;
      tenSV: string;
      diemCK: number;
      diemCong: number;
      diemGK: number;
      diemKhac: number;
      diemTH: number;
      dtb: number;
    }>;
  };
};

export type CourseListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;

export type CourseListQuery = {
  __typename?: 'Query';
  courseList: {
    __typename?: 'CourseList';
    total: number;
    data: Array<{
      __typename?: 'CourseListItem';
      maMH: string;
      tenMH: string;
      soTinChi: number;
      maCN?: string | null | undefined;
      loaiMonHoc: string;
      chuyenNganh?: string | null | undefined;
      tenCN?: string | null | undefined;
    }>;
  };
};

export type MajorListQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type MajorListQuery = {
  __typename?: 'Query';
  majorList: {
    __typename?: 'MajorList';
    total: number;
    data: Array<{
      __typename?: 'MajorListItem';
      maCN: number;
      tenCN: string;
      tenVietTat: string;
    }>;
  };
};

export type MajorResultListQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type MajorResultListQuery = {
  __typename?: 'Query';
  majorResultList: {
    __typename?: 'MajorResultList';
    total: number;
    data: Array<{
      __typename?: 'MajorResultListItem';
      maSV: string;
      tenSV: string;
      chuyenNganh?: string | null | undefined;
    }>;
  };
};

export type ColumnHeaderListQueryVariables = Exact<{
  fileType: FileType;
}>;

export type ColumnHeaderListQuery = {
  __typename?: 'Query';
  columnHeaderList: Array<{
    __typename?: 'ColumnHeader';
    key: string;
    value: string;
    index: number;
  }>;
};

export type ImportHistoryQueryVariables = Exact<{
  fileType: FileType;
}>;

export type ImportHistoryQuery = {
  __typename?: 'Query';
  importHistory: {
    __typename?: 'ImportHistory';
    thoiGian?: string | null | undefined;
    taiKhoan?:
      | {
          __typename?: 'ImportAuthor';
          giaoVien: { __typename?: 'AuthorInfo'; tenGV: string };
        }
      | null
      | undefined;
  };
};

export type TermListQueryVariables = Exact<{ [key: string]: never }>;

export type TermListQuery = {
  __typename?: 'Query';
  termList: Array<{
    __typename?: 'TermListItem';
    maHK: number;
    namHocBD: number;
    hocKy: number;
  }>;
};

export type HomeroomAllListQueryVariables = Exact<{ [key: string]: never }>;

export type HomeroomAllListQuery = {
  __typename?: 'Query';
  homeroomAllList: Array<{ __typename?: 'HomeroomAllListItem'; maSH: string }>;
};

export type StudentAbsentListQueryVariables = Exact<{
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentAbsentListQuery = {
  __typename?: 'Query';
  studentAbsentList: {
    __typename?: 'StudentAbsentList';
    total: number;
    data: Array<{
      __typename?: 'StudentAbsentListItem';
      maSV: string;
      tenSV: string;
      maMH: string;
      tenMH: string;
    }>;
  };
};

export type StudentEnrolledListQueryVariables = Exact<{
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentEnrolledListQuery = {
  __typename?: 'Query';
  studentEnrolledList: {
    __typename?: 'StudentEnrolledList';
    total: number;
    data: Array<{
      __typename?: 'StudentEnrolledListItem';
      maSV: string;
      tenSV: string;
      maMH: string;
      tenMH: string;
      tenLopHP: string;
    }>;
  };
};

export type StudentNotEnrolledListQueryVariables = Exact<{
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentNotEnrolledListQuery = {
  __typename?: 'Query';
  studentNotEnrolledList: {
    __typename?: 'StudentNotEnrolledList';
    total: number;
    data: Array<{
      __typename?: 'StudentNotEnrolledListItem';
      maSV: string;
      tenSV: string;
      maSH: string;
    }>;
  };
};

export type StudentPostponeListQueryVariables = Exact<{
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentPostponeListQuery = {
  __typename?: 'Query';
  studentPostponeList: {
    __typename?: 'StudentPostponeList';
    total: number;
    data: Array<{
      __typename?: 'StudentPostponeListItem';
      maSV: string;
      tenSV: string;
      maMH: string;
      tenMH: string;
    }>;
  };
};

export type StudentTrainingPointListQueryVariables = Exact<{
  termId: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentTrainingPointListQuery = {
  __typename?: 'Query';
  studentTrainingPointList: {
    __typename?: 'StudentTrainingPointList';
    total: number;
    data: Array<{
      __typename?: 'StudentTrainingPointListItem';
      maSV: string;
      tenSV: string;
      drl: number;
      xepLoai: string;
    }>;
  };
};

export type TeacherListQueryVariables = Exact<{
  year: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type TeacherListQuery = {
  __typename?: 'Query';
  teacherList: {
    __typename?: 'TeacherList';
    total: number;
    data: Array<{
      __typename?: 'TeacherListItem';
      maSH: string;
      tenGV: string;
      email: string;
    }>;
  };
};

export type YearListQueryVariables = Exact<{ [key: string]: never }>;

export type YearListQuery = {
  __typename?: 'Query';
  yearList: Array<{ __typename?: 'YearListItem'; khoa: number }>;
};

export type AccountActivateMutationVariables = Exact<{
  payload: AccountActivateInput;
}>;

export type AccountActivateMutation = {
  __typename?: 'Mutation';
  accountActivate: {
    __typename?: 'AccountActivateResponse';
    maTK: number;
    email: string;
  };
};

export type AccountAddMutationVariables = Exact<{
  payload: AccountAddInput;
}>;

export type AccountAddMutation = {
  __typename?: 'Mutation';
  accountAdd: {
    __typename?: 'AccountAddResponse';
    maTK: number;
    email: string;
  };
};

export type AccountDeleteMutationVariables = Exact<{
  payload: AccountDeleteInput;
}>;

export type AccountDeleteMutation = {
  __typename?: 'Mutation';
  accountDelete: {
    __typename?: 'AccountDeleteResponse';
    maTK: number;
    email: string;
  };
};

export type AccountEditMutationVariables = Exact<{
  payload: AccountEditInput;
}>;

export type AccountEditMutation = {
  __typename?: 'Mutation';
  accountEdit: {
    __typename?: 'AccountEditResponse';
    maTK: number;
    tenGV: string;
  };
};

export type TagAddMutationVariables = Exact<{
  payload: TagAddInput;
}>;

export type TagAddMutation = {
  __typename?: 'Mutation';
  tagAdd: { __typename?: 'Tag'; maTag: number; tenTag: string };
};

export type TagDeleteMutationVariables = Exact<{
  tagId: Scalars['Int'];
}>;

export type TagDeleteMutation = {
  __typename?: 'Mutation';
  tagDelete: { __typename?: 'TagDeleteResponse'; status: number };
};

export type TagEditMutationVariables = Exact<{
  tagId: Scalars['Int'];
  payload: TagEditInput;
}>;

export type TagEditMutation = {
  __typename?: 'Mutation';
  tagEdit: { __typename?: 'Tag'; maTag: number; tenTag: string };
};

export type TeacherDeleteMutationVariables = Exact<{
  teacherId: Scalars['Int'];
}>;

export type TeacherDeleteMutation = {
  __typename?: 'Mutation';
  teacherDelete: { __typename?: 'AllTeacherListItem'; maGV: number };
};

export type TeacherEditMutationVariables = Exact<{
  teacherId: Scalars['Int'];
  payload: TeacherEditInput;
}>;

export type TeacherEditMutation = {
  __typename?: 'Mutation';
  teacherEdit: { __typename?: 'AllTeacherListItem'; maGV: number };
};

export type AccountListQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type AccountListQuery = {
  __typename?: 'Query';
  accountList: {
    __typename?: 'AccountList';
    total: number;
    data: Array<{
      __typename?: 'AccountListItem';
      maTK: number;
      email: string;
      tenGV: string;
      hoatDong: boolean;
      gvcn: boolean;
      gvu: boolean;
    }>;
  };
};

export type TagListQueryVariables = Exact<{ [key: string]: never }>;

export type TagListQuery = {
  __typename?: 'Query';
  tagList: {
    __typename?: 'TagList';
    tags: Array<{ __typename?: 'Tag'; maTag: number; tenTag: string }>;
  };
};

export type AllTeacherListQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type AllTeacherListQuery = {
  __typename?: 'Query';
  allTeacherList: {
    __typename?: 'AllTeacherList';
    total: number;
    data: Array<{
      __typename?: 'AllTeacherListItem';
      maGV: number;
      tenGV: string;
      email: string;
      lopSinhHoat: Array<{ __typename?: 'HomeroomInfo'; maSH: string }>;
    }>;
  };
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

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = {
  __typename?: 'Mutation';
  forgotPassword?:
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

export type ResetPasswordMutationVariables = Exact<{
  id: Scalars['Int'];
  token: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
}>;

export type ResetPasswordMutation = {
  __typename?: 'Mutation';
  resetPassword?:
    | {
        __typename?: 'MutationStatusReponse';
        status?: number | null | undefined;
      }
    | null
    | undefined;
};

export type HomeroomAddWatchlistMutationVariables = Exact<{
  payload: HomeroomAddWatchlistInput;
}>;

export type HomeroomAddWatchlistMutation = {
  __typename?: 'Mutation';
  homeroomAddWatchlist: {
    __typename?: 'HomeroomAddWatchlistResponse';
    status: number;
  };
};

export type HomeroomDeleteWatchlistMutationVariables = Exact<{
  payload: HomeroomDeleteWatchlistInput;
}>;

export type HomeroomDeleteWatchlistMutation = {
  __typename?: 'Mutation';
  homeroomDeleteWatchlist: {
    __typename?: 'HomeroomDeleteWatchlistResponse';
    status: number;
  };
};

export type NoteAddMutationVariables = Exact<{
  payload: NoteAddInput;
}>;

export type NoteAddMutation = {
  __typename?: 'Mutation';
  noteAdd: { __typename?: 'NoteAddResponse'; tieuDe: string; noiDung: string };
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
  noteEdit: {
    __typename?: 'NoteEditResponse';
    tieuDe: string;
    noiDung: string;
  };
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
    siSo: number;
    giaoVien: { __typename?: 'TeacherInfo'; tenGV: string };
  };
};

export type HomeroomExamAbsentListByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type HomeroomExamAbsentListByTermQuery = {
  __typename?: 'Query';
  homeroomExamAbsentListByTerm: {
    __typename?: 'HomeroomExamAbsentList';
    data: Array<{
      __typename?: 'HomeroomExamAbsentListItem';
      sinhVien: {
        __typename?: 'HomeroomExamAbsentListStudentInfo';
        maSV: string;
        tenSV: string;
      };
      monHoc: { __typename?: 'HomeroomExamAbsentListSubject'; tenMH: string };
    }>;
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
    total: number;
    data: Array<{
      __typename?: 'HomeroomFailListItem';
      dtb: number;
      vang: boolean;
      sinhVien: {
        __typename?: 'HomeroomFailListStudentInfo';
        maSV: string;
        tenSV: string;
      };
      lopHocPhan: {
        __typename?: 'HomeroomFailListStudentCourse';
        tenLopHP: string;
        monHoc: { __typename?: 'HomeroomFailListSubject'; tenMH: string };
      };
    }>;
  };
};

export type HomeroomFinalResultListByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type HomeroomFinalResultListByTermQuery = {
  __typename?: 'Query';
  homeroomFinalResultListByTerm: {
    __typename?: 'HomeroomFinalResultList';
    total: number;
    formatted: Array<{
      __typename?: 'HomeroomFinalResultListItem';
      maSV: string;
      tenSV: string;
      dtb?: number | null | undefined;
      xepLoai?: string | null | undefined;
    }>;
  };
};

export type HomeroomListQueryVariables = Exact<{ [key: string]: never }>;

export type HomeroomListQuery = {
  __typename?: 'Query';
  homeroomList: {
    __typename?: 'HomeroomList';
    lopChuNhiem: Array<{
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
    data: Array<{
      __typename?: 'HomeroomNotEnrolledListItem';
      sinhVien: {
        __typename?: 'HomeroomNotEnrolledListStudentInfo';
        maSV: string;
        tenSV: string;
      };
    }>;
  };
};

export type HomeroomOverviewReportByTermQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type HomeroomOverviewReportByTermQuery = {
  __typename?: 'Query';
  homeroomOverviewReportByTerm: {
    __typename?: 'HomeroomOverviewReport';
    siSo: {
      __typename?: 'HomeroomNumberOverview';
      tong: number;
      nam: number;
      nu: number;
    };
    hocTap: {
      __typename?: 'HomeroomLearnOverview';
      xuatSac: number;
      gioi: number;
      kha: number;
      trungBinh: number;
      yeu: number;
      kem: number;
      chungChiNgoaiNgu: number;
    };
    drl: {
      __typename?: 'HomeroomTrainingPointOverview';
      xuatSac: number;
      gioi: number;
      kha: number;
      trungBinh: number;
      yeu: number;
      kem: number;
    };
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
    data: Array<{
      __typename?: 'HomeroomPostponeExamListItem';
      sinhVien: {
        __typename?: 'HomeroomPostponeExamListStudentInfo';
        maSV: string;
        tenSV: string;
      };
      monHoc: { __typename?: 'HomeroomPostponeExamListSubject'; tenMH: string };
    }>;
  };
};

export type HomeroomStudentListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
}>;

export type HomeroomStudentListQuery = {
  __typename?: 'Query';
  homeroomStudentList: {
    __typename?: 'HomeroomStudentList';
    total: number;
    data?:
      | Array<{
          __typename?: 'HomeroomStudentListItem';
          maSV: string;
          tenSV: string;
          tenCN?: string | null | undefined;
          tinhTrang: string;
          gpa4?: number | null | undefined;
          gpa10?: number | null | undefined;
          sdt: string;
          emailSV: string;
          lienHeSV?:
            | Array<{ __typename?: 'Contact'; mxh: string; url: string }>
            | null
            | undefined;
        }>
      | null
      | undefined;
  };
};

export type HomeroomTermListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
}>;

export type HomeroomTermListQuery = {
  __typename?: 'Query';
  homeroomTermList: Array<{
    __typename?: 'HomeroomTermListItem';
    maHK: number;
    hocKy: number;
    namHocBD: number;
  }>;
};

export type HomeroomWatchListQueryVariables = Exact<{
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
}>;

export type HomeroomWatchListQuery = {
  __typename?: 'Query';
  homeroomWatchList: {
    __typename?: 'HomeroomWatchList';
    total: number;
    data?:
      | Array<{
          __typename?: 'HomeroomWatchListItem';
          sinhVien: {
            __typename?: 'HomeroomStudentListItem';
            maSV: string;
            tenSV: string;
            tenCN?: string | null | undefined;
            tinhTrang: string;
            gpa4?: number | null | undefined;
            gpa10?: number | null | undefined;
            sdt: string;
            emailSV: string;
            lienHeSV?:
              | Array<{ __typename?: 'Contact'; mxh: string; url: string }>
              | null
              | undefined;
          };
        }>
      | null
      | undefined;
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
    tieuDe: string;
    noiDung: string;
    thoiGianTao: string;
    thoiGianSua?: string | null | undefined;
    ghiChuTag: Array<{ __typename?: 'NoteTag'; maTag: number; tenTag: string }>;
    ghiChuHinhAnh: Array<{ __typename?: 'NoteImage'; id: string; url: string }>;
  };
};

export type NoteSearchQueryVariables = Exact<{
  tieuDe?: InputMaybe<Scalars['String']>;
  maSV?: InputMaybe<Scalars['String']>;
  tenSV?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Date']>;
  end?: InputMaybe<Scalars['Date']>;
  maSH?: InputMaybe<Scalars['String']>;
  maTag?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type NoteSearchQuery = {
  __typename?: 'Query';
  noteSearch: {
    __typename?: 'NoteSearch';
    total: number;
    lastPage: number;
    data: Array<{
      __typename?: 'NoteListItem';
      maGC: number;
      tieuDe: string;
      noiDung: string;
      thoiGianTao: string;
      thoiGianSua?: string | null | undefined;
      maSV?: string | null | undefined;
    }>;
  };
};

export type StudentAllTermsQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentAllTermsQuery = {
  __typename?: 'Query';
  studentAllTerms: Array<{
    __typename?: 'StudentTerm';
    maHK: number;
    hocKy: number;
    namHocBD: number;
  }>;
};

export type StudentAveragePointByTermQueryVariables = Exact<{
  studentId: Scalars['String'];
  term: Scalars['Int'];
}>;

export type StudentAveragePointByTermQuery = {
  __typename?: 'Query';
  studentAveragePointByTerm: {
    __typename?: 'StudentAveragePoint';
    dtb: number;
    xepLoai?: string | null | undefined;
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
      dtb: number;
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
    tenCN?: string | null | undefined;
    gpa_4?: number | null | undefined;
    gpa_10?: number | null | undefined;
    ngoaiNgu: boolean;
    tinhTrang: string;
    maSH: string;
    xepLoai?: string | null | undefined;
    lienHeSV?:
      | Array<{
          __typename?: 'StudentContact';
          maLHSV: number;
          mxh: string;
          url: string;
        }>
      | null
      | undefined;
  };
};

export type StudentNoteListQueryVariables = Exact<{
  studentId: Scalars['String'];
  tieuDe?: InputMaybe<Scalars['String']>;
  maTag?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Date']>;
  end?: InputMaybe<Scalars['Date']>;
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentNoteListQuery = {
  __typename?: 'Query';
  studentNoteList: {
    __typename?: 'StudentNoteList';
    total: number;
    data: Array<{
      __typename?: 'StudentNote';
      maGC: number;
      tieuDe: string;
      noiDung: string;
      thoiGianTao: string;
      thoiGianSua: string;
      ghiChuTag: Array<{ __typename?: 'StudentTag'; maTag: number }>;
    }>;
  };
};

export type StudentOverviewResultQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;

export type StudentOverviewResultQuery = {
  __typename?: 'Query';
  studentOverviewResult?:
    | {
        __typename?: 'StudentOverviewResult';
        tenCN: string;
        daiCuong: number;
        coSoNganh: number;
        batBuocChuyenNganh: number;
        tuChonTuDo: number;
        tuChonChuyenNganh: number;
        totNghiep: number;
        tongTC: number;
        tongTCDaHoc: number;
        dtb: number;
      }
    | null
    | undefined;
};

export type StudentParentInfoListQueryVariables = Exact<{
  studentId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;

export type StudentParentInfoListQuery = {
  __typename?: 'Query';
  studentParentInfoList: {
    __typename?: 'StudentParentInfoList';
    total: number;
    data: Array<{
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
  studentSubjectsByTerm: Array<{
    __typename?: 'StudentSubject';
    maMH: string;
    tenMH: string;
    tenLopHP: string;
    tinhTrang: string;
    soTinChi: number;
    diemGK?: number | null | undefined;
    diemTH?: number | null | undefined;
    diemCong?: number | null | undefined;
    diemKhac?: number | null | undefined;
    diemCK?: number | null | undefined;
    dtb?: number | null | undefined;
  }>;
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

export type TeacherSearchStudentListQueryVariables = Exact<{
  maSV?: InputMaybe<Scalars['String']>;
  tenSV?: InputMaybe<Scalars['String']>;
}>;

export type TeacherSearchStudentListQuery = {
  __typename?: 'Query';
  teacherSearchStudentList: {
    __typename?: 'TeacherStudentList';
    total: number;
    data: Array<{
      __typename?: 'TeacherSearchStudentListItem';
      maSV: string;
      tenSV: string;
      tenCN?: string | null | undefined;
      tinhTrang: string;
      gpa4?: number | null | undefined;
      gpa10?: number | null | undefined;
    }>;
  };
};

export const UploadDocumentDocument = gql`
  mutation UploadDocument(
    $file: UploadFile!
    $input: UploadDocumentInput!
    $config: UploadFileConfig!
  ) {
    uploadDocument(file: $file, input: $input, config: $config) {
      status
    }
  }
`;
export type UploadDocumentMutationFn = Apollo.MutationFunction<
  UploadDocumentMutation,
  UploadDocumentMutationVariables
>;

/**
 * __useUploadDocumentMutation__
 *
 * To run a mutation, you first call `useUploadDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadDocumentMutation, { data, loading, error }] = useUploadDocumentMutation({
 *   variables: {
 *      file: // value for 'file'
 *      input: // value for 'input'
 *      config: // value for 'config'
 *   },
 * });
 */
export function useUploadDocumentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadDocumentMutation,
    UploadDocumentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UploadDocumentMutation,
    UploadDocumentMutationVariables
  >(UploadDocumentDocument, options);
}
export type UploadDocumentMutationHookResult = ReturnType<
  typeof useUploadDocumentMutation
>;
export type UploadDocumentMutationResult =
  Apollo.MutationResult<UploadDocumentMutation>;
export type UploadDocumentMutationOptions = Apollo.BaseMutationOptions<
  UploadDocumentMutation,
  UploadDocumentMutationVariables
>;
export const ClassroomListDocument = gql`
  query ClassroomList($termId: Int!, $courseId: String) {
    classroomList(termId: $termId, courseId: $courseId) {
      maHP
      tenLopHP
    }
  }
`;

/**
 * __useClassroomListQuery__
 *
 * To run a query within a React component, call `useClassroomListQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassroomListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassroomListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useClassroomListQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClassroomListQuery,
    ClassroomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClassroomListQuery, ClassroomListQueryVariables>(
    ClassroomListDocument,
    options
  );
}
export function useClassroomListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClassroomListQuery,
    ClassroomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ClassroomListQuery, ClassroomListQueryVariables>(
    ClassroomListDocument,
    options
  );
}
export type ClassroomListQueryHookResult = ReturnType<
  typeof useClassroomListQuery
>;
export type ClassroomListLazyQueryHookResult = ReturnType<
  typeof useClassroomListLazyQuery
>;
export type ClassroomListQueryResult = Apollo.QueryResult<
  ClassroomListQuery,
  ClassroomListQueryVariables
>;
export const ClassroomScoreListDocument = gql`
  query ClassroomScoreList($id: Int!, $termId: Int!, $page: Int!, $size: Int!) {
    classroomScoreList(id: $id, termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        diemCK
        diemCong
        diemGK
        diemKhac
        diemTH
        dtb
      }
    }
  }
`;

/**
 * __useClassroomScoreListQuery__
 *
 * To run a query within a React component, call `useClassroomScoreListQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassroomScoreListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassroomScoreListQuery({
 *   variables: {
 *      id: // value for 'id'
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useClassroomScoreListQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClassroomScoreListQuery,
    ClassroomScoreListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClassroomScoreListQuery,
    ClassroomScoreListQueryVariables
  >(ClassroomScoreListDocument, options);
}
export function useClassroomScoreListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClassroomScoreListQuery,
    ClassroomScoreListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClassroomScoreListQuery,
    ClassroomScoreListQueryVariables
  >(ClassroomScoreListDocument, options);
}
export type ClassroomScoreListQueryHookResult = ReturnType<
  typeof useClassroomScoreListQuery
>;
export type ClassroomScoreListLazyQueryHookResult = ReturnType<
  typeof useClassroomScoreListLazyQuery
>;
export type ClassroomScoreListQueryResult = Apollo.QueryResult<
  ClassroomScoreListQuery,
  ClassroomScoreListQueryVariables
>;
export const CourseListDocument = gql`
  query CourseList($page: Int, $size: Int) {
    courseList(page: $page, size: $size) {
      total
      data {
        maMH
        tenMH
        soTinChi
        maCN
        loaiMonHoc
        chuyenNganh
        tenCN
      }
    }
  }
`;

/**
 * __useCourseListQuery__
 *
 * To run a query within a React component, call `useCourseListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useCourseListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CourseListQuery,
    CourseListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CourseListQuery, CourseListQueryVariables>(
    CourseListDocument,
    options
  );
}
export function useCourseListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CourseListQuery,
    CourseListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CourseListQuery, CourseListQueryVariables>(
    CourseListDocument,
    options
  );
}
export type CourseListQueryHookResult = ReturnType<typeof useCourseListQuery>;
export type CourseListLazyQueryHookResult = ReturnType<
  typeof useCourseListLazyQuery
>;
export type CourseListQueryResult = Apollo.QueryResult<
  CourseListQuery,
  CourseListQueryVariables
>;
export const MajorListDocument = gql`
  query MajorList($page: Int!, $size: Int!) {
    majorList(page: $page, size: $size) {
      total
      data {
        maCN
        tenCN
        tenVietTat
      }
    }
  }
`;

/**
 * __useMajorListQuery__
 *
 * To run a query within a React component, call `useMajorListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMajorListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMajorListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useMajorListQuery(
  baseOptions: Apollo.QueryHookOptions<MajorListQuery, MajorListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MajorListQuery, MajorListQueryVariables>(
    MajorListDocument,
    options
  );
}
export function useMajorListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MajorListQuery,
    MajorListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MajorListQuery, MajorListQueryVariables>(
    MajorListDocument,
    options
  );
}
export type MajorListQueryHookResult = ReturnType<typeof useMajorListQuery>;
export type MajorListLazyQueryHookResult = ReturnType<
  typeof useMajorListLazyQuery
>;
export type MajorListQueryResult = Apollo.QueryResult<
  MajorListQuery,
  MajorListQueryVariables
>;
export const MajorResultListDocument = gql`
  query MajorResultList($page: Int!, $size: Int!) {
    majorResultList(page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        chuyenNganh
      }
    }
  }
`;

/**
 * __useMajorResultListQuery__
 *
 * To run a query within a React component, call `useMajorResultListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMajorResultListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMajorResultListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useMajorResultListQuery(
  baseOptions: Apollo.QueryHookOptions<
    MajorResultListQuery,
    MajorResultListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MajorResultListQuery, MajorResultListQueryVariables>(
    MajorResultListDocument,
    options
  );
}
export function useMajorResultListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MajorResultListQuery,
    MajorResultListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MajorResultListQuery,
    MajorResultListQueryVariables
  >(MajorResultListDocument, options);
}
export type MajorResultListQueryHookResult = ReturnType<
  typeof useMajorResultListQuery
>;
export type MajorResultListLazyQueryHookResult = ReturnType<
  typeof useMajorResultListLazyQuery
>;
export type MajorResultListQueryResult = Apollo.QueryResult<
  MajorResultListQuery,
  MajorResultListQueryVariables
>;
export const ColumnHeaderListDocument = gql`
  query ColumnHeaderList($fileType: FileType!) {
    columnHeaderList(fileType: $fileType) {
      key
      value
      index
    }
  }
`;

/**
 * __useColumnHeaderListQuery__
 *
 * To run a query within a React component, call `useColumnHeaderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useColumnHeaderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColumnHeaderListQuery({
 *   variables: {
 *      fileType: // value for 'fileType'
 *   },
 * });
 */
export function useColumnHeaderListQuery(
  baseOptions: Apollo.QueryHookOptions<
    ColumnHeaderListQuery,
    ColumnHeaderListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ColumnHeaderListQuery, ColumnHeaderListQueryVariables>(
    ColumnHeaderListDocument,
    options
  );
}
export function useColumnHeaderListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ColumnHeaderListQuery,
    ColumnHeaderListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ColumnHeaderListQuery,
    ColumnHeaderListQueryVariables
  >(ColumnHeaderListDocument, options);
}
export type ColumnHeaderListQueryHookResult = ReturnType<
  typeof useColumnHeaderListQuery
>;
export type ColumnHeaderListLazyQueryHookResult = ReturnType<
  typeof useColumnHeaderListLazyQuery
>;
export type ColumnHeaderListQueryResult = Apollo.QueryResult<
  ColumnHeaderListQuery,
  ColumnHeaderListQueryVariables
>;
export const ImportHistoryDocument = gql`
  query ImportHistory($fileType: FileType!) {
    importHistory(fileType: $fileType) {
      thoiGian
      taiKhoan {
        giaoVien {
          tenGV
        }
      }
    }
  }
`;

/**
 * __useImportHistoryQuery__
 *
 * To run a query within a React component, call `useImportHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportHistoryQuery({
 *   variables: {
 *      fileType: // value for 'fileType'
 *   },
 * });
 */
export function useImportHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    ImportHistoryQuery,
    ImportHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ImportHistoryQuery, ImportHistoryQueryVariables>(
    ImportHistoryDocument,
    options
  );
}
export function useImportHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ImportHistoryQuery,
    ImportHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ImportHistoryQuery, ImportHistoryQueryVariables>(
    ImportHistoryDocument,
    options
  );
}
export type ImportHistoryQueryHookResult = ReturnType<
  typeof useImportHistoryQuery
>;
export type ImportHistoryLazyQueryHookResult = ReturnType<
  typeof useImportHistoryLazyQuery
>;
export type ImportHistoryQueryResult = Apollo.QueryResult<
  ImportHistoryQuery,
  ImportHistoryQueryVariables
>;
export const TermListDocument = gql`
  query TermList {
    termList {
      maHK
      namHocBD
      hocKy
    }
  }
`;

/**
 * __useTermListQuery__
 *
 * To run a query within a React component, call `useTermListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermListQuery(
  baseOptions?: Apollo.QueryHookOptions<TermListQuery, TermListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TermListQuery, TermListQueryVariables>(
    TermListDocument,
    options
  );
}
export function useTermListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TermListQuery,
    TermListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TermListQuery, TermListQueryVariables>(
    TermListDocument,
    options
  );
}
export type TermListQueryHookResult = ReturnType<typeof useTermListQuery>;
export type TermListLazyQueryHookResult = ReturnType<
  typeof useTermListLazyQuery
>;
export type TermListQueryResult = Apollo.QueryResult<
  TermListQuery,
  TermListQueryVariables
>;
export const HomeroomAllListDocument = gql`
  query HomeroomAllList {
    homeroomAllList {
      maSH
    }
  }
`;

/**
 * __useHomeroomAllListQuery__
 *
 * To run a query within a React component, call `useHomeroomAllListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomAllListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomAllListQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeroomAllListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HomeroomAllListQuery,
    HomeroomAllListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeroomAllListQuery, HomeroomAllListQueryVariables>(
    HomeroomAllListDocument,
    options
  );
}
export function useHomeroomAllListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomAllListQuery,
    HomeroomAllListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomAllListQuery,
    HomeroomAllListQueryVariables
  >(HomeroomAllListDocument, options);
}
export type HomeroomAllListQueryHookResult = ReturnType<
  typeof useHomeroomAllListQuery
>;
export type HomeroomAllListLazyQueryHookResult = ReturnType<
  typeof useHomeroomAllListLazyQuery
>;
export type HomeroomAllListQueryResult = Apollo.QueryResult<
  HomeroomAllListQuery,
  HomeroomAllListQueryVariables
>;
export const StudentAbsentListDocument = gql`
  query StudentAbsentList($termId: Int!, $page: Int!, $size: Int!) {
    studentAbsentList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maMH
        tenMH
      }
    }
  }
`;

/**
 * __useStudentAbsentListQuery__
 *
 * To run a query within a React component, call `useStudentAbsentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentAbsentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentAbsentListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useStudentAbsentListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentAbsentListQuery,
    StudentAbsentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentAbsentListQuery,
    StudentAbsentListQueryVariables
  >(StudentAbsentListDocument, options);
}
export function useStudentAbsentListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentAbsentListQuery,
    StudentAbsentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentAbsentListQuery,
    StudentAbsentListQueryVariables
  >(StudentAbsentListDocument, options);
}
export type StudentAbsentListQueryHookResult = ReturnType<
  typeof useStudentAbsentListQuery
>;
export type StudentAbsentListLazyQueryHookResult = ReturnType<
  typeof useStudentAbsentListLazyQuery
>;
export type StudentAbsentListQueryResult = Apollo.QueryResult<
  StudentAbsentListQuery,
  StudentAbsentListQueryVariables
>;
export const StudentEnrolledListDocument = gql`
  query StudentEnrolledList($termId: Int!, $page: Int!, $size: Int!) {
    studentEnrolledList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maMH
        tenMH
        tenLopHP
      }
    }
  }
`;

/**
 * __useStudentEnrolledListQuery__
 *
 * To run a query within a React component, call `useStudentEnrolledListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentEnrolledListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentEnrolledListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useStudentEnrolledListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentEnrolledListQuery,
    StudentEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentEnrolledListQuery,
    StudentEnrolledListQueryVariables
  >(StudentEnrolledListDocument, options);
}
export function useStudentEnrolledListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentEnrolledListQuery,
    StudentEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentEnrolledListQuery,
    StudentEnrolledListQueryVariables
  >(StudentEnrolledListDocument, options);
}
export type StudentEnrolledListQueryHookResult = ReturnType<
  typeof useStudentEnrolledListQuery
>;
export type StudentEnrolledListLazyQueryHookResult = ReturnType<
  typeof useStudentEnrolledListLazyQuery
>;
export type StudentEnrolledListQueryResult = Apollo.QueryResult<
  StudentEnrolledListQuery,
  StudentEnrolledListQueryVariables
>;
export const StudentNotEnrolledListDocument = gql`
  query StudentNotEnrolledList($termId: Int!, $page: Int!, $size: Int!) {
    studentNotEnrolledList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maSH
      }
    }
  }
`;

/**
 * __useStudentNotEnrolledListQuery__
 *
 * To run a query within a React component, call `useStudentNotEnrolledListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentNotEnrolledListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentNotEnrolledListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useStudentNotEnrolledListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentNotEnrolledListQuery,
    StudentNotEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentNotEnrolledListQuery,
    StudentNotEnrolledListQueryVariables
  >(StudentNotEnrolledListDocument, options);
}
export function useStudentNotEnrolledListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentNotEnrolledListQuery,
    StudentNotEnrolledListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentNotEnrolledListQuery,
    StudentNotEnrolledListQueryVariables
  >(StudentNotEnrolledListDocument, options);
}
export type StudentNotEnrolledListQueryHookResult = ReturnType<
  typeof useStudentNotEnrolledListQuery
>;
export type StudentNotEnrolledListLazyQueryHookResult = ReturnType<
  typeof useStudentNotEnrolledListLazyQuery
>;
export type StudentNotEnrolledListQueryResult = Apollo.QueryResult<
  StudentNotEnrolledListQuery,
  StudentNotEnrolledListQueryVariables
>;
export const StudentPostponeListDocument = gql`
  query StudentPostponeList($termId: Int!, $page: Int!, $size: Int!) {
    studentPostponeList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        maMH
        tenMH
      }
    }
  }
`;

/**
 * __useStudentPostponeListQuery__
 *
 * To run a query within a React component, call `useStudentPostponeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentPostponeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentPostponeListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useStudentPostponeListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentPostponeListQuery,
    StudentPostponeListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentPostponeListQuery,
    StudentPostponeListQueryVariables
  >(StudentPostponeListDocument, options);
}
export function useStudentPostponeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentPostponeListQuery,
    StudentPostponeListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentPostponeListQuery,
    StudentPostponeListQueryVariables
  >(StudentPostponeListDocument, options);
}
export type StudentPostponeListQueryHookResult = ReturnType<
  typeof useStudentPostponeListQuery
>;
export type StudentPostponeListLazyQueryHookResult = ReturnType<
  typeof useStudentPostponeListLazyQuery
>;
export type StudentPostponeListQueryResult = Apollo.QueryResult<
  StudentPostponeListQuery,
  StudentPostponeListQueryVariables
>;
export const StudentTrainingPointListDocument = gql`
  query StudentTrainingPointList($termId: Int!, $page: Int!, $size: Int!) {
    studentTrainingPointList(termId: $termId, page: $page, size: $size) {
      total
      data {
        maSV
        tenSV
        drl
        xepLoai
      }
    }
  }
`;

/**
 * __useStudentTrainingPointListQuery__
 *
 * To run a query within a React component, call `useStudentTrainingPointListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentTrainingPointListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentTrainingPointListQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useStudentTrainingPointListQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentTrainingPointListQuery,
    StudentTrainingPointListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentTrainingPointListQuery,
    StudentTrainingPointListQueryVariables
  >(StudentTrainingPointListDocument, options);
}
export function useStudentTrainingPointListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentTrainingPointListQuery,
    StudentTrainingPointListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentTrainingPointListQuery,
    StudentTrainingPointListQueryVariables
  >(StudentTrainingPointListDocument, options);
}
export type StudentTrainingPointListQueryHookResult = ReturnType<
  typeof useStudentTrainingPointListQuery
>;
export type StudentTrainingPointListLazyQueryHookResult = ReturnType<
  typeof useStudentTrainingPointListLazyQuery
>;
export type StudentTrainingPointListQueryResult = Apollo.QueryResult<
  StudentTrainingPointListQuery,
  StudentTrainingPointListQueryVariables
>;
export const TeacherListDocument = gql`
  query TeacherList($year: Int!, $page: Int!, $size: Int!) {
    teacherList(year: $year, page: $page, size: $size) {
      total
      data {
        maSH
        tenGV
        email
      }
    }
  }
`;

/**
 * __useTeacherListQuery__
 *
 * To run a query within a React component, call `useTeacherListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherListQuery({
 *   variables: {
 *      year: // value for 'year'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useTeacherListQuery(
  baseOptions: Apollo.QueryHookOptions<
    TeacherListQuery,
    TeacherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TeacherListQuery, TeacherListQueryVariables>(
    TeacherListDocument,
    options
  );
}
export function useTeacherListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TeacherListQuery,
    TeacherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TeacherListQuery, TeacherListQueryVariables>(
    TeacherListDocument,
    options
  );
}
export type TeacherListQueryHookResult = ReturnType<typeof useTeacherListQuery>;
export type TeacherListLazyQueryHookResult = ReturnType<
  typeof useTeacherListLazyQuery
>;
export type TeacherListQueryResult = Apollo.QueryResult<
  TeacherListQuery,
  TeacherListQueryVariables
>;
export const YearListDocument = gql`
  query YearList {
    yearList {
      khoa
    }
  }
`;

/**
 * __useYearListQuery__
 *
 * To run a query within a React component, call `useYearListQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearListQuery({
 *   variables: {
 *   },
 * });
 */
export function useYearListQuery(
  baseOptions?: Apollo.QueryHookOptions<YearListQuery, YearListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<YearListQuery, YearListQueryVariables>(
    YearListDocument,
    options
  );
}
export function useYearListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    YearListQuery,
    YearListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<YearListQuery, YearListQueryVariables>(
    YearListDocument,
    options
  );
}
export type YearListQueryHookResult = ReturnType<typeof useYearListQuery>;
export type YearListLazyQueryHookResult = ReturnType<
  typeof useYearListLazyQuery
>;
export type YearListQueryResult = Apollo.QueryResult<
  YearListQuery,
  YearListQueryVariables
>;
export const AccountActivateDocument = gql`
  mutation AccountActivate($payload: AccountActivateInput!) {
    accountActivate(payload: $payload) {
      maTK
      email
    }
  }
`;
export type AccountActivateMutationFn = Apollo.MutationFunction<
  AccountActivateMutation,
  AccountActivateMutationVariables
>;

/**
 * __useAccountActivateMutation__
 *
 * To run a mutation, you first call `useAccountActivateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountActivateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountActivateMutation, { data, loading, error }] = useAccountActivateMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAccountActivateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AccountActivateMutation,
    AccountActivateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AccountActivateMutation,
    AccountActivateMutationVariables
  >(AccountActivateDocument, options);
}
export type AccountActivateMutationHookResult = ReturnType<
  typeof useAccountActivateMutation
>;
export type AccountActivateMutationResult =
  Apollo.MutationResult<AccountActivateMutation>;
export type AccountActivateMutationOptions = Apollo.BaseMutationOptions<
  AccountActivateMutation,
  AccountActivateMutationVariables
>;
export const AccountAddDocument = gql`
  mutation AccountAdd($payload: AccountAddInput!) {
    accountAdd(payload: $payload) {
      maTK
      email
    }
  }
`;
export type AccountAddMutationFn = Apollo.MutationFunction<
  AccountAddMutation,
  AccountAddMutationVariables
>;

/**
 * __useAccountAddMutation__
 *
 * To run a mutation, you first call `useAccountAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountAddMutation, { data, loading, error }] = useAccountAddMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAccountAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AccountAddMutation,
    AccountAddMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AccountAddMutation, AccountAddMutationVariables>(
    AccountAddDocument,
    options
  );
}
export type AccountAddMutationHookResult = ReturnType<
  typeof useAccountAddMutation
>;
export type AccountAddMutationResult =
  Apollo.MutationResult<AccountAddMutation>;
export type AccountAddMutationOptions = Apollo.BaseMutationOptions<
  AccountAddMutation,
  AccountAddMutationVariables
>;
export const AccountDeleteDocument = gql`
  mutation AccountDelete($payload: AccountDeleteInput!) {
    accountDelete(payload: $payload) {
      maTK
      email
    }
  }
`;
export type AccountDeleteMutationFn = Apollo.MutationFunction<
  AccountDeleteMutation,
  AccountDeleteMutationVariables
>;

/**
 * __useAccountDeleteMutation__
 *
 * To run a mutation, you first call `useAccountDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountDeleteMutation, { data, loading, error }] = useAccountDeleteMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAccountDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AccountDeleteMutation,
    AccountDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AccountDeleteMutation,
    AccountDeleteMutationVariables
  >(AccountDeleteDocument, options);
}
export type AccountDeleteMutationHookResult = ReturnType<
  typeof useAccountDeleteMutation
>;
export type AccountDeleteMutationResult =
  Apollo.MutationResult<AccountDeleteMutation>;
export type AccountDeleteMutationOptions = Apollo.BaseMutationOptions<
  AccountDeleteMutation,
  AccountDeleteMutationVariables
>;
export const AccountEditDocument = gql`
  mutation AccountEdit($payload: AccountEditInput!) {
    accountEdit(payload: $payload) {
      maTK
      tenGV
    }
  }
`;
export type AccountEditMutationFn = Apollo.MutationFunction<
  AccountEditMutation,
  AccountEditMutationVariables
>;

/**
 * __useAccountEditMutation__
 *
 * To run a mutation, you first call `useAccountEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountEditMutation, { data, loading, error }] = useAccountEditMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAccountEditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AccountEditMutation,
    AccountEditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AccountEditMutation, AccountEditMutationVariables>(
    AccountEditDocument,
    options
  );
}
export type AccountEditMutationHookResult = ReturnType<
  typeof useAccountEditMutation
>;
export type AccountEditMutationResult =
  Apollo.MutationResult<AccountEditMutation>;
export type AccountEditMutationOptions = Apollo.BaseMutationOptions<
  AccountEditMutation,
  AccountEditMutationVariables
>;
export const TagAddDocument = gql`
  mutation TagAdd($payload: TagAddInput!) {
    tagAdd(payload: $payload) {
      maTag
      tenTag
    }
  }
`;
export type TagAddMutationFn = Apollo.MutationFunction<
  TagAddMutation,
  TagAddMutationVariables
>;

/**
 * __useTagAddMutation__
 *
 * To run a mutation, you first call `useTagAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagAddMutation, { data, loading, error }] = useTagAddMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useTagAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TagAddMutation,
    TagAddMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TagAddMutation, TagAddMutationVariables>(
    TagAddDocument,
    options
  );
}
export type TagAddMutationHookResult = ReturnType<typeof useTagAddMutation>;
export type TagAddMutationResult = Apollo.MutationResult<TagAddMutation>;
export type TagAddMutationOptions = Apollo.BaseMutationOptions<
  TagAddMutation,
  TagAddMutationVariables
>;
export const TagDeleteDocument = gql`
  mutation TagDelete($tagId: Int!) {
    tagDelete(tagId: $tagId) {
      status
    }
  }
`;
export type TagDeleteMutationFn = Apollo.MutationFunction<
  TagDeleteMutation,
  TagDeleteMutationVariables
>;

/**
 * __useTagDeleteMutation__
 *
 * To run a mutation, you first call `useTagDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagDeleteMutation, { data, loading, error }] = useTagDeleteMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useTagDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TagDeleteMutation,
    TagDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TagDeleteMutation, TagDeleteMutationVariables>(
    TagDeleteDocument,
    options
  );
}
export type TagDeleteMutationHookResult = ReturnType<
  typeof useTagDeleteMutation
>;
export type TagDeleteMutationResult = Apollo.MutationResult<TagDeleteMutation>;
export type TagDeleteMutationOptions = Apollo.BaseMutationOptions<
  TagDeleteMutation,
  TagDeleteMutationVariables
>;
export const TagEditDocument = gql`
  mutation TagEdit($tagId: Int!, $payload: TagEditInput!) {
    tagEdit(tagId: $tagId, payload: $payload) {
      maTag
      tenTag
    }
  }
`;
export type TagEditMutationFn = Apollo.MutationFunction<
  TagEditMutation,
  TagEditMutationVariables
>;

/**
 * __useTagEditMutation__
 *
 * To run a mutation, you first call `useTagEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagEditMutation, { data, loading, error }] = useTagEditMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useTagEditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TagEditMutation,
    TagEditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TagEditMutation, TagEditMutationVariables>(
    TagEditDocument,
    options
  );
}
export type TagEditMutationHookResult = ReturnType<typeof useTagEditMutation>;
export type TagEditMutationResult = Apollo.MutationResult<TagEditMutation>;
export type TagEditMutationOptions = Apollo.BaseMutationOptions<
  TagEditMutation,
  TagEditMutationVariables
>;
export const TeacherDeleteDocument = gql`
  mutation TeacherDelete($teacherId: Int!) {
    teacherDelete(teacherId: $teacherId) {
      maGV
    }
  }
`;
export type TeacherDeleteMutationFn = Apollo.MutationFunction<
  TeacherDeleteMutation,
  TeacherDeleteMutationVariables
>;

/**
 * __useTeacherDeleteMutation__
 *
 * To run a mutation, you first call `useTeacherDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTeacherDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [teacherDeleteMutation, { data, loading, error }] = useTeacherDeleteMutation({
 *   variables: {
 *      teacherId: // value for 'teacherId'
 *   },
 * });
 */
export function useTeacherDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TeacherDeleteMutation,
    TeacherDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TeacherDeleteMutation,
    TeacherDeleteMutationVariables
  >(TeacherDeleteDocument, options);
}
export type TeacherDeleteMutationHookResult = ReturnType<
  typeof useTeacherDeleteMutation
>;
export type TeacherDeleteMutationResult =
  Apollo.MutationResult<TeacherDeleteMutation>;
export type TeacherDeleteMutationOptions = Apollo.BaseMutationOptions<
  TeacherDeleteMutation,
  TeacherDeleteMutationVariables
>;
export const TeacherEditDocument = gql`
  mutation TeacherEdit($teacherId: Int!, $payload: TeacherEditInput!) {
    teacherEdit(teacherId: $teacherId, payload: $payload) {
      maGV
    }
  }
`;
export type TeacherEditMutationFn = Apollo.MutationFunction<
  TeacherEditMutation,
  TeacherEditMutationVariables
>;

/**
 * __useTeacherEditMutation__
 *
 * To run a mutation, you first call `useTeacherEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTeacherEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [teacherEditMutation, { data, loading, error }] = useTeacherEditMutation({
 *   variables: {
 *      teacherId: // value for 'teacherId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useTeacherEditMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TeacherEditMutation,
    TeacherEditMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TeacherEditMutation, TeacherEditMutationVariables>(
    TeacherEditDocument,
    options
  );
}
export type TeacherEditMutationHookResult = ReturnType<
  typeof useTeacherEditMutation
>;
export type TeacherEditMutationResult =
  Apollo.MutationResult<TeacherEditMutation>;
export type TeacherEditMutationOptions = Apollo.BaseMutationOptions<
  TeacherEditMutation,
  TeacherEditMutationVariables
>;
export const AccountListDocument = gql`
  query AccountList($page: Int!, $size: Int!) {
    accountList(page: $page, size: $size) {
      total
      data {
        maTK
        email
        tenGV
        hoatDong
        gvcn
        gvu
      }
    }
  }
`;

/**
 * __useAccountListQuery__
 *
 * To run a query within a React component, call `useAccountListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useAccountListQuery(
  baseOptions: Apollo.QueryHookOptions<
    AccountListQuery,
    AccountListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AccountListQuery, AccountListQueryVariables>(
    AccountListDocument,
    options
  );
}
export function useAccountListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AccountListQuery,
    AccountListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AccountListQuery, AccountListQueryVariables>(
    AccountListDocument,
    options
  );
}
export type AccountListQueryHookResult = ReturnType<typeof useAccountListQuery>;
export type AccountListLazyQueryHookResult = ReturnType<
  typeof useAccountListLazyQuery
>;
export type AccountListQueryResult = Apollo.QueryResult<
  AccountListQuery,
  AccountListQueryVariables
>;
export const TagListDocument = gql`
  query TagList {
    tagList {
      tags {
        maTag
        tenTag
      }
    }
  }
`;

/**
 * __useTagListQuery__
 *
 * To run a query within a React component, call `useTagListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagListQuery(
  baseOptions?: Apollo.QueryHookOptions<TagListQuery, TagListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TagListQuery, TagListQueryVariables>(
    TagListDocument,
    options
  );
}
export function useTagListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TagListQuery, TagListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TagListQuery, TagListQueryVariables>(
    TagListDocument,
    options
  );
}
export type TagListQueryHookResult = ReturnType<typeof useTagListQuery>;
export type TagListLazyQueryHookResult = ReturnType<typeof useTagListLazyQuery>;
export type TagListQueryResult = Apollo.QueryResult<
  TagListQuery,
  TagListQueryVariables
>;
export const AllTeacherListDocument = gql`
  query AllTeacherList($page: Int!, $size: Int!) {
    allTeacherList(page: $page, size: $size) {
      total
      data {
        maGV
        tenGV
        email
        lopSinhHoat {
          maSH
        }
      }
    }
  }
`;

/**
 * __useAllTeacherListQuery__
 *
 * To run a query within a React component, call `useAllTeacherListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTeacherListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTeacherListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useAllTeacherListQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllTeacherListQuery,
    AllTeacherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTeacherListQuery, AllTeacherListQueryVariables>(
    AllTeacherListDocument,
    options
  );
}
export function useAllTeacherListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTeacherListQuery,
    AllTeacherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTeacherListQuery, AllTeacherListQueryVariables>(
    AllTeacherListDocument,
    options
  );
}
export type AllTeacherListQueryHookResult = ReturnType<
  typeof useAllTeacherListQuery
>;
export type AllTeacherListLazyQueryHookResult = ReturnType<
  typeof useAllTeacherListLazyQuery
>;
export type AllTeacherListQueryResult = Apollo.QueryResult<
  AllTeacherListQuery,
  AllTeacherListQueryVariables
>;
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
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      status
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
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
export const ResetPasswordDocument = gql`
  mutation ResetPassword(
    $id: Int!
    $token: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    resetPassword(
      id: $id
      token: $token
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      status
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      passwordConfirm: // value for 'passwordConfirm'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const HomeroomAddWatchlistDocument = gql`
  mutation HomeroomAddWatchlist($payload: HomeroomAddWatchlistInput!) {
    homeroomAddWatchlist(payload: $payload) {
      status
    }
  }
`;
export type HomeroomAddWatchlistMutationFn = Apollo.MutationFunction<
  HomeroomAddWatchlistMutation,
  HomeroomAddWatchlistMutationVariables
>;

/**
 * __useHomeroomAddWatchlistMutation__
 *
 * To run a mutation, you first call `useHomeroomAddWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHomeroomAddWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [homeroomAddWatchlistMutation, { data, loading, error }] = useHomeroomAddWatchlistMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useHomeroomAddWatchlistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    HomeroomAddWatchlistMutation,
    HomeroomAddWatchlistMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    HomeroomAddWatchlistMutation,
    HomeroomAddWatchlistMutationVariables
  >(HomeroomAddWatchlistDocument, options);
}
export type HomeroomAddWatchlistMutationHookResult = ReturnType<
  typeof useHomeroomAddWatchlistMutation
>;
export type HomeroomAddWatchlistMutationResult =
  Apollo.MutationResult<HomeroomAddWatchlistMutation>;
export type HomeroomAddWatchlistMutationOptions = Apollo.BaseMutationOptions<
  HomeroomAddWatchlistMutation,
  HomeroomAddWatchlistMutationVariables
>;
export const HomeroomDeleteWatchlistDocument = gql`
  mutation HomeroomDeleteWatchlist($payload: HomeroomDeleteWatchlistInput!) {
    homeroomDeleteWatchlist(payload: $payload) {
      status
    }
  }
`;
export type HomeroomDeleteWatchlistMutationFn = Apollo.MutationFunction<
  HomeroomDeleteWatchlistMutation,
  HomeroomDeleteWatchlistMutationVariables
>;

/**
 * __useHomeroomDeleteWatchlistMutation__
 *
 * To run a mutation, you first call `useHomeroomDeleteWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHomeroomDeleteWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [homeroomDeleteWatchlistMutation, { data, loading, error }] = useHomeroomDeleteWatchlistMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useHomeroomDeleteWatchlistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    HomeroomDeleteWatchlistMutation,
    HomeroomDeleteWatchlistMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    HomeroomDeleteWatchlistMutation,
    HomeroomDeleteWatchlistMutationVariables
  >(HomeroomDeleteWatchlistDocument, options);
}
export type HomeroomDeleteWatchlistMutationHookResult = ReturnType<
  typeof useHomeroomDeleteWatchlistMutation
>;
export type HomeroomDeleteWatchlistMutationResult =
  Apollo.MutationResult<HomeroomDeleteWatchlistMutation>;
export type HomeroomDeleteWatchlistMutationOptions = Apollo.BaseMutationOptions<
  HomeroomDeleteWatchlistMutation,
  HomeroomDeleteWatchlistMutationVariables
>;
export const NoteAddDocument = gql`
  mutation NoteAdd($payload: NoteAddInput!) {
    noteAdd(payload: $payload) {
      tieuDe
      noiDung
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
      tieuDe
      noiDung
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
      giaoVien {
        tenGV
      }
      siSo
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
export const HomeroomExamAbsentListByTermDocument = gql`
  query HomeroomExamAbsentListByTerm($homeroomId: String!, $term: Int!) {
    homeroomExamAbsentListByTerm(homeroomId: $homeroomId, term: $term) {
      data {
        sinhVien {
          maSV
          tenSV
        }
        monHoc {
          tenMH
        }
      }
    }
  }
`;

/**
 * __useHomeroomExamAbsentListByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomExamAbsentListByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomExamAbsentListByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomExamAbsentListByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useHomeroomExamAbsentListByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomExamAbsentListByTermQuery,
    HomeroomExamAbsentListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomExamAbsentListByTermQuery,
    HomeroomExamAbsentListByTermQueryVariables
  >(HomeroomExamAbsentListByTermDocument, options);
}
export function useHomeroomExamAbsentListByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomExamAbsentListByTermQuery,
    HomeroomExamAbsentListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomExamAbsentListByTermQuery,
    HomeroomExamAbsentListByTermQueryVariables
  >(HomeroomExamAbsentListByTermDocument, options);
}
export type HomeroomExamAbsentListByTermQueryHookResult = ReturnType<
  typeof useHomeroomExamAbsentListByTermQuery
>;
export type HomeroomExamAbsentListByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomExamAbsentListByTermLazyQuery
>;
export type HomeroomExamAbsentListByTermQueryResult = Apollo.QueryResult<
  HomeroomExamAbsentListByTermQuery,
  HomeroomExamAbsentListByTermQueryVariables
>;
export const HomeroomFailListByTermDocument = gql`
  query HomeroomFailListByTerm($homeroomId: String!, $term: Int!) {
    homeroomFailListByTerm(homeroomId: $homeroomId, term: $term) {
      total
      data {
        dtb
        vang
        sinhVien {
          maSV
          tenSV
        }
        lopHocPhan {
          tenLopHP
          monHoc {
            tenMH
          }
        }
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
export const HomeroomFinalResultListByTermDocument = gql`
  query HomeroomFinalResultListByTerm(
    $homeroomId: String!
    $term: Int!
    $page: Int!
    $size: Int!
  ) {
    homeroomFinalResultListByTerm(
      homeroomId: $homeroomId
      term: $term
      page: $page
      size: $size
    ) {
      total
      formatted {
        maSV
        tenSV
        dtb
        xepLoai
      }
    }
  }
`;

/**
 * __useHomeroomFinalResultListByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomFinalResultListByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomFinalResultListByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomFinalResultListByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useHomeroomFinalResultListByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomFinalResultListByTermQuery,
    HomeroomFinalResultListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomFinalResultListByTermQuery,
    HomeroomFinalResultListByTermQueryVariables
  >(HomeroomFinalResultListByTermDocument, options);
}
export function useHomeroomFinalResultListByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomFinalResultListByTermQuery,
    HomeroomFinalResultListByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomFinalResultListByTermQuery,
    HomeroomFinalResultListByTermQueryVariables
  >(HomeroomFinalResultListByTermDocument, options);
}
export type HomeroomFinalResultListByTermQueryHookResult = ReturnType<
  typeof useHomeroomFinalResultListByTermQuery
>;
export type HomeroomFinalResultListByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomFinalResultListByTermLazyQuery
>;
export type HomeroomFinalResultListByTermQueryResult = Apollo.QueryResult<
  HomeroomFinalResultListByTermQuery,
  HomeroomFinalResultListByTermQueryVariables
>;
export const HomeroomListDocument = gql`
  query HomeroomList {
    homeroomList {
      lopChuNhiem {
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
      data {
        sinhVien {
          maSV
          tenSV
        }
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
export const HomeroomOverviewReportByTermDocument = gql`
  query HomeroomOverviewReportByTerm($homeroomId: String!, $term: Int!) {
    homeroomOverviewReportByTerm(homeroomId: $homeroomId, term: $term) {
      siSo {
        tong
        nam
        nu
      }
      hocTap {
        xuatSac
        gioi
        kha
        trungBinh
        yeu
        kem
        chungChiNgoaiNgu
      }
      drl {
        xuatSac
        gioi
        kha
        trungBinh
        yeu
        kem
      }
    }
  }
`;

/**
 * __useHomeroomOverviewReportByTermQuery__
 *
 * To run a query within a React component, call `useHomeroomOverviewReportByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomOverviewReportByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomOverviewReportByTermQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useHomeroomOverviewReportByTermQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomOverviewReportByTermQuery,
    HomeroomOverviewReportByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomOverviewReportByTermQuery,
    HomeroomOverviewReportByTermQueryVariables
  >(HomeroomOverviewReportByTermDocument, options);
}
export function useHomeroomOverviewReportByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomOverviewReportByTermQuery,
    HomeroomOverviewReportByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomOverviewReportByTermQuery,
    HomeroomOverviewReportByTermQueryVariables
  >(HomeroomOverviewReportByTermDocument, options);
}
export type HomeroomOverviewReportByTermQueryHookResult = ReturnType<
  typeof useHomeroomOverviewReportByTermQuery
>;
export type HomeroomOverviewReportByTermLazyQueryHookResult = ReturnType<
  typeof useHomeroomOverviewReportByTermLazyQuery
>;
export type HomeroomOverviewReportByTermQueryResult = Apollo.QueryResult<
  HomeroomOverviewReportByTermQuery,
  HomeroomOverviewReportByTermQueryVariables
>;
export const HomeroomPostponeExamListByTermDocument = gql`
  query HomeroomPostponeExamListByTerm($homeroomId: String!, $term: Int!) {
    homeroomPostponeExamListByTerm(homeroomId: $homeroomId, term: $term) {
      data {
        sinhVien {
          maSV
          tenSV
        }
        monHoc {
          tenMH
        }
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
export const HomeroomStudentListDocument = gql`
  query HomeroomStudentList(
    $homeroomId: String!
    $page: Int!
    $size: Int!
    $sortBy: String
    $sortOrder: String
  ) {
    homeroomStudentList(
      homeroomId: $homeroomId
      page: $page
      size: $size
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      total
      data {
        maSV
        tenSV
        tenCN
        tinhTrang
        gpa4
        gpa10
        sdt
        emailSV
        lienHeSV {
          mxh
          url
        }
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
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
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
      maHK
      hocKy
      namHocBD
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
export const HomeroomWatchListDocument = gql`
  query HomeroomWatchList(
    $homeroomId: String!
    $page: Int!
    $size: Int!
    $sortBy: String
    $sortOrder: String
  ) {
    homeroomWatchList(
      homeroomId: $homeroomId
      page: $page
      size: $size
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      total
      data {
        sinhVien {
          maSV
          tenSV
          tenCN
          tinhTrang
          gpa4
          gpa10
          sdt
          emailSV
          lienHeSV {
            mxh
            url
          }
        }
      }
    }
  }
`;

/**
 * __useHomeroomWatchListQuery__
 *
 * To run a query within a React component, call `useHomeroomWatchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeroomWatchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeroomWatchListQuery({
 *   variables: {
 *      homeroomId: // value for 'homeroomId'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useHomeroomWatchListQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeroomWatchListQuery,
    HomeroomWatchListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HomeroomWatchListQuery,
    HomeroomWatchListQueryVariables
  >(HomeroomWatchListDocument, options);
}
export function useHomeroomWatchListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeroomWatchListQuery,
    HomeroomWatchListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HomeroomWatchListQuery,
    HomeroomWatchListQueryVariables
  >(HomeroomWatchListDocument, options);
}
export type HomeroomWatchListQueryHookResult = ReturnType<
  typeof useHomeroomWatchListQuery
>;
export type HomeroomWatchListLazyQueryHookResult = ReturnType<
  typeof useHomeroomWatchListLazyQuery
>;
export type HomeroomWatchListQueryResult = Apollo.QueryResult<
  HomeroomWatchListQuery,
  HomeroomWatchListQueryVariables
>;
export const NoteDetailDocument = gql`
  query NoteDetail($noteId: Int!) {
    noteDetail(noteId: $noteId) {
      maGC
      ghiChuTag {
        maTag
        tenTag
      }
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      ghiChuHinhAnh {
        id
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
export const NoteSearchDocument = gql`
  query NoteSearch(
    $tieuDe: String
    $maSV: String
    $tenSV: String
    $start: Date
    $end: Date
    $maSH: String
    $maTag: Int
    $page: Int!
    $size: Int!
  ) {
    noteSearch(
      tieuDe: $tieuDe
      maSV: $maSV
      tenSV: $tenSV
      start: $start
      end: $end
      maSH: $maSH
      maTag: $maTag
      page: $page
      size: $size
    ) {
      total
      lastPage
      data {
        maGC
        tieuDe
        noiDung
        thoiGianTao
        thoiGianSua
        maSV
      }
    }
  }
`;

/**
 * __useNoteSearchQuery__
 *
 * To run a query within a React component, call `useNoteSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteSearchQuery({
 *   variables: {
 *      tieuDe: // value for 'tieuDe'
 *      maSV: // value for 'maSV'
 *      tenSV: // value for 'tenSV'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *      maSH: // value for 'maSH'
 *      maTag: // value for 'maTag'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useNoteSearchQuery(
  baseOptions: Apollo.QueryHookOptions<
    NoteSearchQuery,
    NoteSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NoteSearchQuery, NoteSearchQueryVariables>(
    NoteSearchDocument,
    options
  );
}
export function useNoteSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NoteSearchQuery,
    NoteSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NoteSearchQuery, NoteSearchQueryVariables>(
    NoteSearchDocument,
    options
  );
}
export type NoteSearchQueryHookResult = ReturnType<typeof useNoteSearchQuery>;
export type NoteSearchLazyQueryHookResult = ReturnType<
  typeof useNoteSearchLazyQuery
>;
export type NoteSearchQueryResult = Apollo.QueryResult<
  NoteSearchQuery,
  NoteSearchQueryVariables
>;
export const StudentAllTermsDocument = gql`
  query StudentAllTerms($studentId: String!) {
    studentAllTerms(studentId: $studentId) {
      maHK
      hocKy
      namHocBD
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
      dtb
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
        dtb
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
  query StudentNoteList(
    $studentId: String!
    $tieuDe: String
    $maTag: Int
    $start: Date
    $end: Date
    $page: Int!
    $size: Int!
  ) {
    studentNoteList(
      studentId: $studentId
      tieuDe: $tieuDe
      maTag: $maTag
      start: $start
      end: $end
      page: $page
      size: $size
    ) {
      total
      data {
        maGC
        ghiChuTag {
          maTag
        }
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
 *      tieuDe: // value for 'tieuDe'
 *      maTag: // value for 'maTag'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *      page: // value for 'page'
 *      size: // value for 'size'
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
      batBuocChuyenNganh
      tuChonTuDo
      tuChonChuyenNganh
      totNghiep
      tongTC
      tongTCDaHoc
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
  query StudentParentInfoList($studentId: String!, $page: Int!, $size: Int!) {
    studentParentInfoList(studentId: $studentId, page: $page, size: $size) {
      total
      data {
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
 *      page: // value for 'page'
 *      size: // value for 'size'
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
      maMH
      tenMH
      tenLopHP
      tinhTrang
      soTinChi
      diemGK
      diemTH
      diemCong
      diemKhac
      diemCK
      dtb
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
export const TeacherSearchStudentListDocument = gql`
  query TeacherSearchStudentList($maSV: String, $tenSV: String) {
    teacherSearchStudentList(maSV: $maSV, tenSV: $tenSV) {
      total
      data {
        maSV
        tenSV
        tenCN
        tinhTrang
        gpa4
        gpa10
      }
    }
  }
`;

/**
 * __useTeacherSearchStudentListQuery__
 *
 * To run a query within a React component, call `useTeacherSearchStudentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherSearchStudentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherSearchStudentListQuery({
 *   variables: {
 *      maSV: // value for 'maSV'
 *      tenSV: // value for 'tenSV'
 *   },
 * });
 */
export function useTeacherSearchStudentListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TeacherSearchStudentListQuery,
    TeacherSearchStudentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    TeacherSearchStudentListQuery,
    TeacherSearchStudentListQueryVariables
  >(TeacherSearchStudentListDocument, options);
}
export function useTeacherSearchStudentListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TeacherSearchStudentListQuery,
    TeacherSearchStudentListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    TeacherSearchStudentListQuery,
    TeacherSearchStudentListQueryVariables
  >(TeacherSearchStudentListDocument, options);
}
export type TeacherSearchStudentListQueryHookResult = ReturnType<
  typeof useTeacherSearchStudentListQuery
>;
export type TeacherSearchStudentListLazyQueryHookResult = ReturnType<
  typeof useTeacherSearchStudentListLazyQuery
>;
export type TeacherSearchStudentListQueryResult = Apollo.QueryResult<
  TeacherSearchStudentListQuery,
  TeacherSearchStudentListQueryVariables
>;
