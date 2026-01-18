import { Box, Container, Typography, Stack, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box component="footer" id="footer" sx={{ py: 8, bgcolor: 'background.default', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
            {/* Gradient Line Top */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #00F0FF, #bf00ff, transparent)', opacity: 0.5 }} />

            <Container maxWidth="xl">
                <Stack spacing={8}>
                    {/* Top Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Box
                                    component="img"
                                    src="/images/genxis_logo.png"
                                    alt="GenXis Logo"
                                    sx={{ width: 48, height: 48, borderRadius: '50%' }}
                                />
                                <Typography variant="h5" sx={{
                                    fontWeight: 700,
                                    letterSpacing: '-0.02em',
                                    background: 'linear-gradient(45deg, #FFF, #B0B8C4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    GenXis Innovations
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: '300px', mb: 4 }}>
                                Building the future of secure, private, and intelligent digital ecosystems.
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <IconButton
                                    href="https://github.com/lalupj07"
                                    target="_blank"
                                    sx={{
                                        color: '#FFF',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 240, 255, 0.1)',
                                            color: '#00F0FF',
                                            borderColor: '#00F0FF',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    href="mailto:genxisinnovation@outlook.com"
                                    sx={{
                                        color: '#FFF',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'rgba(191, 0, 255, 0.1)',
                                            color: '#bf00ff',
                                            borderColor: '#bf00ff',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <EmailIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                        <Stack spacing={2} sx={{ minWidth: '200px' }}>
                            <Typography variant="subtitle2" sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                                Contact
                            </Typography>
                            <Link href="mailto:genxisinnovation@outlook.com" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: '#00F0FF' } }}>
                                genxisinnovation@outlook.com
                            </Link>
                            <Link href="https://github.com/lalupj07" target="_blank" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: '#bf00ff' } }}>
                                GitHub Repositories
                            </Link>
                            <Link href="https://github.com/lalupj07" target="_blank" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: '#FFF' } }}>
                                GitHub Issues
                            </Link>
                        </Stack>
                    </Box>

                    {/* Bottom Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', gap: 2 }}>
                        <Stack spacing={0.5}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Copyright © 2025 GenXis Innovations. All rights reserved.
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#555' }}>
                                Built with ❤️ by GenXis Innovations
                            </Typography>
                        </Stack>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 1,
                            borderRadius: '50px',
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>🇮🇳</span>
                            <Typography variant="caption" sx={{ color: '#888', fontWeight: 500 }}>
                                Created in India • Crafted by Indians
                            </Typography>
                            <span style={{ fontSize: '1.2rem' }}>🇮🇳</span>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
