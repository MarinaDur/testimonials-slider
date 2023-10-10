import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { useCallback, useEffect, useState } from "react";
import Paragraph from "../ui/Paragraph";
import ContainerText from "../ui/ContainerText";
import Header from "../ui/Header";
import Container from "../ui/Container";

const StyledMain = styled.main`
  min-width: 330px;
  max-width: 1000px;
  padding: 6rem 3rem 6rem 3rem;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 6rem 5rem 6rem 5rem;
  }
`;

const slides = [
  {
    url: "image-tanya.jpg",
    name: "Tanya Sinclair",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
    title: "UX Engineer",
  },
  {
    url: "image-john.jpg",
    name: "John Tarkpor",
    text: "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
    title: "Junior Front-End Developer",
  },
];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = useCallback(() => {
    setIsVisible(false); // Start the transition by setting to false
    setTimeout(() => {
      if (slides.length - 1 > currentIndex) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
      setIsVisible(true); // Complete the transition by setting to true
    }, 300);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else {
        setCurrentIndex(slides.length - 1);
      }
      setIsVisible(true);
    }, 300);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, handleNext, handlePrev]);

  return (
    <StyledMain>
      <ImageSlider
        slides={slides}
        currentIndex={currentIndex}
        handleClickNext={(e) => handleNext()}
        handleClickPrev={(e) => handlePrev()}
      />
      <Container>
        <ContainerText $paragraph="paragraph">
          <Paragraph $isVisible={isVisible}>
            {slides[currentIndex].text}
          </Paragraph>
        </ContainerText>
        <ContainerText>
          <Header as="h1">{slides[currentIndex].name}</Header>
          <Header as="h2">{slides[currentIndex].title}</Header>
        </ContainerText>
      </Container>
    </StyledMain>
  );
}

export default Main;
