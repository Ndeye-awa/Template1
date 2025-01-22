// src/components/HeroSection.jsx
import React, { useState } from "react";
import {
  HeroWrapper,
  Navbar,
  LogoWrapper,
  NavLinkContainer,
  NavLinks,
  Toggler,
  CloseButton,
  HireButton,
  ContentWrapper,
  TextWrapper,
  VideoPlaceholder,
} from "./StyledComponents"; // Assurez-vous que le chemin d'importation est correct

const HeroSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <HeroWrapper>
      <Navbar>
        <LogoWrapper>
          <img src="/images/logo.svg" alt="Logo" />
          <h1>Treact</h1>
        </LogoWrapper>
        <NavLinkContainer>
          <NavLinks open={isMenuOpen}>
            <li>About</li>
            <li>Blog</li>
            <li>Locations</li>
            <li>Pricing</li>
          </NavLinks>
        </NavLinkContainer>
        <HireButton onClick={() => setMenuOpen(false)}>Hire Us</HireButton>
        <Toggler onClick={() => setMenuOpen(!isMenuOpen)}>☰</Toggler>
        <CloseButton open={isMenuOpen} onClick={() => setMenuOpen(false)}>
          ✖
        </CloseButton>
      </Navbar>

      <ContentWrapper>
        <TextWrapper>
          <p>
            <span></span> We have now launched operations in Europe.
          </p>
          <h1>Hire the best</h1>
          <h2>Marketing Team.</h2>
          <button>Read Customer Stories</button>
        </TextWrapper>

        <VideoPlaceholder>
          <h1>Désolé</h1>
          <p>Cette vidéo n'existe pas</p>
        </VideoPlaceholder>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
