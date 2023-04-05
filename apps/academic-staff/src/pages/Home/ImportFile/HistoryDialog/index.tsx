/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
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

import { ImportStatusHistory } from '../../../../generated-types';
import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';

import { StyledDialog } from './styles';
import ExpandableRow from './ExpandableRow';

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
  const [selected, setSelected] = useState(-1);

  return (
    <StyledDialog open={openHistoryDialog} onClose={onClose}>
      <DialogTitle display="flex" alignItems="center">
        Lịch sử cập nhật {title}
      </DialogTitle>
      <DialogContent>
        <AsyncDataRenderer loading={loading} data={historyList}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell>STT</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyList.map((history, index) => (
                <ExpandableRow
                  rowIndex={index}
                  history={history}
                  selected={selected === index}
                  setSelected={setSelected}
                />
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
