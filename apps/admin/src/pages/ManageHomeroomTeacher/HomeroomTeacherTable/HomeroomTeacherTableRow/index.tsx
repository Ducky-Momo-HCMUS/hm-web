import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

import { TeacherListItem } from '../../../../types';
import EditHomeroomTeacherInfoDialog from '../../AddOrEditHomeroomTeacherInfoDialog';

interface HomeroomTeacherTableRowProps {
  index: number;
  data: TeacherListItem;
  onClickDelete: any;
}

function HomeroomTeacherTableRow({
  index,
  data,
  onClickDelete,
}: HomeroomTeacherTableRowProps) {
  const { tenGV, lopChuNhiem, email } = data;
  const [
    openEditHomeroomTeacherInfoDialog,
    setOpenEditHomeroomTeacherInfoDialog,
  ] = useState(false);

  const handleOpenEditHomeroomTeacherInfoDialog = () => {
    setOpenEditHomeroomTeacherInfoDialog(true);
  };

  const handleCloseEditHomeroomTeacherInfoDialog = () => {
    setOpenEditHomeroomTeacherInfoDialog(false);
  };

  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{tenGV}</TableCell>
        <TableCell>{lopChuNhiem}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpenEditHomeroomTeacherInfoDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      {openEditHomeroomTeacherInfoDialog && (
        <EditHomeroomTeacherInfoDialog
          open={openEditHomeroomTeacherInfoDialog}
          onClose={handleCloseEditHomeroomTeacherInfoDialog}
          onClickCancel={handleCloseEditHomeroomTeacherInfoDialog}
          onClickConfirm={handleCloseEditHomeroomTeacherInfoDialog}
          data={data}
        />
      )}
    </>
  );
}

export default HomeroomTeacherTableRow;
