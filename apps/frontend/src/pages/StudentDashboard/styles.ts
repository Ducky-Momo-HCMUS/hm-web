import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    padding: '1rem 0 0 0',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const StyledListItemText = styled(ListItemText)`
  margin-left: 0.5rem;
`;

export const StyledContent = styled(Box)`
  width: 100%;
  padding: 1.5rem;
  background: ${grey[100]};
`;
