import {
  StudentAllSubjects,
  StudentAllTerms,
  StudentAveragePoint,
  StudentContactResponse,
  StudentDetail,
  StudentParentInfo,
  StudentParentInfoList,
  StudentNoteList,
  StudentSubject,
  StudentSubjectsByTerm,
  StudentTerm,
  StudentTrainingPoint,
} from '../generated-types';

export const SUBJECTS_BY_TERM = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: 8.0,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
  ] as StudentSubject[],
} as StudentSubjectsByTerm;

export const ALL_SUBJECTS = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
  ] as StudentSubject[],
} as StudentAllSubjects;

export const TRAINING_POINT_BY_TERM = {
  drl: 8,
  xepLoai: 'Giỏi',
} as StudentTrainingPoint;

export const TRAINING_POINT = {
  drl: 9,
  xepLoai: 'Xuất sắc',
} as StudentTrainingPoint;

export const ALL_TERMS = {
  hocKyNamHoc: [
    { maHK: 1, hocKy: 1, namHocBD: 2019 },
    { maHK: 2, hocKy: 2, namHocBD: 2019 },
    { maHK: 3, hocKy: 3, namHocBD: 2019 },
    { maHK: 4, hocKy: 1, namHocBD: 2020 },
    { maHK: 5, hocKy: 2, namHocBD: 2020 },
  ] as StudentTerm[],
} as StudentAllTerms;

export const AVERAGE_POINT_BY_TERM = {
  dtbTong: 9.0,
  xepLoai: 'Xuất sắc',
} as StudentAveragePoint;

export const AVERAGE_POINT = {
  dtbTong: 8.5,
  xepLoai: 'Giỏi',
} as StudentAveragePoint;

export const STUDENT_DETAIL = {
  maSV: '19127000',
  tenSV: 'Nguyễn Văn A',
  gioiTinh: 1,
  dob: '22/10/2001',
  emailSV: '19127000@student.hcmus.edu.vn',
  emailCaNhan: 'abc@gmail.com',
  sdt: '0123456789',
  tenCN: 'Nguyễn Ngọc Thanh Tâm',
  gpa_4: 3.7,
  gpa_10: 9.2,
  ngoaiNgu: true,
  tinhTrang: 'Đang học',
  maSH: '19clc3',
  xepLoai: 'Giỏi',
  lienHeSV: [
    {
      maLHSV: 1,
      mxh: 'Facebook',
      url: 'abc',
    },
  ],
} as StudentDetail;

export const STUDENT_PARENT_INFO_LIST = {
  dsPhuHuynh: [
    {
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
    },
    {
      maPH: 2,
      tenPH: 'Nguyễn Thị C',
      quanHe: 'Mẹ',
      sdt: '0123456789',
      sua: true,
      lienHePH: [
        {
          maLHPH: 1,
          mxh: 'Facebook',
          url: 'abc',
        },
      ],
    },
  ],
} as StudentParentInfoList;

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
export const STUDENT_NOTE_LIST = {
  danhSachGhiChu: [
    {
      maGC: 'GC001',
      tag: ['Học tập'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 'GC002',
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần đi học nhiều hơn',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 'GC003',
      tag: ['Học tập'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Áp lực học tập',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 'GC004',
      tag: ['Phụ huynh'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần liên hệ phụ huynh',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
  ],
} as StudentNoteList;
