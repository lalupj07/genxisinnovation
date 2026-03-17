import { useState } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

/* ─── PLANS ─── */
const plans = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    tagline: 'Forever free. No credit card.',
    badge: null,
    color: '#22d3ee',
    popular: false,
    cta: 'Download Free',
    ctaIcon: <DownloadIcon sx={{ fontSize: 18 }} />,
    ctaHref: 'https://github.com/lalupj07/GenXBill/releases/download/v1.0.0/GenXBill_Portable_v1.0.0.zip',
    features: [
      { label: 'Unlimited Invoices & GST Billing', included: true },
      { label: 'Basic Inventory Tracking', included: true },
      { label: '1 Business Profile', included: true },
      { label: '100% Local Storage (No Cloud)', included: true },
      { label: 'PDF Invoice Generation', included: true },
      { label: 'Basic Reports', included: true },
      { label: 'Community Support', included: true },
      { label: 'Multiple Businesses', included: false },
      { label: 'Advanced Analytics', included: false },
      { label: 'HR & Attendance Module', included: false },
      { label: 'Custom Invoice Themes', included: false },
      { label: 'Priority Email Support', included: false },
      { label: 'Auto-Backup', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 99, yearly: 999 },
    tagline: 'For growing businesses.',
    badge: 'Most Popular',
    color: '#6366f1',
    popular: true,
    cta: 'Get Pro',
    ctaIcon: null,
    ctaHref: 'mailto:genxisinnovation@outlook.com?subject=GenXBill Pro',
    features: [
      { label: 'Everything in Free', included: true },
      { label: 'Unlimited Invoices & GST Billing', included: true },
      { label: 'Multiple Business Profiles', included: true },
      { label: 'Advanced Reports & Analytics', included: true },
      { label: 'HR & Attendance Module', included: true },
      { label: 'Custom Invoice Themes (10+)', included: true },
      { label: 'Auto-Backup to Local Drive', included: true },
      { label: 'Priority Email Support (24h)', included: true },
      { label: '100% Local Storage (No Cloud)', included: true },
      { label: 'Future Versions Included', included: true },
      { label: 'White-Label', included: false },
      { label: 'API Access', included: false },
      { label: 'Custom Integrations', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    tagline: 'Custom solutions for your team.',
    badge: null,
    color: '#a78bfa',
    popular: false,
    cta: 'Contact Us',
    ctaIcon: <EmailIcon sx={{ fontSize: 18 }} />,
    ctaHref: 'mailto:genxisinnovation@outlook.com?subject=GenXBill Enterprise',
    features: [
      { label: 'Everything in Pro', included: true },
      { label: 'White-Label & Custom Branding', included: true },
      { label: 'REST API Access', included: true },
      { label: 'Custom Integrations (Tally, ERP)', included: true },
      { label: 'Dedicated Support Engineer', included: true },
      { label: 'SLA Guarantee', included: true },
      { label: 'On-Site Training (Kerala)', included: true },
      { label: 'Multi-Location Support', included: true },
      { label: 'Source Code License', included: true },
      { label: 'Custom Feature Development', included: true },
      { label: 'Unlimited Businesses', included: true },
      { label: 'Priority Updates', included: true },
      { label: 'Invoice via GSTIN', included: true },
    ],
  },
];

/* ─── COMPARISON TABLE ─── */
const comparison = [
  { feature: 'Price', genxbill: '₹0 Free', tally: '₹18,000/yr', quickbooks: '₹6,600/yr' },
  { feature: 'Works Offline', genxbill: true, tally: true, quickbooks: false },
  { feature: '100% Local Storage', genxbill: true, tally: false, quickbooks: false },
  { feature: 'GST Ready', genxbill: true, tally: true, quickbooks: true },
  { feature: 'Open Source', genxbill: true, tally: false, quickbooks: false },
  { feature: 'Free Forever Tier', genxbill: true, tally: false, quickbooks: false },
  { feature: 'No Subscription (Free)', genxbill: true, tally: false, quickbooks: false },
  { feature: 'Windows', genxbill: true, tally: true, quickbooks: true },
  { feature: 'Community Support', genxbill: true, tally: false, quickbooks: false },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'Is GenXBill really completely free?',
    a: 'Yes — the Free tier is 100% free, forever. Unlimited invoices, GST billing, and inventory. No credit card, no subscription, no catch. It\'s open source software you can download right now from GitHub.',
  },
  {
    q: 'Does my billing data go to the cloud?',
    a: 'Never. GenXBill stores all data locally on your device using Hive (a local database). We have zero access to your invoices, customer data, or business information. There is no server — your data is yours.',
  },
  {
    q: 'Which operating system is supported?',
    a: 'GenXBill currently runs on Windows 10 and Windows 11. macOS and Linux versions are planned for future releases. The Free version is a portable .zip — just extract and run, no installation needed.',
  },
  {
    q: 'Can I upgrade from Free to Pro later?',
    a: 'Yes, absolutely. Your existing data in Free transfers seamlessly to Pro. Just purchase a Pro license and apply it — all your invoices, inventory, and customer records stay intact.',
  },
  {
    q: 'Is there a mobile version of GenXBill?',
    a: 'Not currently — GenXBill is built for Windows desktops, where most Indian SMBs do their billing. A Flutter-based mobile companion app is on our roadmap for 2025–26.',
  },
];

