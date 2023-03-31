import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

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
      <StyledTableCell>
        {renderGPA10WithProperColor(diemGK as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(diemTH as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(diemCong as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(diemKhac as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(diemCK as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(dtb as number)}
      </StyledTableCell>
    </TableRow>
  );
}

export default AcademicTableRow;
