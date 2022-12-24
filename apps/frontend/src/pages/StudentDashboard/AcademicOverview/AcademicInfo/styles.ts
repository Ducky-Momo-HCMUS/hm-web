import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInfoWithColor = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