/* ─── Sub-components ─── */
const FeatureRow = ({ label, included }: { label: string; included: boolean }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, py: 0.6 }}>
    {included ? (
      <CheckIcon sx={{ fontSize: 15, color: '#4ade80', flexShrink: 0 }} />
    ) : (
      <CloseIcon sx={{ fontSize: 15, color: '#1e293b', flexShrink: 0 }} />
    )}
    <Typography sx={{
      fontFamily: '"Inter", sans-serif', fontSize: '0.825rem',
      color: included ? '#94a3b8' : '#1e293b',
    }}>
      {label}
    </Typography>
  </Box>
);

const CompareCell = ({ val }: { val: string | boolean }) => {
  if (typeof val === 'boolean') {
    return val
      ? <CheckIcon sx={{ fontSize: 18, color: '#4ade80' }} />
      : <CloseIcon sx={{ fontSize: 18, color: '#1e293b' }} />;
  }
  return (
    <Typography sx={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>
      {val}
    </Typography>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      onClick={() => setOpen(!open)}
      sx={{
        p: 3, borderRadius: '14px', cursor: 'pointer',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.07)'}`,
        transition: 'all 0.25s ease',
        '&:hover': { border: '1px solid rgba(99,102,241,0.25)', background: 'rgba(99,102,241,0.04)' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Typography sx={{
          fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#e2e8f0',
        }}>
          {q}
        </Typography>
        {open
          ? <ExpandLessIcon sx={{ fontSize: 20, color: '#6366f1', flexShrink: 0 }} />
          : <ExpandMoreIcon sx={{ fontSize: 20, color: '#475569', flexShrink: 0 }} />}
      </Box>
      {open && (
        <Typography sx={{
          fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: '#64748b',
          lineHeight: 1.75, mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          {a}
        </Typography>
      )}
    </Box>
  );
};

/* ═══════════════════════════════════════════ */
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Box
      id="pricing"
      component="section"
      sx={{ background: '#0a0f1e', minHeight: '100vh', pt: { xs: 4, md: 4 }, pb: { xs: 12, md: 16 } }}
    >
      <Container maxWidth="xl">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography sx={{
              fontFamily: '"Inter",sans-serif', fontSize: '0.78rem', fontWeight: 700,
              color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 2,
            }}>
              GenXBill Pricing
            </Typography>
            <Typography component="h1" sx={{
              fontFamily: '"Space Grotesk",sans-serif',
              fontSize: { xs: '2.2rem', md: '3.2rem' }, fontWeight: 800,
              letterSpacing: '-0.025em', color: '#f1f5f9', mb: 2,
            }}>
              Simple, Transparent{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Pricing
              </Box>
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter",sans-serif', fontSize: '1rem',
              color: '#64748b', maxWidth: 480, mx: 'auto', lineHeight: 1.7,
            }}>
              Start free. Upgrade when you grow. Your data stays local at every tier.
            </Typography>

            {/* Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 5 }}>
              <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: isYearly ? '#475569' : '#e2e8f0', fontWeight: 500 }}>
                Monthly
              </Typography>
              <Box
                onClick={() => setIsYearly(!isYearly)}
                id="pricing-toggle"
                sx={{
                  width: 48, height: 26, borderRadius: '13px',
                  background: isYearly ? 'linear-gradient(135deg,#6366f1,#22d3ee)' : 'rgba(255,255,255,0.1)',
                  cursor: 'pointer', position: 'relative',
                  border: '1px solid rgba(99,102,241,0.3)',
                  transition: 'background 0.3s ease',
                }}
              >
                <Box sx={{
                  position: 'absolute', top: 3,
                  left: isYearly ? 24 : 3,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: isYearly ? '#e2e8f0' : '#475569', fontWeight: 500 }}>
                  Yearly
                </Typography>
                {isYearly && (
                  <Box sx={{
                    px: 1.2, py: 0.3, borderRadius: '20px',
                    background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)',
                  }}>
                    <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#4ade80', fontFamily: '"Inter",sans-serif' }}>
                      2 months FREE
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* ── PLAN CARDS ── */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
          gap: 3, mb: { xs: 12, md: 16 }, alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Box
                id={`pricing-plan-${plan.id}`}
                sx={{
                  p: { xs: 3.5, md: 4 }, borderRadius: '24px',
                  background: plan.popular
                    ? 'linear-gradient(145deg, rgba(99,102,241,0.12) 0%, rgba(34,211,238,0.04) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: plan.popular
                    ? '1px solid rgba(99,102,241,0.4)'
                    : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: plan.popular ? '0 0 50px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.1)' : 'none',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: `1px solid ${plan.color}50`,
                    boxShadow: `0 24px 60px ${plan.color}15`,
                  },
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <Box sx={{ position: 'absolute', top: 18, right: 18 }}>
                    <Chip
                      label={plan.badge}
                      size="small"
                      sx={{
                        fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '0.68rem',
                        background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                        color: '#fff', border: 'none', height: 24,
                        boxShadow: '0 4px 12px rgba(99,102,241,0.4)',
                      }}
                    />
                  </Box>
                )}

                {/* Plan name */}
                <Typography sx={{
                  fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  color: plan.color, mb: 1,
                }}>
                  {plan.name}
                </Typography>
                <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.82rem', color: '#475569', mb: 3 }}>
                  {plan.tagline}
                </Typography>

                {/* Price */}
                <Box sx={{ mb: 4 }}>
                  {plan.price.yearly !== null ? (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                        <Typography sx={{
                          fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800,
                          fontSize: '2.8rem', color: '#f1f5f9', lineHeight: 1,
                        }}>
                          {plan.price.yearly === 0 ? '₹0' : isYearly ? `₹${plan.price.yearly}` : `₹${plan.price.monthly}`}
                        </Typography>
                        {plan.price.yearly > 0 && (
                          <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.85rem', color: '#475569' }}>
                            /{isYearly ? 'year' : 'month'}
                          </Typography>
                        )}
                      </Box>
                      {plan.price.yearly === 0 && (
                        <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.8rem', color: '#334155', mt: 0.5 }}>
                          Always free — no limits
                        </Typography>
                      )}
                      {isYearly && plan.price.yearly > 0 && (
                        <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', color: '#4ade80', mt: 0.5 }}>
                          Billed ₹{plan.price.yearly}/year (save ₹{(plan.price.monthly! * 12) - plan.price.yearly!})
                        </Typography>
                      )}
                    </>
                  ) : (
                    <Typography sx={{
                      fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800,
                      fontSize: '2.2rem', color: '#f1f5f9',
                    }}>
                      Custom
                    </Typography>
                  )}
                </Box>

                {/* CTA */}
                <Button
                  id={`pricing-cta-${plan.id}`}
                  fullWidth
                  startIcon={plan.ctaIcon}
                  href={plan.ctaHref}
                  target={plan.ctaHref.startsWith('mailto') ? undefined : '_blank'}
                  sx={{
                    fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '0.9rem',
                    py: 1.4, borderRadius: '12px', textTransform: 'none', mb: 3,
                    background: plan.popular
                      ? 'linear-gradient(135deg, #6366f1, #22d3ee)'
                      : `${plan.color}15`,
                    color: plan.popular ? '#fff' : plan.color,
                    border: `1px solid ${plan.color}40`,
                    boxShadow: plan.popular ? '0 8px 24px rgba(99,102,241,0.35)' : 'none',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 32px ${plan.color}35`,
                      background: plan.popular
                        ? 'linear-gradient(135deg, #818cf8, #38bdf8)'
                        : `${plan.color}22`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {plan.cta}
                </Button>

                {/* Divider */}
                <Box sx={{ height: '1px', background: 'rgba(255,255,255,0.06)', mb: 3 }} />

                {/* Features */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.2 }}>
                  {plan.features.map((f, fi) => <FeatureRow key={fi} {...f} />)}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* ── COMPARISON TABLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <Typography component="h2" sx={{
              fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800,
              fontSize: { xs: '1.6rem', md: '2rem' }, color: '#f1f5f9',
              textAlign: 'center', mb: 6,
            }}>
              GenXBill vs The Rest
            </Typography>
            <Box sx={{
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              {/* Table header */}
              <Box sx={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
                p: '16px 24px', background: 'rgba(99,102,241,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <Typography sx={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</Typography>
                {[
                  { name: 'GenXBill', color: '#6366f1' },
                  { name: 'Tally', color: '#64748b' },
                  { name: 'QuickBooks', color: '#64748b' },
                ].map((h) => (
                  <Typography key={h.name} sx={{
                    fontFamily: '"Space Grotesk",sans-serif', fontSize: '0.85rem', fontWeight: 700,
                    color: h.color, textAlign: 'center',
                  }}>
                    {h.name}
                  </Typography>
                ))}
              </Box>
              {comparison.map((row, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    p: '13px 24px',
                    borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                    transition: 'background 0.2s',
                    '&:hover': { background: 'rgba(99,102,241,0.04)' },
                  }}
                >
                  <Typography sx={{ fontFamily: '"Inter",sans-serif', fontSize: '0.85rem', color: '#94a3b8' }}>{row.feature}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CompareCell val={row.genxbill} /></Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CompareCell val={row.tally} /></Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CompareCell val={row.quickbooks} /></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ maxWidth: 720, mx: 'auto' }}>
            <Typography component="h2" sx={{
              fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800,
              fontSize: { xs: '1.6rem', md: '2rem' }, color: '#f1f5f9',
              textAlign: 'center', mb: 6,
            }}>
              FAQ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
            </Box>
          </Box>
        </motion.div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{
            mt: 14, p: { xs: 5, md: 8 },
            borderRadius: '28px', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(34,211,238,0.06) 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
            position: 'relative', overflow: 'hidden',
          }}>
            <Box sx={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <Typography sx={{
              fontFamily: '"Space Grotesk",sans-serif', fontWeight: 800,
              fontSize: { xs: '1.6rem', md: '2.2rem' }, color: '#f1f5f9', mb: 2,
            }}>
              Start free. Own your data. Always.
            </Typography>
            <Typography sx={{
              fontFamily: '"Inter",sans-serif', fontSize: '1rem', color: '#64748b',
              maxWidth: 460, mx: 'auto', lineHeight: 1.7, mb: 5,
            }}>
              Download GenXBill in seconds. No account, no cloud, no subscription — just billing software that works.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                id="pricing-bottom-download"
                variant="contained"
                startIcon={<DownloadIcon />}
                href="https://github.com/lalupj07/GenXBill/releases/download/v1.0.0/GenXBill_Portable_v1.0.0.zip"
                target="_blank"
                sx={{
                  fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '1rem',
                  px: 4, py: 1.5, borderRadius: '50px', textTransform: 'none',
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)', color: '#fff',
                  boxShadow: '0 8px 28px rgba(99,102,241,0.4)',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 36px rgba(99,102,241,0.55)' },
                }}
              >
                Download Free — Windows
              </Button>
              <Button
                id="pricing-bottom-contact"
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '0.95rem',
                  px: 3.5, py: 1.5, borderRadius: '50px', textTransform: 'none',
                  borderColor: 'rgba(99,102,241,0.4)', color: '#a5b4fc',
                  '&:hover': { borderColor: '#6366f1', background: 'rgba(99,102,241,0.08)', transform: 'translateY(-2px)' },
                }}
              >
                Enquire about Pro
              </Button>
            </Box>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Pricing;
