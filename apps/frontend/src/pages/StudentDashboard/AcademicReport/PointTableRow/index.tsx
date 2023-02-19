import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { theme } from '../../../../theme';
import { StudentDetailResult } from '../../../../types';

interface PointTableRowProps {
  data: StudentDetailResult;
  index: number;
}
function PointTableRow({ data, index }: PointTableRowProps) {
  const { maMH, tenMH, lopHP, diemGK, diemTH, diemCK, diemTong } = data;

  const renderScoreWithProperColor = useCallback((diem: number) => {
    if (!diem) return '';

    let color = '';

    if (diem < 5) {
      color = theme.palette.error.main;
    } else {
      color = theme.palette.text.primary;
    }

    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {diem}
      </Typography>
    );
  }, []);

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.maMH}>
      <TableCell>{index}</TableCell>
      <TableCell>{maMH}</TableCell>
      <TableCell>{tenMH}</TableCell>
      <TableCell>{lopHP}</TableCell>
      <TableCell>{renderScoreWithProperColor(diemGK)}</TableCell>
      <TableCell>{renderScoreWithProperColor(diemTH)}</TableCell>
      <TableCell>{renderScoreWithProperColor(diemCK)}</TableCell>
      <TableCell>{renderScoreWithProperColor(diemTong)}</TableCell>
    </TableRow>
  );
}

export default PointTableRow;
