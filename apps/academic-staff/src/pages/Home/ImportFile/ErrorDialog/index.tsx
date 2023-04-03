/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { utils } from 'xlsx';
import _sortBy from 'lodash/sortBy';

import { FileHandlingError } from '../../../../types';

import { StyledDialog, StyledTableCell } from './styles';

interface ErrorDialogProps {
  openErrorDialog: boolean;
  onClose: any;
  error: FileHandlingError;
}

function ErrorDialog({ openErrorDialog, onClose, error }: ErrorDialogProps) {
  const { details: { headers = [], row = [], fieldErrors = {}, index } = {} } =
    error;
  const { columnNames, headerKeys, headerValues } = useMemo(() => {
    const sortedHeaders = _sortBy(headers, 'index');
    return {
      columnNames: sortedHeaders.map((item) => utils.encode_col(item.index)),
      headerKeys: sortedHeaders.map((item) => item.key),
      headerValues: sortedHeaders.map((item) => item.value),
    };
  }, [headers]);

  const { receivedColumnNames } = useMemo(
    () => ({
      receivedColumnNames: row.map((item, columnIndex) =>
        utils.encode_col(columnIndex)
      ),
    }),
    [row]
  );

  return (
    <StyledDialog open={openErrorDialog} onClose={onClose}>
      <DialogTitle display="flex" alignItems="center">
        <ErrorOutlinedIcon sx={{ color: 'red' }} fontSize="medium" />{' '}
        <Typography sx={{ marginLeft: '1rem' }} variant="h6" component="span">
          {error.message}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ marginLeft: '1.5rem' }}>
        {headers.length > 0 && (
          <Box>
            <Typography fontWeight="bold">Header</Typography>
            <Table sx={{ width: 'fit-content' }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell> </StyledTableCell>
                  {columnNames.map((columnName) => (
                    <StyledTableCell>{columnName}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>
                    <b>Key</b>
                  </StyledTableCell>
                  {headerKeys.map((headerKey) => (
                    <StyledTableCell>{headerKey}</StyledTableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <StyledTableCell>
                    <b>Value</b>
                  </StyledTableCell>
                  {headerValues.map((headerValue) => (
                    <StyledTableCell>{headerValue}</StyledTableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        )}
        {row.length > 0 && (
          <Box mt={2}>
            <Typography fontWeight="bold">Row</Typography>
            <Table sx={{ width: 'fit-content' }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell> </StyledTableCell>
                  {receivedColumnNames.map((columnName) => (
                    <StyledTableCell>{columnName}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>
                    <b>{index !== undefined ? index + 1 : ''}</b>
                  </StyledTableCell>
                  {row.map((receivedValue) => (
                    <StyledTableCell>{receivedValue}</StyledTableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        )}
        {fieldErrors && (
          <List
            sx={{
              listStyleType: 'number',
              '& .MuiListItem-root': {
                display: 'list-item',
              },
            }}
          >
            {Object.keys(fieldErrors).map((fieldError) => (
              <ListItem>
                {fieldError}
                {fieldErrors[fieldError].map((errorInfo) => (
                  <ListItemText>{errorInfo}</ListItemText>
                ))}
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default ErrorDialog;
