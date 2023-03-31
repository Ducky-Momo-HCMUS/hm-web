import React from 'react';
import { TableCell, TableRow } from '@mui/material';

import { HomeroomStudentStatisticsData } from '../../../../types';
import { renderGPA10WithProperColor } from '../../../../utils/student';
import { StyledTableCell } from '../../../../components/styles';

interface StudentStatisticsRowProps {
  data: HomeroomStudentStatisticsData;
  index: number;
}

function StudentStatisticsRow({ data, index }: StudentStatisticsRowProps) {
  const { maSV, namHoc, hocKy, dtb, drl, soTinChi } = data;

  return (
    <TableRow hover tabIndex={-1} key={maSV}>
      <TableCell>{index}</TableCell>
      <TableCell>{namHoc}</TableCell>
      <TableCell>{hocKy}</TableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(dtb as number)}
      </StyledTableCell>
      <TableCell>{drl}</TableCell>
      <TableCell>{soTinChi}</TableCell>
    </TableRow>
  );
}

export default StudentStatisticsRow;
