import { useState } from 'react';
import { Container, Card, Typography, Box, Button, Chip, Dialog, DialogContent, IconButton, useTheme, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';

const products = [
    {
        title: 'GenXBill',
        desc: 'The Ultimate Open-Source Billing & Inventory Management Suite for Windows.',
        fullDesc: 'GenXBill is a modern, fast, and secure business operations solution designed specifically for Windows. It provides a comprehensive suite for invoicing, inventory tracking, HR management, and financial reporting, all powered by Flutter and Hive for a seamless offline-first experience.',
        features: [
            'Smart Invoicing & PDF Generation',
            'Real-time Inventory Tracking',
            'Advanced HR & Attendance Suite',
            'Business Intelligence Reports',
            'Customer Relationship Management',
            'Offline-First Local Storage'
        ],
        year: '2025',
        image: '/images/genxbill_logo.png',
        screenshots: [
            '/images/genxbill_start.png',
            '/images/genxbill_home.png',
            '/images/genxbill_invoice.png',
            '/images/genxbill_inventory.png',
            '/images/genxbill_hr.png',
            '/images/genxbill_reports.png'
        ],
        tags: ['Billing', 'Inventory', 'Flutter', 'Open Source']
    },
    {
        title: 'FamBudget',
        desc: 'A powerful, privacy-focused desktop application designed for family finance management.',
        fullDesc: 'FamBudget v5.0.0 is a secure, offline-first finance manager built with Flutter for Windows. It features advanced income/expense tracking, visual budgeting with donut charts, and dedicated financial goal management with priority levels and progress tracking, ensuring 100% of your data stays on your device.',
        features: [
            'Income & Expense Tracking (CSV Export)',
            'Visual Budgeting & Donut Charts',
            'Financial Goal Management (Priority Targets)',
            'Multi-Currency & Multilingual Support (10+ Currencies)',
            'Privacy Centric (100% Local Storage)',
            'Modern Material UI with Dark Mode'
        ],
        year: '2025',
        image: '/images/fambudget_logo_new.png',
        screenshots: [
            '/images/fambudget_dashboard_new.png',
            '/images/fambudget_transactions_new.png',
            '/images/fambudget_accounts_new.png',
            '/images/fambudget_goals_new.png',
            '/images/fambudget_reports_new.png',
            '/images/fambudget_settings_new.png'
        ],
        tags: ['Finance', 'Privacy', 'Flutter', 'Desktop']
    },
    {
        title: 'GenXLink',
        desc: 'Cross-platform, lightweight remote desktop optimized for low latency and privacy.',
        fullDesc: 'GenXLink is engineered for performance and security. Written in Rust, it offers an incredibly small footprint while delivering high-frame-rate screen sharing and low-latency control. It navigates complex network environments with ease using advanced NAT traversal, making it the ideal tool for remote support and team collaboration.',
        features: ['Screen Sharing (60fps)', 'Secure P2P Encryption (End-to-End)', 'Advanced NAT Traversal', 'Multi-Platform (Win/Mac/Linux)', 'File Transfer', 'Unattended Access'],
        year: '2025',
        image: '/images/genxlink_logo.png',
        screenshots: [],
        tags: ['Remote Desktop', 'Rust', 'Security']
    },
    {
        title: 'NeuralCore',
        desc: 'Next-generation local AI processing unit designed for edge devices.',
        fullDesc: 'NeuralCore brings the power of Large Language Models directly to edge devices. By optimizing inference for low-power hardware, it enables real-time AI processing without the need for a cloud connection. Perfect for smart home hubs, robotics, and privacy-sensitive applications.',
        features: ['On-Device AI Inference', 'Ultra-Low Latency', 'Privacy Centric (No Cloud)', 'Energy Efficient', 'Customizable Models'],
        year: '2025',
        image: null,
        screenshots: [],
        tags: ['AI', 'Hardware', 'Edge Computing']
    }
];

const Products = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); // Start with first item (GenXBill)

    const handleOpen = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setActiveImageIndex(0);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    const handleNextImage = () => {
        if (!selectedProduct) return;
        setActiveImageIndex((prev) => (prev + 1) % selectedProduct.screenshots.length);
    };

    const handlePrevImage = () => {
        if (!selectedProduct) return;
        setActiveImageIndex((prev) => (prev - 1 + selectedProduct.screenshots.length) % selectedProduct.screenshots.length);
    };

    const nextProduct = () => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <Box id="products" sx={{ py: 20, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: isDark
                    ? `radial-gradient(circle, ${theme.palette.primary.main}15 0%, rgba(0,0,0,0) 70%)`
                    : `radial-gradient(circle, ${theme.palette.primary.main}10 0%, rgba(0,0,0,0) 70%)`,
                filter: 'blur(100px)',
                zIndex: 0
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 12, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.2em' }}>
                        Our Portfolio
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
                        Selected Innovations
                    </Typography>
                </Box>

                {/* 3D Carousel Area */}
                <Box sx={{
                    height: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    perspective: '1000px'
                }}>
                    {/* Navigation Buttons */}
                    <IconButton
                        onClick={prevProduct}
                        sx={{
                            position: 'absolute',
                            left: { xs: 0, md: 40 },
                            zIndex: 10,
                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                        }}
                    >
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={nextProduct}
                        sx={{
                            position: 'absolute',
                            right: { xs: 0, md: 40 },
                            zIndex: 10,
                            bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                        }}
                    >
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>

                    {/* Cards */}
                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: 1000,
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {products.map((product, index) => {
                            // Calculate position relative to active index
                            const offset = (index - activeIndex + products.length) % products.length;
                            // Map offset to -1, 0, 1 range for 3 items centered
                            let position = 0; // 0 = center, -1 = left, 1 = right, 2 = hidden

                            if (offset === 0) position = 0;
                            else if (offset === products.length - 1) position = -1;
                            else if (offset === 1) position = 1;
                            else position = 2; // Hidden

                            const isActive = position === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        x: position === 0 ? 0 : position === -1 ? -320 : 320,
                                        scale: isActive ? 1 : 0.8,
                                        opacity: isActive ? 1 : 0.4,
                                        zIndex: isActive ? 5 : 1,
                                        rotateY: position === 0 ? 0 : position === -1 ? 15 : -15,
                                    }}
                                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        maxWidth: 400,
                                        height: 500,
                                        display: position === 2 ? 'none' : 'block'
                                    }}
                                >
                                    <Card
                                        elevation={0}
                                        onClick={() => isActive && handleOpen(product)}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            p: 4,
                                            cursor: isActive ? 'pointer' : 'default',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: 8,
                                            background: isDark ? 'rgba(30, 35, 45, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                                            backdropFilter: 'blur(20px)',
                                            border: `1px solid ${isActive ? theme.palette.primary.main : theme.palette.divider}`,
                                            boxShadow: isActive ? `0 20px 50px ${theme.palette.primary.main}20` : 'none',
                                            transition: 'border-color 0.3s',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                                {product.image ? (
                                                    <Box component="img" src={product.image} sx={{ width: 64, height: 64, borderRadius: '16px', objectFit: 'cover' }} />
                                                ) : (
                                                    <Box sx={{ width: 64, height: 64, borderRadius: '16px', bgcolor: 'action.hover' }} />
                                                )}
                                                <Chip label={product.year} size="small" variant="outlined" color="primary" />
                                            </Box>
                                            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>{product.title}</Typography>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                                {product.desc}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                                                {product.tags.map(tag => (
                                                    <Chip key={tag} label={tag} size="small" sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }} />
                                                ))}
                                            </Box>
                                        </Box>
                                        <Button
                                            variant={isActive ? "contained" : "outlined"}
                                            fullWidth
                                            sx={{ mt: 3 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpen(product);
                                            }}
                                        >
                                            Explore
                                        </Button>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </Box>
                </Box>
            </Container>

            {/* Product Details Modal - Kept same logic */}
            <Dialog
                open={Boolean(selectedProduct)}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                TransitionComponent={Zoom}
                PaperProps={{
                    sx: {
                        background: isDark ? 'rgba(11, 15, 25, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 6,
                        boxShadow: theme.shadows[24],
                        overflow: 'hidden'
                    }
                }}
            >
                {selectedProduct && (
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 16,
                                top: 16,
                                zIndex: 10,
                                color: 'text.secondary',
                                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                '&:hover': { bgcolor: 'action.hover', color: 'primary.main' }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Box sx={{
                            flex: 1,
                            minHeight: { xs: 300, md: 600 },
                            bgcolor: 'background.default',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRight: { md: `1px solid ${theme.palette.divider}` },
                            borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
                            userSelect: 'none'
                        }}>
                            {selectedProduct.screenshots && selectedProduct.screenshots.length > 0 ? (
                                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Box
                                        component="img"
                                        key={activeImageIndex}
                                        src={selectedProduct.screenshots[activeImageIndex]}
                                        alt={`Screenshot ${activeImageIndex + 1}`}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            padding: 4,
                                            animation: 'fadeIn 0.3s ease-in-out',
                                            '@keyframes fadeIn': {
                                                '0%': { opacity: 0 },
                                                '100%': { opacity: 1 }
                                            }
                                        }}
                                    />
                                    {selectedProduct.screenshots.length > 1 && (
                                        <>
                                            <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: '#fff' }}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                            <IconButton onClick={handleNextImage} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: '#fff' }}>
                                                <ChevronRightIcon />
                                            </IconButton>
                                        </>
                                    )}
                                </Box>
                            ) : (
                                <Box sx={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${theme.palette.primary.main}1A 0%, ${theme.palette.secondary.main}1A 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box component="img" src={selectedProduct.image || ''} sx={{ width: 120, height: 120, borderRadius: 4, opacity: 0.8 }} />
                                </Box>
                            )}
                        </Box>

                        <DialogContent sx={{ flex: 1, p: { xs: 4, md: 6 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Typography variant="h3" sx={{ fontSize: '2.5rem' }}>{selectedProduct.title}</Typography>
                                <Chip label={selectedProduct.year} variant="outlined" color="primary" size="small" />
                            </Box>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4, lineHeight: 1.7 }}>
                                {selectedProduct.fullDesc}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>Key Features</Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 4 }}>
                                {selectedProduct.features.map((feature, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </DialogContent>
                    </Box>
                )}
            </Dialog>
        </Box>
    );
};

export default Products;
