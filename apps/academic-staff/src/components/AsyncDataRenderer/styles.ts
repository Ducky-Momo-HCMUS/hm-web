import { Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInfoAlert = styled(Alert)`
  display: inline-flex;
  background-color: lightblue;
  & > div {
    color: darkblue !important;
  }
`;
