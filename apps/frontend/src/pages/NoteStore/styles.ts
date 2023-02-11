import { Card, Dialog, Grid, styled, TextField } from '@mui/material';

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

export const StyledDialog = styled(Dialog)`
  margin-top: 4rem;
  min-height: 37.5rem;
  width: 100% !important;
`;
