import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import BoltIcon from '@mui/icons-material/Bolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <RocketLaunchIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Future-Ready Technology',
        description: 'Built with the latest frameworks and AI-driven insights to ensure you stay ahead.'
    },
    {
        icon: <SecurityIcon fontSize="large" sx={{ color: '#d500f9' }} />,
        title: 'Privacy & Security Focused',
        description: 'Your data is sacred. We implement top-tier encryption and privacy-first architectures.'
    },
    {
        icon: <TouchAppIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'User-Centric Design',
        description: 'Interfaces that are intuitive, beautiful, and designed for human interaction.'
    },
    {
        icon: <BoltIcon fontSize="large" sx={{ color: '#d500f9' }} />,
        title: 'High Performance',
        description: 'Lightweight, fast, and optimized for smooth experiences across all devices.'
    },
    {
        icon: <PsychologyIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Thoughtfully Engineered',
        description: 'Every feature is crafted with purpose, eliminating clutter and maximizing value.'
    }
];

const Features = () => {
    return (
        <Box id="features" sx={{ py: 12, background: 'rgba(255, 255, 255, 0.02)' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ mb: 8, fontWeight: 700 }}
                    >
                        Why Choose Us
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.3s',
                                        '&:hover': { transform: 'translateY(-10px)' }
                                    }}
                                >
                                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                            {feature.icon}
                                        </Box>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.description}
                                        </Typography>
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

export default Features;
