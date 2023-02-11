import { Box, FormControl, styled } from '@mui/material';

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
  '& button:first-of-type': {
    background: theme.palette.warning.light,
    marginRight: '1.5rem',
  },
  '& button:last-of-type': {
    background: theme.palette.success.light,
  },
}));
