import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
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
  diemCK?: Maybe<Scalars['Float']>;
  diemCong?: Maybe<Scalars['Float']>;
  diemGK?: Maybe<Scalars['Float']>;
  diemKhac?: Maybe<Scalars['Float']>;
  diemTH?: Maybe<Scalars['Float']>;
  dtb?: Maybe<Scalars['Float']>;
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
  ChungChiNgoaiNgu: 'CHUNG_CHI_NGOAI_NGU',
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
  total: Scalars['Int'];
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
  total: Scalars['Int'];
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
  total: Scalars['Int'];
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

export type HomeroomReportDetailByTerm = {
  __typename?: 'HomeroomReportDetailByTerm';
  examAbsent: HomeroomExamAbsentList;
  examPostpone: HomeroomPostponeExamList;
  finalResult: HomeroomFinalResultList;
  overviewReport: HomeroomOverviewReport;
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
  maSV: Scalars['String'];
  tenCN: Scalars['String'];
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
  noiDung: Scalars['String'];
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
  sinhVien?: Maybe<StudentInfo>;
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
  homeroomReportDetailByTerm: HomeroomReportDetailByTerm;
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
  studentAllSubjectsResult: StudentAllSubjectsResult;
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
  studentStatistics: Array<StudentStatisticsItem>;
  studentSubjectsByTerm: StudentSubjectsByTerm;
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
  subjectId?: InputMaybe<Scalars['String']>;
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
  page: Scalars['Int'];
  size: Scalars['Int'];
  term: Scalars['Int'];
};

export type QueryHomeroomFailListByTermArgs = {
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
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
  page: Scalars['Int'];
  size: Scalars['Int'];
  term: Scalars['Int'];
};

export type QueryHomeroomOverviewReportByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomPostponeExamListByTermArgs = {
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  term: Scalars['Int'];
};

export type QueryHomeroomReportDetailByTermArgs = {
  homeroomId: Scalars['String'];
  term: Scalars['Int'];
};

