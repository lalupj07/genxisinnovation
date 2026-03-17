import { Box, Typography, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import ExploreIcon from '@mui/icons-material/Explore';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';

const trustBadges = [
  { icon: <LockIcon sx={{ fontSize: 14 }} />, label: 'Open Source' },
  { icon: <StorageIcon sx={{ fontSize: 14 }} />, label: '100% Local Storage' },
  { icon: <CloudOffIcon sx={{ fontSize: 14 }} />, label: 'No Cloud' },
  { icon: <VerifiedUserIcon sx={{ fontSize: 14 }} />, label: 'GDPR Ready' },
];

const genxbillRows = [
  { icon: <ReceiptLongIcon sx={{ fontSize: 15, color: '#6366f1' }} />, label: 'Smart Invoice #INV-0042', value: '₹12,450', badge: 'Paid', badgeColor: '#22d3ee' },
  { icon: <InventoryIcon sx={{ fontSize: 15, color: '#22d3ee' }} />, label: 'Stock: Premium Widgets', value: '248 units', badge: 'In Stock', badgeColor: '#4ade80' },
  { icon: <GroupIcon sx={{ fontSize: 15, color: '#a78bfa' }} />, label: 'Staff: Priya Menon', value: 'Attendance ✓', badge: 'Active', badgeColor: '#6366f1' },
  { icon: <AssessmentIcon sx={{ fontSize: 15, color: '#f59e0b' }} />, label: 'Monthly Profit Report', value: '₹1,24,800', badge: 'Q1 2025', badgeColor: '#f59e0b' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1530 50%, #0a0f1e 100%)',
        pt: { xs: 14, md: 10 },
        pb: { xs: 10, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background mesh / orbs */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 50% 50% at 10% 80%, rgba(34,211,238,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle dot-grid */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.25,
        backgroundImage: 'radial-gradient(rgba(99,102,241,0.4) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 8, md: 4 },
        }}>
          {/* ── LEFT CONTENT ── */}
          <Box sx={{ flex: 1, maxWidth: { md: '58%' } }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">

              {/* Label pill */}
              <motion.div variants={itemVariants}>
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  px: 2.5, py: 0.8,
                  border: '1px solid rgba(99,102,241,0.35)',
                  borderRadius: '50px',
                  background: 'rgba(99,102,241,0.08)',
                  backdropFilter: 'blur(8px)',
                  mb: 3,
                }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22d3ee', animation: 'pulse-glow 2s infinite' }} />
                  <Typography sx={{ fontSize: '0.78rem', fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#a5b4fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Privacy-First · Local-First · Made in Kerala
                  </Typography>
                </Box>
              </motion.div>

              {/* H1 */}
              <motion.div variants={itemVariants}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem', lg: '4.8rem' },
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    mb: 3,
                    color: '#f1f5f9',
                  }}
                >
                  Software That{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Respects
                  </Box>{' '}
                  Your Privacy.
                </Typography>
              </motion.div>

              {/* Sub-heading */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: '#94a3b8',
                    maxWidth: 520,
                    lineHeight: 1.75,
                    mb: 5,
                  }}
                >
                  Local-first tools you can trust — your data never touches a cloud server. Built in Rust &amp; Flutter for Indian SMBs and privacy-conscious professionals.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
                  <Button
                    id="hero-download-btn"
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href="https://github.com/lalupj07/GenXBill/releases/download/v1.0.0/GenXBill_Portable_v1.0.0.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      py: 1.6, px: 4,
                      fontSize: '1rem',
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                      color: '#fff',
                      boxShadow: '0 4px 24px rgba(99,102,241,0.45)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 32px rgba(99,102,241,0.65)',
                        background: 'linear-gradient(135deg, #818cf8, #38bdf8)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Free
                  </Button>

                  <Button
                    id="hero-explore-btn"
                    variant="outlined"
                    size="large"
                    startIcon={<ExploreIcon />}
                    component={RouterLink}
                    to="/products"
                    sx={{
                      py: 1.6, px: 4,
                      fontSize: '1rem',
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      borderRadius: '50px',
                      borderColor: 'rgba(99,102,241,0.5)',
                      color: '#a5b4fc',
                      backdropFilter: 'blur(8px)',
                      background: 'rgba(99,102,241,0.07)',
                      '&:hover': {
                        borderColor: '#6366f1',
                        background: 'rgba(99,102,241,0.14)',
                        transform: 'translateY(-2px)',
                        color: '#c7d2fe',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Explore Products
                  </Button>
                </Box>
              </motion.div>

              {/* Trust Badge Bar */}
              <motion.div variants={itemVariants}>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  alignItems: 'center',
                }}>
                  {trustBadges.map((badge, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                        px: 1.8,
                        py: 0.7,
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(6px)',
                        color: '#94a3b8',
                        fontSize: '0.78rem',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                        transition: 'all 0.25s',
                        '&:hover': {
                          borderColor: 'rgba(99,102,241,0.4)',
                          color: '#c7d2fe',
                        },
                      }}
                    >
                      {badge.icon}
                      {badge.label}
                    </Box>
                  ))}
                </Box>
              </motion.div>

            </motion.div>
          </Box>

          {/* ── RIGHT: GenXBill App Window Mockup ── */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
              style={{ width: '100%', maxWidth: 480 }}
            >
              {/* Window frame outer glow */}
              <Box sx={{
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(34,211,238,0.15) 100%)',
                p: '1px',
                boxShadow: '0 30px 80px rgba(99,102,241,0.25), 0 0 0 1px rgba(99,102,241,0.1)',
                animation: 'float 4s ease-in-out infinite',
              }}>
                {/* Window */}
                <Box sx={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  background: '#0d1427',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}>
                  {/* Title bar */}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2,
                    py: 1.5,
                    background: 'rgba(255,255,255,0.03)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <Box sx={{ display: 'flex', gap: 0.8 }}>
                      {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                        <Box key={i} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
                      ))}
                    </Box>
                    <Box sx={{
                      flex: 1, textAlign: 'center',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,
                    }}>
                      <Box component="img" src="/images/genxbill_logo.png" alt="GenXBill"
                        sx={{ width: 16, height: 16, borderRadius: '4px', objectFit: 'cover' }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <Typography sx={{ fontSize: '0.72rem', color: '#64748b', fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        GenXBill v1.0 — Billing &amp; Inventory
                      </Typography>
                    </Box>
                    {/* offline pill */}
                    <Box sx={{
                      display: 'flex', alignItems: 'center', gap: 0.5,
                      px: 1, py: 0.3, borderRadius: '20px',
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.2)',
                    }}>
                      <CloudOffIcon sx={{ fontSize: 9, color: '#22d3ee' }} />
                      <Typography sx={{ fontSize: '0.6rem', color: '#22d3ee', fontWeight: 600, fontFamily: '"Inter",sans-serif' }}>OFFLINE</Typography>
                    </Box>
                  </Box>

                  {/* Sidebar + Content */}
                  <Box sx={{ display: 'flex', minHeight: 340 }}>
                    {/* Sidebar */}
                    <Box sx={{
                      width: 52, background: 'rgba(255,255,255,0.02)',
                      borderRight: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      py: 2, gap: 2,
                    }}>
                      {[ReceiptLongIcon, InventoryIcon, GroupIcon, AssessmentIcon].map((Icon, i) => (
                        <Box key={i} sx={{
                          width: 32, height: 32, borderRadius: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: i === 0 ? 'rgba(99,102,241,0.2)' : 'transparent',
                          border: i === 0 ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                          transition: 'all 0.2s',
                          cursor: 'pointer',
                          '&:hover': { background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.2)' },
                        }}>
                          <Icon sx={{ fontSize: 15, color: i === 0 ? '#6366f1' : '#475569' }} />
                        </Box>
                      ))}
                    </Box>

                    {/* Main area */}
                    <Box sx={{ flex: 1, p: 2.5, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {/* Header row */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0' }}>
                          Dashboard
                        </Typography>
                        <Box sx={{
                          px: 1.5, py: 0.4, borderRadius: '20px',
                          background: 'rgba(99,102,241,0.15)',
                          border: '1px solid rgba(99,102,241,0.25)',
                        }}>
                          <Typography sx={{ fontSize: '0.6rem', color: '#818cf8', fontFamily: '"Inter",sans-serif', fontWeight: 600 }}>
                            🔒 100% LOCAL
                          </Typography>
                        </Box>
                      </Box>

                      {/* Stat pills */}
                      <Box sx={{ display: 'flex', gap: 1.5 }}>
                        {[
                          { label: 'Revenue', val: '₹3.2L', color: '#6366f1' },
                          { label: 'Invoices', val: '142', color: '#22d3ee' },
                          { label: 'Staff', val: '8', color: '#a78bfa' },
                        ].map((s, i) => (
                          <Box key={i} sx={{
                            flex: 1, p: 1.5, borderRadius: '10px',
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${s.color}25`,
                            textAlign: 'center',
                          }}>
                            <Typography sx={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '0.9rem', color: s.color }}>
                              {s.val}
                            </Typography>
                            <Typography sx={{ fontSize: '0.58rem', color: '#475569', fontFamily: '"Inter",sans-serif' }}>
                              {s.label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Data rows */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {genxbillRows.map((row, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                          >
                            <Box sx={{
                              display: 'flex', alignItems: 'center', gap: 1.5,
                              px: 1.5, py: 1, borderRadius: '8px',
                              background: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.05)',
                              transition: 'all 0.2s',
                              '&:hover': { background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.2)' },
                            }}>
                              {row.icon}
                              <Typography sx={{ flex: 1, fontSize: '0.65rem', color: '#94a3b8', fontFamily: '"Inter",sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {row.label}
                              </Typography>
                              <Typography sx={{ fontSize: '0.65rem', color: '#e2e8f0', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600 }}>
                                {row.value}
                              </Typography>
                              <Box sx={{
                                px: 0.8, py: 0.2, borderRadius: '20px',
                                background: `${row.badgeColor}18`,
                                border: `1px solid ${row.badgeColor}40`,
                              }}>
                                <Typography sx={{ fontSize: '0.58rem', color: row.badgeColor, fontWeight: 600, fontFamily: '"Inter",sans-serif', whiteSpace: 'nowrap' }}>
                                  {row.badge}
                                </Typography>
                              </Box>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Status bar */}
                  <Box sx={{
                    px: 3, py: 1,
                    background: 'rgba(255,255,255,0.02)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <Typography sx={{ fontSize: '0.6rem', color: '#334155', fontFamily: '"Inter",sans-serif' }}>
                      All data stored locally · Hive DB
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#4ade80' }} />
                      <Typography sx={{ fontSize: '0.6rem', color: '#4ade80', fontFamily: '"Inter",sans-serif', fontWeight: 600 }}>
                        Offline Ready
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
