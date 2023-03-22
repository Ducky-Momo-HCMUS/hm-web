import { Box, Card, styled, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  maxHeight: '18.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '1.5rem',
  cursor: 'pointer',
  '& span.show-more-less-clickable': {
    textDecoration: 'none!important',
    color: `${theme.palette.text.secondary}!important`,
  },
}));

export const StyledTitle = styled(Typography)`
  font-size: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledContent = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledFooter = styled(Box)(({ theme }) => ({
  marginTop: '0.5rem',
  '& > span': {
    color: theme.palette.primary.dark,
    fontWeight: 500,
    fontSize: '0.8rem',
  },
}));
