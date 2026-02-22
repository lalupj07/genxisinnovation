import { useState } from 'react';
import { Box, Container, Typography, IconButton, useTheme, Card, CardContent, Avatar, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'CTO, TechNova',
        content: 'GenXis Innovations completely revolutionized our local ecosystem. Their focus on security and privacy is unmatched in the industry.',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
        id: 2,
        name: 'David Chen',
        role: 'Founder, DataShield',
        content: 'The speed and reliability of GenXis products gave us the competitive edge we needed. A truly future-proof technology stack.',
        avatar: 'https://i.pravatar.cc/150?u=david',
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Director of IT, Apex Corp',
        content: 'We were skeptical about migrating, but the team\'s expertise and the seamless ecosystem they built proved us wrong. Brilliant execution.',
        avatar: 'https://i.pravatar.cc/150?u=elena',
    },
];

const TrustBadges = () => {
    const theme = useTheme();
    return (
        <Box sx={{ mt: 8, pt: 6, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', textAlign: 'center', mb: 4, letterSpacing: '0.1em' }}>
                Trusted & Certified
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {[
                    { icon: <VerifiedUserIcon fontSize="large" />, label: 'ISO 27001 Certified' },
                    { icon: <SecurityIcon fontSize="large" />, label: 'Enterprise Grade Security' },
                    { icon: <ShieldIcon fontSize="large" />, label: 'Local-First Architecture' },
                ].map((badge, index) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, opacity: 0.8 }}>
                        <Box sx={{ color: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark' }}>
                            {badge.icon}
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{badge.label}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const Testimonials = () => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Box id="testimonials" sx={{ py: 15, bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)' }}>
            <Container maxWidth="lg">
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em', display: 'block', textAlign: 'center' }}>
                    Social Proof
                </Typography>
                <Typography variant="h2" sx={{ mt: 1, mb: 8, fontWeight: 800, textAlign: 'center' }}>
                    Don't just take our <br />
                    <Box component="span" sx={{ color: 'primary.main' }}>Word for it.</Box>
                </Typography>

                <Box sx={{ position: 'relative', px: { xs: 2, md: 10 }, minHeight: 300 }}>
                    {/* Arrow Buttons */}
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: { xs: -10, md: 0 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: { xs: -10, md: 0 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>

                    {/* Carousel Content */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Card sx={{
                                    p: { xs: 2, md: 5 },
                                    textAlign: 'center',
                                    borderRadius: 6,
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#fff',
                                    boxShadow: 'none',
                                    border: `1px solid ${theme.palette.divider}`
                                }}>
                                    <CardContent>
                                        <FormatQuoteIcon sx={{ fontSize: 60, color: 'primary.main', opacity: 0.5, mb: 2 }} />
                                        <Typography variant="h5" sx={{ fontStyle: 'italic', mb: 4, lineHeight: 1.6, fontWeight: 500 }}>
                                            "{currentTestimonial.content}"
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                            <Avatar
                                                src={currentTestimonial.avatar}
                                                alt={currentTestimonial.name}
                                                sx={{ width: 80, height: 80, border: `3px solid ${theme.palette.primary.main}` }}
                                            />
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                    {currentTestimonial.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {currentTestimonial.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </Box>
                </Box>

                <TrustBadges />
            </Container>
        </Box>
    );
};

export default Testimonials;
