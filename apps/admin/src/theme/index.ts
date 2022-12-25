import { createTheme } from '@mui/material/styles';
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme';

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  palette: {
    error: {
      main: '#d32f2f',
      light: '#fbb4af',
      dark: '#7c3a38',
    },
    info: {
      main: '#0288d1',
      light: '#acd4ea',
    },
  },
};

// Create theme
export const theme = createTheme({ ...themeOptions });
