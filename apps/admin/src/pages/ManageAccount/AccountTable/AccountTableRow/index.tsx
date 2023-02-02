import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useMemo } from 'react';

import { AccountListItem } from '../../../../generated-types';

interface AccountTableRowProps {
  index: number;
  data: AccountListItem;
  onClickDelete: any;
  onClickEdit: any;
}

function AccountTableRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
}: AccountTableRowProps) {
  const { email, tenGV, gvcn, gvu, hoatDong } = data;

  const loaiTK = useMemo(() => {
    if (gvu && gvcn) {
      return 'Giáo vụ, Giáo viên chủ nhiệm';
    }

    if (gvu) {
      return 'Giáo vụ';
    }

    if (gvcn) {
      return 'Giáo viên chủ nhiệm';
    }

    return '';
  }, [gvcn, gvu]);

  return (
    <>
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{tenGV}</TableCell>
        <TableCell>{loaiTK}</TableCell>
        <TableCell>{hoatDong ? 'Hoạt động' : 'Không hoạt động'}</TableCell>
        <TableCell align="center">
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

export default AccountTableRow;
