import { Dialog, styled, TableCell } from '@mui/material';

export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    max-width: 100%;
  }
`;

export const StyledTableCell = styled(TableCell)`
  width: 2rem !important;
  overflow: hidden;
  white-space: nowrap;
`;
