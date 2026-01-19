import { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Paper, useTheme, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';

const contactOptions = [
    { value: 'products', label: 'I\'m interested in your Products' },
    { value: 'services', label: 'I want to hire the Lab (Services)' },
    { value: 'collaboration', label: 'Collaboration / Partnership' },
    { value: 'other', label: 'Other Inquiry' }
];

const Contact = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [interest, setInterest] = useState('products');
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (form.current) {
            emailjs.sendForm(
                'service_dpg9fsl',
                'template_jpaeivs',
                form.current,
                'ijHfOB8yOR2qIqCei'
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    setLoading(false);
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                    setLoading(false);
                });
        }
    };

    return (
        <Box id="contact" sx={{ py: 15, position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: isDark
                    ? `linear-gradient(to top, ${theme.palette.background.default} 0%, rgba(0,0,0,0) 100%)`
                    : `linear-gradient(to top, ${theme.palette.background.default} 0%, rgba(255,255,255,0) 100%)`,
                zIndex: 0
            }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 8 }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                        Contact Us
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1, mb: 4, fontWeight: 800 }}>
                        Let's Build the <br />
                        <Box component="span" sx={{ color: 'primary.main' }}>Impossible.</Box>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem', maxWidth: 600, mx: 'auto' }}>
                        Whether you need deep-tech solutions, secure applications, or just want to discuss the future of local-first software, we're all ears.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'primary.main', color: 'white' }}>
                                <EmailIcon />
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Email Us</Typography>
                                <Typography variant="subtitle1" fontWeight={600}>genxisinnovation@outlook.com</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: 'secondary.main', color: 'white' }}>
                                <LocationOnIcon />
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Location</Typography>
                                <Typography variant="subtitle1" fontWeight={600}>Kerala, India</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Paper elevation={0} sx={{
                    p: { xs: 3, md: 6 },
                    borderRadius: 6,
                    bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'white',
                    border: `1px solid ${theme.palette.divider}`,
                    backdropFilter: 'blur(20px)',
                    textAlign: 'left' // Keep form input labels left aligned for readability
                }}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label="Name" name="name" variant="outlined" required />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label="Email" name="email" type="email" variant="outlined" required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    select
                                    fullWidth
                                    label="I'm interested in..."
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                    variant="outlined"
                                    name="title"
                                >
                                    {contactOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Tell us about your project or question"
                                    name="message"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    disabled={loading}
                                    endIcon={loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                                    sx={{ py: 2, borderRadius: 2, fontSize: '1.1rem', fontWeight: 700 }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;
