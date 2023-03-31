import { Typography } from '@mui/material';
import React from 'react';

import { theme } from '../theme';

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

export const renderGPA10WithProperColor = (gpa10: number) => {
  const isFinite = gpa10 !== null && gpa10 !== undefined;
  let color = '';
  if (isFinite && gpa10 <= 5.0) {
    color = theme.palette.error.main;
  } else {
    color = theme.palette.text.primary;
  }
  return <Typography sx={{ color }}>{isFinite ? gpa10 : 'Chưa có'}</Typography>;
};
