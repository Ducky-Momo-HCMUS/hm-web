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
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { utils } from 'xlsx';

import { FileHandlingError } from '../../../../types';

import { StyledDialog } from './styles';

interface ErrorDialogProps {
  openErrorDialog: boolean;
  onClose: any;
  error: FileHandlingError;
}

function ErrorDialog({ openErrorDialog, onClose, error }: ErrorDialogProps) {
  const { details: { expected = [], received = [], fieldErrors = {} } = {} } =
    error;
  const { columnNames, headerKeys, headerValues } = useMemo(
    () => ({
      columnNames: expected.map((item) => utils.encode_col(item.index)),
      headerKeys: expected.map((item) => item.key),
      headerValues: expected.map((item) => item.value),
    }),
    [expected]
  );

  const { receivedColumnNames } = useMemo(
    () => ({
      receivedColumnNames: received.map((item, index) =>
        utils.encode_col(index)
      ),
    }),
    [received]
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
        {expected.length > 0 && (
          <Box>
            <Typography fontWeight="bold">Expected</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  {columnNames.map((columnName) => (
                    <TableCell>{columnName}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Key</b>
                  </TableCell>
                  {headerKeys.map((headerKey) => (
                    <TableCell>{headerKey}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Value</b>
                  </TableCell>
                  {headerValues.map((headerValue) => (
                    <TableCell>{headerValue}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        )}
        {received.length > 0 && (
          <Box mt={2}>
            <Typography fontWeight="bold">Received</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  {receivedColumnNames.map((columnName) => (
                    <TableCell>{columnName}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Value</b>
                  </TableCell>
                  {received.map((receivedValue) => (
                    <TableCell>{receivedValue}</TableCell>
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
