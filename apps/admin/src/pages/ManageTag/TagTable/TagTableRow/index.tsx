import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

import AddOrEditTagInfoDialog from '../../AddOrEditTagInfoDialog';

interface TagTableRowProps {
  index: number;
  data: string;
  onClickDelete: any;
}

function TagTableRow({ index, data, onClickDelete }: TagTableRowProps) {
  const [openAddOrEditTagInfoDialog, setOpenAddOrEditTagInfoDialog] =
    useState(false);

  const handleOpenAddOrEditTagInfoDialog = () => {
    setOpenAddOrEditTagInfoDialog(true);
  };

  const handleCloseAddOrEditTagInfoDialog = () => {
    setOpenAddOrEditTagInfoDialog(false);
  };
  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{data}</TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpenAddOrEditTagInfoDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddOrEditTagInfoDialog
        open={openAddOrEditTagInfoDialog}
        onClose={handleCloseAddOrEditTagInfoDialog}
        onClickCancel={handleCloseAddOrEditTagInfoDialog}
        onClickConfirm={handleCloseAddOrEditTagInfoDialog}
        data={data}
      />
    </>
  );
}

export default TagTableRow;
