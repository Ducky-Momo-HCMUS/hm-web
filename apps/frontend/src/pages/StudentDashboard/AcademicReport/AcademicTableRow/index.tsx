import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { theme } from '../../../../theme';
import { StudentSubject } from '../../../../generated-types';

interface AcademicTableRowProps {
  data: StudentSubject;
  index: number;
}
function AcademicTableRow({ data, index }: AcademicTableRowProps) {
  const {
    maMH,
    tenMH,
    tenLopHP,
    tinhTrang,
    diemGK,
    diemTH,
    diemCong,
    diemKhac,
    diemCK,
    dtb,
  } = data;

  const renderStatusWithProperColor = useCallback(() => {
    let color = '';
    switch (tinhTrang) {
      case 'Đang học': {
        color = theme.palette.text.primary;
        break;
      }
      case 'Rớt môn': {
        color = theme.palette.error.main;
        break;
      }
      case 'Qua môn': {
        color = theme.palette.success.main;
        break;
      }
      default:
        break;
    }

    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {tinhTrang}
      </Typography>
    );
  }, [tinhTrang]);

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.maMH}>
      <TableCell>{index}</TableCell>
      <TableCell>{maMH}</TableCell>
      <TableCell>{tenMH}</TableCell>
      <TableCell>{tenLopHP}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{diemGK}</TableCell>
      <TableCell>{diemTH}</TableCell>
      <TableCell>{diemCong}</TableCell>
      <TableCell>{diemKhac}</TableCell>
      <TableCell>{diemCK}</TableCell>
      <TableCell>{dtb}</TableCell>
    </TableRow>
  );
}

export default AcademicTableRow;
