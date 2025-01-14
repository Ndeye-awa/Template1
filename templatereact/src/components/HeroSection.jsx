import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url("/images/heroBackground.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex: 1; /* Permet au conteneur de prendre l'espace disponible */
  justify-content: center; /* Centrer les liens horizontalement */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  transition: all 0.3s ease;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */
  height: 100%; /* Assurez-vous que le conteneur a une hauteur pour le centrage vertical */

  li {
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
    color: white; /* Couleur des liens en mode desktop */
    position: relative; /* Pour le positionnement de ::after */

    &:hover {
      color: white; /* Couleur de texte au survol */

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px; /* Réduire l'espace entre le texte et la barre */
        height: 2px; /* Hauteur de la barre */
        background-color: white; /* Couleur de la barre */
      }
    }

    &.active {
      color: rgb(100, 21, 255); /* Couleur active */

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 16px; /* Réduire l'espace entre le texte et la barre */
        height: 2px; /* Hauteur de la barre */
        background-color: rgb(100, 21, 255); /* Couleur de la barre active */
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Alignement vertical */
    gap: 1rem;
    color: black; /* Couleur du texte en mode responsive */
    background: white; /* Fond blanc */
    padding: 2rem; /* Augmenter le padding */
    border-radius: 7px;
    position: absolute;
    top: 0; /* Positionné pour couvrir le haut de l'écran */
    left: 4%; /* Marges à gauche */
    right: 4%; /* Marges à droite */
    height: 250%; /* Augmenter la hauteur du menu */
    display: ${(props) => (props.open ? "flex" : "none")};
    align-items: center; /* Centrer horizontalement */
    justify-content: center; /* Centrer verticalement */
    z-index: 10; /* S'assurer qu'il est au-dessus d'autres éléments */
    animation: ${slideIn} 0.3s ease; /* Animation d'ouverture */

    li {
      color: black; /* Couleur des liens en mode responsive */
      line-height: 2; /* Ajouter un line-height pour les liens en mode responsive */

      &:hover {
        color: rgb(100, 21, 255); /* Couleur au survol pour le menu */

        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px; /* Réduire l'espace entre le texte et la barre */
          height: 2px; /* Hauteur de la barre */
          background-color: rgb(
            100,
            21,
            255
          ); /* Couleur de la barre au survol */
        }
      }

      &.active {
        color: rgb(100, 21, 255); /* Couleur active pour le menu */

        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px; /* Réduire l'espace entre le texte et la barre */
          height: 2px; /* Hauteur de la barre active */
          background-color: rgb(100, 21, 255); /* Couleur de la barre active */
        }
      }
    }
  }
`;

const Toggler = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    position: absolute; /* Positionnement absolu */
    right: 5%; /* Aligné à droite */
    top: 1rem; /* Aligné en haut */
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: black; /* Couleur de la croix */
  position: absolute; /* Positionnement absolu */
  right: 5%; /* Aligné à droite */
  top: 1rem; /* Aligné en haut */

  /* Affiche le bouton seulement en mode mobile et si le menu est ouvert */
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "block" : "none")};
  }

  /* En mode desktop, cacher complètement */
  @media (min-width: 769px) {
    display: none; /* Cacher le bouton en mode desktop */
  }
`;

const HireButton = styled.button`
  background-color: rgb(100, 21, 255);
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: rgb(70, 9, 192);
  }

  @media (max-width: 768px) {
    display: block; /* Affiché en mode responsive */
    width: auto; /* Ne pas prendre toute la largeur */
    margin-top: 1rem; /* Espacement au-dessus */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 2rem 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column; /* Aligne les éléments en colonne */

  p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin-left: 2px; /* Supprime l'espacement */

    span {
      width: 5px;
      height: 35px;
      background-color: rgb(26, 142, 237);
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  h1 {
    font-size: 4.1rem;
    font-weight: 800;
    margin: 0; /* Supprime l'espacement */
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 4.6rem;
    font-weight: 800;
    color: rgb(100, 21, 255);
    background-color: white;
    display: inline-block;
    border-radius: 5px;
    width: 101%;
    margin: 0; /* Supprime l'espacement */
    padding: 0px 20px; /* Ajoute un padding pour le contenu */
    clip-path: polygon(
      3% 0%,
      100% 3%,
      97% 98%,
      0% 97%
    ); /* Crée un parallélogramme */

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  button {
    background-color: white;
    border: none;
    padding: 1.3rem 0.6rem; /* Ajuster la taille du padding */
    border-radius: 5px;
    color: rgb(100, 21, 255);
    font-size: 0.9rem;
    font-weight: 700;
    margin-top: 4rem;
    cursor: pointer;
    width: 230px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: rgb(100, 21, 255);
      color: white;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    align-items: center; /* Centrer les éléments en mode mobile */
    text-align: center; /* Centrer le texte */
  }
`;

const VideoPlaceholder = styled.div`
  background-color: black;
  color: white;
  padding: 6rem 9rem;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
        <HireButton onClick={() => setMenuOpen(false)}>Hire Us</HireButton>{" "}
        <Toggler onClick={() => setMenuOpen(!isMenuOpen)}>
          ☰ {/* Affiche le menu */}
        </Toggler>
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
