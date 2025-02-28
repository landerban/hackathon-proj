import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';


function App() {
  const [isDark, setIsDark] = useState({
    dark: true,
    animating: false,
  });

  const [isEng, setIsEng] = useState(true);

  // Simulate authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function toggleDark() {
    setIsDark((old) => ({
      ...old,
      animating: true, // Start animation
    }));

    setTimeout(() => {
      setIsDark((old) => ({
        dark: !old.dark, // Toggle dark mode
        animating: false, // Stop animation
      }));
    }, 500); // Match the CSS animation duration
  }

  function toggleLan() {
    setIsEng((old) => !old);
  }

  return (
    <>
      <NavBar 
        toggleLan={toggleLan} 
        toggleDark={toggleDark} 
        isDark={isDark.dark} 
        isAnimating={isDark.animating} 
        isEng={isEng} 
      />

      <div>
        <AppRoutes isDark={isDark.dark} isAuthenticated={isAuthenticated} />
      </div>
      <Footer isDark={isDark.dark} isEng={isEng} /> 
    </>
  );
}

export default App;
