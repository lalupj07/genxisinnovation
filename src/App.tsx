import { lazy, Suspense, useEffect } from 'react';
import { CssBaseline, Box, CircularProgress } from '@mui/material';
import { ColorModeProvider } from './context/ColorModeContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Homepage core components
import Hero from './components/Sections/Hero';
import SocialProofBar from './components/Sections/SocialProofBar';

// Lazy loaded page sections / pages
const ProductsGrid = lazy(() => import('./components/Sections/ProductsGrid'));
const WhyLocalFirst = lazy(() => import('./components/Sections/WhyLocalFirst'));
const ServicesStrip = lazy(() => import('./components/Sections/ServicesStrip'));
const Testimonials = lazy(() => import('./components/Sections/Testimonials'));
const TechStack = lazy(() => import('./components/Sections/TechStack'));

const Services = lazy(() => import('./components/Sections/Services'));
const Products = lazy(() => import('./components/Sections/Products'));
const Insights = lazy(() => import('./components/Sections/Insights'));
const About = lazy(() => import('./components/Sections/About'));
const Contact = lazy(() => import('./components/Sections/Contact'));
const PrivacyPolicy = lazy(() => import('./components/Pages/PrivacyPolicy'));

// UI components
import SmoothScroll from './components/UI/SmoothScroll';
import AnimatedPage from './components/UI/AnimatedPage';
import ChatBot from './components/UI/ChatBot';



const PAGE_TITLES: Record<string, string> = {
  '/': 'GenXis Innovations | Privacy-First, Local-First Software Lab — Kerala, India',
  '/products': 'Our Products | GenXBill, FamBudget, GenXLink, NeuralCore — GenXis Innovations',
  '/services': 'Services & Solutions | GenXis Innovations',
  '/insights': 'Insights & Blog | GenXis Innovations',
  '/about': 'About Us | GenXis Innovations',
  '/contact': 'Contact Us | GenXis Innovations',
  '/privacy': 'Privacy Policy | GenXis Innovations',
};

/** Tiny inline spinner for individual lazy sections */
const SectionSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8, bgcolor: '#0a0f1e' }}>
    <CircularProgress size={28} thickness={4} sx={{ color: 'primary.main' }} />
  </Box>
);

/** Homepage — each lazy section has its own Suspense so Hero is never blocked */
const HomePage = () => (
  <Box>
    <Hero />
    <SocialProofBar />
    <Suspense fallback={<SectionSpinner />}><ProductsGrid /></Suspense>
    <Suspense fallback={<SectionSpinner />}><WhyLocalFirst /></Suspense>
    <Suspense fallback={<SectionSpinner />}><ServicesStrip /></Suspense>
    <Suspense fallback={<SectionSpinner />}><Testimonials /></Suspense>
    <Suspense fallback={<SectionSpinner />}><TechStack /></Suspense>
  </Box>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = PAGE_TITLES[location.pathname] ?? 'GenXis Innovations';
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/products"  element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><Products /></AnimatedPage></Suspense>} />
        <Route path="/services"  element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><Services /></AnimatedPage></Suspense>} />
        <Route path="/insights"  element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><Insights /></AnimatedPage></Suspense>} />
        <Route path="/about"     element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><About /></AnimatedPage></Suspense>} />
        <Route path="/contact"   element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><Contact /></AnimatedPage></Suspense>} />
        <Route path="/privacy"   element={<Suspense fallback={<SectionSpinner />}><AnimatedPage><PrivacyPolicy /></AnimatedPage></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <SmoothScroll>
        <Router>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: '#0a0f1e',
              color: '#f1f5f9',
            }}
          >
            <Navbar />
            <Box component="main" sx={{ position: 'relative', width: '100%', pt: { xs: 8, md: 10 } }}>
              <AnimatedRoutes />
            </Box>
            <Footer />
            <ChatBot />
          </Box>
        </Router>
      </SmoothScroll>
    </ColorModeProvider>
  );
}

export default App;
