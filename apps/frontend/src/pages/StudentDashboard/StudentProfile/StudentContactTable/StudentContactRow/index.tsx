import React from 'react';
import { IconButton, TableRow, TableCell, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { StudentContact } from '../../../../../generated-types';
import { StyledMuiLink } from '../../../../../components/styles';

interface StudentContactRowProps {
  index: number;
  data: StudentContact;
  onClickDelete: any;
  onClickEdit: any;
}

function StudentContactRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
}: StudentContactRowProps) {
  const { mxh, url } = data;

  return (
    <>
      <TableRow key={index}>
        <TableCell>
          {mxh === 'Facebook' ? (
            <Tooltip title={url} placement="top">
              <StyledMuiLink href={url} target="_blank">
                {mxh}
              </StyledMuiLink>
            </Tooltip>
          ) : (
            `${mxh}: ${url}`
          )}
        </TableCell>
        <TableCell align="right">
          <IconButton onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default StudentContactRow;
