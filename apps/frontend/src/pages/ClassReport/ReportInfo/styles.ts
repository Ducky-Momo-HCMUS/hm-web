import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  background: theme.palette.info.light,
  color: blue[900],
  fontWeight: 'bold',
  padding: '0.75rem 0',
}));

export const StyledInfoBox = styled(Box)`
  display: flex;
  padding: 0.75rem;
  & p:first-child {
    width: 50%;
    font-weight: bold;
  }
  border-bottom: 1px solid #eee;
`;
