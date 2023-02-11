import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)`
  & > div {
    background-color: white;
    &:hover {
      background-color: white;
    }
    &.Mui-focused {
      background-color: white;
    }
  }
`;
