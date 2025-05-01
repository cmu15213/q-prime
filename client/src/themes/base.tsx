// See https://mui.com/material-ui/customization/default-theme for customization options
import {createTheme} from '@mui/material';
declare module '@mui/material/styles' {
    interface Theme {
        alternateColors: {
            cancel: string;
            unfreeze: string;
            navbar: string;
            darkerPrimary: string;
            alternatePaper: string;
        }
    }
    interface ThemeOptions {
        alternateColors?: {
            cancel?: string;
            unfreeze?: string;
            navbar?: string;
            darkerPrimary?: string;
            alternatePaper?: string;
        }
    }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff"',
    },
    secondary: {
      main: '#7bbffc',
    },
    success: {
      main: '#43a047',
    },
    error: {
      main: '#F27685',
    },
    info: {
      main: '#5DB7DE',
    },
    background: {
      paper: '#F0F0F0',
      default: '#dbedfe',
    },
  },
  alternateColors: {
    alternatePaper: '#fff',
    cancel: '#9e9e9e',
    unfreeze: '#ffb74d',
    // navbar: '#EF8EC3',
    // navbar: '#014122',
    navbar: '#01335f',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.variant === 'contained' && {
            color: '#fff',
            padding: '5px 20px',
          }),
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: () => ({
          ...({
            padding: '32px',
          }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: () => ({
          ...({
            fontSize: '15px',
          }),
        }),
      },
    },
  },
  typography: {
    fontSize: 15,
    htmlFontSize: 15,
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.125rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '0.875rem',
    },
  },
});

const darkThemeTextColor = '#fff';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#7bbffc',
    },
    success: {
      main: '#09e312',
    },
    error: {
      main: '#fc3a51',
    },
    info: {
      main: '#5DB7DE',
    },
    background: {
      paper: '#444444',
      default: '#00111f',
    },
  },
  alternateColors: {
    // darkerPrimary: '#e36bac',
    darkerPrimary: '#42a5f5',
    alternatePaper: '#575757',
    cancel: '#9e9e9e',
    unfreeze: '#f57c00',
    // navbar: '#e36bac',
    // navbar: '#014122',
    navbar: '#0058ab',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.variant === 'contained' && {
            color: '#fff',
            padding: '5px 20px',
          }),
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: () => ({
          ...({
            padding: '32px',
          }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: () => ({
          ...({
            fontSize: '15px',
          }),
        }),
      },
    },
  },
  typography: {
    fontSize: 15,
    htmlFontSize: 15,
    h1: {
      fontSize: '6rem',
      color: darkThemeTextColor,
    },
    h2: {
      fontSize: '3.75rem',
      color: darkThemeTextColor,
    },
    h3: {
      fontSize: '3rem',
      color: darkThemeTextColor,
    },
    h4: {
      fontSize: '2.125rem',
      color: darkThemeTextColor,
    },
    h5: {
      fontSize: '1.5rem',
      color: darkThemeTextColor,
    },
    h6: {
      fontSize: '1.25rem',
      color: darkThemeTextColor,
    },
    body1: {
      fontSize: '1rem',
      color: darkThemeTextColor,
    },
    body2: {
      fontSize: '0.875rem',
      color: darkThemeTextColor,
    },
    button: {
      fontSize: '0.875rem',
      color: darkThemeTextColor,
    },
  },
});

export {lightTheme, darkTheme};
