import {
  StudentContactResponse,
  StudentParentInfo,
  StudentDetailSubjectsResult,
  StudentOverviewResult,
} from '../generated-types';

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

export const STUDENT_OVERVIEW_RESULT = {
  tenCN: 'Kỹ thuật phần mềm',
  daiCuong: 56,
  coSoNganh: 38,
  chuyenNganh: 12,
  tuChonChuyenNganh: 8,
  tuChonTuDo: 4,
  totNghiep: 0,
  tongTC: 124,
  dtb: 7.68,
} as StudentOverviewResult;

export const STUDENT_DETAIL_SUBJECTS_RESULT = {
  tichLuy: 11,
  monHoc: [
    {
      maMH: 'BAA00101',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00102',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00104',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00105',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00106',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00107',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
  ],
} as StudentDetailSubjectsResult;
