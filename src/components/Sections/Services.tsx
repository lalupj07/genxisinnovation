import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, useTheme, Dialog, DialogTitle, DialogContent, IconButton, Zoom, Divider } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <BuildIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Custom Engineering',
        desc: 'From low-level system drivers to high-scale web platforms, we build software that is robust, maintainable, and tailored to your specific needs.',
        tags: ['Rust', 'C++', 'System Design'],
        article: {
            title: 'Precision Engineering for Complex Systems',
            subtitle: 'Building the Foundation of Modern Infrastructure',
            content: `Our custom engineering services go beyond standard development. We specialize in building software that interacts closely with hardware and system resources. 

            By leveraging languages like Rust and C++, we eliminate common memory safety issues while maintaining absolute performance. Whether you need a specialized driver, a high-throughput backend, or a complex system architecture, we deliver solutions that are:
            
            • Thread-safe and Highly Concurrent
            • Optimized for Low Memory Footprint
            • Built with Future Scalability in Mind
            
            We don't just write code; we engineer systems that stand the test of time and scale.`
        }
    },
    {
        icon: <VerifiedUserIcon fontSize="large" sx={{ color: '#d500f9' }} />,
        title: 'Privacy Audits & Architecture',
        desc: 'We analyze your existing systems and redesign them with a "Local-First" approach, ensuring GDPR compliance and user trust.',
        tags: ['Security', 'Encryption', 'Compliance'],
        article: {
            title: 'Privacy by Design & Local-First Architecture',
            subtitle: 'Empowering Users with Data Sovereignty',
            content: `In an era of increasing data breaches, we help businesses transition to a more secure "Local-First" paradigm. Our audit process identifies potential vulnerabilities in data handling and storage.

            We redesign your application's architecture to prioritize user privacy:
            
            • End-to-End Encryption: Ensuring data is only readable by the intended recipient.
            • Local-First Storage: Keeping sensitive data on the user's device, significantly reducing the attack surface.
            • Compliance as a Standard: Streamlining GDPR, CCPA, and HIPAA compliance through architectural integrity.
            
            Build trust with your users by proving that their privacy isn't just a policy—it's built into the code.`
        }
    },
    {
        icon: <SpeedIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
        title: 'Performance Optimization',
        desc: 'Is your Electron app sluggish? We specialize in optimizing web-based desktop apps to run like native code.',
        tags: ['Electron', 'WebAssembly', 'Profiling'],
        article: {
            title: 'Breaking the Speed Barriers in Modern Web Apps',
            subtitle: 'Native Performance on Web-Based Platforms',
            content: `Modern desktop apps built with web technologies often suffer from "Electron Bloat." We specialize in identifying these bottlenecks and eliminating them through advanced optimization techniques.

            Using deep profiling tools and the power of WebAssembly (Wasm), we can offload intensive computations from JavaScript to near-native execution environments. Our approach includes:
            
            • Targeted WebAssembly Integration: Identifying hot paths in your code and rewriting them for speed.
            • Memory Leak Detection & Remediation: Ensuring your app remains fast over long periods of use.
            • Rendering Pipeline Optimization: Achieving a smooth 60FPS UI experience even with complex data visualization.
            
            Don't compromise on the user experience. Let us help you make your app feel as fast as a native application.`
        }
    }
];

const Services = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const handleOpen = (service: typeof services[0]) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

                <Grid container spacing={4} justifyContent="center">
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
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            borderColor: 'primary.main',
                                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                                        <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 700 }}>{service.title}</Typography>
                                        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mb: 3, minHeight: 60 }}>
                                            {service.desc}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4, justifyContent: 'center' }}>
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
                                            sx={{ pl: 0, color: 'primary.main', mx: 'auto' }}
                                            onClick={() => handleOpen(service)}
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

            {/* Service Article Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Zoom}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        background: isDark ? 'rgba(20, 25, 35, 0.95)' : 'white',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 6,
                        boxShadow: 24
                    }
                }}
            >
                {selectedService && (
                    <>
                        <DialogTitle sx={{ m: 0, p: 3, pr: 7, position: 'relative' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                {selectedService.icon}
                                <Typography variant="h5" sx={{ fontWeight: 800 }}>{selectedService.article.title}</Typography>
                            </Box>
                            <Typography variant="subtitle2" color="primary" sx={{ letterSpacing: '0.1em', fontWeight: 600 }}>
                                {selectedService.article.subtitle}
                            </Typography>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 16,
                                    top: 16,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <Divider />
                        <DialogContent sx={{ p: 4 }}>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary',
                                whiteSpace: 'pre-line',
                                lineHeight: 1.8,
                                fontSize: '1.05rem'
                            }}>
                                {selectedService.article.content}
                            </Typography>
                            <Box sx={{ mt: 4, p: 3, bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderRadius: 4, display: 'flex', justifyContent: 'center' }}>
                                <Button variant="outlined" onClick={handleClose}>
                                    Got it
                                </Button>
                            </Box>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default Services;

