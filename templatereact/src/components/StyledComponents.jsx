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

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url("/images/banner.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Navbar = styled.nav`
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

export const LogoWrapper = styled.div`
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

export const NavLinkContainer = styled.div`
  display: flex;
  flex: 1; /* Permet au conteneur de prendre l'espace disponible */
  justify-content: center; /* Centrer les liens horizontalement */
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  transition: all 0.3s ease;
  justify-content: center; /* Centrer horizontalement */
  align-items: center; /* Centrer verticalement */

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
    gap: 1.5rem;
    color: black; /* Couleur du texte en mode responsive */
    background: white; /* Fond blanc */
    padding: 2rem; /* Augmenter le padding */
    border-radius: 7px;
    position: absolute;
    top: 2%; /* Positionné pour couvrir le haut de l'écran */
    left: 2%; /* Marges à gauche */
    right: 2%; /* Marges à droite */
    height: auto; /* Augmenter la hauteur du menu */
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
          background-color: rgb(100, 21, 255);
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

export const Toggler = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    position: absolute;
    right: 5%;
    top: 1rem;
    z-index: 11; /* Pour s'assurer qu'il est toujours au-dessus */
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: black; /* Couleur de la croix */
  position: absolute; /* Positionnement absolu */
  right: 5%; /* Aligné à droite */
  top: 1rem; /* Aligné en haut */
  z-index: 11; /* S'assurer qu'il est au-dessus du menu */

  /* Affiche le bouton seulement en mode mobile et si le menu est ouvert */
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "block" : "none")};
  }

  /* En mode desktop, cacher complètement */
  @media (min-width: 769px) {
    display: none; /* Cacher le bouton en mode desktop */
  }
`;

export const HireButton = styled.button`
  background-color: rgb(100, 21, 255);
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgb(70, 9, 192);
  }

  @media (max-width: 768px) {
    width: 100%; /* Pleine largeur dans le menu */
    margin-top: 1rem;
    text-align: center;
  }
`;

export const DesktopHireButton = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block; /* Toujours visible en mode desktop */
    position: absolute;
    right: 2rem;
  }
`;

export const ContentWrapper = styled.div`
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

export const TextWrapper = styled.div`
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

    @media (max-width: 320px) {
      width: 100%;
      font-size: 0.5rem;
    }
    span {
      width: 5px;
      height: 25px;
      background-color: rgb(26, 142, 237);
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0; /* Supprime l'espacement */
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 320px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: rgb(100, 21, 255);
    background-color: white;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0px 20px;
    clip-path: polygon(
      3% 0%,
      100% 3%,
      97% 98%,
      0% 97%
    ); /* Crée un parallélogramme */

    @media (max-width: 768px) {
      font-size: 1.8rem;
      padding: 5px 20px;
    }

    @media (max-width: 320px) {
      width: 100%;
      font-size: 1rem;
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
      padding: 1.3rem 0.5rem; /* Ajuster la taille du padding */
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 1rem;
    }

    @media (max-width: 320px) {
      width: 100%;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 768px) {
    align-items: center; /* Centrer les éléments en mode mobile */
    text-align: center; /* Centrer le texte */
  }
`;

export const VideoPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%; /* Occupe 80% de la largeur de l'écran */
  max-width: 600px; /* Taille maximale pour éviter une trop grande largeur */
  height: 50vh; /* Occupe 50% de la hauteur de l'écran */
  margin: auto; /* Centre le conteneur horizontalement */
  padding: 1.5rem;
  border-radius: 10px;
  background-color: black;
  margin-right: 0;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 1rem;
    margin: auto;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem; /* Plus petit encore pour les très petits écrans */
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

// ---------------Record Section-----------------------

export const RecordSectionWrapper = styled.section`
  padding: 6rem 1.5rem;
  background-color: #fff;
`;

export const RecordContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3rem; /* Espace entre l'image et le texte */

  @media (max-width: 768px) {
    flex-direction: column; /* Sur les petits écrans, l'image et le texte se mettent en colonne */
  }
`;

export const RecordImageWrapper = styled.div`
  width: 50%; /* L'image occupe la moitié de l'espace sur des écrans plus larges */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%; /* L'image occupe toute la largeur de son conteneur */
    height: auto; /* Garder les proportions de l'image */
  }

  @media (max-width: 768px) {
    width: 100%; /* Sur petits écrans, l'image prend toute la largeur */
  }
`;

export const RecordTextWrapper = styled.div`
  width: 50%; /* Le texte occupe la moitié de l'espace sur des écrans plus larges */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .subtitle {
    font-size: 1.1rem;
    font-weight: bold;
    color: rgb(100 21 255);
  }

  h1 {
    font-size: 3.3rem;
    font-weight: 800;
    color: #243e63;
    margin: 0;
  }

  .highlight {
    color: rgb(100 21 255);
  }

  .description {
    font-size: 1.3rem;
    font-weight: 500;
    color: #7c8ba1;
    margin-bottom: 2rem;
    line-height: 1.8rem;
  }

  @media (max-width: 768px) {
    width: 100%; /* Sur petits écrans, le texte prend toute la largeur */
    align-items: center; /* Centrer le texte */

    h1 {
      font-size: 1.6rem;
      font-weight: 800;
      color: #243e63;
      margin: 0;
      text-align: center;
    }

    .description {
      font-size: 1rem;
      font-weight: 500;
      color: #7c8ba1;
      margin-bottom: 2rem;
      line-height: 1.4rem;
      text-align: center;
    }
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Empiler les Stats en colonne */
    align-items: center; /* Centrer les Stats */
    gap: 1rem; /* Réduire l'espace entre les Stats */
  }
`;

export const Stat = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column; /* Assure que la valeur et le label sont empilés */
  align-items: center; /* Centre la valeur et le label horizontalement */
  width: 100%; /* Prend toute la largeur disponible pour chaque Stat */

  .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #243e63;
    margin: 0;
  }

  .label {
    font-size: 1rem;
    font-weight: 600;
    color: #5011cc;
    margin: 0.5rem;
  }

  @media (max-width: 768px) {
    .value {
      font-size: 1.3rem;
    }
  }
