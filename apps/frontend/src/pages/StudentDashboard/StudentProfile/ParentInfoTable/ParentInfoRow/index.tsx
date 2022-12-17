import React, { useState } from 'react';
import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { ParentInfo } from '../../../../../types';
import { StyledMuiLink } from '../../../../../components/styles';
import AddOrEditParentInfoDialog from '../../AddOrEditParentInfoDialog';

interface ParentInfoRowProps {
  index: number;
  data: ParentInfo;
  onClickDelete: any;
}

function ParentInfoRow({ index, data, onClickDelete }: ParentInfoRowProps) {
  const { fullName, relationship, phoneNumber, contact } = data;

  const [openAddOrEditParentInfoDialog, setOpenAddOrEditParentInfoDialog] =
    useState(false);

  const handleOpenAddOrEditParentInfoDialog = () => {
    setOpenAddOrEditParentInfoDialog(true);
  };

  const handleCloseAddOrEditParentInfoDialog = () => {
    setOpenAddOrEditParentInfoDialog(false);
  };

  return (
    <>
      <TableRow key={index}>
        <TableCell>{fullName}</TableCell>
        <TableCell>{relationship}</TableCell>
        <TableCell>{phoneNumber}</TableCell>
        <TableCell>
          {contact.map((social) => (
            <>
              <Tooltip title={social.url} placement="top">
                <StyledMuiLink href={social.url}>{social.mxh}</StyledMuiLink>
              </Tooltip>
              {contact.at(contact.length - 1) === social ? '' : ', '}
            </>
          ))}
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpenAddOrEditParentInfoDialog}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AddOrEditParentInfoDialog
        open={openAddOrEditParentInfoDialog}
        onClose={handleCloseAddOrEditParentInfoDialog}
        onClickCancel={handleCloseAddOrEditParentInfoDialog}
        onClickConfirm={handleCloseAddOrEditParentInfoDialog}
        data={data}
      />
    </>
  );
}

export default ParentInfoRow;
