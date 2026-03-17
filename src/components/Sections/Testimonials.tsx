import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import DownloadIcon from '@mui/icons-material/Download';
import StorageIcon from '@mui/icons-material/Storage';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

/* ─── DATA ─── */
const statsData = [
  { icon: <DownloadIcon sx={{ fontSize: 22, color: '#6366f1' }} />, value: '500+', label: 'Downloads', color: '#6366f1' },
  { icon: <StorageIcon sx={{ fontSize: 22, color: '#22d3ee' }} />, value: '100%', label: 'Local Storage', color: '#22d3ee' },
  { icon: <GitHubIcon sx={{ fontSize: 22, color: '#a78bfa' }} />, value: 'Open', label: 'Source on GitHub', color: '#a78bfa' },
  { icon: <LocationOnIcon sx={{ fontSize: 22, color: '#4ade80' }} />, value: '🇮🇳', label: 'Built in Kerala, India', color: '#4ade80' },
];

const testimonials = [
  {
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'Shop Owner',
    city: 'Delhi',
    product: 'GenXBill',
    productColor: '#6366f1',
    quote: 'GenXBill completely changed how I handle GST billing. Earlier I was spending 2 hours a day on invoices — now it takes 10 minutes. The best part? My data stays on my computer, not some server.',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #6366f1, #818cf8)',
  },
  {
    initials: 'PM',
    name: 'Priya Menon',
    role: 'Homemaker',
    city: 'Kochi',
    product: 'FamBudget',
    productColor: '#22d3ee',
    quote: 'I always worried about our family finances but never had a simple tool. FamBudget is clear, beautiful, and I love that my family\'s expense data is private — it never leaves my laptop.',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #22d3ee, #38bdf8)',
  },
  {
    initials: 'AN',
    name: 'Arjun Nair',
    role: 'IT Freelancer',
    city: 'Bangalore',
    product: 'GenXLink',
    productColor: '#a78bfa',
    quote: 'GenXLink is blazing fast and I trust it completely. 12ms latency for remote support, E2E encrypted, and it uses P2P — no relay server touching my client\'s machines. This is what remote desktop should be.',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #a78bfa, #818cf8)',
  },
];

const trustBadges = [
  { icon: <CloudOffIcon sx={{ fontSize: 20, color: '#94a3b8' }} />, label: 'No Cloud', color: '#6366f1' },
  { icon: <GppGoodIcon sx={{ fontSize: 20, color: '#94a3b8' }} />, label: 'GDPR Compliant', color: '#22d3ee' },
  { icon: <LockIcon sx={{ fontSize: 20, color: '#94a3b8' }} />, label: 'End-to-End Encrypted', color: '#4ade80' },
  { icon: <CodeIcon sx={{ fontSize: 20, color: '#94a3b8' }} />, label: 'Open Source', color: '#a78bfa' },
  { icon: <WifiOffIcon sx={{ fontSize: 20, color: '#94a3b8' }} />, label: 'Offline First', color: '#f59e0b' },
];

/* ─── STARS ─── */
const Stars = ({ count }: { count: number }) => (
  <Box sx={{ display: 'flex', gap: 0.3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} sx={{ fontSize: 14, color: '#f59e0b' }} />
    ))}
  </Box>
);

