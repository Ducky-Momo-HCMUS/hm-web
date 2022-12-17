import React, { useState } from 'react';
import { IconButton, TableRow, TableCell, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Contact } from '../../../../../generated-types';
import { StyledMuiLink } from '../../../../../components/styles';
import AddOrEditStudentContactDialog from '../../AddOrEditStudentContactDialog';

interface StudentContactRowProps {
  index: number;
  data: Contact;
  onClickDelete: any;
}

function StudentContactRow({
  index,
  data,
  onClickDelete,
}: StudentContactRowProps) {
  const { mxh, url } = data;

  const [
    openAddOrEditStudentContactDialog,
    setOpenAddOrEditStudentContactDialog,
  ] = useState(false);

  const handleOpenAddOrEditStudentContactDialog = () => {
    setOpenAddOrEditStudentContactDialog(true);
  };

  const handleCloseAddOrEditStudentContactDialog = () => {
    setOpenAddOrEditStudentContactDialog(false);
  };

  return (
    <>
      <TableRow key={index}>
        <TableCell>
          <Tooltip title={url} placement="top">
            <StyledMuiLink href={url}>{mxh}</StyledMuiLink>
          </Tooltip>
        </TableCell>
        <TableCell align="right">
          <IconButton onClick={handleOpenAddOrEditStudentContactDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddOrEditStudentContactDialog
        open={openAddOrEditStudentContactDialog}
        onClose={handleCloseAddOrEditStudentContactDialog}
        onClickCancel={handleCloseAddOrEditStudentContactDialog}
        onClickConfirm={handleCloseAddOrEditStudentContactDialog}
        data={data}
      />
    </>
  );
}

export default StudentContactRow;
