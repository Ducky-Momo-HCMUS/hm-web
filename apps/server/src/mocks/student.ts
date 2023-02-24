import { StudentContactResponse, StudentParentInfo } from '../generated-types';

export const STUDENT_ADD_CONTACT_RESPONSE = {
  maLHSV: 1,
  maSV: '19127000',
  mxh: 'Facebook',
  url: 'abc',
} as StudentContactResponse;

export const STUDENT_EDIT_CONTACT_RESPONSE = {
  maLHSV: 1,
  maSV: '19127000',
  mxh: 'Facebook',
  url: 'abc',
} as StudentContactResponse;

export const STUDENT_PARENT_INFO_RESPONSE = {
  maPH: 1,
  tenPH: 'Nguyễn Văn B',
  quanHe: 'Cha',
  sdt: '0123456789',
  sua: true,
  lienHePH: [
    {
      maLHPH: 1,
      mxh: 'Facebook',
      url: 'abc',
    },
  ],
} as StudentParentInfo;
