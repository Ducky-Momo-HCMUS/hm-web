import { Box, Card, Dialog, Grid, styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & label {
    font-weight: bold;
  }
`;

export const StyledCard = styled(Card)`
  padding: 2rem;
`;

export const StyledFilterBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledGridContainer = styled(Grid)`
  margin-top: 0.25rem;
`;

export const StyledDialog = styled(Dialog)`
  margin-top: 4rem;
  & .MuiPaper-root {
    width: 50rem;
    max-width: 50rem;
    min-height: 40rem;
  }
`;
