import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const StyledContainer = styled(Box)`
  display: flex;
  margin-top: 4rem;
  width: 100%;
`;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    padding: '1rem 0 0 0',
    position: 'fixed',
    marginTop: '4rem',
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

export const StyledListItemButton = styled(ListItemButton)<{ active: boolean }>`
  ${(props) =>
    props.active &&
    `
     background: ${blue[300]};
     color: #fff;
     & svg {
      color: #fff;
     }
  `};
  transition: all 300ms;
  &:hover {
    background: ${blue[300]};
    color: #fff;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  margin-left: 0.5rem;
`;

export const StyledContent = styled(Box)`
  width: 100%;
  padding: 1.5rem;
  background: ${grey[100]};
  margin-left: 15rem;
`;