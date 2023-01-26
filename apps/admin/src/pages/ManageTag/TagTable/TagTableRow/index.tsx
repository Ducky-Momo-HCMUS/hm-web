import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

import AddOrEditTagInfoDialog from '../../AddOrEditTagInfoDialog';
import { Tag } from '../../../../generated-types';

interface TagTableRowProps {
  data: Tag;
  onClickDelete: any;
}

function TagTableRow({ data, onClickDelete }: TagTableRowProps) {
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
      <TableRow key={data.maTag}>
        <TableCell>{data.maTag}</TableCell>
        <TableCell>{data.tenTag}</TableCell>
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
