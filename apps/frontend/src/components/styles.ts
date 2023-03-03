import {
  Avatar,
  Box,
  FormControl,
  TextField,
  Link as MuiLink,
  Typography,
  Paper,
  Divider,
  Breadcrumbs,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export const StyledStickyBox = styled(Box)`
  position: sticky;
  top: 66px;
  background-color: #f5f5f5;
`;

export const StyledContainer = styled(Box)`
  background: ${grey[100]};
  height: 100vh;
`;

export const StyledContentWrapper = styled(Box)`
  padding: 1.5rem 1.25rem;
  margin-top: 4rem;
`;

export const StyledActionsBar = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const StyledCard = styled(Box)`
  background: ${grey[50]};
  border-radius: 0.625rem;
  max-width: 24rem;
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 3rem 2rem;
  margin: 7rem auto 0 auto;
`;

export const StyledLogo = styled(Avatar)`
  width: 9rem;
  height: 7.5rem;
  margin: 0 auto 2rem auto;
`;

export const StyledTextField = styled(TextField)`
  & > div {
    background-color: ${grey[100]};
    &:hover {
      background-color: initial;
    }
    &.Mui-focused {
      background-color: initial;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  min-width: 7.5rem;
  &:first-child {
    margin-right: 1rem;
  }
  & > div {
    background-color: white;
  }
  & > div > div {
    padding: 0.5rem 1rem;
  }
`;

export const StyledRouterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
}));

export const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.dark,
  marginBottom: '1rem',
}));

export const Item = styled(Paper)({
  backgroundColor: '#fff',
  height: '100%',
});

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderWidth: '0.05rem',
}));

export const StyledBreadCrumbs = styled(Breadcrumbs)(({ theme }) => ({
  marginBottom: '1.5rem',
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

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
  & p:first-of-type {
    width: 50%;
    font-weight: bold;
  }
  border-bottom: 1px solid #ccc;
`;
