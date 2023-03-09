import { gql } from 'apollo-server-express';

const noteTypeDefs = gql`
  scalar Date

  extend type Query {
    noteDetail(noteId: Int!): NoteDetail!
    noteList: [NoteListItem!]!
    noteSearch(
      tieuDe: String
      maSV: String
      tenSV: String
      start: Date
      end: Date
      page: Int!
      size: Int!
    ): NoteSearch!
  }

  extend type Mutation {
    noteAdd(payload: NoteAddInput!): NoteAddResponse!
    noteEdit(noteId: Int!, payload: NoteEditInput!): NoteEditResponse!
    noteDelete(noteId: Int!): NoteDeleteResponse!
  }

  type NoteSearch {
    total: Int!
    lastPage: Int!
    data: [NoteListItem!]!
  }

  type NoteDetail {
    maGC: Int!
    ghiChuTag: [NoteTag!]!
    tieuDe: String!
    noiDung: String!
    thoiGianTao: String!
    thoiGianSua: String
    ghiChuHinhAnh: [NoteImage!]!
  }

  type NoteTag {
    maTag: Int!
    tenTag: String!
  }

  type NoteImage {
    stt: Int!
    url: String!
  }

  type NoteListItem {
    maGC: Int!
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
    maSV: String
    url: [String!]!
  }

  input NoteEditInput {
    tieuDe: String!
    noiDung: String!
    maTag: [Int!]!
    url: [String!]!
  }

  type NoteAddResponse {
    tieuDe: String!
    noiDung: String!
  }

  type NoteEditResponse {
    tieuDe: String!
    noiDung: String!
  }

  type NoteDeleteResponse {
    status: Int!
  }
`;

export default noteTypeDefs;
