import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import StartupAnimation from './components/StartupAnimation';
import MouseFollower from './components/MouseFollower';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showStartupAnimation, setShowStartupAnimation] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('catShoesAnimationSeen');
    if (hasSeenAnimation) {
      setShowStartupAnimation(false);
      setIsLoaded(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    localStorage.setItem('catShoesAnimationSeen', 'true');
    setShowStartupAnimation(false);
    setTimeout(() => setIsLoaded(true), 500);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {showStartupAnimation && (
            <StartupAnimation onComplete={handleAnimationComplete} />
          )}
        </AnimatePresence>

        {isLoaded && (
          <>
            <MouseFollower />
            <Header />
            <main>
              <Hero />
              <Products />
              <About />
              <Gallery />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;