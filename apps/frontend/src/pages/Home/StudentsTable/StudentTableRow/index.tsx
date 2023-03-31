import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, TableCell, TableRow } from '@mui/material';

import { HomeroomStudentListData } from '../../../../types';
import {
  renderGPA10WithProperColor,
  renderGPA4WithProperColor,
  renderSocialContact,
  renderStatusWithProperColor,
} from '../../../../utils/student';
import {
  StyledRouterLink,
  StyledTableCell,
} from '../../../../components/styles';

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
      <StyledTableCell>
        {renderStatusWithProperColor(tinhTrang)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA4WithProperColor(gpa4 as number)}
      </StyledTableCell>
      <StyledTableCell>
        {renderGPA10WithProperColor(gpa10 as number)}
      </StyledTableCell>
      <TableCell>
        {contact.sdt}
        {contact.lienHe?.map((social) => renderSocialContact(social))}
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
