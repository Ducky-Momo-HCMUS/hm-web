import { createTheme } from '@mui/material/styles';
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme';

// Custom theme: Colors
const themeColors = {
  color: {
    primary: '#646FD4',
    secondary: '#202449',
    _100: '#DFE3FF',
    _400: '#9BA3EB',
    _600: '#646FD4',
    _700: '#242F9B',
    _800: '#21205C',
    _850: '#272F5D',
    _900: '#202449',
    _950: '#130E35',
    red_800: '#7A2222',
    green_400: '#0FB45B',
    green_800: '#287141',
    white: '#ffffff',
    gold: '#b09755',
    bronze: '#a77c88',
    yellow: '#ebc351',
    black: '#000000',
    grey_200: '#77808D',
    grey_300: '#4F5482',
  },
} as const;

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    primary: {
      main: themeColors.color._600,
      contrastText: themeColors.color.white,
    },
    secondary: {
      main: '#9BA3EB',
      contrastText: themeColors.color.white,
    },
    grey: {
      200: '#cccccc',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 17,
    h1: {
      fontSize: 40,
      fontWeight: 700,
      color: themeColors.color.white,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      color: themeColors.color.white,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      color: themeColors.color.white,
    },
    h4: {
      color: themeColors.color.white,
      fontSize: 20,
    },
    h5: {
      color: themeColors.color.white,
      fontSize: 18,
    },
    h6: {
      color: themeColors.color.white,
      fontSize: 16,
      fontWeight: 200,
    },
    body1: {
      color: themeColors.color.white,
      fontSize: 16,
    },
    body2: {
      color: themeColors.color.white,
      fontSize: 16,
      fontWeight: 100,
    },
    subtitle1: {
      color: themeColors.color.white,
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle2: {
      color: themeColors.color.white,
      fontSize: 16,
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.color._850,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          borderColor: themeColors.color._100,
        },
        icon: {
          fill: themeColors.color._100,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          marginLeft: 10,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: 23,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: themeColors.color.white,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1300px !important',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: themeColors.color.white,
          fontWeight: 600,
          background: themeColors.color.grey_300,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          textDecoration: 'none',
          color: themeColors.color._100,
          fontWeight: 600,
          fontFamily: 'Poppins',
          transition: 'all 0.2s',
          '&:hover': {
            color: themeColors.color._400,
            textDecoration: 'none',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: themeColors.color.white,
          textTransform: 'none',
          '&.Mui-selected': {
            color: themeColors.color.green_400,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
        flexContainer: {
          justifyContent: 'space-between',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: themeColors.color._850,
          color: themeColors.color.white,
          borderRadius: 10,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: themeColors.color.white,
          fontWeight: 400,
          border: 'none',
        },
        icon: {
          fontSize: 20,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.color._850,
          borderRadius: 5,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: themeColors.color.white,
          },
        },
      },
    },
  },
};

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: typeof themeColors[Key];
};
declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...themeColors, ...themeOptions });
