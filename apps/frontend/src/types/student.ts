import { Contact } from '../generated-types';

export type Property =
  | 'maSV'
  | 'tenSV'
  | 'maCN'
  | 'tinhTrang'
  | 'gpa4'
  | 'gpa10';

export interface HomeroomStudentListData {
  maSV: string;
  tenSV: string;
  maCN: string;
  tinhTrang: string;
  gpa4: number;
  gpa10: number;
  contact: ContactInfo;
}

export interface ContactInfo {
  sdt: string;
  lienHe: Contact[];
}

export interface RegisteredSubjectsData {
  subjectId: string;
  subjectName: string;
  subjectClass: string;
  status: string;
  averagePoint: number | null;
  theoryTeacher: string;
  practiceTeacher: string;
}
