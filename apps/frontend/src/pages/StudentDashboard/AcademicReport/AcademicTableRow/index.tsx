import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import _isNumber from 'lodash/isNumber';

import { theme } from '../../../../theme';
import { StudentSubject } from '../../../../generated-types';
import { renderGPA10WithProperColor } from '../../../../utils/student';
import { StyledTableCell } from '../../../../components/styles';

interface AcademicTableRowProps {
  data: StudentSubject;
}
function AcademicTableRow({ data }: AcademicTableRowProps) {
  const {
    maMH,
    tenMH,
    tenLopHP,
    tinhTrang,
    soTinChi,
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
      case 'Vắng thi': {
        color = theme.palette.warning.main;
        break;
      }
      case 'Hoãn thi': {
        color = theme.palette.warning.main;
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
      <TableCell>{maMH}</TableCell>
      <TableCell>{tenMH}</TableCell>
      <TableCell>{tenLopHP}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{soTinChi}</TableCell>
      <StyledTableCell>{_isNumber(diemGK) ? diemGK : ''}</StyledTableCell>
      <StyledTableCell>{_isNumber(diemTH) ? diemTH : ''}</StyledTableCell>
      <StyledTableCell>{_isNumber(diemCong) ? diemCong : ''}</StyledTableCell>
      <StyledTableCell>{_isNumber(diemKhac) ? diemKhac : ''}</StyledTableCell>
      <StyledTableCell>{_isNumber(diemCK) ? diemCK : ''}</StyledTableCell>
      {!['Vắng thi', 'Hoãn thi'].includes(tinhTrang) && (
        <StyledTableCell>
          {renderGPA10WithProperColor(dtb as number)}
        </StyledTableCell>
      )}
    </TableRow>
  );
}

export default AcademicTableRow;
