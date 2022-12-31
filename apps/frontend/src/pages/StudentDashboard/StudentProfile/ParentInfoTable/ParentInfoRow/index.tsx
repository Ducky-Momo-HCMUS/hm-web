import React, { useState } from 'react';
import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledMuiLink } from '../../../../../components/styles';
import AddOrEditParentInfoDialog from '../../AddOrEditParentInfoDialog';
import { StudentParentInfo } from '../../../../../generated-types';

interface ParentInfoRowProps {
  index: number;
  data: StudentParentInfo;
  onClickDelete: any;
}

function ParentInfoRow({ index, data, onClickDelete }: ParentInfoRowProps) {
  const { tenPH, quanHe, sdt, sua, lienHe } = data;

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
        <TableCell>{tenPH}</TableCell>
        <TableCell>{quanHe}</TableCell>
        <TableCell>{sdt}</TableCell>
        <TableCell>
          {lienHe.map((social) => (
            <>
              <Tooltip title={social.url} placement="top">
                <StyledMuiLink href={social.url}>{social.mxh}</StyledMuiLink>
              </Tooltip>
              {lienHe.at(lienHe.length - 1) === social ? '' : ', '}
            </>
          ))}
        </TableCell>
        <TableCell align="center">
          {sua && (
            <IconButton onClick={handleOpenAddOrEditParentInfoDialog}>
              <EditIcon />
            </IconButton>
          )}
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
