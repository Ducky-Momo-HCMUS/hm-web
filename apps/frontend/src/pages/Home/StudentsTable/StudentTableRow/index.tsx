import React, { useCallback } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

import { HomeroomStudentListData } from '../../../../types';
import { StyledMuiLink, StyledRouterLink } from '../../../../components/styles';
import { theme } from '../../../../theme';
import { mapMajorIdToName } from '../../../../utils';

interface StudentTableRowProps {
  data: HomeroomStudentListData;
  index: number;
}
function StudentTableRow({ data, index }: StudentTableRowProps) {
  const { maSV, tenSV, maCN = '', tinhTrang, gpa4, gpa10, contact } = data;

  const renderStatusWithProperColor = useCallback(() => {
    let color = '';
    let text = '';
    switch (tinhTrang) {
      case 'DANG_HOC': {
        color = theme.palette.text.primary;
        text = 'Đang học';
        break;
      }
      case 'BI_BUOC_THOI_HOC': {
        color = theme.palette.error.main;
        text = 'Bị buộc thôi học';
        break;
      }
      case 'DINH_CHI_HOC': {
        color = theme.palette.warning.main;
        text = 'Đình chỉ học';
        break;
      }
      case 'DA_TOT_NGHIEP': {
        color = theme.palette.success.main;
        text = 'Đã tốt nghiệp';
        break;
      }
      default:
        break;
    }

    return (
      <Typography sx={{ color, fontSize: '0.875rem' }} component="span">
        {text}
      </Typography>
    );
  }, [tinhTrang]);

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={data.maSV}>
      <TableCell>{index}</TableCell>
      <TableCell>{maSV}</TableCell>
      <TableCell>
        <StyledRouterLink to={`/students/${maSV}`}>{tenSV}</StyledRouterLink>
      </TableCell>
      <TableCell>{mapMajorIdToName(maCN)}</TableCell>
      <TableCell>{renderStatusWithProperColor()}</TableCell>
      <TableCell>{gpa4}</TableCell>
      <TableCell>{gpa10}</TableCell>
      <TableCell>
        {contact.sdt}
        {contact.lienHe?.map((social) => (
          <>
            ,{' '}
            <StyledMuiLink target="_blank" href={social.url}>
              {social.mxh}
            </StyledMuiLink>
          </>
        ))}
      </TableCell>
    </TableRow>
  );
}

export default StudentTableRow;
