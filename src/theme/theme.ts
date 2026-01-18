import type { PaletteMode } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define strict color tokens
const colors = {
  dark: {
    background: '#0B0F19', // Rich Dark Blue-Black
    paper: 'rgba(255, 255, 255, 0.05)',
    primary: '#00F0FF', // Electric Cyan
    secondary: '#bf00ff', // Neon Purple
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B8C4',
    actionHover: 'rgba(0, 240, 255, 0.1)'
  },
  light: {
    background: '#F0F4F8', // Soft Blue-Grey
    paper: '#FFFFFF',
    primary: '#4c6ef5', // Deep Indigo Blue (Better contrast on light)
    secondary: '#ff6b6b', // Vibrant Coral
    textPrimary: '#102A43', // Deep Navy
    textSecondary: '#486581', // Muted Blue-Grey
    actionHover: 'rgba(76, 110, 245, 0.1)'
  }
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark' ? {
      // Dark Mode Palette
      primary: { main: colors.dark.primary },
      secondary: { main: colors.dark.secondary },
      background: {
        default: colors.dark.background,
        paper: colors.dark.paper,
      },
      text: {
        primary: colors.dark.textPrimary,
        secondary: colors.dark.textSecondary,
      },
      action: { hover: colors.dark.actionHover }
    } : {
      // Light Mode Palette
      primary: { main: colors.light.primary },
      secondary: { main: colors.light.secondary },
      background: {
        default: colors.light.background,
        paper: colors.light.paper,
      },
      text: {
        primary: colors.light.textPrimary,
        secondary: colors.light.textSecondary,
      },
      action: { hover: colors.light.actionHover }
    }),
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 28px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: mode === 'dark'
            ? `linear-gradient(45deg, ${colors.dark.primary} 30%, ${colors.dark.secondary} 90%)`
            : `linear-gradient(45deg, ${colors.light.primary} 30%, ${colors.light.secondary} 90%)`,
          color: mode === 'dark' ? '#000' : '#FFF',
          boxShadow: mode === 'dark'
            ? `0 0 15px ${colors.dark.actionHover}`
            : `0 4px 15px rgba(76, 110, 245, 0.3)`,
          border: 'none',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: mode === 'dark'
              ? `0 0 25px rgba(0, 240, 255, 0.6)`
              : `0 6px 20px rgba(76, 110, 245, 0.4)`,
          },
        },
        outlined: {
          borderColor: mode === 'dark' ? 'rgba(0, 240, 255, 0.5)' : 'rgba(76, 110, 245, 0.5)',
          color: mode === 'dark' ? colors.dark.primary : colors.light.primary,
          '&:hover': {
            borderColor: mode === 'dark' ? colors.dark.primary : colors.light.primary,
            background: mode === 'dark' ? colors.dark.actionHover : colors.light.actionHover,
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          background: mode === 'dark' ? colors.dark.paper : colors.light.paper,
          border: mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.05)',
          borderRadius: 24,
          boxShadow: mode === 'light' ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            border: mode === 'dark'
              ? `1px solid ${colors.dark.primary}`
              : `1px solid ${colors.light.primary}`,
            boxShadow: mode === 'dark'
              ? `0 0 30px ${colors.dark.actionHover}`
              : `0 20px 40px rgba(76, 110, 245, 0.15)`,
          }
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: mode === 'dark'
            ? 'rgba(11, 15, 25, 0.8)'
            : 'rgba(240, 244, 248, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(0, 0, 0, 0.05)',
          color: mode === 'dark' ? '#FFF' : colors.light.textPrimary
        }
      }
    }
  },
});

export const createAppTheme = (mode: PaletteMode) => responsiveFontSizes(createTheme(getDesignTokens(mode)));
