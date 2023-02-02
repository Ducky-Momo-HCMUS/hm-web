import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  min-width: 7.5rem;
  background: white;
  & > div > div {
    padding: 0.875rem;
  }
`;
