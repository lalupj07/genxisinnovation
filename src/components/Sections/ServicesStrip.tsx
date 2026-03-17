import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <BuildIcon sx={{ fontSize: 28 }} />,
    iconColor: '#6366f1',
    title: 'Custom Engineering',
    description: 'Bespoke desktop and cross-platform software built with Rust, Flutter, and React — engineered to be fast, secure, and locally-operated.',
    tags: ['Rust', 'Flutter', 'Electron', 'TypeScript'],
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    iconColor: '#22d3ee',
    title: 'Privacy Audits',
    description: 'We audit your existing software stack for data leaks, telemetry, and unnecessary cloud dependencies — then help you fix them.',
    tags: ['Data Audit', 'GDPR Review', 'Local-First Migration'],
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 28 }} />,
    iconColor: '#a78bfa',
    title: 'Performance Optimization',
    description: 'Profile and optimize your Rust, Dart, or TypeScript applications for speed, memory, and startup time — targeting sub-50ms cold starts.',
    tags: ['Profiling', 'Memory', 'Startup Time'],
  },
];

const ServicesStrip = () => {
  return (
    <Box
      id="services-strip"
      component="section"
      sx={{
        py: { xs: 12, md: 14 },
        background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1225 50%, #0a0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pulsing glow */}
      <Box sx={{
        position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          mb: { xs: 8, md: 10 },
          gap: 3,
        }}>
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#6366f1',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                mb: 2,
              }}>
                Services
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#f1f5f9',
                  lineHeight: 1.15,
                }}
              >
                We Build.{' '}
                <Box component="span" sx={{
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  We Audit.
                </Box>
                {' '}We Optimize.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              id="services-contact-btn"
              component={RouterLink}
              to="/contact"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
                px: 3.5, py: 1.3,
                borderRadius: '50px',
                borderColor: 'rgba(99,102,241,0.4)',
                color: '#a5b4fc',
                whiteSpace: 'nowrap',
                '&:hover': {
                  borderColor: '#6366f1',
                  background: 'rgba(99,102,241,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get a Quote
            </Button>
          </motion.div>
        </Box>

        {/* 3-column strip */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, md: 4 },
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: `1px solid ${s.iconColor}40`,
                    boxShadow: `0 20px 50px ${s.iconColor}12`,
                  },
                }}
              >
                {/* Number label */}
                <Typography sx={{
                  position: 'absolute', top: 20, right: 24,
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  0{i + 1}
                </Typography>

                {/* Icon */}
                <Box sx={{
                  width: 56, height: 56, borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${s.iconColor}15`,
                  border: `1px solid ${s.iconColor}30`,
                  color: s.iconColor,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}>
                  {s.icon}
                </Box>

                <Typography sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                }}>
                  {s.title}
                </Typography>

                <Typography sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {s.description}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {s.tags.map((tag, ti) => (
                    <Box key={ti} sx={{
                      px: 1.3, py: 0.4, borderRadius: '20px',
                      background: `${s.iconColor}10`,
                      border: `1px solid ${s.iconColor}25`,
                    }}>
                      <Typography sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.68rem',
                        color: s.iconColor,
                        fontWeight: 600,
                        letterSpacing: '0.03em',
                      }}>
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesStrip;
