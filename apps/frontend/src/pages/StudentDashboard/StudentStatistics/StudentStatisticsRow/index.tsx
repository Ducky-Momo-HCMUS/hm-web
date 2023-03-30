import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { HomeroomStudentStatisticsData } from '../../../../types';
import { theme } from '../../../../theme';

interface StudentStatisticsRowProps {
  data: HomeroomStudentStatisticsData;
  index: number;
}

function StudentStatisticsRow({ data, index }: StudentStatisticsRowProps) {
  const { maSV, namHoc, hocKy, dtb, drl, soTinChi } = data;

  const renderDTBWithProperColor = useCallback(() => {
    let color = '';
    if (dtb && dtb < 5.0) {
      color = theme.palette.error.main;
    } else {
      color = theme.palette.text.primary;
    }
    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {dtb || 'Chưa có'}
      </Typography>
    );
  }, [dtb]);

  return (
    <TableRow hover tabIndex={-1} key={maSV}>
      <TableCell>{index}</TableCell>
      <TableCell>{namHoc}</TableCell>
      <TableCell>{hocKy}</TableCell>
      <TableCell>{renderDTBWithProperColor()}</TableCell>
      <TableCell>{drl}</TableCell>
      <TableCell>{soTinChi}</TableCell>
    </TableRow>
  );
}

export default StudentStatisticsRow;
