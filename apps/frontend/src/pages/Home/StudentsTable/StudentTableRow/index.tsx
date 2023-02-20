import React, { ChangeEvent, useCallback, useState } from 'react';
import { Checkbox, TableCell, TableRow, Typography } from '@mui/material';

import { HomeroomStudentListData } from '../../../../types';
import { StyledMuiLink, StyledRouterLink } from '../../../../components/styles';
import { theme } from '../../../../theme';

interface StudentTableRowProps {
  data: HomeroomStudentListData;
  index: number;
  handleCheck: any;
}
function StudentTableRow({ data, index, handleCheck }: StudentTableRowProps) {
  const { maSV, tenSV, tenCN, tinhTrang, gpa4, gpa10, contact } = data;

  const renderStatusWithProperColor = useCallback(() => {
    let color = '';

    switch (tinhTrang) {
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
        color = theme.palette.text.primary;
        break;
    }

    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {tinhTrang}
      </Typography>
    );
  }, [tinhTrang]);

  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      handleCheck(data.maSV);
    },
    [data.maSV, handleCheck]
  );

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.maSV}>
      <TableCell>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </TableCell>
      <TableCell>{index}</TableCell>
      <TableCell>{maSV}</TableCell>
      <TableCell>
        <StyledRouterLink to={`/students/${maSV}`}>{tenSV}</StyledRouterLink>
      </TableCell>
      <TableCell>{tenCN || 'Chưa có'}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{gpa4 || 'Chưa có'}</TableCell>
      <TableCell>{gpa10 || 'Chưa có'}</TableCell>
      <TableCell>
        {contact.sdt}
        {contact.lienHe?.map((social) => (
          <>
            ,{' '}
            <StyledMuiLink key={social.url} target="_blank" href={social.url}>
              {social.mxh}
            </StyledMuiLink>
          </>
        ))}
      </TableCell>
    </TableRow>
  );
}

export default StudentTableRow;
