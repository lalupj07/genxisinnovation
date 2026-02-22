import { Box, Container, Typography, Stack, Link, IconButton, TextField, Button, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box component="footer" id="footer" sx={{ py: 8, bgcolor: 'background.default', borderTop: `1px solid ${theme.palette.divider}`, position: 'relative' }}>
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
                                    background: isDark ? 'linear-gradient(45deg, #FFF, #B0B8C4)' : `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
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
                                        color: isDark ? '#FFF' : 'text.primary',
                                        border: `1px solid ${theme.palette.divider}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: isDark ? 'rgba(0, 240, 255, 0.1)' : 'rgba(76, 110, 245, 0.1)',
                                            color: 'primary.main',
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    href="mailto:genxisinnovation@outlook.com"
                                    sx={{
                                        color: isDark ? '#FFF' : 'text.primary',
                                        border: `1px solid ${theme.palette.divider}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: isDark ? 'rgba(191, 0, 255, 0.1)' : 'rgba(255, 107, 107, 0.1)',
                                            color: 'secondary.main',
                                            borderColor: 'secondary.main',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <EmailIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                        <Box sx={{ minWidth: '300px' }}>
                            <Typography variant="subtitle2" sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, mb: 2 }}>
                                Subscribe to Newsletter
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                Get the latest updates and insights on our deep-tech ecosystems delivered to your inbox.
                            </Typography>
                            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
                                <TextField
                                    size="small"
                                    placeholder="Email Address"
                                    variant="outlined"
                                    sx={{
                                        input: { color: 'text.primary' },
                                        bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                                        borderRadius: 1,
                                        '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider }
                                    }}
                                />
                                <Button variant="contained" color="primary" sx={{ px: 3 }}>Subscribe</Button>
                            </Box>
                        </Box>

                        <Stack spacing={2} sx={{ minWidth: '200px' }}>
                            <Typography variant="subtitle2" sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                                Contact
                            </Typography>
                            <Link href="mailto:genxisinnovation@outlook.com" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                                genxisinnovation@outlook.com
                            </Link>
                            <Link href="https://github.com/lalupj07" target="_blank" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}>
                                GitHub Repositories
                            </Link>
                            <Link href="https://github.com/lalupj07" target="_blank" underline="hover" color="inherit" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                                GitHub Issues
                            </Link>
                        </Stack>
                    </Box>

                    {/* Bottom Section */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', pt: 4, borderTop: `1px solid ${theme.palette.divider}`, gap: 2 }}>
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
                            bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                            border: `1px solid ${theme.palette.divider}`
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
