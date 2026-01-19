import { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Paper, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data. For now, we simulate a mailto trigger or just visuals.
        // Let's create a mailto link dynamically
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name');
        const subject = `Inquiry regarding ${interest}`;
        const body = formData.get('message');

        window.location.href = `mailto:genxisinnovation@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi, my name is ${name}. \n\n${body}`)}`;
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

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={8}>
                    {/* Left Side: Info */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                            Contact Us
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, mb: 4, fontWeight: 800 }}>
                            Let's Build the <br />
                            <Box component="span" sx={{ color: 'primary.main' }}>Impossible.</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.1rem' }}>
                            Whether you need deep-tech solutions, secure applications, or just want to discuss the future of local-first software, we're all ears.
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', mr: 3 }}>
                                <EmailIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Email Us</Typography>
                                <Typography variant="h6">genxisinnovation@outlook.com</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'secondary.main', color: 'white', mr: 3 }}>
                                <LocationOnIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>Location</Typography>
                                <Typography variant="h6">Kerala, India</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Side: Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper elevation={0} sx={{
                            p: 5,
                            borderRadius: 6,
                            bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'white',
                            border: `1px solid ${theme.palette.divider}`,
                            backdropFilter: 'blur(20px)'
                        }}>
                            <form onSubmit={handleSubmit}>
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
                                            endIcon={<SendIcon />}
                                            sx={{ py: 2, borderRadius: 2, fontSize: '1.1rem', fontWeight: 700 }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
