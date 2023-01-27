import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

import { AccountInfo } from '../../../../types';
import AddOrEditAccountInfoDialog from '../../AddOrEditAccountInfoDialog';

interface AccountTableRowProps {
  index: number;
  data: AccountInfo;
  onClickDelete: any;
}

function AccountTableRow({ index, data, onClickDelete }: AccountTableRowProps) {
  const { email, fullName, type, status } = data;
  const [openAddOrEditAccountInfoDialog, setOpenAddOrEditAccountInfoDialog] =
    useState(false);

  const handleOpenAddOrEditAccountInfoDialog = () => {
    setOpenAddOrEditAccountInfoDialog(true);
  };

  const handleCloseAddOrEditAccountInfoDialog = () => {
    setOpenAddOrEditAccountInfoDialog(false);
  };
  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{fullName}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpenAddOrEditAccountInfoDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddOrEditAccountInfoDialog
        open={openAddOrEditAccountInfoDialog}
        onClose={handleCloseAddOrEditAccountInfoDialog}
        onClickCancel={handleCloseAddOrEditAccountInfoDialog}
        onClickConfirm={handleCloseAddOrEditAccountInfoDialog}
        data={data}
      />
    </>
  );
}

export default AccountTableRow;
