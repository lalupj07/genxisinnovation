import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, useTheme } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';

const posts = [
    {
        title: 'Why We Chose Rust for GenXLink',
        excerpt: 'Memory safety without garbage collection. How switching to Rust reduced our memory footprint by 60%.',
        date: 'Jan 10, 2026',
        category: 'Engineering',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'The Future is Local-First',
        excerpt: 'Cloud apps are convenient, but they own your data. We explore the architecture of true data ownership.',
        date: 'Dec 22, 2025',
        category: 'Philosophy',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'Optimizing Electron for Low-End Devices',
        excerpt: 'Electron doesn\'t have to be heavy. Techniques we used to make FamBudget fly on 4GB RAM laptops.',
        date: 'Nov 15, 2025',
        category: 'Performance',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
    }
];

const Insights = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box id="insights" sx={{ py: 15, bgcolor: isDark ? '#0b0f19' : '#f0f4f8' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                        Engineering Logs
                    </Typography>
                    <Typography variant="h2" sx={{
                        mt: 1,
                        fontWeight: 800,
                        color: 'text.primary',
                        mb: 2
                    }}>
                        Latest Insights
                    </Typography>
                    <Typography variant="button" sx={{ cursor: 'pointer', color: 'primary.main', fontWeight: 600, display: 'inline-block' }}>
                        View All Posts →
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {posts.map((post, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'background.paper',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s',
                                        '&:hover': { transform: 'translateY(-8px)', boxShadow: theme.shadows[8] }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={post.image}
                                        alt={post.title}
                                        sx={{ filter: isDark ? 'brightness(0.8)' : 'none' }}
                                    />
                                    <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, width: '100%', mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Chip label={post.category} size="small" color="primary" variant="outlined" />
                                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontSize: '0.8rem' }}>
                                                <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                                {post.date}
                                            </Box>
                                        </Box>
                                        <Typography variant="h6" align="center" sx={{ mb: 1.5, fontWeight: 700, lineHeight: 1.3 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" align="center" color="text.secondary">
                                            {post.excerpt}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4, textAlign: 'center' }}>
                    <Typography variant="button" sx={{ cursor: 'pointer', color: 'primary.main', fontWeight: 600 }}>
                        View All Posts →
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Insights;
