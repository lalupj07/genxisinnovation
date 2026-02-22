import { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useTheme, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeContext } from '../../context/ColorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Services', path: '/services' },
        { label: 'Insights', path: '/insights' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
    ];

    const drawer = (
        <Box sx={{ p: 2, height: '100%', bgcolor: 'background.default' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Menu</Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{
                                borderRadius: 2, mb: 1,
                                bgcolor: location.pathname === item.path ? (theme.palette.mode === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(76, 110, 245, 0.1)') : 'transparent',
                                color: location.pathname === item.path ? 'primary.main' : 'inherit'
                            }}
                        >
                            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 500 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
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
                    </Link>

                    <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>

                    <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Stack direction="row" spacing={6}>
                            {navItems.map((nav) => (
                                <Button
                                    key={nav.label}
                                    component={Link}
                                    to={nav.path}
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        opacity: location.pathname === nav.path ? 1 : 0.8,
                                        position: 'relative',
                                        color: location.pathname === nav.path ? 'primary.main' : 'text.primary',
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

                        <IconButton color="inherit" sx={{ '&:hover': { color: 'primary.main' } }}>
                            <SearchIcon />
                        </IconButton>

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

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
