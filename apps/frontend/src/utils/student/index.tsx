import _groupBy from 'lodash/groupBy';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import React from 'react';
import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

import {
  Contact,
  HomeroomListItem,
  HomeroomStudentListItem,
  StudentTerm,
} from '../../generated-types';
import { HomeroomStudentListData } from '../../types';
import { theme } from '../../theme';
import { StyledMuiLink } from '../../components/styles';

export const mapStudentDataToTable = (data: HomeroomStudentListItem) => {
  return {
    ...data,
    contact: {
      sdt: data.sdt,
      lienHe: data.lienHeSV,
    },
  } as HomeroomStudentListData;
};

export const groupClassesByYear = (homeroomList: HomeroomListItem[]) => {
  return _groupBy(homeroomList, (homeroom) => homeroom.khoa);
};

export const groupTermsByYear = (termList: StudentTerm[]) => {
  return _groupBy(termList, (term) => term.namHocBD);
};

export const saveDocumentToFile = (doc, fileName) => {
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, fileName);
  });
};

export const renderStatusWithProperColor = (tinhTrang: string) => {
  let color = '';

  switch (true) {
    case tinhTrang === 'Đang học': {
      color = theme.palette.text.primary;
      break;
    }
    case tinhTrang.toLowerCase().includes('đình chỉ'):
    case tinhTrang.toLowerCase().includes('thôi học'): {
      color = theme.palette.error.main;
      break;
    }
    case tinhTrang.toLowerCase().includes('nghỉ'):
    case tinhTrang.toLowerCase().includes('hoãn'): {
      color = theme.palette.warning.main;
      break;
    }
    case tinhTrang === 'Đã tốt nghiệp': {
      color = theme.palette.success.main;
      break;
    }
    default:
      color = theme.palette.text.primary;
      break;
  }

  return <Typography sx={{ color }}>{tinhTrang}</Typography>;
};

export const renderGPA4WithProperColor = (gpa4: number) => {
  let color = '';
  if (gpa4 && gpa4 <= 2.0) {
    color = theme.palette.error.main;
  } else {
    color = theme.palette.text.primary;
  }
  return <Typography sx={{ color }}>{gpa4 || 'Chưa có'}</Typography>;
};

export const renderGPA10WithProperColor = (gpa10: number) => {
  let color = '';
  if (gpa10 && gpa10 <= 5.0) {
    color = theme.palette.error.main;
  } else {
    color = theme.palette.text.primary;
  }
  return <Typography sx={{ color }}>{gpa10 || 'Chưa có'}</Typography>;
};

export const renderSocialContact = (social: Contact) => {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (regex.test(social.url)) {
    return (
      <>
        ,{' '}
        <StyledMuiLink
          style={{ cursor: 'pointer' }}
          key={social.url}
          onClick={() => {
            navigator.clipboard.writeText(social.url);
            toast.success(
              `Sao chép số điện thoại ${social.mxh} ${social.url} thành công`
            );
          }}
        >
          {social.mxh}
        </StyledMuiLink>
      </>
    );
  }
  return (
    <>
      ,{' '}
      <StyledMuiLink key={social.url} target="_blank" href={social.url}>
        {social.mxh}
      </StyledMuiLink>
    </>
  );
};
