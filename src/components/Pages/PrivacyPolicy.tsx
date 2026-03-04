import { Box, Container, Typography, Divider, useTheme, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import CookieIcon from '@mui/icons-material/Cookie';
import UpdateIcon from '@mui/icons-material/Update';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ShareIcon from '@mui/icons-material/Share';

const LAST_UPDATED = 'March 5, 2025';

interface SectionProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    index: number;
}

const Section = ({ icon, title, children, index }: SectionProps) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Box sx={{
                mb: 5,
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s ease',
                '&:hover': { borderColor: 'primary.main' }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                    <Box sx={{
                        p: 1.2,
                        borderRadius: 2,
                        bgcolor: isDark ? 'rgba(0,240,255,0.1)' : 'rgba(0,180,250,0.08)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {title}
                    </Typography>
                </Box>
                <Box sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '0.97rem' }}>
                    {children}
                </Box>
            </Box>
        </motion.div>
    );
};

const PrivacyPolicy = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box sx={{ py: 14, bgcolor: 'background.default', position: 'relative', minHeight: '100vh' }}>
            {/* Background glow */}
            <Box sx={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '70%', height: '40%',
                background: isDark
                    ? `radial-gradient(ellipse, ${theme.palette.primary.main}12 0%, transparent 70%)`
                    : `radial-gradient(ellipse, ${theme.palette.primary.main}08 0%, transparent 70%)`,
                filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
            }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="Legal"
                            size="small"
                            sx={{
                                mb: 2,
                                bgcolor: isDark ? 'rgba(0,240,255,0.1)' : 'rgba(0,180,250,0.08)',
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                border: `1px solid ${theme.palette.primary.main}40`
                            }}
                        />
                        <Typography
                            component="h1"
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: isDark
                                    ? 'linear-gradient(90deg, #FFFFFF 0%, #B0B8C4 100%)'
                                    : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem' }}>
                            At <strong>GenXis Innovations</strong>, your privacy is not an afterthought — it's the foundation of everything we build.
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
                            <Chip icon={<UpdateIcon fontSize="small" />} label={`Last updated: ${LAST_UPDATED}`} variant="outlined" size="small" sx={{ color: 'text.secondary' }} />
                            <Chip icon={<SecurityIcon fontSize="small" />} label="Local-First Architecture" variant="outlined" size="small" sx={{ color: 'primary.main', borderColor: 'primary.main' }} />
                        </Stack>
                    </Box>
                </motion.div>

                <Divider sx={{ mb: 6, opacity: 0.4 }} />

                {/* Sections */}
                <Section index={0} icon={<StorageIcon />} title="1. Information We Collect">
                    <Typography paragraph>
                        GenXis Innovations collects only the minimum information necessary to provide our services. We may collect:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'Contact information you voluntarily provide (name, email) through our contact form.',
                            'Inquiry details submitted via our website (project description, area of interest).',
                            'Basic anonymized analytics data such as page views (if analytics is enabled — no personally identifiable data).',
                            'No account registration is required to use our website.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        <strong>Our Products (GenXBill, FamBudget, GenXLink, etc.)</strong> are built with a{' '}
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Local-First architecture</Box>.
                        All data entered into these applications is stored entirely on your own device and is never transmitted to our servers.
                    </Typography>
                </Section>

                <Section index={1} icon={<VisibilityOffIcon />} title="2. How We Use Your Information">
                    <Typography paragraph>
                        Any information collected through our website is used solely for:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'Responding to your inquiries, project requests, or support questions.',
                            'Sending relevant updates or newsletters only when you have explicitly subscribed.',
                            'Improving our website and services based on aggregated, anonymized usage patterns.',
                            'Fulfilling our legal obligations where required by applicable law.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                    <Typography sx={{ mt: 1, fontStyle: 'italic', color: isDark ? '#aaa' : '#666' }}>
                        We do not use your data for advertising, profiling, or any automated decision-making processes.
                    </Typography>
                </Section>

                <Section index={2} icon={<ShareIcon />} title="3. Data Sharing & Third Parties">
                    <Typography paragraph>
                        <strong>We do not sell, rent, or trade your personal information.</strong> We do not share your data with third parties except in the following limited circumstances:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'Service providers: We use EmailJS to process contact form submissions. Your message and email are processed by their servers solely to deliver your inquiry to us.',
                            'Legal requirements: We may disclose information if required by law or to protect our legal rights.',
                            'Business transfers: If GenXis Innovations is involved in a merger or acquisition, we will notify users before data is transferred.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                </Section>

                <Section index={3} icon={<CookieIcon />} title="4. Cookies & Tracking">
                    <Typography paragraph>
                        Our website uses <strong>minimal cookies</strong>:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'Essential cookies: Used to remember your theme preference (dark/light mode). No personal data is stored.',
                            'We do not use advertising cookies, tracking pixels, or third-party cookie-based analytics.',
                            'No cookie consent banner is required since we do not set non-essential cookies.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                </Section>

                <Section index={4} icon={<SecurityIcon />} title="5. Data Security">
                    <Typography paragraph>
                        We take data security seriously. Measures in place include:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'All data in transit is encrypted using industry-standard TLS/HTTPS protocols.',
                            'Our products encrypt sensitive data at rest on local devices.',
                            'We maintain minimal data retention — contact form data is used only to respond to your inquiry.',
                            'We do not store payment information. We do not currently process payments through our website.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        While we implement strong safeguards, no system is 100% secure. We encourage you to use strong passwords and keep your devices updated.
                    </Typography>
                </Section>

                <Section index={5} icon={<ChildCareIcon />} title="6. Children's Privacy">
                    <Typography>
                        Our website and services are not directed to children under the age of <strong>13</strong>. We do not knowingly collect personal information from children.
                        If you believe we have inadvertently collected data from a child, please contact us immediately at{' '}
                        <Box component="a" href="mailto:genxisinnovation@outlook.com" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            genxisinnovation@outlook.com
                        </Box>
                        {' '}and we will delete it promptly.
                    </Typography>
                </Section>

                <Section index={6} icon={<UpdateIcon />} title="7. Your Rights">
                    <Typography paragraph>
                        Depending on your jurisdiction, you may have the following rights regarding your personal data:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        {[
                            'Right to Access: Request a copy of any personal data we hold about you.',
                            'Right to Rectification: Ask us to correct inaccurate or incomplete data.',
                            'Right to Erasure ("Right to be Forgotten"): Request deletion of your personal data.',
                            'Right to Restriction: Ask us to limit how we use your data.',
                            'Right to Object: Object to certain types of data processing.',
                            'Right to Data Portability: Receive your data in a machine-readable format.',
                        ].map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>{item}</Box>
                        ))}
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        To exercise any of these rights, contact us at{' '}
                        <Box component="a" href="mailto:genxisinnovation@outlook.com" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            genxisinnovation@outlook.com
                        </Box>.
                        We will respond within 30 days.
                    </Typography>
                </Section>

                <Section index={7} icon={<EmailIcon />} title="8. Contact & Policy Updates">
                    <Typography paragraph>
                        If you have any questions about this Privacy Policy or how we handle your data, please reach out:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, mt: 0 }}>
                        <Box component="li" sx={{ mb: 1 }}>
                            <strong>Email:</strong>{' '}
                            <Box component="a" href="mailto:genxisinnovation@outlook.com" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                genxisinnovation@outlook.com
                            </Box>
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <strong>Location:</strong> Kerala, India
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <strong>GitHub:</strong>{' '}
                            <Box component="a" href="https://github.com/lalupj07" target="_blank" rel="noopener noreferrer" sx={{ color: 'secondary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                github.com/lalupj07
                            </Box>
                        </Box>
                    </Box>
                    <Typography sx={{ mt: 2 }}>
                        We may update this Privacy Policy from time to time. When we do, the <strong>"Last Updated"</strong> date at the top will be revised.
                        We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
                    </Typography>
                </Section>

                {/* Bottom note */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                    <Box sx={{
                        mt: 2, p: 4, borderRadius: 4, textAlign: 'center',
                        background: isDark
                            ? `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}10)`
                            : `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}05)`,
                        border: `1px solid ${theme.palette.primary.main}30`,
                    }}>
                        <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1, opacity: 0.8 }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Privacy is in Our DNA
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto' }}>
                            Every product we build at GenXis Innovations is designed with a Local-First philosophy.
                            Your data stays on your device — always. We build tools that empower users, not surveil them.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
