import { Contact } from '../generated-types';

export type Property =
  | 'maSV'
  | 'tenSV'
  | 'tenCN'
  | 'tinhTrang'
  | 'gpa4'
  | 'gpa10';

export interface HomeroomStudentListData {
  maSV: string;
  tenSV: string;
  tenCN?: string;
  tinhTrang: string;
  gpa4?: number;
  gpa10?: number;
  contact: ContactInfo;
}

export interface ContactInfo {
  sdt: string;
  lienHe: Contact[];
}

export interface StudentDetailResult {
  maMH: string;
  tenMH: string;
  lopHP: string;
  diemGK: number;
  diemTH: number;
  diemCK: number;
  diemTong: number;
}
