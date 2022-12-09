import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const StyledContainer = styled(Box)`
  margin-right: 3rem;
`;
