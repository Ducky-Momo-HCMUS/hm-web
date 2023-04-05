/* eslint-disable @typescript-eslint/no-shadow */
import {
  Box,
  Collapse,
  IconButton,
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
import React, { useMemo } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { format } from 'date-fns';
import { utils } from 'xlsx';
import _sortBy from 'lodash/sortBy';

import { ImportStatusHistory } from '../../../../../generated-types';

import { StyledTableCell } from './styles';

function ExpandableRow(props: {
  rowIndex: number;
  history: ImportStatusHistory;
}) {
  const { rowIndex, history } = props;
  const [open, setOpen] = React.useState(false);

  const { headers, row, fieldErrors, index, message } = useMemo(() => {
    const { error } = history;
    if (error && error.detail) {
      const {
        detail: { headers = [], row = [], fieldErrors = {}, index } = {},
        message,
      } = error;

      return {
        headers,
        row,
        fieldErrors,
        index,
        message,
      };
    }

    return {
      headers: [],
      row: [],
      fieldErrors: {},
      index: 0,
      message: '',
    };
  }, [history]);

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
      receivedColumnNames:
        row?.map((item, columnIndex) => utils.encode_col(columnIndex)) || [],
    }),
    [row]
  );

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {rowIndex + 1}
        </TableCell>
        <TableCell>
          {format(new Date(history.thoiGian), 'dd/MM/yyyy HH:mm:ss')}
        </TableCell>
        <TableCell>{history.trangThai}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {headers && headers.length > 0 && (
                <Box>
                  <Typography>{message}</Typography>
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
              {row && row.length > 0 && (
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
                          <b>
                            {index !== undefined && index !== null
                              ? index + 1
                              : ''}
                          </b>
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
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ExpandableRow;
