import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const products = [
  {
    id: 'genxbill',
    icon: <ReceiptLongIcon sx={{ fontSize: 32 }} />,
    iconColor: '#6366f1',
    name: 'GenXBill',
    tagline: 'Billing & Inventory Suite',
    description: 'Open-source billing, inventory, HR, and reporting for Windows SMBs. 100% offline, zero cloud dependency.',
    badge: 'Free Download',
    badgeColor: '#4ade80',
    features: ['Smart Invoicing', 'Inventory Tracking', 'HR & Attendance', 'PDF Reports'],
    cta: '/products',
    available: true,
  },
  {
    id: 'fambudget',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 32 }} />,
    iconColor: '#22d3ee',
    name: 'FamBudget',
    tagline: 'Family Finance Manager',
    description: 'Privacy-focused desktop finance app with visual budgets, goal tracking, and multi-currency support.',
    badge: 'Free Download',
    badgeColor: '#4ade80',
    features: ['Budget Tracking', 'Donut Charts', 'Goal Manager', '10+ Currencies'],
    cta: '/products',
    available: true,
  },
  {
    id: 'genxlink',
    icon: <DesktopWindowsIcon sx={{ fontSize: 32 }} />,
    iconColor: '#a78bfa',
    name: 'GenXLink',
    tagline: 'P2P Remote Desktop',
    description: 'Rust-powered remote desktop with E2E encryption, 60fps screen share, and advanced NAT traversal — no relay servers.',
    badge: 'Coming Soon',
    badgeColor: '#f59e0b',
    features: ['60fps Screen Share', 'E2E Encrypted', 'NAT Traversal', 'File Transfer'],
    cta: '/products',
    available: false,
  },
  {
    id: 'neuralcore',
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    iconColor: '#f472b6',
    name: 'NeuralCore',
    tagline: 'Edge AI Engine',
    description: 'Run LLMs and AI inference directly on edge devices — no cloud, no latency, fully private on-device AI.',
    badge: 'In Development',
    badgeColor: '#fb923c',
    features: ['On-Device LLM', 'Ultra-Low Latency', 'Energy Efficient', 'No Cloud'],
    cta: '/products',
    available: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

const ProductsGrid = () => {
  return (
    <Box
      id="products-grid"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        background: 'linear-gradient(180deg, #0a0f1e 0%, #080c1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial */}
      <Box sx={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
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
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 2,
            }}>
              Our Products
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#f1f5f9',
                mb: 2,
              }}
            >
              Tools Built for{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Privacy
              </Box>
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1.05rem',
              color: '#64748b',
              maxWidth: 520,
              mx: 'auto',
              lineHeight: 1.7,
            }}>
              Every product is designed offline-first. Your data stays on your device — always.
            </Typography>
          </motion.div>
        </Box>

        {/* 4-card grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <Box
                id={`product-card-${p.id}`}
                sx={{
                  height: '100%',
                  p: 3.5,
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${p.iconColor}50`,
                    boxShadow: `0 24px 60px ${p.iconColor}15, 0 0 0 1px ${p.iconColor}15`,
                    '& .product-learn-more': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                    '& .product-icon-box': {
                      transform: 'scale(1.08)',
                      boxShadow: `0 8px 24px ${p.iconColor}30`,
                    },
                  },
                }}
              >
                {/* Top glow accent */}
                <Box sx={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${p.iconColor}70, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  '.MuiBox-root:hover &': { opacity: 1 },
                }} />

                {/* Icon + Badge */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box
                    className="product-icon-box"
                    sx={{
                      width: 56, height: 56, borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${p.iconColor}15`,
                      border: `1px solid ${p.iconColor}30`,
                      color: p.iconColor,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {p.icon}
                  </Box>

                  <Chip
                    label={p.badge}
                    size="small"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: p.badgeColor,
                      background: `${p.badgeColor}15`,
                      border: `1px solid ${p.badgeColor}35`,
                      height: 24,
                    }}
                  />
                </Box>

                {/* Name + Tagline */}
                <Box>
                  <Typography sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    mb: 0.5,
                  }}>
                    {p.name}
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.78rem',
                    color: p.iconColor,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {p.tagline}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                  flex: 1,
                }}>
                  {p.description}
                </Typography>

                {/* Features */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {p.features.map((f, fi) => (
                    <Box key={fi} sx={{
                      px: 1.3, py: 0.4, borderRadius: '20px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <Typography sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.68rem',
                        color: '#94a3b8',
                        fontWeight: 500,
                      }}>
                        {f}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Learn More link */}
                <Button
                  className="product-learn-more"
                  component={RouterLink}
                  to={p.cta}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: p.iconColor,
                    p: 0,
                    minWidth: 0,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    opacity: 0.7,
                    transform: 'translateX(-4px)',
                    transition: 'all 0.25s ease',
                    '&:hover': { background: 'none', opacity: 1, transform: 'translateX(2px)' },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              id="products-view-all-btn"
              component={RouterLink}
              to="/products"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
                px: 4, py: 1.4,
                borderRadius: '50px',
                borderColor: 'rgba(99,102,241,0.4)',
                color: '#a5b4fc',
                '&:hover': {
                  borderColor: '#6366f1',
                  background: 'rgba(99,102,241,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View All Products
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductsGrid;
