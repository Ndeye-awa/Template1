import React, { useState } from "react";
import {
  FaqSection,
  FaqContainer,
  FaqIllustration,
  FaqContent,
  FaqTitle,
  FaqText,
  FaqItem,
  FaqButton,
  FaqAnswer,
  IconButton,
} from "./StyledComponents";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is lunch provided free of cost?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch.",
    },
    {
      question: "Do you have 2 Bedroom suites?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Are Wi-Fi costs included in the price?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Where can I reach you for support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <FaqSection>
      <FaqContainer>
        <FaqIllustration>
          <img src="images/imageFaqs.svg" alt="Illustration" />
        </FaqIllustration>
        <FaqContent>
          <FaqTitle>FAQs</FaqTitle>
          <h2>
            Do you have <span>Questions?</span>
          </h2>
          <FaqText>
            Here are some frequently asked questions about our hotels from our
            loving customers. Should you have any other questions, feel free to
            reach out via the contact form below.
          </FaqText>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem key={index}>
                <FaqButton onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <IconButton>{activeIndex === index ? "−" : "+"}</IconButton>
                </FaqButton>
                <FaqAnswer
                  className={activeIndex === index ? "visible" : "hidden"}
                >
                  {faq.answer}
                </FaqAnswer>
              </FaqItem>
            ))}
          </div>
        </FaqContent>
      </FaqContainer>
    </FaqSection>
  );
};

export default Faqs;
