import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import { HomeroomStudentListData } from '../../../../types';
import { StyledMuiLink, StyledRouterLink } from '../../../../components/styles';
import { theme } from '../../../../theme';

interface StudentTableRowProps {
  checked: boolean;
  data: HomeroomStudentListData;
  index: number;
  handleCheck: any;
}
function StudentTableRow({
  checked,
  data,
  index,
  handleCheck,
}: StudentTableRowProps) {
  const { maSV, tenSV, tenCN, tinhTrang, gpa4, gpa10, contact } = data;

  const renderStatusWithProperColor = useCallback(() => {
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

    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {tinhTrang}
      </Typography>
    );
  }, [tinhTrang]);

  const renderGPA4WithProperColor = useCallback(() => {
    let color = '';
    if (gpa4 && gpa4 < 2.0) {
      color = theme.palette.error.main;
    } else {
      color = theme.palette.text.primary;
    }
    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {gpa4 || 'Chưa có'}
      </Typography>
    );
  }, [gpa4]);

  const renderGPA10WithProperColor = useCallback(() => {
    let color = '';
    if (gpa10 && gpa10 < 5.0) {
      color = theme.palette.error.main;
    } else {
      color = theme.palette.text.primary;
    }
    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {gpa10 || 'Chưa có'}
      </Typography>
    );
  }, [gpa10]);

  const handleChange = useCallback(() => {
    handleCheck(data.maSV);
  }, [data.maSV, handleCheck]);

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
        <StyledRouterLink to={`/students/${maSV}/info`}>
          {tenSV}
        </StyledRouterLink>
      </TableCell>
      <TableCell>{tenCN || 'Chưa có'}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{renderGPA4WithProperColor()}</TableCell>
      <TableCell>{renderGPA10WithProperColor()}</TableCell>
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
      <TableCell>
        <Button
          variant="outlined"
          component={Link}
          to={`/students/${maSV}/statistics`}
        >
          Thống kê
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default StudentTableRow;
