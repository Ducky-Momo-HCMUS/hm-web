/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import { format } from 'date-fns';

import { ImportStatusHistory } from '../../../../generated-types';
import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';

import { StyledDialog } from './styles';

interface HistoryDialogProps {
  title: string;
  openHistoryDialog: boolean;
  onClose: any;
  loading: boolean;
  historyList: ImportStatusHistory[];
}

function HistoryDialog({
  title,
  openHistoryDialog,
  onClose,
  loading,
  historyList,
}: HistoryDialogProps) {
  return (
    <StyledDialog open={openHistoryDialog} onClose={onClose}>
      <DialogTitle display="flex" alignItems="center">
        Lịch sử cập nhật {title}
      </DialogTitle>
      <DialogContent>
        <AsyncDataRenderer loading={loading} data={historyList}>
          <Table sx={{ width: 'fit-content' }}>
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Thông báo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyList.map((history, index) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {format(new Date(history.thoiGian), 'dd/MM/yyyy HH:mm:ss')}
                  </TableCell>
                  <TableCell>{history.trangThai}</TableCell>
                  <TableCell>{history.error?.message || ''}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AsyncDataRenderer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default HistoryDialog;
