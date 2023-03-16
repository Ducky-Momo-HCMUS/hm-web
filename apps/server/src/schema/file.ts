import { gql } from 'apollo-server-express';

const fileTypeDefs = gql`
  scalar UploadFile

  extend type Query {
    documents: [Document!]!
    importHistory(fileType: FileType!): ImportHistory!
    # Danh sách năm học
    termList: [TermListItem!]!
    columnHeaderList(fileType: FileType!): [ColumnHeader!]!
  }

  extend type Mutation {
    uploadDocument(
      input: UploadDocumentInput!
      config: UploadFileConfig!
      file: UploadFile!
    ): UploadDocumentResponse!
  }

  input UploadFileConfig {
    start: Int!
    sheet: SheetConfig!
    headers: [ColumnHeaderConfig!]!
  }

  input SheetConfig {
    value: String!
    index: Int!
  }

  input ColumnHeaderConfig {
    key: String!
    value: String!
    index: Int!
  }

  type ColumnHeader {
    key: String!
    value: String!
    index: Int!
  }

  type TermListItem {
    maHK: Int!
    namHocBD: Int!
    hocKy: Int!
  }

  enum FileType {
    TAI_KHOAN
    DANH_SACH_GVCN
    BANG_DIEM_TOAN_BO_SINH_VIEN
    DANH_SACH_CHUYEN_NGANH
    KET_QUA_CHUYEN_NGANH
    THONG_KE_DKHP
    DANH_SACH_MON_HOC
    DANH_SACH_SINH_VIEN_HOAN_THI
    DANH_SACH_SINH_VIEN_KHONG_DKHP
    DANH_SACH_SINH_VIEN_VANG_THI
    DIEM_REN_LUYEN
    DIEM_THI_THEO_LOP_HOC_PHAN
    THOI_KHOA_BIEU
    HO_SO_SINH_VIEN
  }

  type ImportHistory {
    thoiGian: String
    taiKhoan: ImportAuthor
  }

  type ImportAuthor {
    giaoVien: AuthorInfo!
  }

  type AuthorInfo {
    tenGV: String!
  }

  input UploadDocumentInput {
    type: String!
    namHoc: Int
    hocKy: Int
    maMH: String
    tenLopHP: String
  }

  type Document {
    id: ID!
    name: String!
    url: String!
  }

  type UploadDocumentResponse {
    status: Int!
  }
`;

export default fileTypeDefs;
