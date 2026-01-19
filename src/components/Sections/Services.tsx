import { Box, Container, Typography, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <BuildIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Custom Engineering',
        desc: 'From low-level system drivers to high-scale web platforms, we build software that is robust, maintainable, and tailored to your specific needs.',
        tags: ['Rust', 'C++', 'System Design']
    },
    {
        icon: <VerifiedUserIcon fontSize="large" sx={{ color: '#d500f9' }} />,
        title: 'Privacy Audits & Architecture',
        desc: 'We analyze your existing systems and redesign them with a "Local-First" approach, ensuring GDPR compliance and user trust.',
        tags: ['Security', 'Encryption', 'Compliance']
    },
    {
        icon: <SpeedIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Performance Optimization',
        desc: 'Is your Electron app sluggish? We specialize in optimizing web-based desktop apps to run like native code.',
        tags: ['Electron', 'WebAssembly', 'Profiling']
    }
];

const Services = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box id="services" sx={{ py: 15, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                        What We Do
                    </Typography>
                    <Typography variant="h2" sx={{
                        mt: 1,
                        fontWeight: 800,
                        background: isDark
                            ? 'linear-gradient(90deg, #FFFFFF 0%, #B0B8C4 100%)'
                            : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Services & Solutions
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 2,
                                        bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 4,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            borderColor: 'primary.main',
                                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{
                                            mb: 3,
                                            p: 2,
                                            borderRadius: '16px',
                                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'white',
                                            width: 'fit-content',
                                            boxShadow: theme.shadows[2]
                                        }}>
                                            {service.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{service.title}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, minHeight: 60 }}>
                                            {service.desc}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
                                            {service.tags.map(tag => (
                                                <Typography key={tag} variant="caption" sx={{
                                                    px: 1, py: 0.5,
                                                    borderRadius: 1,
                                                    bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                                    color: 'text.secondary'
                                                }}>
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </Box>
                                        <Button
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{ pl: 0, color: 'primary.main' }}
                                        >
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
