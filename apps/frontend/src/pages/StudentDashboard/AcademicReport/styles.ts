import { Box, FormControl, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

export const StyledFormControl = styled(FormControl)`
  min-width: 11rem;
  background: white;
  & > div > div {
    padding: 0.875rem;
  }
`;

export const StyledStatusBox = styled(Box)(({ theme }) => ({
  '& button': {
    color: '#fff',
    padding: '0.5rem 1rem',
  },
  '& button:first-child': {
    background: theme.palette.warning.light,
    marginRight: '1.5rem',
  },
  '& button:last-child': {
    background: theme.palette.success.light,
  },
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  background: theme.palette.info.light,
  color: blue[900],
  fontWeight: 'bold',
  padding: '0.75rem 0',
}));
