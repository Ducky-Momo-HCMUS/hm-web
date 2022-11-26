import { Card, Grid, styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & label {
    font-weight: bold;
  }
`;

export const StyledFilterBar = styled(Card)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledGridContainer = styled(Grid)`
  margin-top: 0.25rem;
`;
