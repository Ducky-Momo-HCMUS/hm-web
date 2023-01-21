import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

import { HomeroomTeacherInfo } from '../../../../types';
import AddOrEditHomeroomTeacherInfoDialog from '../../AddOrEditHomeroomTeacherInfoDialog';

interface HomeroomTeacherTableRowProps {
  index: number;
  data: HomeroomTeacherInfo;
  onClickDelete: any;
}

function HomeroomTeacherTableRow({
  index,
  data,
  onClickDelete,
}: HomeroomTeacherTableRowProps) {
  const { fullName, className } = data;
  const [
    openAddOrEditHomeroomTeacherInfoDialog,
    setOpenAddOrEditHomeroomTeacherInfoDialog,
  ] = useState(false);

  const handleOpenAddOrEditHomeroomTeacherInfoDialog = () => {
    setOpenAddOrEditHomeroomTeacherInfoDialog(true);
  };

  const handleCloseAddOrEditHomeroomTeacherInfoDialog = () => {
    setOpenAddOrEditHomeroomTeacherInfoDialog(false);
  };

  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{fullName}</TableCell>
        <TableCell>{className}</TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpenAddOrEditHomeroomTeacherInfoDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddOrEditHomeroomTeacherInfoDialog
        open={openAddOrEditHomeroomTeacherInfoDialog}
        onClose={handleCloseAddOrEditHomeroomTeacherInfoDialog}
        onClickCancel={handleCloseAddOrEditHomeroomTeacherInfoDialog}
        onClickConfirm={handleCloseAddOrEditHomeroomTeacherInfoDialog}
        data={data}
      />
    </>
  );
}

export default HomeroomTeacherTableRow;
