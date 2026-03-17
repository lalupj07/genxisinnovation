import { Box, Container, Typography, Stack, Link, IconButton, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShieldIcon from '@mui/icons-material/Shield';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/privacy' },
  { label: 'Open Source', href: 'https://github.com/lalupj07' },
];

const products = [
  { label: 'GenXBill', href: 'https://github.com/lalupj07/GenXBill' },
  { label: 'FamBudget', href: 'https://github.com/lalupj07/FamBudget' },
  { label: 'GenXLink', href: '#' },
  { label: 'NeuralCore', href: '#' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        background: 'linear-gradient(180deg, #0a0f1e 0%, #07091a 100%)',
        borderTop: '1px solid rgba(99,102,241,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow top line */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(34,211,238,0.6), transparent)',
      }} />

      {/* Radial bg */}
      <Box sx={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main footer body */}
        <Box sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '2fr 1fr 1fr 1fr 1.6fr' },
          gap: { xs: 8, lg: 6 },
        }}>
          {/* Brand col */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box
                component="img"
                src="/images/genxis_logo.png"
                alt="GenXis Logo"
                sx={{ width: 44, height: 44, borderRadius: '12px', objectFit: 'cover' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <Typography sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #f1f5f9 40%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                GenXis Innovations
              </Typography>
            </Box>

            <Typography sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.875rem',
              color: '#475569',
              lineHeight: 1.75,
              mb: 3,
              maxWidth: 280,
            }}>
              Privacy-first, local-first software lab from Kerala, India. Building tools that respect your data.
            </Typography>

            {/* Privacy pill */}
            <Box sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 2, py: 0.8,
              borderRadius: '20px',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              mb: 3,
            }}>
              <ShieldIcon sx={{ fontSize: 14, color: '#6366f1' }} />
              <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#818cf8' }}>
                Your data never leaves your device
              </Typography>
            </Box>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 3 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: '#22d3ee' }} />
              <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.8rem', color: '#475569' }}>
                Kerala, India 🇮🇳
              </Typography>
            </Box>

            {/* Social icons */}
            <Stack direction="row" spacing={1.5}>
              <IconButton
                href="https://github.com/lalupj07"
                target="_blank"
                aria-label="GitHub"
                sx={{
                  width: 38, height: 38,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#64748b',
                  transition: 'all 0.25s',
                  '&:hover': {
                    border: '1px solid rgba(99,102,241,0.4)',
                    color: '#a5b4fc',
                    background: 'rgba(99,102,241,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                href="mailto:genxisinnovation@outlook.com"
                aria-label="Email"
                sx={{
                  width: 38, height: 38,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#64748b',
                  transition: 'all 0.25s',
                  '&:hover': {
                    border: '1px solid rgba(34,211,238,0.4)',
                    color: '#22d3ee',
                    background: 'rgba(34,211,238,0.08)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              mb: 3,
            }}>
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  underline="none"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.875rem',
                    color: '#475569',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#a5b4fc' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Products */}
          <Box>
            <Typography sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              mb: 3,
            }}>
              Products
            </Typography>
            <Stack spacing={1.5}>
              {products.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  target={p.href !== '#' ? '_blank' : undefined}
                  underline="none"
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.875rem',
                    color: '#475569',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#22d3ee' },
                  }}
                >
                  {p.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Legal */}
          <Box>
            <Typography sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              mb: 3,
            }}>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              {legalLinks.map((l) => (
                l.to ? (
                  <Link key={l.label} component={RouterLink} to={l.to} underline="none"
                    sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: '#475569', transition: 'color 0.2s', '&:hover': { color: '#a5b4fc' } }}>
                    {l.label}
                  </Link>
                ) : (
                  <Link key={l.label} href={l.href} target="_blank" underline="none"
                    sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: '#475569', transition: 'color 0.2s', '&:hover': { color: '#22d3ee' } }}>
                    {l.label}
                  </Link>
                )
              ))}
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              mb: 1.5,
            }}>
              Stay Updated
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.82rem',
              color: '#475569',
              mb: 2.5,
              lineHeight: 1.65,
            }}>
              Get updates on new releases, privacy tips, and open-source news.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <TextField
                size="small"
                placeholder="your@email.com"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '10px',
                    '& fieldset': { borderColor: 'rgba(99,102,241,0.2)' },
                    '&:hover fieldset': { borderColor: 'rgba(99,102,241,0.4)' },
                    '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                  },
                  input: { '&::placeholder': { color: '#334155', opacity: 1 } },
                }}
              />
              <Button
                id="footer-subscribe-btn"
                variant="contained"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  py: 1.2,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  color: '#fff',
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.25)',
                  '&:hover': { boxShadow: '0 6px 24px rgba(99,102,241,0.4)', transform: 'translateY(-1px)' },
                }}
              >
                Subscribe
              </Button>
            </Box>

            {/* Contact */}
            <Box sx={{ mt: 3 }}>
              <Link
                href="mailto:genxisinnovation@outlook.com"
                underline="none"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.82rem',
                  color: '#475569',
                  display: 'block',
                  mb: 1,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#22d3ee' },
                }}
              >
                📧 genxisinnovation@outlook.com
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box sx={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          py: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
        }}>
          <Typography sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.78rem',
            color: '#1e293b',
          }}>
            © 2025 GenXis Innovations. All rights reserved. Built with ❤️ in Kerala, India.
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
            {[
              { l: 'Privacy Policy', to: '/privacy', isRouter: true },
              { l: 'Terms', to: '/privacy', isRouter: true },
              { l: 'GitHub', href: 'https://github.com/lalupj07', isRouter: false },
              { l: 'Contact', href: 'mailto:genxisinnovation@outlook.com', isRouter: false },
            ].map((item) =>
              item.isRouter ? (
                <Link
                  key={item.l}
                  component={RouterLink}
                  to={item.to!}
                  underline="none"
                  sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', color: '#1e293b', '&:hover': { color: '#6366f1' }, transition: 'color 0.2s' }}
                >
                  {item.l}
                </Link>
              ) : (
                <Link
                  key={item.l}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  underline="none"
                  sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', color: '#1e293b', '&:hover': { color: '#22d3ee' }, transition: 'color 0.2s' }}
                >
                  {item.l}
                </Link>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
