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
  DesktopHireButton,
  RecordSectionWrapper,
  RecordImageWrapper,
  RecordTextWrapper,
  StatsWrapper,
  Stat,
  LearnMoreButton,
  RecordContentWrapper,
  ServicesSectionWrapper,
  ExpertiseSectionWrapper,
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
            {isMenuOpen && (
              <li>
                <HireButton>Hire Us</HireButton>
              </li>
            )}
          </NavLinks>
        </NavLinkContainer>
        {!isMenuOpen && (
          <DesktopHireButton>
            <HireButton>Hire Us</HireButton>
          </DesktopHireButton>
        )}
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

      {/* Record Section */}
      <RecordSectionWrapper>
        <div className="container">
          <RecordContentWrapper>
            {/* Image Section */}
            <RecordImageWrapper>
              <img src="./images/image1.svg" alt="Image" />
            </RecordImageWrapper>

            {/* Text Section */}
            <RecordTextWrapper>
              <p className="subtitle">Our Track Record</p>
              <h1>
                We have been doing this since{" "}
                <span className="highlight">1999</span>.
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <StatsWrapper>
                <Stat>
                  <p className="value">2282+</p>
                  <p className="label">Clients</p>
                </Stat>
                <Stat>
                  <p className="value">3891+</p>
                  <p className="label">Projects</p>
                </Stat>
                <Stat>
                  <p className="value">1000+</p>
                  <p className="label">Awards</p>
                </Stat>
              </StatsWrapper>

              <LearnMoreButton>Learn More</LearnMoreButton>
            </RecordTextWrapper>
          </RecordContentWrapper>
        </div>
      </RecordSectionWrapper>

      {/* Services Section */}
      <ServicesSectionWrapper>
        <div className="container">
          <h1>
            Our Professional{" "}
            <span style={{ color: "rgb(100, 21, 255)" }}>Services</span>
          </h1>
          <div className="cards-grid">
            {/* Card 1 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon1.svg" alt="Ads Management" />
              </div>
              <h3>Ads Management</h3>
              <p>
                We create and manage ads that you need, from creation to
                deployment. Lorem ipsum donor sit amet consicou.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon2.svg" alt="Video Marketing" />
              </div>
              <h3>Video Marketing</h3>
              <p>
                Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis
                nostrud. Sic Semper Tyrannis. Neoas Calie artel.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon3.svg" alt="Customer Relation" />
              </div>
              <h3>Customer Relation</h3>
              <p>
                Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis
                nostrud. Sic Semper Tyrannis. Neoas Calie artel.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon4.svg" alt="Social Media" />
              </div>
              <h3>Social Media</h3>
              <p>
                Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis
                nostrud. Sic Semper Tyrannis. Neoas Calie artel.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon5.svg" alt="SEO Services" />
              </div>
              <h3>SEO Services</h3>
              <p>
                Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis
                nostrud. Sic Semper Tyrannis. Neoas Calie artel.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card">
              <div className="icon-wrapper">
                <img src="images/icon6.svg" alt="Brand Strategy" />
              </div>
              <h3>Brand Strategy</h3>
              <p>
                Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis
                nostrud. Sic Semper Tyrannis. Neoas Calie artel.
              </p>
            </div>
          </div>
        </div>
      </ServicesSectionWrapper>

      {/* expertise Section */}
      <ExpertiseSectionWrapper>
        <div className="container">
          {/* Content Section */}
          <div className="content">
            <p className="subtitle">Our Expertise</p>
            <h1>
              We have the most <span>professional</span> marketing team.
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Horizontal Cards */}
            <div className="cards">
              {/* Card 1 */}
              <div className="card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-briefcase"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3>Professionalism</h3>
                  <p>
                    We have the best professional marketing people across the
                    globe just to work with you.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3>Affordable</h3>
                  <p>
                    We promise to offer you the best rate we can - at par with
                    the industry standard.
                  </p>
                </div>
              </div>
            </div>

            <button className="cta-button">See Our Portfolio</button>
          </div>

          {/* Image Section */}
          <div className="image-wrapper">
            <img src="images/team.svg" alt="Expertise Illustration" />
          </div>
        </div>
      </ExpertiseSectionWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
