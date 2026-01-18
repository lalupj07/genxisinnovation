import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box
            id="home"
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                pt: 10,
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease'
            }}
        >
            {/* Ambient Background Glows */}
            <Box sx={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: isDark
                    ? `radial-gradient(circle, ${theme.palette.primary.main}26 0%, rgba(0,0,0,0) 70%)`
                    : `radial-gradient(circle, ${theme.palette.primary.main}15 0%, rgba(0,0,0,0) 70%)`,
                filter: 'blur(60px)',
                zIndex: 0,
                transition: 'all 0.5s ease'
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '700px',
                height: '700px',
                background: isDark
                    ? `radial-gradient(circle, ${theme.palette.secondary.main}26 0%, rgba(0,0,0,0) 70%)`
                    : `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, rgba(0,0,0,0) 70%)`,
                filter: 'blur(60px)',
                zIndex: 0,
                transition: 'all 0.5s ease'
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '4rem', md: '10rem' },
                            lineHeight: 0.9,
                            letterSpacing: '-0.05em',
                            mb: 4,
                            background: isDark
                                ? `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`
                                : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: isDark
                                ? `drop-shadow(0 0 20px ${theme.palette.primary.main}4d)`
                                : 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Pure.<br />
                        Digital.<br />
                        Future.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '500px',
                            mb: 6,
                            color: 'text.secondary',
                            fontSize: '1.2rem'
                        }}
                    >
                        We build ecosystems that define the next generation of connectivity. Simple, powerful, and seamless.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href="#products"
                    >
                        Explore Ecosystem
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;
