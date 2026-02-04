import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, useTheme, Dialog, DialogTitle, DialogContent, IconButton, Zoom, Divider, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const posts = [
    {
        title: 'Why We Chose Rust for GenXLink',
        excerpt: 'Memory safety without garbage collection. How switching to Rust reduced our memory footprint by 60%.',
        date: 'Jan 10, 2026',
        category: 'Engineering',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
        content: `Rust was a transformative choice for GenXLink. By moving away from garbage-collected languages, we achieved deterministic performance and eliminated unpredictable latency spikes. 

        The most significant result was a 60% reduction in memory footprint compared to our initial prototype. Rust's compile-time memory safety ensures that our screen-sharing and network protocols run with high reliability without the overhead of a runtime garbage collector. 
        
        This shift allows us to maintain a consistent 60fps experience even on lower-end machine resources, providing a truly native feel for our remote desktop solution.`
    },
    {
        title: 'The Future is Local-First',
        excerpt: 'Cloud apps are convenient, but they own your data. We explore the architecture of true data ownership.',
        date: 'Dec 22, 2025',
        category: 'Philosophy',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
        content: `The concept of 'Local-First' represents a fundamental shift back to user autonomy. In the current cloud-dominated era, users often lack true control over their digital lives. 

        Our approach ensures that your data lives on your hardware first and foremost. The cloud is relegated to a synchronization layer rather than the primary source of truth. 
        
        Key benefits of our architecture:
        • Total Offline Functionality: Work anywhere, anytime.
        • Data Sovereignty: You own the files, not the server provider.
        • Instant Performance: Zero-latency interactions since data is local.
        
        We believe the future of software isn't just in the cloud—it's right on your device.`
    },
    {
        title: 'Optimizing Electron for Low-End Devices',
        excerpt: 'Electron doesn\'t have to be heavy. Techniques we used to make FamBudget fly on 4GB RAM laptops.',
        date: 'Nov 15, 2025',
        category: 'Performance',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
        content: `There is a common industry misconception that Electron-based applications are inherently resource-heavy. Through rigorous optimization for FamBudget, we proved otherwise.

        By implementing advanced memory management and rendering techniques, we made the app perform fluidly on budget hardware. 
        
        Our Optimization Strategy:
        • Lazy-Loading Processes: Only load what's necessary for the current view.
        • WebAssembly (Wasm) Offloading: Moving heavy logic to a high-performance binary format.
        • Lean Renderer Threads: Minimizing DOM operations to keep the UI thread responsive.
        
        Performance isn't a framework limitation—it's an engineering choice.`
    }
];

const Insights = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

    const handleOpen = (post: typeof posts[0]) => {
        setSelectedPost(post);
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

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
                                    onClick={() => handleOpen(post)}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'background.paper',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: isDark ? `0 20px 40px rgba(0,0,0,0.4)` : theme.shadows[8],
                                            borderColor: 'primary.main'
                                        },
                                        border: '1px solid transparent'
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

            {/* Insight Article Modal */}
            <Dialog
                open={Boolean(selectedPost)}
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
                        boxShadow: 24,
                        overflow: 'hidden'
                    }
                }}
            >
                {selectedPost && (
                    <>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={selectedPost.image}
                                alt={selectedPost.title}
                            />
                            <IconButton
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 16,
                                    top: 16,
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <DialogTitle sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                <Chip label={selectedPost.category} size="small" color="primary" />
                                <Typography variant="caption" color="text.secondary">{selectedPost.date}</Typography>
                            </Box>
                            <Typography variant="h4" sx={{ fontWeight: 800, mt: 1 }}>{selectedPost.title}</Typography>
                        </DialogTitle>
                        <Divider />
                        <DialogContent sx={{ p: 4 }}>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary',
                                whiteSpace: 'pre-line',
                                lineHeight: 1.8,
                                fontSize: '1.1rem'
                            }}>
                                {selectedPost.content}
                            </Typography>
                            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" onClick={handleClose} sx={{ px: 4 }}>
                                    Back to Logs
                                </Button>
                            </Box>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default Insights;

