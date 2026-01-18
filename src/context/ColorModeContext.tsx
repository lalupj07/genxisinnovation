import { createContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import { ThemeProvider, createTheme, type PaletteMode, responsiveFontSizes } from '@mui/material';
import { getDesignTokens } from '../theme/theme';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
    // Check localStorage or default to 'dark'
    const [mode, setMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('themeMode');
        return (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'dark';
    });

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
        // Optionally update body class or meta tags here if needed
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () => responsiveFontSizes(createTheme(getDesignTokens(mode))),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
