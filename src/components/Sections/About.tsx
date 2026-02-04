import { Box, Container, Typography, Card, CardContent, Avatar, Stack, IconButton, useTheme, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const About = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box id="about" sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorations */}
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: isDark
                    ? `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, rgba(0,0,0,0) 70%)`
                    : `radial-gradient(circle, ${theme.palette.secondary.main}10 0%, rgba(0,0,0,0) 70%)`,
                filter: 'blur(80px)',
                zIndex: 0
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>

                    {/* Top: Founder Profile */}
                    <Box sx={{ width: '100%', maxWidth: '800px' }}>
                        <Card sx={{
                            position: 'relative',
                            background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(20px)',
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 8,
                            overflow: 'visible',
                            mt: 8,
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            {/* Profile Image Offset */}
                            <Box sx={{
                                position: 'absolute',
                                top: -60,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                p: 1,
                                bgcolor: isDark ? '#000' : '#fff',
                                borderRadius: '50%',
                                border: `1px solid ${theme.palette.divider}`
                            }}>
                                <Avatar
                                    src="/images/lalu_james.jpg"
                                    sx={{ width: 120, height: 120, border: `2px solid ${theme.palette.primary.main}` }}
                                />
                            </Box>

                            <CardContent sx={{ pt: 10, pb: 4, px: { xs: 4, md: 8 }, textAlign: 'center' }}>
                                <Chip
                                    label="Founder & Lead Developer"
                                    size="small"
                                    sx={{
                                        mb: 2,
                                        bgcolor: isDark ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 240, 255, 0.05)',
                                        color: 'primary.main',
                                        fontWeight: 600
                                    }}
                                />
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Lalu James</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                                    Expert in Rust, Flutter, and build system architectures. Crafting high-performance digital experiences since 2018.
                                </Typography>

                                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                                    <IconButton
                                        href="https://github.com/lalupj07"
                                        target="_blank"
                                        sx={{
                                            border: `1px solid ${theme.palette.divider}`,
                                            '&:hover': { bgcolor: 'primary.main', color: '#fff', borderColor: 'primary.main' }
                                        }}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton
                                        href="https://linkedin.com"
                                        target="_blank"
                                        sx={{
                                            border: `1px solid ${theme.palette.divider}`,
                                            '&:hover': { bgcolor: '#0077b5', color: '#fff', borderColor: '#0077b5' }
                                        }}
                                    >
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton
                                        href="mailto:genxisinnovation@outlook.com"
                                        sx={{
                                            border: `1px solid ${theme.palette.divider}`,
                                            '&:hover': { bgcolor: 'secondary.main', color: '#fff', borderColor: 'secondary.main' }
                                        }}
                                    >
                                        <EmailIcon />
                                    </IconButton>
                                </Stack>

                                <Box sx={{
                                    p: 2,
                                    bgcolor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)',
                                    borderRadius: 4,
                                    border: `1px solid ${theme.palette.divider}`
                                }}>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>Core Technologies</Typography>
                                    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
                                        {['Rust', 'Flutter', 'Dart', 'React', 'TypeScript', 'Electron'].map(tech => (
                                            <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ borderRadius: 1 }} />
                                        ))}
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Bottom: Company Info */}
                    <Box sx={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                                Who We Are
                            </Typography>
                            <Typography variant="h2" sx={{
                                mt: 1,
                                mb: 3,
                                fontWeight: 800,
                                background: isDark
                                    ? 'linear-gradient(90deg, #FFFFFF 0%, #B0B8C4 100%)'
                                    : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Crafting India's <br />
                                <Box component="span" sx={{ color: 'primary.main', WebkitTextFillColor: 'initial' }}>Digital Future</Box>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.8, mx: 'auto', maxWidth: '800px' }}>
                                GenXis Innovations is a forward-thinking software lab based in India, dedicated to building secure, privacy-first, and high-performance digital solutions. We believe that technology should empower users without compromising their data.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center' }}>
                            <Box sx={{ flex: 1, p: 4, borderRadius: 4, bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)', border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
                                <Box sx={{ p: 1.5, width: 'fit-content', borderRadius: 2, bgcolor: isDark ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 240, 255, 0.05)', color: 'primary.main', mb: 2, mx: 'auto' }}>
                                    <SecurityIcon />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Privacy First</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our products, like FamBudget and GenXLink, are built with a "Local First" architecture to ensure your data stays yours.</Typography>
                            </Box>

                            <Box sx={{ flex: 1, p: 4, borderRadius: 4, bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)', border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
                                <Box sx={{ p: 1.5, width: 'fit-content', borderRadius: 2, bgcolor: isDark ? 'rgba(157, 0, 255, 0.1)' : 'rgba(157, 0, 255, 0.05)', color: 'secondary.main', mb: 2, mx: 'auto' }}>
                                    <CodeIcon />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Performance Engineered</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>We utilize modern, low-level languages like Rust and optimized frameworks to deliver blazing fast user experiences.</Typography>
                            </Box>

                            <Box sx={{ flex: 1, p: 4, borderRadius: 4, bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)', border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
                                <Box sx={{ p: 1.5, width: 'fit-content', borderRadius: 2, bgcolor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0,0,0, 0.05)', color: 'text.primary', mb: 2, mx: 'auto' }}>
                                    <AutoGraphIcon />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Innovation Driven</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>From specialized hardware like NeuralCore to everyday tools, we push the boundaries of what's possible on the edge.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
