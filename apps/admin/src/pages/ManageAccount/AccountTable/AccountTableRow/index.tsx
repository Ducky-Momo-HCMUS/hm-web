import { IconButton, TableRow, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useMemo } from 'react';

import { AccountListItem } from '../../../../generated-types';

interface AccountTableRowProps {
  index: number;
  data: AccountListItem;
  onClickDelete: any;
  onClickEdit: any;
  onClickActivate: any;
}

function AccountTableRow({
  index,
  data,
  onClickDelete,
  onClickEdit,
  onClickActivate,
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
          {hoatDong ? (
            <IconButton onClick={onClickDelete}>
              <LockIcon />
            </IconButton>
          ) : (
            <IconButton onClick={onClickActivate}>
              <LockOpenIcon />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}

export default AccountTableRow;
