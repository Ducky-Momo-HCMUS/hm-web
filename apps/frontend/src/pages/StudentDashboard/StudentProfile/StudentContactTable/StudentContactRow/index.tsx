import React from 'react';
import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Contact, StudentContact } from '../../../../../generated-types';
import { renderSocialContact } from '../../../../../utils/student';

interface StudentContactRowProps {
  index: number;
  data: StudentContact;
  onClickDelete: any;
  onClickEdit: any;
}

function StudentContactRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
}: StudentContactRowProps) {
  return (
    <>
      <TableRow key={index}>
        <TableCell>{renderSocialContact(data as Contact, false)}</TableCell>
        <TableCell align="right">
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

export default StudentContactRow;
