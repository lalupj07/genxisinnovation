import type { PaletteMode } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const colors = {
  bg: '#0a0f1e',
  paper: 'rgba(255, 255, 255, 0.04)',
  primary: '#6366f1',      // Indigo
  accent: '#22d3ee',       // Cyan
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  border: 'rgba(99, 102, 241, 0.2)',
};

export const getDesignTokens = (_mode: PaletteMode) => ({
  palette: {
    mode: 'dark' as PaletteMode,
    primary: { main: colors.primary },
    secondary: { main: colors.accent },
    background: {
      default: colors.bg,
      paper: colors.paper,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.border,
    action: { hover: 'rgba(99, 102, 241, 0.08)' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none' as const,
          fontWeight: 600,
          fontFamily: '"Space Grotesk", sans-serif',
          padding: '10px 28px',
          transition: 'all 0.3s ease',
          letterSpacing: '0.01em',
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
          color: '#fff',
          boxShadow: `0 4px 20px ${colors.primary}40`,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 30px ${colors.primary}60`,
            background: `linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)`,
          },
        },
        outlined: {
          borderColor: `${colors.primary}60`,
          color: colors.primary,
          '&:hover': {
            borderColor: colors.primary,
            background: `${colors.primary}10`,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(16px)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: `1px solid ${colors.border}`,
          borderRadius: 20,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            border: `1px solid ${colors.primary}80`,
            boxShadow: `0 20px 60px ${colors.primary}20, 0 0 0 1px ${colors.primary}20`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
          color: colors.textPrimary,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
        },
      },
    },
  },
});

export const createAppTheme = (mode: PaletteMode) =>
  responsiveFontSizes(createTheme(getDesignTokens(mode)));
