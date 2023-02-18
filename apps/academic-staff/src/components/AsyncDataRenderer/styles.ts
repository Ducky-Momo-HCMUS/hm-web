import { Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInfoAlert = styled(Alert)`
  margin-top: 0.5rem;
  background-color: lightblue;
  & > div {
    color: darkblue !important;
  }
`;
