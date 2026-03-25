import { useEffect } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ColorModeProvider } from './context/ColorModeContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Homepage sections
import Hero from './components/Sections/Hero';
import SocialProofBar from './components/Sections/SocialProofBar';
import ProductsGrid from './components/Sections/ProductsGrid';
import WhyLocalFirst from './components/Sections/WhyLocalFirst';
import ServicesStrip from './components/Sections/ServicesStrip';
import Testimonials from './components/Sections/Testimonials';

// Other pages / sections
import TechStack from './components/Sections/TechStack';
import Services from './components/Sections/Services';
import Products from './components/Sections/Products';
import Insights from './components/Sections/Insights';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
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

/** Homepage — all redesigned sections */
const HomePage = () => (
  <Box>
    <Hero />
    <SocialProofBar />
    <ProductsGrid />
    <WhyLocalFirst />
    <ServicesStrip />
    <Testimonials />
    <TechStack />
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
        <Route path="/products" element={<AnimatedPage><Products /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        <Route path="/insights" element={<AnimatedPage><Insights /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/privacy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
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
