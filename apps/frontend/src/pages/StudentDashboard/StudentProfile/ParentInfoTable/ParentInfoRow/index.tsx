import React from 'react';
import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledMuiLink } from '../../../../../components/styles';
import { StudentParentInfo } from '../../../../../generated-types';

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
          {lienHePH.map((social) => (
            <>
              <Tooltip title={social.url} placement="top">
                <StyledMuiLink href={social.url}>{social.mxh}</StyledMuiLink>
              </Tooltip>
              {lienHePH.at(lienHePH.length - 1) === social ? '' : ', '}
            </>
          ))}
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