/* ═══════════════════════════════════════════ */
const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        background: 'linear-gradient(180deg, #0a0f1e 0%, #080c1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <Box sx={{
        position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── SECTION 1: STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
            gap: 3,
            mb: { xs: 12, md: 16 },
            p: { xs: 3, md: 4 },
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(99,102,241,0.15)',
            backdropFilter: 'blur(12px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top glow line */}
            <Box sx={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(34,211,238,0.5), transparent)',
            }} />
            {statsData.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Box sx={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', gap: 1,
                  borderRight: { xs: 'none', md: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' },
                  borderBottom: { xs: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', md: 'none' },
                  pb: { xs: i < 2 ? 3 : 0, md: 0 },
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}>
                  <Box sx={{
                    width: 44, height: 44, borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${s.color}14`,
                    border: `1px solid ${s.color}30`,
                    mb: 0.5,
                  }}>
                    {s.icon}
                  </Box>
                  <Typography sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.6rem' },
                    color: '#f1f5f9',
                  }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Inter", sans-serif', fontSize: '0.78rem',
                    color: '#64748b', fontWeight: 500,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {s.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* ── SECTION 2: TESTIMONIALS ── */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography sx={{
              fontFamily: '"Inter", sans-serif', fontSize: '0.78rem', fontWeight: 700,
              color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 2,
            }}>
              Real Users · Real Stories
            </Typography>
            <Typography component="h2" sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800,
              letterSpacing: '-0.025em', color: '#f1f5f9', mb: 2,
            }}>
              Trusted Across{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                India
              </Box>
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter", sans-serif', fontSize: '1rem',
              color: '#64748b', maxWidth: 460, mx: 'auto', lineHeight: 1.7,
            }}>
              From shops in Delhi to homes in Kochi — real people solving real problems locally.
            </Typography>
          </motion.div>
        </Box>

        {/* Cards */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
          gap: 3, mb: { xs: 12, md: 16 },
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Box
                id={`testimonial-card-${i}`}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  height: '100%',
                  display: 'flex', flexDirection: 'column', gap: 3,
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${t.productColor}40`,
                    boxShadow: `0 24px 60px ${t.productColor}12`,
                  },
                }}
              >
                {/* Quote mark accent */}
                <Box sx={{
                  position: 'absolute', top: 16, right: 20,
                  fontFamily: 'Georgia, serif', fontSize: '5rem', lineHeight: 1,
                  color: `${t.productColor}15`, fontWeight: 900, userSelect: 'none',
                }}>
                  "
                </Box>

                {/* Stars + Product badge */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stars count={t.rating} />
                  <Box sx={{
                    px: 1.5, py: 0.5, borderRadius: '20px',
                    background: `${t.productColor}12`,
                    border: `1px solid ${t.productColor}30`,
                  }}>
                    <Typography sx={{
                      fontFamily: '"Inter", sans-serif', fontSize: '0.68rem',
                      fontWeight: 700, color: t.productColor, letterSpacing: '0.04em',
                    }}>
                      {t.product}
                    </Typography>
                  </Box>
                </Box>

                {/* Quote */}
                <Typography sx={{
                  fontFamily: '"Inter", sans-serif', fontSize: '0.92rem',
                  color: '#94a3b8', lineHeight: 1.75, flex: 1, fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </Typography>

                {/* Author */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <Avatar
                    sx={{
                      width: 42, height: 42, background: t.avatarBg,
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700, fontSize: '0.85rem', color: '#fff',
                      border: `2px solid ${t.productColor}40`,
                    }}
                  >
                    {t.initials}
                  </Avatar>
                  <Box>
                    <Typography sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0',
                    }}>
                      {t.name}
                    </Typography>
                    <Typography sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.75rem', color: '#475569',
                    }}>
                      {t.role} · {t.city}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* ── SECTION 3: TRUST BADGES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography sx={{
              fontFamily: '"Inter", sans-serif', fontSize: '0.75rem',
              color: '#334155', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
            }}>
              Our Guarantees
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2,
          }}>
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Box
                  id={`trust-badge-${i}`}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 1.5,
                    px: 2.5, py: 1.2,
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                    '&:hover': {
                      border: `1px solid ${b.color}40`,
                      background: `${b.color}08`,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 24px ${b.color}15`,
                      '& .trust-icon': { color: b.color },
                    },
                  }}
                >
                  <Box className="trust-icon" sx={{ display: 'flex', transition: 'color 0.25s' }}>
                    {b.icon}
                  </Box>
                  <Typography sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 600, fontSize: '0.85rem', color: '#64748b',
                    transition: 'color 0.25s',
                    '.MuiBox-root:hover &': { color: '#c7d2fe' },
                  }}>
                    {b.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Testimonials;
