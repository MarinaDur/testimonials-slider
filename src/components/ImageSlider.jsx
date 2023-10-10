import styled from "styled-components";
import ImageContainer from "../ui/ImageContainer";
import Arrows from "./Arrows";

const StyledImageSlider = styled.div`
  background: ${(props) => `url(${props.$image})`};
  width: 98%;
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  transition: background-image 0.1s ease;
`;

function ImageSlider({
  slides,
  currentIndex,
  handleClickNext,
  handleClickPrev,
}) {
  return (
    <ImageContainer>
      <StyledImageSlider $image={slides[currentIndex].url} />
      <Arrows onClickNext={handleClickNext} onClickPrev={handleClickPrev} />
    </ImageContainer>
  );
}

export default ImageSlider;
