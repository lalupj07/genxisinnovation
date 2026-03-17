import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';

const stats = [
  {
    icon: <StarIcon sx={{ fontSize: 22, color: '#f59e0b' }} />,
    value: '1.2k+',
    label: 'GitHub Stars',
    iconRight: <GitHubIcon sx={{ fontSize: 14, color: '#64748b', ml: 0.5 }} />,
    color: '#f59e0b',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 22, color: '#6366f1' }} />,
    value: 'Rust & Flutter',
    label: 'Core Stack',
    color: '#6366f1',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 22, color: '#22d3ee' }} />,
    value: 'Kerala, India',
    label: 'Built Here',
    color: '#22d3ee',
  },
  {
    icon: <LockIcon sx={{ fontSize: 22, color: '#4ade80' }} />,
    value: 'Privacy First',
    label: 'Zero Telemetry',
    color: '#4ade80',
  },
];

const SocialProofBar = () => {
  return (
    <Box
      id="social-proof"
      component="section"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(99,102,241,0.15)',
        borderBottom: '1px solid rgba(99,102,241,0.15)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow line top */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(34,211,238,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 6, md: 0 },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ flex: 1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  px: 4,
                  borderRight: {
                    xs: 'none',
                    sm: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  },
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Box sx={{
                  width: 48, height: 48, borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${stat.color}14`,
                  border: `1px solid ${stat.color}30`,
                  mb: 1.5,
                }}>
                  {stat.icon}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    color: '#f1f5f9',
                    lineHeight: 1.2,
                  }}>
                    {stat.value}
                  </Typography>
                  {stat.iconRight}
                </Box>

                <Typography sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.8rem',
                  color: '#64748b',
                  fontWeight: 500,
                  mt: 0.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Subtle glow line bottom */}
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), rgba(99,102,241,0.4), transparent)',
        pointerEvents: 'none',
      }} />
    </Box>
  );
};

export default SocialProofBar;
