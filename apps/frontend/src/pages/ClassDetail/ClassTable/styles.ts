import { styled } from '@mui/material/styles';
import { FormControl, Paper, TableRow } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  min-width: 11rem;
  background: white;
  & > div > div {
    padding: 0.875rem;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 1rem;
`;

export const StyledTableRow = styled(TableRow)`
  & td,
  & th {
    padding: 0.625rem;
  }
`;
