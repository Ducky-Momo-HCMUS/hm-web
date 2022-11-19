import { Box, Chip, ListItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItem)<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 300ms;
  ${(props) => props.active && `background: ${grey[200]}`};
  &:hover {
    background: ${grey[100]};
  }
`;

export const StyledContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const StyledContent = styled(Box)(({ theme }) => ({
  width: '75%',
  '& > p': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  '& > p:first-of-type': {
    color: theme.palette.text.primary,
  },
  '& > p:last-of-type': {
    color: theme.palette.text.secondary,
  },
}));

export const StyledTag = styled(Chip)`
  width: fit-content;
`;
