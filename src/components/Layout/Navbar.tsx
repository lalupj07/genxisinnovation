import { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext } from '../../context/ColorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: scrolled
                    ? (theme.palette.mode === 'dark' ? 'rgba(11, 15, 25, 0.8)' : 'rgba(240, 244, 248, 0.8)')
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled
                    ? `1px solid ${theme.palette.primary.main}20`
                    : 'none',
                transition: 'all 0.4s ease',
                py: 2,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: scrolled
                        ? `linear-gradient(90deg, transparent, ${theme.palette.primary.main}80, transparent)`
                        : 'transparent',
                    opacity: scrolled ? 1 : 0,
                    transition: 'opacity 0.4s ease'
                }
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}>
                        <Box
                            component="img"
                            src="/images/genxis_logo.png"
                            alt="GenXis Logo"
                            sx={{ width: 40, height: 40, borderRadius: '50%' }}
                        />
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '-0.03em',
                                background: theme.palette.mode === 'dark'
                                    ? `linear-gradient(45deg, #FFFFFF 30%, ${theme.palette.primary.main} 100%)`
                                    : `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            GenXis
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Stack direction="row" spacing={6}>
                            {[
                                { label: 'Home', href: '#home' },
                                { label: 'Work', href: '#products' },
                                { label: 'Contact', href: '#footer' },
                                { label: 'About', href: '#about' }
                            ].map((nav) => (
                                <Button
                                    key={nav.label}
                                    color="inherit"
                                    href={nav.href}
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        opacity: 0.8,
                                        position: 'relative',
                                        color: 'text.primary',
                                        '&:hover': {
                                            opacity: 1,
                                            background: 'transparent',
                                            color: 'primary.main',
                                            textShadow: theme.palette.mode === 'dark'
                                                ? `0 0 10px ${theme.palette.primary.main}80`
                                                : 'none'
                                        }
                                    }}
                                >
                                    {nav.label}
                                </Button>
                            ))}
                        </Stack>

                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                            sx={{
                                border: `1px solid ${theme.palette.divider}`,
                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                                }
                            }}
                        >
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
