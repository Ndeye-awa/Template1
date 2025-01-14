// src/App.js
import React from 'react';
import GlobalStyle from './styles/globalStyles';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      {/* Ajoute d'autres composants comme Footer, MainContent, etc. */}
    </>
  );
};

export default App;
