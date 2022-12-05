import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { RegisteredSubjectsData } from '../../../../types';
import { theme } from '../../../../theme';

interface AcademicTableRowProps {
  data: RegisteredSubjectsData;
  index: number;
}
function AcademicTableRow({ data, index }: AcademicTableRowProps) {
  const {
    subjectId,
    subjectName,
    subjectClass,
    status,
    averagePoint,
    theoryTeacher,
    practiceTeacher,
  } = data;

  const renderStatusWithProperColor = useCallback(() => {
    let color = '';
    switch (status) {
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
        {status}
      </Typography>
    );
  }, [status]);

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.subjectId}>
      <TableCell>{index}</TableCell>
      <TableCell>{subjectId}</TableCell>
      <TableCell>{subjectName}</TableCell>
      <TableCell>{subjectClass}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{averagePoint || 'Chưa có'}</TableCell>
      <TableCell>{theoryTeacher}</TableCell>
      <TableCell>{practiceTeacher}</TableCell>
    </TableRow>
  );
}

export default AcademicTableRow;
