import {
  Box,
  Card,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  styled,
  TextField,
} from '@mui/material';

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

export const StyledIconButton = styled(IconButton)`
  font-size: 2.25rem;
  padding: 6px;
`;

export const StyledFormControl = styled(FormControl)`
  min-width: 10rem;
  &:first-child {
    margin-right: 1rem;
  }
  & > div {
    background-color: white;
  }
  & > div > div {
    padding: 0.5rem 1rem;
  }
`;
