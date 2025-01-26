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
  color: white;
  min-height: auto;
  padding: 0;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const HeroContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url("/images/banner.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
  @media (max-width: 768px) {
    min-height: auto;
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
  flex: 1;
  justify-content: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  transition: all 0.3s ease;
  justify-content: center;
  align-items: center;

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
    z-index: 11;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  position: absolute;
  right: 5%;
  top: 1rem;
  z-index: 11;

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
    width: 100%;
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
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin-left: 2px;

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
    margin: 0;
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
    padding: 1.3rem 0.6rem;
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
      padding: 1.3rem 0.5rem;
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
    align-items: center;
    text-align: center;
  }
`;

export const VideoPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  max-width: 600px;
  height: 50vh;
  margin: auto;
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
      font-size: 1.5rem;
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
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RecordImageWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RecordTextWrapper = styled.div`
  width: 50%;
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
    width: 100%;
    align-items: center;

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
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Stat = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
    border: 2px dashed rgb(100, 21, 255);

    @media (min-width: 1024px) {
      padding: 3rem 1rem;
    }

    .icon-wrapper {
      margin: 0 auto 1.5rem;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 2px solid rgb(100, 21, 255);
      display: flex;
      justify-content: center;
      align-items: center;
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
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
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
        flex-direction: column;
        align-items: center;
        text-align: center;

        @media (min-width: 768px) {
          flex-direction: row;
          text-align: left;
        }

        .icon {
          width: 3rem;
          height: 3rem;
          min-width: 3rem;
          min-height: 3rem;
          border: 1px solid rgb(100, 21, 255);
          border-radius: 50%;
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
            width: 1.5rem;
            height: 1.5rem;
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

// ------------portfolio section-----------------

export const PortfolioSectionWrapper = styled.section`
  background-color: white;
  padding: 3rem 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .content {
    margin-left: 2rem;
    text-align: left;
    flex: 1;
    order: 2;
    max-width: 50%;

    @media (max-width: 1024px) {
      max-width: 100%;
      order: 1;
      text-align: center;
      margin-left: 0;
    }

    .subtitle {
      font-size: 1rem;
      font-weight: bold;
      color: rgb(100, 21, 255);
      padding: 0;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 0.9rem;
        text-align: center;
      }
    }

    h2 {
      font-size: 3rem;
      font-weight: 800;
      color: #243e63;
      margin: 1rem 0;

      span {
        color: rgb(100, 21, 255);
      }

      @media (max-width: 1024px) {
        font-size: 2rem;
        text-align: center;
      }

      @media (max-width: 768px) {
        font-size: 1.8rem;
        text-align: center;
      }
    }

    .description {
      font-size: 1.2rem;
      color: #718096;
      margin-bottom: 2.5rem;
      line-height: 2rem;

      @media (max-width: 1024px) {
        font-size: 1rem;
        line-height: 1.8rem;
        text-align: center;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.5rem;
        text-align: center;
      }
    }

    .cta-link {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      color: rgb(100, 21, 255);
      text-decoration: none;

      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }

      svg {
        margin-left: 0.5rem;
      }

      &:hover {
        text-decoration: underline;
        color: #5c00e6;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .cards {
    display: flex;
    flex: 1;
    gap: 2rem;
    order: 1;
    max-width: 50%;

    @media (max-width: 1024px) {
      flex-direction: column;
      max-width: 100%;
      align-items: center;
      order: 2;
    }

    .card {
      background: white;
      border-radius: 0.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .card-image {
        width: 100%;
        height: 20rem;
        object-fit: cover;
        border-radius: 0.3rem;
        margin-bottom: 1rem;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        margin: 0 0 0.5rem 0;
        align-items: center;
        width: 100%;

        h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: rgb(100, 21, 255);

          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }

        p {
          font-size: 0.8rem;
          font-weight: bold;
          color: #718096;

          @media (max-width: 768px) {
            font-size: 0.7rem;
          }
        }
      }

      .card-description {
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: bold;
        color: #243e63;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }

      .card-details {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        .detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          .icon {
            color: #718096;
          }

          p {
            font-size: 0.9rem;
            color: #718096;
          }
        }
      }

      .cta-button {
        width: 100%;
        padding: 1rem 0;
        font-size: 1.1rem;
        background-color: rgb(100, 21, 255);
        color: white;
        font-weight: bold;
        text-align: center;
        border-radius: 0.2rem;
        border: none;

        &:hover {
          background-color: #5c00e6;
        }

        @media (max-width: 768px) {
          font-size: 0.9rem;
          padding: 0.8rem 0;
        }
      }
    }
  }
`;

// ------------testimonials section-----------------

export const TestimonialsWrapper = styled.section`
  background-color: white;
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    padding: 3rem 2.4rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const TextContainer = styled.div`
  flex: 0 0 55%;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  .testimonial-header {
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

  p {
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
  blockquote {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #243e63;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    p:first-child {
      font-size: 1.4rem;
      font-weight: bold;
      color: rgb(100, 21, 255);
      margin: 0;

      @media (min-width: 768px) {
        font-size: 1.7rem;
      }

      @media (min-width: 1024px) {
        font-size: 1.9rem;
      }
    }

    p:last-child {
      font-size: 1.2rem;
      color: #718096;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }

      @media (min-width: 1024px) {
        font-size: 1.4rem;
      }
    }
  }
`;

export const AvatarImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  flex: 0 0 35%;
  position: relative;
  height: 500px;

  @media (min-width: 768px) {
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

export const NavigationButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.8rem;

  button {
    background-color: rgb(100, 21, 255);
    color: white;
    border: none;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgb(70, 9, 192);
    }
  }
`;

// ------------Faqs section-----------------

export const FaqSection = styled.section`
  background-color: white;
  padding: 4rem 2rem;
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FaqIllustration = styled.div`
  width: 100%;
  max-width: 85%;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

export const FaqContent = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding-left: 2rem;
  }

  h2 {
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
`;

export const FaqTitle = styled.p`
  color: rgb(100, 21, 255);
  font-size: 1rem;
  font-weight: bold;
`;

export const FaqText = styled.p`
  font-size: 1rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const FaqItem = styled.div`
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    border: 1px solid #e2e8f0;
    margin-bottom: 1rem;
  }
`;

export const FaqButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #243e63;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const IconButton = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: rgb(100, 21, 255);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const FaqAnswer = styled.p`
  font-size: 1rem;
  color: #243e63;
  line-height: 1.6;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  &.hidden {
    display: none;
  }
  &.visible {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// ------------blog section-----------------

export const BlogSectionWrapper = styled.section`
  background-color: white;
  padding: 2rem 0;
`;

export const BlogContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

export const BlogTitle = styled.p`
  color: rgb(100, 21, 255);
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

export const BlogHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #243e63;
  margin: 0 0 1.5rem 0;

  @media (min-width: 768px) {
    font-size: 2.9rem;
    line-height: 1.2;
  }

  span {
    color: rgb(100, 21, 255);
  }
`;

export const BlogSubtitle = styled.p`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 1.5rem;
  max-width: 80%;
  line-height: 1.5rem;
  margin: 2rem auto;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const BlogCard = styled.div`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  max-width: 330px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const BlogCardContent = styled.div`
  padding: 1.5rem;
  background-color: white;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 2px dashed rgb(100, 21, 255);
  border-right: 2px dashed rgb(100, 21, 255);
  border-bottom: 2px dashed rgb(100, 21, 255);

  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BlogCardFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
  color: #7c8ba1;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const BlogAuthor = styled.span``;

export const BlogCategory = styled.span``;

export const BlogCardTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #243e63;
  margin-bottom: 1rem;
  line-height: 1.7rem;
`;

export const BlogText = styled.p`
  font-size: 0.9rem;
  color: #7c8ba1;
  margin-bottom: 1.5rem;
  line-height: 1.3rem;
`;

export const BlogLink = styled.a`
  display: inline-block;
  text-align: center;
  background-color: rgb(100, 21, 255);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: medium;
  text-decoration: none;
  transition: background-color 0.3s;

  margin: 0 auto;

  &:hover {
    background-color: rgb(70, 9, 192);
  }

  @media (min-width: 768px) {
    margin: 0;
    align-self: flex-start;
  }
`;

// ------------Contact et footer section-----------------

export const ContactWrapper = styled.section`
  background-color: white;
  padding: 3rem 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: left;
  }
`;

export const ContactImageContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 35%;
    margin-top: 0;
  }

  img {
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export const ContactTextContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 55%;
    margin-top: 0;
    padding-right: 2rem;
  }
`;

export const ContactTitle = styled.p`
  color: rgb(100, 21, 255);
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

export const ContactHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #243e63;
  margin: 0 0 1.5rem 0;

  @media (min-width: 768px) {
    font-size: 2.9rem;
    line-height: 1.2;
  }

  span {
    color: rgb(100, 21, 255);
  }
`;

export const ContactDescription = styled.p`
  font-size: 1rem;
  color: #7c8ba1;
  line-height: 1.6;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;

export const ContactInput = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid #d8dee8;
  font-size: 1rem;
  flex: 1;
  max-width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgb(100, 21, 255);
  }

  &:hover {
    border-color: rgb(100, 21, 255);
  }

  @media (min-width: 768px) {
    max-width: 300px;
    flex: unset;
  }
`;

export const ContactButton = styled.button`
  padding: 1.2rem 2rem;
  background-color: rgb(100, 21, 255);
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  flex-shrink: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(70, 9, 192);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: #1a202c;
  color: white;
  padding: 3rem 0;
`;

export const FooterContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  img {
    width: 40px;
    height: auto;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
export const FooterNavItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    position: relative;
    display: inline-block;
    padding-bottom: 5px;

    &:hover {
      color: #f7fafc;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FooterSocialLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

export const FooterCopyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
`;
