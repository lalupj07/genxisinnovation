import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Stack, Container, Box,
  IconButton, Drawer, List, ListItem, ListItemText, ListItemButton,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Insights', path: '/insights' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{
      p: 3, height: '100%',
      background: '#0a0f1e',
      borderLeft: '1px solid rgba(99,102,241,0.15)',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src="/images/genxis_logo.png"
            alt="GenXis"
            sx={{ width: 32, height: 32, borderRadius: '8px', objectFit: 'cover' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <Typography sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #f1f5f9, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            GenXis
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#64748b' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ mb: 4 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: '12px',
                py: 1.5,
                background: location.pathname === item.path
                  ? 'rgba(99,102,241,0.12)'
                  : 'transparent',
                border: location.pathname === item.path
                  ? '1px solid rgba(99,102,241,0.25)'
                  : '1px solid transparent',
                transition: 'all 0.25s',
                '&:hover': {
                  background: 'rgba(99,102,241,0.08)',
                  borderColor: 'rgba(99,102,241,0.2)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: location.pathname === item.path ? '#a5b4fc' : '#94a3b8',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Mobile CTA */}
      <Button
        id="navbar-mobile-download-btn"
        fullWidth
        variant="contained"
        startIcon={<DownloadIcon />}
        href="https://github.com/lalupj07/GenXBill/releases/download/v1.0.0/GenXBill_Portable_v1.0.0.zip"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          py: 1.5,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
          textTransform: 'none',
          '&:hover': { boxShadow: '0 6px 30px rgba(99,102,241,0.5)' },
        }}
      >
        Download GenXBill Free
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? 'rgba(10, 15, 30, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(99,102,241,0.15)'
          : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            py: { xs: 1.5, md: 2 },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* ── LOGO ── */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Box
              component="img"
              src="/images/genxis_logo.png"
              alt="GenXis Logo"
              sx={{ width: 36, height: 36, borderRadius: '9px', objectFit: 'cover' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #f1f5f9 40%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              GenXis
            </Typography>
          </Link>

          {/* ── DESKTOP NAV LINKS (center) ── */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {navItems.map((nav) => (
              <Button
                key={nav.label}
                component={Link}
                to={nav.path}
                id={`navbar-link-${nav.label.toLowerCase()}`}
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: location.pathname === nav.path ? '#a5b4fc' : '#94a3b8',
                  px: 1.8,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  '&:hover': {
                    color: '#c7d2fe',
                    background: 'rgba(99,102,241,0.08)',
                  },
                  '&::after': location.pathname === nav.path ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 4,
                    left: '30%',
                    width: '40%',
                    height: '2px',
                    borderRadius: '1px',
                    background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                  } : {},
                }}
              >
                {nav.label}
              </Button>
            ))}
          </Stack>

          {/* ── DESKTOP CTA ── */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button
              id="navbar-download-cta"
              variant="contained"
              startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
              href="https://github.com/lalupj07/GenXBill/releases/download/v1.0.0/GenXBill_Portable_v1.0.0.zip"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: '0.82rem',
                px: 2.5, py: 1,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                color: '#fff',
                boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                textTransform: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(99,102,241,0.55)',
                  background: 'linear-gradient(135deg, #818cf8, #38bdf8)',
                },
              }}
            >
              Download GenXBill Free
            </Button>
          </Box>

          {/* ── MOBILE HAMBURGER ── */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              id="navbar-mobile-menu-btn"
              onClick={handleDrawerToggle}
              sx={{
                color: '#94a3b8',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '10px',
                p: 1,
                '&:hover': { background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', borderColor: 'rgba(99,102,241,0.4)' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300, background: 'transparent' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
