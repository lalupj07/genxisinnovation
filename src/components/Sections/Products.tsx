import { useState } from 'react';
import { Container, Card, Typography, Box, Button, Chip, Dialog, DialogContent, IconButton, useTheme, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const products = [
    {
        title: 'FamBudget',
        desc: 'A powerful, privacy-focused desktop application designed to help families manage their finances effectively. Built with modern web technologies and Electron.',
        fullDesc: 'FamBudget revolutionizes family finance management by prioritizing privacy and ease of use. Unlike cloud-based alternatives, FamBudget stores all your financial data locally on your device, ensuring complete control. With multi-currency support, detailed analytics charts, and a seamless offline-first experience, it helps you track every penny without compromising security.',
        features: ['Complete Privacy (Local Storage)', 'Multi-Currency Support', 'Interactive Analytics Dashboard', 'Offline First Architecture', 'Cross-Platform (Windows/Mac/Linux)', 'Export to CSV/PDF'],
        year: '2025',
        image: '/images/fambudget_logo.png',
        screenshots: [
            '/images/fambudget_dashboard.jpg',
            '/images/fambudget_accounts.jpg',
            '/images/fambudget_income.jpg',
            '/images/fambudget_goals.jpg',
            '/images/fambudget_reports.jpg'
        ],
        tags: ['Finance', 'Privacy', 'Electron']
    },
    {
        title: 'GenXLink',
        desc: 'A cross-platform, lightweight remote desktop application optimized for small binary size, low latency, privacy, and licensing support.',
        fullDesc: 'GenXLink is engineered for performance and security. Written in Rust, it offers an incredibly small footprint while delivering high-frame-rate screen sharing and low-latency control. It navigates complex network environments with ease using advanced NAT traversal, making it the ideal tool for remote support and team collaboration.',
        features: ['Screen Sharing (60fps)', 'Secure P2P Encryption (End-to-End)', 'Advanced NAT Traversal', 'Multi-Platform (Win/Mac/Linux)', 'File Transfer', 'Unattended Access'],
        year: '2025',
        image: '/images/genxlink_logo.png',
        screenshots: [],
        tags: ['Remote Desktop', 'Rust', 'Security']
    },
    {
        title: 'NeuralCore',
        desc: 'Next-generation local AI processing unit designed for edge devices. Bringing intelligence to the source.',
        fullDesc: 'NeuralCore brings the power of Large Language Models directly to edge devices. By optimizing inference for low-power hardware, it enables real-time AI processing without the need for a cloud connection. Perfect for smart home hubs, robotics, and privacy-sensitive applications.',
        features: ['On-Device AI Inference', 'Ultra-Low Latency', 'Privacy Centric (No Cloud)', 'Energy Efficient', 'Customizable Models'],
        year: '2026',
        image: null,
        screenshots: [],
        tags: ['AI', 'Hardware', 'Future']
    }
];

const Products = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

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

    return (
        <Box id="products" sx={{ py: 20, bgcolor: 'background.default', position: 'relative', transition: 'background-color 0.3s ease' }}>
            {/* Background Glow for Section */}
            <Box sx={{
                position: 'absolute',
                top: '10%',
                right: '0',
                width: '500px',
                height: '500px',
                background: isDark
                    ? `radial-gradient(circle, ${theme.palette.primary.main}0d 0%, rgba(0,0,0,0) 70%)`
                    : `radial-gradient(circle, ${theme.palette.primary.main}10 0%, rgba(0,0,0,0) 70%)`,
                filter: 'blur(80px)',
                zIndex: 0
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 10, borderBottom: `1px solid ${theme.palette.divider}`, pb: 2 }}>
                    <Typography variant="h3" sx={{
                        background: isDark
                            ? 'linear-gradient(90deg, #FFFFFF 0%, #B0B8C4 100%)'
                            : `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>
                        Selected Innovations
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {products.map((product, index) => (
                        <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: 280 }}>
                            <Card
                                elevation={0}
                                onClick={() => handleOpen(product)}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    p: 4,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        background: isDark
                                            ? `linear-gradient(135deg, ${theme.palette.primary.main}00 0%, ${theme.palette.primary.main}05 100%)`
                                            : 'transparent',
                                        zIndex: 0,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    },
                                    '&:hover::before': { opacity: 1 }
                                }}
                            >
                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                        {product.image ? (
                                            <Box
                                                component="img"
                                                src={product.image}
                                                alt={product.title}
                                                sx={{ width: 64, height: 64, borderRadius: '16px', objectFit: 'cover', boxShadow: theme.shadows[2] }}
                                            />
                                        ) : (
                                            <Box sx={{ width: 64, height: 64, borderRadius: '16px', bgcolor: 'action.hover' }} />
                                        )}
                                        <Typography variant="caption" sx={{
                                            color: 'primary.main',
                                            border: '1px solid',
                                            borderColor: 'primary.main',
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontWeight: 600
                                        }}>
                                            {product.year}
                                        </Typography>
                                    </Box>

                                    <Typography variant="h3" sx={{ mb: 2, fontSize: '2rem', color: 'text.primary' }}>{product.title}</Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                                        {product.desc}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        {product.features.slice(0, 3).map((feature, i) => (
                                            <Typography key={i} variant="body2" sx={{ color: 'text.secondary', mb: 0.5, display: 'flex', alignItems: 'center' }}>
                                                <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mr: 1.5 }} />
                                                {feature}
                                            </Typography>
                                        ))}
                                        {product.features.length > 3 && (
                                            <Typography variant="caption" sx={{ color: 'primary.main', mt: 1, display: 'block', fontWeight: 600 }}>
                                                + {product.features.length - 3} more features
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 'auto', position: 'relative', zIndex: 1 }}>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                                        {product.tags.map(tag => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: isDark ? `${theme.palette.primary.main}1A` : `${theme.palette.primary.main}10`,
                                                    color: 'primary.main',
                                                    border: 'none',
                                                    fontWeight: 500
                                                }}
                                            />
                                        ))}
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpen(product);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>

            {/* Product Details Modal */}
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

                        {/* Left Side: Screenshot or Gradient Placeholder */}
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
                                    {/* Image */}
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

                                    {/* Navigation Arrows (Only if multiple images) */}
                                    {selectedProduct.screenshots.length > 1 && (
                                        <>
                                            <IconButton
                                                onClick={handlePrevImage}
                                                sx={{
                                                    position: 'absolute',
                                                    left: 16,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    bgcolor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                                                    color: 'text.primary',
                                                    '&:hover': { bgcolor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)' }
                                                }}
                                            >
                                                <ChevronLeftIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleNextImage}
                                                sx={{
                                                    position: 'absolute',
                                                    right: 16,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    bgcolor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                                                    color: 'text.primary',
                                                    '&:hover': { bgcolor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)' }
                                                }}
                                            >
                                                <ChevronRightIcon />
                                            </IconButton>

                                            {/* Dot Indicators */}
                                            <Box sx={{
                                                position: 'absolute',
                                                bottom: 24,
                                                left: 0,
                                                right: 0,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: 1
                                            }}>
                                                {selectedProduct.screenshots.map((_, idx) => (
                                                    <Box
                                                        key={idx}
                                                        onClick={() => setActiveImageIndex(idx)}
                                                        sx={{
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: '50%',
                                                            cursor: 'pointer',
                                                            bgcolor: idx === activeImageIndex ? 'primary.main' : 'text.disabled',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': { transform: 'scale(1.2)' }
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            ) : (
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}1A 0%, ${theme.palette.secondary.main}1A 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Box component="img" src={selectedProduct.image || ''} sx={{ width: 120, height: 120, borderRadius: 4, opacity: 0.8 }} />
                                </Box>
                            )}
                        </Box>

                        {/* Right Side: Content */}
                        <DialogContent sx={{ flex: 1, p: { xs: 4, md: 6 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                {selectedProduct.image && (
                                    <Box component="img" src={selectedProduct.image} sx={{ width: 48, height: 48, borderRadius: '12px' }} />
                                )}
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

                            <Box sx={{ mt: 4, pt: 4, borderTop: `1px solid ${theme.palette.divider}` }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>Built With</Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {selectedProduct.tags.map(tag => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            sx={{
                                                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                                border: `1px solid ${theme.palette.divider}`
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </DialogContent>
                    </Box>
                )}
            </Dialog>
        </Box>
    );
};

export default Products;
