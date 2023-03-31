import React from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Contact, StudentParentInfo } from '../../../../../generated-types';
import { renderSocialContact } from '../../../../../utils/student';

interface ParentInfoRowProps {
  index: number;
  data: StudentParentInfo;
  onClickDelete: any;
  onClickEdit: any;
}

function ParentInfoRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
}: ParentInfoRowProps) {
  const { tenPH, quanHe, sdt, sua, lienHePH } = data;

  return (
    <>
      <TableRow key={index}>
        <TableCell>{tenPH}</TableCell>
        <TableCell>{quanHe}</TableCell>
        <TableCell>{sdt}</TableCell>
        <TableCell>
          {lienHePH.map((social, parentIndex) =>
            renderSocialContact(social as Contact, parentIndex > 0)
          )}
        </TableCell>
        <TableCell align="center">
          {sua && (
            <IconButton onClick={onClickEdit}>
              <EditIcon />
            </IconButton>
          )}
          {sua && (
            <IconButton onClick={onClickDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}

export default ParentInfoRow;
