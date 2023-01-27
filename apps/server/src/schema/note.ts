import { gql } from 'apollo-server-express';

const noteTypeDefs = gql`
  extend type Query {
    noteDetail(noteId: Int!): NoteDetail!
    noteList: NoteList!
  }

  extend type Mutation {
    noteAdd(payload: NoteAddInput!): NoteAddResponse!
    noteEdit(noteId: Int!, payload: NoteEditInput!): NoteEditResponse!
    noteDelete(noteId: Int!): NoteDeleteResponse!
  }

  type NoteDetail {
    maGC: Int!
    tag: [String]!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String
    hinhAnh: [NoteImage!]!
  }

  type NoteImage {
    stt: Int!
    url: String!
  }

  type NoteList {
    danhSachGhiChu: [NoteListItem!]!
  }

  type NoteListItem {
    maGC: Int!
    tag: [String]!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String
    maSV: String
  }

  input NoteAddInput {
    tieuDe: String!
    maTag: [Int!]!
    noiDung: String!
    maSV: String!
    url: [String!]!
  }

  input NoteEditInput {
    tieuDe: String!
    noiDung: String!
    maTag: [Int!]!
    url: [String!]!
  }

  type NoteAddResponse {
    status: Int!
  }

  type NoteEditResponse {
    status: Int!
  }

  type NoteDeleteResponse {
    status: Int!
  }
`;

export default noteTypeDefs;
