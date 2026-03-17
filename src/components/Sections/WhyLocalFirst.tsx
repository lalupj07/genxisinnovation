import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ShieldIcon from '@mui/icons-material/Shield';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import GppGoodIcon from '@mui/icons-material/GppGood';

const pillars = [
  {
    icon: <ShieldIcon sx={{ fontSize: 36 }} />,
    iconColor: '#6366f1',
    title: 'No Data Leaks',
    description:
      'Your billing data, finance records, and business information never leave your machine. We have zero access to your data — by design, not policy.',
    detail: 'Local SQLite · Hive DB · Rust Encryption',
  },
  {
    icon: <WifiOffIcon sx={{ fontSize: 36 }} />,
    iconColor: '#22d3ee',
    title: 'Works Offline',
    description:
      'Full functionality without an internet connection. No subscription pings, no auth servers, no connectivity required — just open and work.',
    detail: 'Offline-First Architecture · No Sync Required',
  },
  {
    icon: <GppGoodIcon sx={{ fontSize: 36 }} />,
    iconColor: '#4ade80',
    title: 'GDPR Compliant',
    description:
      'Because your data never reaches our servers, compliance is built into the architecture. No data processing agreements or consent banners needed.',
    detail: 'Zero Server Logs · No Analytics · Open Source',
  },
];

const WhyLocalFirst = () => {
  return (
    <Box
      id="why-local-first"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        background: 'linear-gradient(180deg, #080c1a 0%, #0a0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative mesh */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15,
        backgroundImage: 'radial-gradient(rgba(34,211,238,0.4) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 0%, transparent 100%)',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
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
              color: '#22d3ee',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 2,
            }}>
              Why Local-First?
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: { xs: '2rem', md: '2.8rem', lg: '3rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#f1f5f9',
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              Your Data.{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #22d3ee, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Your Device.
              </Box>
              {' '}Always.
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              color: '#64748b',
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.7,
            }}>
              In a world of SaaS subscriptions and cloud breaches, we believe software should work for you — not collect from you.
            </Typography>
          </motion.div>
        </Box>

        {/* 3 columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: `1px solid ${p.iconColor}40`,
                    boxShadow: `0 20px 50px ${p.iconColor}12`,
                  },
                }}
              >
                {/* Gradient accent top */}
                <Box sx={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
                  background: `radial-gradient(ellipse 100% 120% at 50% 0%, ${p.iconColor}10 0%, transparent 100%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <Box sx={{
                  width: 68, height: 68, borderRadius: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${p.iconColor}12`,
                  border: `1px solid ${p.iconColor}30`,
                  color: p.iconColor,
                  mb: 3.5,
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}>
                  {p.icon}
                </Box>

                {/* Title */}
                <Typography sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  mb: 1.5,
                }}>
                  {p.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.92rem',
                  color: '#64748b',
                  lineHeight: 1.75,
                  mb: 3,
                }}>
                  {p.description}
                </Typography>

                {/* Technical detail pill */}
                <Box sx={{
                  display: 'inline-flex',
                  px: 2, py: 0.8,
                  borderRadius: '20px',
                  background: `${p.iconColor}10`,
                  border: `1px solid ${p.iconColor}25`,
                }}>
                  <Typography sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: p.iconColor,
                    letterSpacing: '0.04em',
                  }}>
                    {p.detail}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyLocalFirst;
