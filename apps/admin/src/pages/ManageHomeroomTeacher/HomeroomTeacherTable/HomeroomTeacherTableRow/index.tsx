import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

import { TeacherListItem } from '../../../../types';

interface HomeroomTeacherTableRowProps {
  index: number;
  data: TeacherListItem;
  onClickDelete: any;
  onClickEdit: any;
}

function HomeroomTeacherTableRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
}: HomeroomTeacherTableRowProps) {
  const { tenGV, lopChuNhiem, email } = data;

  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{tenGV}</TableCell>
        <TableCell>{lopChuNhiem.join(', ')}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell align="center">
          <IconButton onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default HomeroomTeacherTableRow;
