import { FormControl, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormControl = styled(FormControl)`
  min-width: 7.5rem;
  margin-right: 1rem;
  & > div {
    background-color: white;
  }
  & > div > div {
    padding: 0.875rem;
  }
`;

export const StyledTextField = styled(TextField)`
  & input {
    padding: 14px !important;
  }
  width: 20%;
  background: white;
`;
