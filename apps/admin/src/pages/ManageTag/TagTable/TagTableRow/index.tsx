import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

import { Tag } from '../../../../generated-types';

interface TagTableRowProps {
  data: Tag;
  onClickDelete: any;
  onClickEdit: any;
}

function TagTableRow({ data, onClickDelete, onClickEdit }: TagTableRowProps) {
  return (
    <>
      <TableRow key={data.maTag}>
        <TableCell>{data.maTag}</TableCell>
        <TableCell>{data.tenTag}</TableCell>
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

export default TagTableRow;