export type QueryHomeroomStudentListArgs = {
  homeroomId: Scalars['String'];
  page: Scalars['Int'];
  size: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  unruly?: InputMaybe<Scalars['Boolean']>;
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

export type QueryStudentAllSubjectsResultArgs = {
  studentId: Scalars['String'];
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

export type QueryStudentStatisticsArgs = {
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

export type QueryStudentTrainingPointListArgs = {
  page: Scalars['Int'];
  size: Scalars['Int'];
  termId: Scalars['Int'];
};

export type QueryTagListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type StudentAllSubjectsResult = {
  __typename?: 'StudentAllSubjectsResult';
  result: StudentAllSubjectsResultDetail;
  sinhVien: StudentDetail;
};

export type StudentAllSubjectsResultDetail = {
  __typename?: 'StudentAllSubjectsResultDetail';
  batBuocChuyenNganh: StudentDetailSubjectsResult;
  coSoNganh: StudentDetailSubjectsResult;
  daiCuong: StudentDetailSubjectsResult;
  totNghiep: StudentDetailSubjectsResult;
  tuChonChuyenNganh: StudentDetailSubjectsResult;
  tuChonTuDo: StudentDetailSubjectsResult;
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
  gpa4?: Maybe<Scalars['Float']>;
  gpa10?: Maybe<Scalars['Float']>;
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

export type StudentInfo = {
  __typename?: 'StudentInfo';
  tenSV?: Maybe<Scalars['String']>;
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

export type StudentStatisticsItem = {
  __typename?: 'StudentStatisticsItem';
  drl: Scalars['Int'];
  dtb: Scalars['Float'];
  hocKy: Scalars['Int'];
  namHoc: Scalars['Int'];
  soTinChi: Scalars['Int'];
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

export type StudentSubjectsByTerm = {
  __typename?: 'StudentSubjectsByTerm';
  sinhVien: StudentDetail;
  subjects: Array<StudentSubject>;
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
  data: Array<Tag>;
  total: Scalars['Int'];
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
  AccountActivateInput: AccountActivateInput;
  AccountActivateResponse: ResolverTypeWrapper<AccountActivateResponse>;
  AccountAddInput: AccountAddInput;
  AccountAddResponse: ResolverTypeWrapper<AccountAddResponse>;
  AccountDeleteInput: AccountDeleteInput;
  AccountDeleteResponse: ResolverTypeWrapper<AccountDeleteResponse>;
  AccountEditInput: AccountEditInput;
  AccountEditResponse: ResolverTypeWrapper<AccountEditResponse>;
  AccountList: ResolverTypeWrapper<AccountList>;
  AccountListItem: ResolverTypeWrapper<AccountListItem>;
  AllTeacherList: ResolverTypeWrapper<AllTeacherList>;
  AllTeacherListItem: ResolverTypeWrapper<AllTeacherListItem>;
  AuthorInfo: ResolverTypeWrapper<AuthorInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ClassroomListItem: ResolverTypeWrapper<ClassroomListItem>;
  ClassroomScoreList: ResolverTypeWrapper<ClassroomScoreList>;
  ClassroomScoreListItem: ResolverTypeWrapper<ClassroomScoreListItem>;
  ColumnHeader: ResolverTypeWrapper<ColumnHeader>;
  ColumnHeaderConfig: ColumnHeaderConfig;
  Contact: ResolverTypeWrapper<Contact>;
  CourseList: ResolverTypeWrapper<CourseList>;
  CourseListItem: ResolverTypeWrapper<CourseListItem>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Document: ResolverTypeWrapper<Document>;
  FileType: FileType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HomeroomAddWatchlistInput: HomeroomAddWatchlistInput;
  HomeroomAddWatchlistResponse: ResolverTypeWrapper<HomeroomAddWatchlistResponse>;
  HomeroomAllListItem: ResolverTypeWrapper<HomeroomAllListItem>;
  HomeroomDeleteWatchlistInput: HomeroomDeleteWatchlistInput;
  HomeroomDeleteWatchlistResponse: ResolverTypeWrapper<HomeroomDeleteWatchlistResponse>;
  HomeroomDetail: ResolverTypeWrapper<HomeroomDetail>;
  HomeroomExamAbsentList: ResolverTypeWrapper<HomeroomExamAbsentList>;
  HomeroomExamAbsentListItem: ResolverTypeWrapper<HomeroomExamAbsentListItem>;
  HomeroomExamAbsentListStudentInfo: ResolverTypeWrapper<HomeroomExamAbsentListStudentInfo>;
  HomeroomExamAbsentListSubject: ResolverTypeWrapper<HomeroomExamAbsentListSubject>;
  HomeroomFailList: ResolverTypeWrapper<HomeroomFailList>;
  HomeroomFailListItem: ResolverTypeWrapper<HomeroomFailListItem>;
  HomeroomFailListStudentCourse: ResolverTypeWrapper<HomeroomFailListStudentCourse>;
  HomeroomFailListStudentInfo: ResolverTypeWrapper<HomeroomFailListStudentInfo>;
  HomeroomFailListSubject: ResolverTypeWrapper<HomeroomFailListSubject>;
  HomeroomFinalResultList: ResolverTypeWrapper<HomeroomFinalResultList>;
  HomeroomFinalResultListItem: ResolverTypeWrapper<HomeroomFinalResultListItem>;
  HomeroomInfo: ResolverTypeWrapper<HomeroomInfo>;
  HomeroomLearnOverview: ResolverTypeWrapper<HomeroomLearnOverview>;
  HomeroomList: ResolverTypeWrapper<HomeroomList>;
  HomeroomListItem: ResolverTypeWrapper<HomeroomListItem>;
  HomeroomNotEnrolledList: ResolverTypeWrapper<HomeroomNotEnrolledList>;
  HomeroomNotEnrolledListItem: ResolverTypeWrapper<HomeroomNotEnrolledListItem>;
  HomeroomNotEnrolledListStudentInfo: ResolverTypeWrapper<HomeroomNotEnrolledListStudentInfo>;
  HomeroomNumberOverview: ResolverTypeWrapper<HomeroomNumberOverview>;
  HomeroomOverviewReport: ResolverTypeWrapper<HomeroomOverviewReport>;
  HomeroomPostponeExamList: ResolverTypeWrapper<HomeroomPostponeExamList>;
  HomeroomPostponeExamListItem: ResolverTypeWrapper<HomeroomPostponeExamListItem>;
  HomeroomPostponeExamListStudentInfo: ResolverTypeWrapper<HomeroomPostponeExamListStudentInfo>;
  HomeroomPostponeExamListSubject: ResolverTypeWrapper<HomeroomPostponeExamListSubject>;
  HomeroomReportDetailByTerm: ResolverTypeWrapper<HomeroomReportDetailByTerm>;
  HomeroomStudentList: ResolverTypeWrapper<HomeroomStudentList>;
  HomeroomStudentListItem: ResolverTypeWrapper<HomeroomStudentListItem>;
  HomeroomTermListItem: ResolverTypeWrapper<HomeroomTermListItem>;
  HomeroomTrainingPointOverview: ResolverTypeWrapper<HomeroomTrainingPointOverview>;
  HomeroomWatchList: ResolverTypeWrapper<HomeroomWatchList>;
  HomeroomWatchListItem: ResolverTypeWrapper<HomeroomWatchListItem>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImportAuthor: ResolverTypeWrapper<ImportAuthor>;
  ImportHistory: ResolverTypeWrapper<ImportHistory>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  MajorList: ResolverTypeWrapper<MajorList>;
  MajorListItem: ResolverTypeWrapper<MajorListItem>;
  MajorResultList: ResolverTypeWrapper<MajorResultList>;
  MajorResultListItem: ResolverTypeWrapper<MajorResultListItem>;
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
  NoteSearch: ResolverTypeWrapper<NoteSearch>;
  NoteTag: ResolverTypeWrapper<NoteTag>;
  Query: ResolverTypeWrapper<{}>;
  SheetConfig: SheetConfig;
  String: ResolverTypeWrapper<Scalars['String']>;
  StudentAbsentList: ResolverTypeWrapper<StudentAbsentList>;
  StudentAbsentListItem: ResolverTypeWrapper<StudentAbsentListItem>;
  StudentAddContactInput: StudentAddContactInput;
  StudentAddParentInfoInput: StudentAddParentInfoInput;
  StudentAllSubjectsResult: ResolverTypeWrapper<StudentAllSubjectsResult>;
  StudentAllSubjectsResultDetail: ResolverTypeWrapper<StudentAllSubjectsResultDetail>;
  StudentAveragePoint: ResolverTypeWrapper<StudentAveragePoint>;
  StudentContact: ResolverTypeWrapper<StudentContact>;
  StudentContactResponse: ResolverTypeWrapper<StudentContactResponse>;
  StudentDeleteContactResponse: ResolverTypeWrapper<StudentDeleteContactResponse>;
  StudentDeleteParentInfoResponse: ResolverTypeWrapper<StudentDeleteParentInfoResponse>;
  StudentDetail: ResolverTypeWrapper<StudentDetail>;
  StudentDetailSubjectsResult: ResolverTypeWrapper<StudentDetailSubjectsResult>;
  StudentEditContactInput: StudentEditContactInput;
  StudentEditParentInfoInput: StudentEditParentInfoInput;
  StudentEnrolledList: ResolverTypeWrapper<StudentEnrolledList>;
  StudentEnrolledListItem: ResolverTypeWrapper<StudentEnrolledListItem>;
  StudentInfo: ResolverTypeWrapper<StudentInfo>;
  StudentNotEnrolledList: ResolverTypeWrapper<StudentNotEnrolledList>;
  StudentNotEnrolledListItem: ResolverTypeWrapper<StudentNotEnrolledListItem>;
  StudentNote: ResolverTypeWrapper<StudentNote>;
  StudentNoteList: ResolverTypeWrapper<StudentNoteList>;
  StudentOverviewResult: ResolverTypeWrapper<StudentOverviewResult>;
  StudentParentContact: ResolverTypeWrapper<StudentParentContact>;
  StudentParentContactInput: StudentParentContactInput;
  StudentParentInfo: ResolverTypeWrapper<StudentParentInfo>;
  StudentParentInfoList: ResolverTypeWrapper<StudentParentInfoList>;
  StudentPostponeList: ResolverTypeWrapper<StudentPostponeList>;
  StudentPostponeListItem: ResolverTypeWrapper<StudentPostponeListItem>;
  StudentStatisticsItem: ResolverTypeWrapper<StudentStatisticsItem>;
  StudentSubject: ResolverTypeWrapper<StudentSubject>;
  StudentSubjectsByTerm: ResolverTypeWrapper<StudentSubjectsByTerm>;
  StudentTag: ResolverTypeWrapper<StudentTag>;
  StudentTerm: ResolverTypeWrapper<StudentTerm>;
  StudentTrainingPoint: ResolverTypeWrapper<StudentTrainingPoint>;
  StudentTrainingPointList: ResolverTypeWrapper<StudentTrainingPointList>;
  StudentTrainingPointListItem: ResolverTypeWrapper<StudentTrainingPointListItem>;
  SubjectDetailResult: ResolverTypeWrapper<SubjectDetailResult>;
  Tag: ResolverTypeWrapper<Tag>;
  TagAddInput: TagAddInput;
  TagDeleteResponse: ResolverTypeWrapper<TagDeleteResponse>;
  TagEditInput: TagEditInput;
  TagList: ResolverTypeWrapper<TagList>;
  TeacherEditInput: TeacherEditInput;
  TeacherInfo: ResolverTypeWrapper<TeacherInfo>;
  TeacherList: ResolverTypeWrapper<TeacherList>;
  TeacherListItem: ResolverTypeWrapper<TeacherListItem>;
  TeacherSearchStudentListItem: ResolverTypeWrapper<TeacherSearchStudentListItem>;
  TeacherStudentList: ResolverTypeWrapper<TeacherStudentList>;
  TermListItem: ResolverTypeWrapper<TermListItem>;
  UploadDocumentInput: UploadDocumentInput;
  UploadDocumentResponse: ResolverTypeWrapper<UploadDocumentResponse>;
  UploadFile: ResolverTypeWrapper<Scalars['UploadFile']>;
  UploadFileConfig: UploadFileConfig;
  YearListItem: ResolverTypeWrapper<YearListItem>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountActivateInput: AccountActivateInput;
  AccountActivateResponse: AccountActivateResponse;
  AccountAddInput: AccountAddInput;
  AccountAddResponse: AccountAddResponse;
  AccountDeleteInput: AccountDeleteInput;
  AccountDeleteResponse: AccountDeleteResponse;
  AccountEditInput: AccountEditInput;
  AccountEditResponse: AccountEditResponse;
  AccountList: AccountList;
  AccountListItem: AccountListItem;
  AllTeacherList: AllTeacherList;
  AllTeacherListItem: AllTeacherListItem;
  AuthorInfo: AuthorInfo;
  Boolean: Scalars['Boolean'];
  ClassroomListItem: ClassroomListItem;
  ClassroomScoreList: ClassroomScoreList;
  ClassroomScoreListItem: ClassroomScoreListItem;
  ColumnHeader: ColumnHeader;
  ColumnHeaderConfig: ColumnHeaderConfig;
  Contact: Contact;
  CourseList: CourseList;
  CourseListItem: CourseListItem;
  Date: Scalars['Date'];
  Document: Document;
  Float: Scalars['Float'];
  HomeroomAddWatchlistInput: HomeroomAddWatchlistInput;
  HomeroomAddWatchlistResponse: HomeroomAddWatchlistResponse;
  HomeroomAllListItem: HomeroomAllListItem;
  HomeroomDeleteWatchlistInput: HomeroomDeleteWatchlistInput;
  HomeroomDeleteWatchlistResponse: HomeroomDeleteWatchlistResponse;
  HomeroomDetail: HomeroomDetail;
  HomeroomExamAbsentList: HomeroomExamAbsentList;
  HomeroomExamAbsentListItem: HomeroomExamAbsentListItem;
  HomeroomExamAbsentListStudentInfo: HomeroomExamAbsentListStudentInfo;
  HomeroomExamAbsentListSubject: HomeroomExamAbsentListSubject;
  HomeroomFailList: HomeroomFailList;
  HomeroomFailListItem: HomeroomFailListItem;
  HomeroomFailListStudentCourse: HomeroomFailListStudentCourse;
  HomeroomFailListStudentInfo: HomeroomFailListStudentInfo;
  HomeroomFailListSubject: HomeroomFailListSubject;
  HomeroomFinalResultList: HomeroomFinalResultList;
  HomeroomFinalResultListItem: HomeroomFinalResultListItem;
  HomeroomInfo: HomeroomInfo;
  HomeroomLearnOverview: HomeroomLearnOverview;
  HomeroomList: HomeroomList;
  HomeroomListItem: HomeroomListItem;
  HomeroomNotEnrolledList: HomeroomNotEnrolledList;
  HomeroomNotEnrolledListItem: HomeroomNotEnrolledListItem;
  HomeroomNotEnrolledListStudentInfo: HomeroomNotEnrolledListStudentInfo;
  HomeroomNumberOverview: HomeroomNumberOverview;
  HomeroomOverviewReport: HomeroomOverviewReport;
  HomeroomPostponeExamList: HomeroomPostponeExamList;
  HomeroomPostponeExamListItem: HomeroomPostponeExamListItem;
  HomeroomPostponeExamListStudentInfo: HomeroomPostponeExamListStudentInfo;
  HomeroomPostponeExamListSubject: HomeroomPostponeExamListSubject;
  HomeroomReportDetailByTerm: HomeroomReportDetailByTerm;
  HomeroomStudentList: HomeroomStudentList;
  HomeroomStudentListItem: HomeroomStudentListItem;
  HomeroomTermListItem: HomeroomTermListItem;
  HomeroomTrainingPointOverview: HomeroomTrainingPointOverview;
  HomeroomWatchList: HomeroomWatchList;
  HomeroomWatchListItem: HomeroomWatchListItem;
  ID: Scalars['ID'];
  ImportAuthor: ImportAuthor;
  ImportHistory: ImportHistory;
  Int: Scalars['Int'];
  LoginResponse: LoginResponse;
  MajorList: MajorList;
  MajorListItem: MajorListItem;
  MajorResultList: MajorResultList;
  MajorResultListItem: MajorResultListItem;
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
  NoteSearch: NoteSearch;
  NoteTag: NoteTag;
  Query: {};
  SheetConfig: SheetConfig;
  String: Scalars['String'];
  StudentAbsentList: StudentAbsentList;
  StudentAbsentListItem: StudentAbsentListItem;
  StudentAddContactInput: StudentAddContactInput;
  StudentAddParentInfoInput: StudentAddParentInfoInput;
  StudentAllSubjectsResult: StudentAllSubjectsResult;
  StudentAllSubjectsResultDetail: StudentAllSubjectsResultDetail;
  StudentAveragePoint: StudentAveragePoint;
  StudentContact: StudentContact;
  StudentContactResponse: StudentContactResponse;
  StudentDeleteContactResponse: StudentDeleteContactResponse;
  StudentDeleteParentInfoResponse: StudentDeleteParentInfoResponse;
  StudentDetail: StudentDetail;
  StudentDetailSubjectsResult: StudentDetailSubjectsResult;
  StudentEditContactInput: StudentEditContactInput;
  StudentEditParentInfoInput: StudentEditParentInfoInput;
  StudentEnrolledList: StudentEnrolledList;
  StudentEnrolledListItem: StudentEnrolledListItem;
  StudentInfo: StudentInfo;
  StudentNotEnrolledList: StudentNotEnrolledList;
  StudentNotEnrolledListItem: StudentNotEnrolledListItem;
  StudentNote: StudentNote;
  StudentNoteList: StudentNoteList;
  StudentOverviewResult: StudentOverviewResult;
  StudentParentContact: StudentParentContact;
  StudentParentContactInput: StudentParentContactInput;
  StudentParentInfo: StudentParentInfo;
  StudentParentInfoList: StudentParentInfoList;
  StudentPostponeList: StudentPostponeList;
  StudentPostponeListItem: StudentPostponeListItem;
  StudentStatisticsItem: StudentStatisticsItem;
  StudentSubject: StudentSubject;
  StudentSubjectsByTerm: StudentSubjectsByTerm;
  StudentTag: StudentTag;
  StudentTerm: StudentTerm;
  StudentTrainingPoint: StudentTrainingPoint;
  StudentTrainingPointList: StudentTrainingPointList;
  StudentTrainingPointListItem: StudentTrainingPointListItem;
  SubjectDetailResult: SubjectDetailResult;
  Tag: Tag;
  TagAddInput: TagAddInput;
  TagDeleteResponse: TagDeleteResponse;
  TagEditInput: TagEditInput;
  TagList: TagList;
  TeacherEditInput: TeacherEditInput;
  TeacherInfo: TeacherInfo;
  TeacherList: TeacherList;
  TeacherListItem: TeacherListItem;
  TeacherSearchStudentListItem: TeacherSearchStudentListItem;
  TeacherStudentList: TeacherStudentList;
  TermListItem: TermListItem;
  UploadDocumentInput: UploadDocumentInput;
  UploadDocumentResponse: UploadDocumentResponse;
  UploadFile: Scalars['UploadFile'];
  UploadFileConfig: UploadFileConfig;
  YearListItem: YearListItem;
};

export type AccountActivateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountActivateResponse'] = ResolversParentTypes['AccountActivateResponse']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountAddResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountAddResponse'] = ResolversParentTypes['AccountAddResponse']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountDeleteResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountDeleteResponse'] = ResolversParentTypes['AccountDeleteResponse']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountEditResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountEditResponse'] = ResolversParentTypes['AccountEditResponse']
> = {
  maTK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccountList'] = ResolversParentTypes['AccountList']
> = {
  data?: Resolver<
    Array<ResolversTypes['AccountListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type AllTeacherListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AllTeacherList'] = ResolversParentTypes['AllTeacherList']
> = {
  data?: Resolver<
    Array<ResolversTypes['AllTeacherListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllTeacherListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AllTeacherListItem'] = ResolversParentTypes['AllTeacherListItem']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lopSinhHoat?: Resolver<
    Array<ResolversTypes['HomeroomInfo']>,
    ParentType,
    ContextType
  >;
  maGV?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorInfo'] = ResolversParentTypes['AuthorInfo']
> = {
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassroomListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ClassroomListItem'] = ResolversParentTypes['ClassroomListItem']
> = {
  maHP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassroomScoreListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ClassroomScoreList'] = ResolversParentTypes['ClassroomScoreList']
> = {
  data?: Resolver<
    Array<ResolversTypes['ClassroomScoreListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassroomScoreListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ClassroomScoreListItem'] = ResolversParentTypes['ClassroomScoreListItem']
> = {
  diemCK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemCong?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemGK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemKhac?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemTH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dtb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColumnHeaderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ColumnHeader'] = ResolversParentTypes['ColumnHeader']
> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type CourseListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CourseList'] = ResolversParentTypes['CourseList']
> = {
  data?: Resolver<
    Array<ResolversTypes['CourseListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourseListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CourseListItem'] = ResolversParentTypes['CourseListItem']
> = {
  chuyenNganh?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  loaiMonHoc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soTinChi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DocumentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomAddWatchlistResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomAddWatchlistResponse'] = ResolversParentTypes['HomeroomAddWatchlistResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomAllListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomAllListItem'] = ResolversParentTypes['HomeroomAllListItem']
> = {
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomDeleteWatchlistResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomDeleteWatchlistResponse'] = ResolversParentTypes['HomeroomDeleteWatchlistResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomDetailResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomDetail'] = ResolversParentTypes['HomeroomDetail']
> = {
  giaoVien?: Resolver<ResolversTypes['TeacherInfo'], ParentType, ContextType>;
  siSo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamAbsentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentList'] = ResolversParentTypes['HomeroomExamAbsentList']
> = {
  data?: Resolver<
    Array<ResolversTypes['HomeroomExamAbsentListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamAbsentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentListItem'] = ResolversParentTypes['HomeroomExamAbsentListItem']
> = {
  monHoc?: Resolver<
    ResolversTypes['HomeroomExamAbsentListSubject'],
    ParentType,
    ContextType
  >;
  sinhVien?: Resolver<
    ResolversTypes['HomeroomExamAbsentListStudentInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamAbsentListStudentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentListStudentInfo'] = ResolversParentTypes['HomeroomExamAbsentListStudentInfo']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomExamAbsentListSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomExamAbsentListSubject'] = ResolversParentTypes['HomeroomExamAbsentListSubject']
> = {
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailList'] = ResolversParentTypes['HomeroomFailList']
> = {
  data?: Resolver<
    Array<ResolversTypes['HomeroomFailListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailListItem'] = ResolversParentTypes['HomeroomFailListItem']
> = {
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lopHocPhan?: Resolver<
    ResolversTypes['HomeroomFailListStudentCourse'],
    ParentType,
    ContextType
  >;
  sinhVien?: Resolver<
    ResolversTypes['HomeroomFailListStudentInfo'],
    ParentType,
    ContextType
  >;
  vang?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListStudentCourseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailListStudentCourse'] = ResolversParentTypes['HomeroomFailListStudentCourse']
> = {
  monHoc?: Resolver<
    ResolversTypes['HomeroomFailListSubject'],
    ParentType,
    ContextType
  >;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListStudentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailListStudentInfo'] = ResolversParentTypes['HomeroomFailListStudentInfo']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFailListSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFailListSubject'] = ResolversParentTypes['HomeroomFailListSubject']
> = {
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFinalResultListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFinalResultList'] = ResolversParentTypes['HomeroomFinalResultList']
> = {
  formatted?: Resolver<
    Array<ResolversTypes['HomeroomFinalResultListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomFinalResultListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomFinalResultListItem'] = ResolversParentTypes['HomeroomFinalResultListItem']
> = {
  dtb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xepLoai?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomInfo'] = ResolversParentTypes['HomeroomInfo']
> = {
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomLearnOverviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomLearnOverview'] = ResolversParentTypes['HomeroomLearnOverview']
> = {
  chungChiNgoaiNgu?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gioi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kha?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trungBinh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xuatSac?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  yeu?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  data?: Resolver<
    Array<ResolversTypes['HomeroomNotEnrolledListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomNotEnrolledListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomNotEnrolledListItem'] = ResolversParentTypes['HomeroomNotEnrolledListItem']
> = {
  sinhVien?: Resolver<
    ResolversTypes['HomeroomNotEnrolledListStudentInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomNotEnrolledListStudentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomNotEnrolledListStudentInfo'] = ResolversParentTypes['HomeroomNotEnrolledListStudentInfo']
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
  data?: Resolver<
    Array<ResolversTypes['HomeroomPostponeExamListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomPostponeExamListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomPostponeExamListItem'] = ResolversParentTypes['HomeroomPostponeExamListItem']
> = {
  monHoc?: Resolver<
    ResolversTypes['HomeroomPostponeExamListSubject'],
    ParentType,
    ContextType
  >;
  sinhVien?: Resolver<
    ResolversTypes['HomeroomPostponeExamListStudentInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomPostponeExamListStudentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomPostponeExamListStudentInfo'] = ResolversParentTypes['HomeroomPostponeExamListStudentInfo']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomPostponeExamListSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomPostponeExamListSubject'] = ResolversParentTypes['HomeroomPostponeExamListSubject']
> = {
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomReportDetailByTermResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomReportDetailByTerm'] = ResolversParentTypes['HomeroomReportDetailByTerm']
> = {
  examAbsent?: Resolver<
    ResolversTypes['HomeroomExamAbsentList'],
    ParentType,
    ContextType
  >;
  examPostpone?: Resolver<
    ResolversTypes['HomeroomPostponeExamList'],
    ParentType,
    ContextType
  >;
  finalResult?: Resolver<
    ResolversTypes['HomeroomFinalResultList'],
    ParentType,
    ContextType
  >;
  overviewReport?: Resolver<
    ResolversTypes['HomeroomOverviewReport'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomStudentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentList'] = ResolversParentTypes['HomeroomStudentList']
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes['HomeroomStudentListItem']>>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomStudentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentListItem'] = ResolversParentTypes['HomeroomStudentListItem']
> = {
  emailSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gpa4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gpa10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lienHeSV?: Resolver<
    Maybe<Array<ResolversTypes['Contact']>>,
    ParentType,
    ContextType
  >;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  gioi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kha?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trungBinh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xuatSac?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  yeu?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomWatchListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomWatchList'] = ResolversParentTypes['HomeroomWatchList']
> = {
  data?: Resolver<
    Maybe<Array<ResolversTypes['HomeroomWatchListItem']>>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomWatchListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomWatchListItem'] = ResolversParentTypes['HomeroomWatchListItem']
> = {
  sinhVien?: Resolver<
    ResolversTypes['HomeroomStudentListItem'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImportAuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImportAuthor'] = ResolversParentTypes['ImportAuthor']
> = {
  giaoVien?: Resolver<ResolversTypes['AuthorInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImportHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImportHistory'] = ResolversParentTypes['ImportHistory']
> = {
  taiKhoan?: Resolver<
    Maybe<ResolversTypes['ImportAuthor']>,
    ParentType,
    ContextType
  >;
  thoiGian?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']
> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MajorListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MajorList'] = ResolversParentTypes['MajorList']
> = {
  data?: Resolver<
    Array<ResolversTypes['MajorListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MajorListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MajorListItem'] = ResolversParentTypes['MajorListItem']
> = {
  maCN?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenVietTat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MajorResultListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MajorResultList'] = ResolversParentTypes['MajorResultList']
> = {
  data?: Resolver<
    Array<ResolversTypes['MajorResultListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MajorResultListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MajorResultListItem'] = ResolversParentTypes['MajorResultListItem']
> = {
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  accountActivate?: Resolver<
    ResolversTypes['AccountActivateResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAccountActivateArgs, 'payload'>
  >;
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
    RequireFields<MutationAccountDeleteArgs, 'payload'>
  >;
  accountEdit?: Resolver<
    ResolversTypes['AccountEditResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAccountEditArgs, 'payload'>
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
  homeroomAddWatchlist?: Resolver<
    ResolversTypes['HomeroomAddWatchlistResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationHomeroomAddWatchlistArgs, 'payload'>
  >;
  homeroomDeleteWatchlist?: Resolver<
    ResolversTypes['HomeroomDeleteWatchlistResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationHomeroomDeleteWatchlistArgs, 'payload'>
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
  teacherDelete?: Resolver<
    ResolversTypes['AllTeacherListItem'],
    ParentType,
    ContextType,
    RequireFields<MutationTeacherDeleteArgs, 'teacherId'>
  >;
  teacherEdit?: Resolver<
    ResolversTypes['AllTeacherListItem'],
    ParentType,
    ContextType,
    RequireFields<MutationTeacherEditArgs, 'payload' | 'teacherId'>
  >;
  uploadDocument?: Resolver<
    ResolversTypes['UploadDocumentResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadDocumentArgs, 'config' | 'file' | 'input'>
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  sinhVien?: Resolver<
    Maybe<ResolversTypes['StudentInfo']>,
    ParentType,
    ContextType
  >;
  thoiGianSua?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  thoiGianTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tieuDe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteSearchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteSearch'] = ResolversParentTypes['NoteSearch']
> = {
  data?: Resolver<
    Array<ResolversTypes['NoteListItem']>,
    ParentType,
    ContextType
  >;
  lastPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
    ContextType,
    RequireFields<QueryAccountListArgs, 'page' | 'size'>
  >;
  allTeacherList?: Resolver<
    ResolversTypes['AllTeacherList'],
    ParentType,
    ContextType,
    RequireFields<QueryAllTeacherListArgs, 'page' | 'size'>
  >;
  classroomList?: Resolver<
    Array<ResolversTypes['ClassroomListItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryClassroomListArgs, 'termId'>
  >;
  classroomScoreList?: Resolver<
    ResolversTypes['ClassroomScoreList'],
    ParentType,
    ContextType,
    RequireFields<
      QueryClassroomScoreListArgs,
      'id' | 'page' | 'size' | 'termId'
    >
  >;
  columnHeaderList?: Resolver<
    Array<ResolversTypes['ColumnHeader']>,
    ParentType,
    ContextType,
    RequireFields<QueryColumnHeaderListArgs, 'fileType'>
  >;
  courseList?: Resolver<
    ResolversTypes['CourseList'],
    ParentType,
    ContextType,
    Partial<QueryCourseListArgs>
  >;
  documents?: Resolver<
    Array<ResolversTypes['Document']>,
    ParentType,
    ContextType
  >;
  homeroomAllList?: Resolver<
    Array<ResolversTypes['HomeroomAllListItem']>,
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
    RequireFields<
      QueryHomeroomExamAbsentListByTermArgs,
      'homeroomId' | 'page' | 'size' | 'term'
    >
  >;
  homeroomFailListByTerm?: Resolver<
    ResolversTypes['HomeroomFailList'],
    ParentType,
    ContextType,
    RequireFields<
      QueryHomeroomFailListByTermArgs,
      'homeroomId' | 'page' | 'size' | 'term'
    >
  >;
  homeroomFinalResultListByTerm?: Resolver<
    ResolversTypes['HomeroomFinalResultList'],
    ParentType,
    ContextType,
    RequireFields<
      QueryHomeroomFinalResultListByTermArgs,
      'homeroomId' | 'page' | 'size' | 'term'
    >
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
    RequireFields<
      QueryHomeroomNotEnrolledListByTermArgs,
      'homeroomId' | 'page' | 'size' | 'term'
    >
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
      'homeroomId' | 'page' | 'size' | 'term'
    >
  >;
  homeroomReportDetailByTerm?: Resolver<
    ResolversTypes['HomeroomReportDetailByTerm'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomReportDetailByTermArgs, 'homeroomId' | 'term'>
  >;
  homeroomStudentList?: Resolver<
    ResolversTypes['HomeroomStudentList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomStudentListArgs, 'homeroomId' | 'page' | 'size'>
  >;
  homeroomTermList?: Resolver<
    Array<ResolversTypes['HomeroomTermListItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomTermListArgs, 'homeroomId'>
  >;
  homeroomWatchList?: Resolver<
    ResolversTypes['HomeroomWatchList'],
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomWatchListArgs, 'homeroomId' | 'page' | 'size'>
  >;
  importHistory?: Resolver<
    ResolversTypes['ImportHistory'],
    ParentType,
    ContextType,
    RequireFields<QueryImportHistoryArgs, 'fileType'>
  >;
  majorList?: Resolver<
    ResolversTypes['MajorList'],
    ParentType,
    ContextType,
    RequireFields<QueryMajorListArgs, 'page' | 'size'>
  >;
  majorResultList?: Resolver<
    ResolversTypes['MajorResultList'],
    ParentType,
    ContextType,
    RequireFields<QueryMajorResultListArgs, 'page' | 'size'>
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
  noteSearch?: Resolver<
    ResolversTypes['NoteSearch'],
    ParentType,
    ContextType,
    RequireFields<QueryNoteSearchArgs, 'page' | 'size'>
  >;
  studentAbsentList?: Resolver<
    ResolversTypes['StudentAbsentList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAbsentListArgs, 'page' | 'size' | 'termId'>
  >;
  studentAllSubjectsResult?: Resolver<
    ResolversTypes['StudentAllSubjectsResult'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentAllSubjectsResultArgs, 'studentId'>
  >;
  studentAllTerms?: Resolver<
    Array<ResolversTypes['StudentTerm']>,
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
  studentEnrolledList?: Resolver<
    ResolversTypes['StudentEnrolledList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentEnrolledListArgs, 'page' | 'size' | 'termId'>
  >;
  studentNotEnrolledList?: Resolver<
    ResolversTypes['StudentNotEnrolledList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentNotEnrolledListArgs, 'page' | 'size' | 'termId'>
  >;
  studentNoteList?: Resolver<
    ResolversTypes['StudentNoteList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentNoteListArgs, 'page' | 'size' | 'studentId'>
  >;
  studentOverviewResult?: Resolver<
    Maybe<ResolversTypes['StudentOverviewResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryStudentOverviewResultArgs, 'studentId'>
  >;
  studentParentInfoList?: Resolver<
    ResolversTypes['StudentParentInfoList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentParentInfoListArgs, 'page' | 'size' | 'studentId'>
  >;
  studentPostponeList?: Resolver<
    ResolversTypes['StudentPostponeList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentPostponeListArgs, 'page' | 'size' | 'termId'>
  >;
  studentStatistics?: Resolver<
    Array<ResolversTypes['StudentStatisticsItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryStudentStatisticsArgs, 'studentId'>
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
  studentTrainingPointList?: Resolver<
    ResolversTypes['StudentTrainingPointList'],
    ParentType,
    ContextType,
    RequireFields<QueryStudentTrainingPointListArgs, 'page' | 'size' | 'termId'>
  >;
  tagList?: Resolver<
    ResolversTypes['TagList'],
    ParentType,
    ContextType,
    Partial<QueryTagListArgs>
  >;
  teacherList?: Resolver<
    ResolversTypes['TeacherList'],
    ParentType,
    ContextType,
    RequireFields<QueryTeacherListArgs, 'page' | 'size' | 'year'>
  >;
  teacherSearchStudentList?: Resolver<
    ResolversTypes['TeacherStudentList'],
    ParentType,
    ContextType,
    Partial<QueryTeacherSearchStudentListArgs>
  >;
  termList?: Resolver<
    Array<ResolversTypes['TermListItem']>,
    ParentType,
    ContextType
  >;
  yearList?: Resolver<
    Array<ResolversTypes['YearListItem']>,
    ParentType,
    ContextType
  >;
};

export type StudentAbsentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAbsentList'] = ResolversParentTypes['StudentAbsentList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentAbsentListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAbsentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAbsentListItem'] = ResolversParentTypes['StudentAbsentListItem']
> = {
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAllSubjectsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAllSubjectsResult'] = ResolversParentTypes['StudentAllSubjectsResult']
> = {
  result?: Resolver<
    ResolversTypes['StudentAllSubjectsResultDetail'],
    ParentType,
    ContextType
  >;
  sinhVien?: Resolver<ResolversTypes['StudentDetail'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAllSubjectsResultDetailResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAllSubjectsResultDetail'] = ResolversParentTypes['StudentAllSubjectsResultDetail']
> = {
  batBuocChuyenNganh?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  coSoNganh?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  daiCuong?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  totNghiep?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  tuChonChuyenNganh?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  tuChonTuDo?: Resolver<
    ResolversTypes['StudentDetailSubjectsResult'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentAveragePointResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentAveragePoint'] = ResolversParentTypes['StudentAveragePoint']
> = {
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xepLoai?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  gpa4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gpa10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export type StudentEnrolledListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentEnrolledList'] = ResolversParentTypes['StudentEnrolledList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentEnrolledListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentEnrolledListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentEnrolledListItem'] = ResolversParentTypes['StudentEnrolledListItem']
> = {
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentInfo'] = ResolversParentTypes['StudentInfo']
> = {
  tenSV?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentNotEnrolledListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentNotEnrolledList'] = ResolversParentTypes['StudentNotEnrolledList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentNotEnrolledListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentNotEnrolledListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentNotEnrolledListItem'] = ResolversParentTypes['StudentNotEnrolledListItem']
> = {
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentNoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentNote'] = ResolversParentTypes['StudentNote']
> = {
  ghiChuTag?: Resolver<
    Array<ResolversTypes['StudentTag']>,
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

export type StudentNoteListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentNoteList'] = ResolversParentTypes['StudentNoteList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentNote']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentOverviewResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentOverviewResult'] = ResolversParentTypes['StudentOverviewResult']
> = {
  batBuocChuyenNganh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  coSoNganh?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  daiCuong?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tenCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tongTC?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tongTCDaHoc?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type StudentParentInfoListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentParentInfoList'] = ResolversParentTypes['StudentParentInfoList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentParentInfo']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentPostponeListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentPostponeList'] = ResolversParentTypes['StudentPostponeList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentPostponeListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentPostponeListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentPostponeListItem'] = ResolversParentTypes['StudentPostponeListItem']
> = {
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentStatisticsItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentStatisticsItem'] = ResolversParentTypes['StudentStatisticsItem']
> = {
  drl?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hocKy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  namHoc?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soTinChi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentSubjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentSubject'] = ResolversParentTypes['StudentSubject']
> = {
  diemCK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemCong?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemGK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemKhac?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  diemTH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dtb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soTinChi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenLopHP?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenMH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentSubjectsByTermResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentSubjectsByTerm'] = ResolversParentTypes['StudentSubjectsByTerm']
> = {
  sinhVien?: Resolver<ResolversTypes['StudentDetail'], ParentType, ContextType>;
  subjects?: Resolver<
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

export type StudentTrainingPointListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTrainingPointList'] = ResolversParentTypes['StudentTrainingPointList']
> = {
  data?: Resolver<
    Array<ResolversTypes['StudentTrainingPointListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentTrainingPointListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StudentTrainingPointListItem'] = ResolversParentTypes['StudentTrainingPointListItem']
> = {
  drl?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xepLoai?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectDetailResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubjectDetailResult'] = ResolversParentTypes['SubjectDetailResult']
> = {
  dtb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
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
  data?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherInfo'] = ResolversParentTypes['TeacherInfo']
> = {
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherList'] = ResolversParentTypes['TeacherList']
> = {
  data?: Resolver<
    Array<ResolversTypes['TeacherListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherListItem'] = ResolversParentTypes['TeacherListItem']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenGV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherSearchStudentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherSearchStudentListItem'] = ResolversParentTypes['TeacherSearchStudentListItem']
> = {
  gpa4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gpa10?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenCN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeacherStudentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TeacherStudentList'] = ResolversParentTypes['TeacherStudentList']
> = {
  data?: Resolver<
    Array<ResolversTypes['TeacherSearchStudentListItem']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TermListItem'] = ResolversParentTypes['TermListItem']
> = {
  hocKy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maHK?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  namHocBD?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadDocumentResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UploadDocumentResponse'] = ResolversParentTypes['UploadDocumentResponse']
> = {
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadFileScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UploadFile'], any> {
  name: 'UploadFile';
}

export type YearListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['YearListItem'] = ResolversParentTypes['YearListItem']
> = {
  khoa?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountActivateResponse?: AccountActivateResponseResolvers<ContextType>;
  AccountAddResponse?: AccountAddResponseResolvers<ContextType>;
  AccountDeleteResponse?: AccountDeleteResponseResolvers<ContextType>;
  AccountEditResponse?: AccountEditResponseResolvers<ContextType>;
  AccountList?: AccountListResolvers<ContextType>;
  AccountListItem?: AccountListItemResolvers<ContextType>;
  AllTeacherList?: AllTeacherListResolvers<ContextType>;
  AllTeacherListItem?: AllTeacherListItemResolvers<ContextType>;
  AuthorInfo?: AuthorInfoResolvers<ContextType>;
  ClassroomListItem?: ClassroomListItemResolvers<ContextType>;
  ClassroomScoreList?: ClassroomScoreListResolvers<ContextType>;
  ClassroomScoreListItem?: ClassroomScoreListItemResolvers<ContextType>;
  ColumnHeader?: ColumnHeaderResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  CourseList?: CourseListResolvers<ContextType>;
  CourseListItem?: CourseListItemResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Document?: DocumentResolvers<ContextType>;
  HomeroomAddWatchlistResponse?: HomeroomAddWatchlistResponseResolvers<ContextType>;
  HomeroomAllListItem?: HomeroomAllListItemResolvers<ContextType>;
  HomeroomDeleteWatchlistResponse?: HomeroomDeleteWatchlistResponseResolvers<ContextType>;
  HomeroomDetail?: HomeroomDetailResolvers<ContextType>;
  HomeroomExamAbsentList?: HomeroomExamAbsentListResolvers<ContextType>;
  HomeroomExamAbsentListItem?: HomeroomExamAbsentListItemResolvers<ContextType>;
  HomeroomExamAbsentListStudentInfo?: HomeroomExamAbsentListStudentInfoResolvers<ContextType>;
  HomeroomExamAbsentListSubject?: HomeroomExamAbsentListSubjectResolvers<ContextType>;
  HomeroomFailList?: HomeroomFailListResolvers<ContextType>;
  HomeroomFailListItem?: HomeroomFailListItemResolvers<ContextType>;
  HomeroomFailListStudentCourse?: HomeroomFailListStudentCourseResolvers<ContextType>;
  HomeroomFailListStudentInfo?: HomeroomFailListStudentInfoResolvers<ContextType>;
  HomeroomFailListSubject?: HomeroomFailListSubjectResolvers<ContextType>;
  HomeroomFinalResultList?: HomeroomFinalResultListResolvers<ContextType>;
  HomeroomFinalResultListItem?: HomeroomFinalResultListItemResolvers<ContextType>;
  HomeroomInfo?: HomeroomInfoResolvers<ContextType>;
  HomeroomLearnOverview?: HomeroomLearnOverviewResolvers<ContextType>;
  HomeroomList?: HomeroomListResolvers<ContextType>;
  HomeroomListItem?: HomeroomListItemResolvers<ContextType>;
  HomeroomNotEnrolledList?: HomeroomNotEnrolledListResolvers<ContextType>;
  HomeroomNotEnrolledListItem?: HomeroomNotEnrolledListItemResolvers<ContextType>;
  HomeroomNotEnrolledListStudentInfo?: HomeroomNotEnrolledListStudentInfoResolvers<ContextType>;
  HomeroomNumberOverview?: HomeroomNumberOverviewResolvers<ContextType>;
  HomeroomOverviewReport?: HomeroomOverviewReportResolvers<ContextType>;
  HomeroomPostponeExamList?: HomeroomPostponeExamListResolvers<ContextType>;
  HomeroomPostponeExamListItem?: HomeroomPostponeExamListItemResolvers<ContextType>;
  HomeroomPostponeExamListStudentInfo?: HomeroomPostponeExamListStudentInfoResolvers<ContextType>;
  HomeroomPostponeExamListSubject?: HomeroomPostponeExamListSubjectResolvers<ContextType>;
  HomeroomReportDetailByTerm?: HomeroomReportDetailByTermResolvers<ContextType>;
  HomeroomStudentList?: HomeroomStudentListResolvers<ContextType>;
  HomeroomStudentListItem?: HomeroomStudentListItemResolvers<ContextType>;
  HomeroomTermListItem?: HomeroomTermListItemResolvers<ContextType>;
  HomeroomTrainingPointOverview?: HomeroomTrainingPointOverviewResolvers<ContextType>;
  HomeroomWatchList?: HomeroomWatchListResolvers<ContextType>;
  HomeroomWatchListItem?: HomeroomWatchListItemResolvers<ContextType>;
  ImportAuthor?: ImportAuthorResolvers<ContextType>;
  ImportHistory?: ImportHistoryResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  MajorList?: MajorListResolvers<ContextType>;
  MajorListItem?: MajorListItemResolvers<ContextType>;
  MajorResultList?: MajorResultListResolvers<ContextType>;
  MajorResultListItem?: MajorResultListItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationStatusReponse?: MutationStatusReponseResolvers<ContextType>;
  NoteAddResponse?: NoteAddResponseResolvers<ContextType>;
  NoteDeleteResponse?: NoteDeleteResponseResolvers<ContextType>;
  NoteDetail?: NoteDetailResolvers<ContextType>;
  NoteEditResponse?: NoteEditResponseResolvers<ContextType>;
  NoteImage?: NoteImageResolvers<ContextType>;
  NoteListItem?: NoteListItemResolvers<ContextType>;
  NoteSearch?: NoteSearchResolvers<ContextType>;
  NoteTag?: NoteTagResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StudentAbsentList?: StudentAbsentListResolvers<ContextType>;
  StudentAbsentListItem?: StudentAbsentListItemResolvers<ContextType>;
  StudentAllSubjectsResult?: StudentAllSubjectsResultResolvers<ContextType>;
  StudentAllSubjectsResultDetail?: StudentAllSubjectsResultDetailResolvers<ContextType>;
  StudentAveragePoint?: StudentAveragePointResolvers<ContextType>;
  StudentContact?: StudentContactResolvers<ContextType>;
  StudentContactResponse?: StudentContactResponseResolvers<ContextType>;
  StudentDeleteContactResponse?: StudentDeleteContactResponseResolvers<ContextType>;
  StudentDeleteParentInfoResponse?: StudentDeleteParentInfoResponseResolvers<ContextType>;
  StudentDetail?: StudentDetailResolvers<ContextType>;
  StudentDetailSubjectsResult?: StudentDetailSubjectsResultResolvers<ContextType>;
  StudentEnrolledList?: StudentEnrolledListResolvers<ContextType>;
  StudentEnrolledListItem?: StudentEnrolledListItemResolvers<ContextType>;
  StudentInfo?: StudentInfoResolvers<ContextType>;
  StudentNotEnrolledList?: StudentNotEnrolledListResolvers<ContextType>;
  StudentNotEnrolledListItem?: StudentNotEnrolledListItemResolvers<ContextType>;
  StudentNote?: StudentNoteResolvers<ContextType>;
  StudentNoteList?: StudentNoteListResolvers<ContextType>;
  StudentOverviewResult?: StudentOverviewResultResolvers<ContextType>;
  StudentParentContact?: StudentParentContactResolvers<ContextType>;
  StudentParentInfo?: StudentParentInfoResolvers<ContextType>;
  StudentParentInfoList?: StudentParentInfoListResolvers<ContextType>;
  StudentPostponeList?: StudentPostponeListResolvers<ContextType>;
  StudentPostponeListItem?: StudentPostponeListItemResolvers<ContextType>;
  StudentStatisticsItem?: StudentStatisticsItemResolvers<ContextType>;
  StudentSubject?: StudentSubjectResolvers<ContextType>;
  StudentSubjectsByTerm?: StudentSubjectsByTermResolvers<ContextType>;
  StudentTag?: StudentTagResolvers<ContextType>;
  StudentTerm?: StudentTermResolvers<ContextType>;
  StudentTrainingPoint?: StudentTrainingPointResolvers<ContextType>;
  StudentTrainingPointList?: StudentTrainingPointListResolvers<ContextType>;
  StudentTrainingPointListItem?: StudentTrainingPointListItemResolvers<ContextType>;
  SubjectDetailResult?: SubjectDetailResultResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagDeleteResponse?: TagDeleteResponseResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
  TeacherInfo?: TeacherInfoResolvers<ContextType>;
  TeacherList?: TeacherListResolvers<ContextType>;
  TeacherListItem?: TeacherListItemResolvers<ContextType>;
  TeacherSearchStudentListItem?: TeacherSearchStudentListItemResolvers<ContextType>;
  TeacherStudentList?: TeacherStudentListResolvers<ContextType>;
  TermListItem?: TermListItemResolvers<ContextType>;
  UploadDocumentResponse?: UploadDocumentResponseResolvers<ContextType>;
  UploadFile?: GraphQLScalarType;
  YearListItem?: YearListItemResolvers<ContextType>;
};