`;

export const LearnMoreButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: rgb(100 21 255);
  color: white;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #5011cc;
  }
`;

// ------------services section-----------------

export const ServicesSectionWrapper = styled.div`
  background-color: white;
  padding: 3rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: #243e63;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    margin-top: 2rem;
    padding: 1.5rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
          padding: 2.3rem;

    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    text-align: center;
    padding: 2rem 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px dashed rgb(100, 21, 255); /* Bordure en dashed avec couleur spécifique */

    @media (min-width: 1024px) {
      padding: 3rem 1rem;
    }

    .icon-wrapper {
      margin: 0 auto 1.5rem;
      width: 5rem; /* Taille du cercle */
      height: 5rem; /* Taille du cercle */
      border-radius: 50%; /* Cercle parfait */
      border: 2px solid rgb(100, 21, 255); /* Bordure avec couleur spécifique */
      display: flex; /* Centrer l'image */
      justify-content: center; /* Centrer horizontalement */
      align-items: center; /* Centrer verticalement */
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: rgb(100, 21, 255);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      font-weight: 600;
      color: #718096;
      padding: 0.5rem 0.2rem 0 0.2rem;
      line-height: 1.7rem;

      @media (min-width: 1024px) {
        padding: 0.5rem 0.8rem 0 0.8rem;
    }
    }
  }

`;

// ------------Expertise section-----------------

export const ExpertiseSectionWrapper = styled.section`
  background-color: white;
  padding: 3rem 1rem; /* Par défaut, petit padding horizontal */

  @media (min-width: 768px) {
    padding: 3rem 2rem; /* Augmentation du padding horizontal pour écrans moyens */
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  .content {
    text-align: center;
    order: 2;

    @media (min-width: 1024px) {
      order: 1;
      text-align: left;
    }

    .subtitle {
      color: rgb(100, 21, 255);
      font-size: 1rem;
      font-weight: bold;
    }

    h1 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.4;
      color: #243e63;

      @media (min-width: 768px) {
        font-size: 2.8rem;
        line-height: 1.2;
      }

      span {
        color: rgb(100, 21, 255);
      }
    }

    .description {
      font-size: 1rem;
      color: #718096;
      line-height: 1.6;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
    }

    .cards {
  display: grid;
  gap: 1rem;

  .card {
    display: flex;
    flex-direction: column; /* Empile les icônes et le texte par défaut */
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: row; /* Passe en ligne sur les écrans moyens et grands */
      text-align: left;
    }

    .icon {
      width: 3rem; /* Assure une largeur fixe */
      height: 3rem; /* Assure une hauteur fixe */
      min-width: 3rem; /* Empêche la déformation sur desktop */
      min-height: 3rem; /* Empêche la déformation sur desktop */
      border: 1px solid rgb(100, 21, 255);
      border-radius: 50%; /* Rend le conteneur toujours rond */
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 1rem;
      }

      svg {
        color: rgb(100, 21, 255);
        width: 1.5rem; /* Fixe la taille de l'icône */
        height: 1.5rem; /* Fixe la taille de l'icône */
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: rgb(100, 21, 255);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: #243e63;
    }
  }
}


    .cta-button {
      display: inline-block;
      background: rgb(100, 21, 255);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 0.3rem;
      font-weight: bold;
      border: none;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: background 0.3s;

      &:hover {
        background: #5c00e6;
      }
    }
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    order: 1;

    @media (min-width: 1024px) {
      order: 2;
    }

    img {
      width: 100%;
      max-width: 90%;
      height: auto;
    }
  }
`;



