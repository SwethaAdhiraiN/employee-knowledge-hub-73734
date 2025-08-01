import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a', // brand-blue-dark
      light: '#3b82f6', // brand-blue-medium
      dark: '#1d4ed8', // hover-blue
    },
    secondary: {
      main: '#7c3aed', // brand-purple
      light: '#a855f7', // brand-purple-light
      dark: '#6d28d9', // hover-purple
    },
    accent: {
      main: '#ec4899', // brand-magenta
      light: '#f472b6', // brand-pink
      dark: '#db2777', // hover-magenta
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      disabled: '#94a3b8',
    },
    background: {
      default: '#ffffff',
      paper: '#fafbfc',
    },
    error: {
      main: '#ef4444',
      light: '#fee2e2',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7',
      dark: '#d97706',
    },
    success: {
      main: '#10b981',
      light: '#d1fae5',
      dark: '#047857',
    },
    info: {
      main: '#3b82f6',
      light: '#dbeafe',
      dark: '#1d4ed8',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
    '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
    '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
    '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
  ],
});

export const gradients = {
  primary: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)',
  subtle: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 70%, #7c3aed 100%)',
  reverse: 'linear-gradient(315deg, #ec4899 0%, #7c3aed 50%, #1e3a8a 100%)',
  light: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
};
