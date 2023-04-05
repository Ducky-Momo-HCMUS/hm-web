import { TableCell, styled, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
  width: 2rem !important;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledTableRow = styled(TableRow)`
  &.Mui-selected {
    background-color: lightblue;
  }
  &.Mui-selected:hover {
    background-color: lightblue !important;
  }
`;
