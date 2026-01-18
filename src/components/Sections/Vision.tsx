import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <Box
            id="vision"
            sx={{
                py: 16,
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(213, 0, 249, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                }}
            />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 300, fontStyle: 'italic', lineHeight: 1.4 }}>
                        “Our vision is to create a connected digital ecosystem that empowers everyday life.”
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Vision;
