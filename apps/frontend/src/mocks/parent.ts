import { ParentInfo } from '../types';

export const PARENTS_DATA: ParentInfo[] = [
  {
    fullName: 'Nguyen Ngoc Thanh Tam',
    relationship: 'Mẹ',
    phoneNumber: '012345398',
    contact: [
      {
        mxh: 'Facebook',
        url: 'fb',
      },
      {
        mxh: 'Instagram',
        url: 'ins',
      },
    ],
  },
  {
    fullName: 'Nguyen Ngoc Thanh Tom',
    relationship: 'Bố',
    phoneNumber: '012345398',
    contact: [
      {
        mxh: 'Facebook',
        url: 'fb',
      },
      {
        mxh: 'Instagram',
        url: 'ins',
      },
    ],
  },
];

export const RELATIONSHIP_OPTIONS = ['Bố', 'Mẹ', 'Người giám hộ'];
