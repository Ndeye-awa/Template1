// src/App.js
import React from "react";
import GlobalStyle from "./styles/globalStyles";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import BlogSection from "./components/BlogSection";
import { ContactSection, FooterSection } from "./components/ContactFooter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <Testimonials />
      <Faqs />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default App;
