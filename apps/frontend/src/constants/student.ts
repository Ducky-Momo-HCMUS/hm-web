import { RegisteredSubjectsData, StudentData } from '../types';

export const STUDENTS_DATA: StudentData[] = [
  {
    studentId: '19127268',
    fullName: 'Nguyễn Ngọc Thanh Tâm',
    major: 'Kỹ thuật phần mềm',
    status: 'Đã tốt nghiệp',
    gpaFourPointScale: 3.88,
    gpaTenPointScale: 9.15,
    contact: {
      phoneNumber: '0983042547',
      socialInfoList: [
        {
          name: 'Facebook',
          url: 'ahihi',
        },
        {
          name: 'Instagram',
          url: 'ahaha',
        },
      ],
    },
  },
  {
    studentId: '19127643',
    fullName: 'Nguyễn Mai Xuân Huyên',
    major: 'Hệ thống thông tin',
    status: 'Đang học',
    gpaFourPointScale: 3.5,
    gpaTenPointScale: 8.7,
    contact: {
      phoneNumber: '0123456789',
      socialInfoList: [
        {
          name: 'Facebook',
          url: 'ahihi',
        },
        {
          name: 'Instagram',
          url: 'ahaha',
        },
      ],
    },
  },
  {
    studentId: '19127111',
    fullName: 'Nguyễn Hai Lần',
    major: 'Hệ thống thông tin',
    status: 'Bị buộc thôi học',
    gpaFourPointScale: 3.4,
    gpaTenPointScale: 8.5,
    contact: {
      phoneNumber: '0123456787',
      socialInfoList: [
        {
          name: 'Facebook',
          url: 'ahihi',
        },
        {
          name: 'Instagram',
          url: 'ahaha',
        },
      ],
    },
  },
  {
    studentId: '19127113',
    fullName: 'Nguyễn Ba Lần',
    major: 'Hệ thống thông tin',
    status: 'Đình chỉ học',
    gpaFourPointScale: 3.4,
    gpaTenPointScale: 8.5,
    contact: {
      phoneNumber: '0123456787',
      socialInfoList: [
        {
          name: 'Facebook',
          url: 'ahihi',
        },
        {
          name: 'Instagram',
          url: 'ahaha',
        },
      ],
    },
  },
];

export const REGISTERED_SUBJECTS_DATA: RegisteredSubjectsData[] = [
  {
    subjectId: 'BAA00102',
    subjectName: 'Kinh tế chính trị Mác - Lênin',
    subjectClass: '19CLC3',
    status: 'Đang học',
    averagePoint: null,
    theoryTeacher: 'Nguyễn Tri Phương',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'BAA00103',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Rớt môn',
    averagePoint: 4.5,
    theoryTeacher: 'Đinh Bá Tiến',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'CSC10003',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Qua môn',
    averagePoint: 5.6,
    theoryTeacher: 'Nguyễn Tiến Trung',
    practiceTeacher: 'Trần Khả Hân',
  },
];
