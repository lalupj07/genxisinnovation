import { CssBaseline, Box } from '@mui/material';
import { ColorModeProvider } from './context/ColorModeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Products from './components/Sections/Products';
import SmoothScroll from './components/UI/SmoothScroll';

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <SmoothScroll>
        <Router>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}>
            <Navbar />
            <main>
              <Hero />
              <Products />
              <About />
            </main>
            <Footer />
          </Box>
        </Router>
      </SmoothScroll>
    </ColorModeProvider>
  );
}

export default App;
