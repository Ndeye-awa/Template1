import React, { useState } from "react";
import {
  TestimonialsWrapper,
  TextContainer,
  ImageContainer,
  AvatarImage,
  NavigationButtons,
} from "./StyledComponents";

const testimonials = [
  {
    quote:
      "“ Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exceteur sint occaecat cupidatat non proident, sunt in culpa qui officia. ”",
    name: "Adam Cuppy",
    role: "Founder, Nestle",
    avatar: "images/profil2.jpeg",
    image: "images/photoProfil2.jpeg",
  },
  {
    quote:
      "“ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.  ”",
    name: "Charlotte Hale",
    role: "CEO, Tesla Inc",
    avatar: "images/profil1.jpeg",
    image: "images/photoProfil1.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { quote, name, role, avatar, image } = testimonials[currentIndex];

  return (
    <TestimonialsWrapper>
      <div className="container">
        {/* Texte */}
        <TextContainer>
          <div>
            <p className="testimonial-header">Testimonials</p>
            <h1>
              Our Clients <span>Love Us.</span>
            </h1>
            <p>
              Here are what some of our amazing customers are saying about our
              marketing professionals. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <blockquote>{quote}</blockquote>
          </div>
          <div className="author-info">
            <AvatarImage src={avatar} alt={name} />
            <div>
              <p>{name}</p>
              <p>{role}</p>
            </div>
          </div>
        </TextContainer>

        {/* Image */}
        <ImageContainer>
          <img src={image} alt="Testimonial visual" />
          <NavigationButtons>
            <button onClick={goToPreviousTestimonial}>&lt;</button>
            <button onClick={goToNextTestimonial}>&gt;</button>
          </NavigationButtons>
        </ImageContainer>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
