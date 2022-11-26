import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { StudentData } from '../../../../types';
import { StyledMuiLink, StyledRouterLink } from '../../../../components/styles';
import { theme } from '../../../../theme';

interface StudentTableRowProps {
  data: StudentData;
  index: number;
}
function StudentTableRow({ data, index }: StudentTableRowProps) {
  const {
    studentId,
    fullName,
    major,
    status,
    gpaFourPointScale,
    gpaTenPointScale,
    contact,
  } = data;

  const renderStatusWithProperColor = useCallback(() => {
    let color = '';
    switch (status) {
      case 'Đang học': {
        color = theme.palette.text.primary;
        break;
      }
      case 'Bị buộc thôi học': {
        color = theme.palette.error.main;
        break;
      }
      case 'Đình chỉ học': {
        color = theme.palette.warning.main;
        break;
      }
      case 'Đã tốt nghiệp': {
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
    <TableRow hover role="checkbox" tabIndex={-1} key={data.studentId}>
      <TableCell>{index}</TableCell>
      <TableCell>{studentId}</TableCell>
      <TableCell>
        <StyledRouterLink to={`/students/${studentId}`}>
          {fullName}
        </StyledRouterLink>
      </TableCell>
      <TableCell>{major}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{gpaFourPointScale}</TableCell>
      <TableCell>{gpaTenPointScale}</TableCell>
      <TableCell>
        {contact.phoneNumber}
        {contact.socialInfoList.map((social) => (
          <>
            ,{' '}
            <StyledMuiLink target="_blank" href={social.url}>
              {social.name}
            </StyledMuiLink>
          </>
        ))}
      </TableCell>
    </TableRow>
  );
}

export default StudentTableRow;
