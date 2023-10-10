import styled from "styled-components";

const ImageContainer = styled.div`
  width: 250px;
  height: 270px;
  position: relative;
  box-shadow: 0px 25px 35px -22px var(--color-purple);
  margin: 0 auto;

  @media (min-width: 900px) {
    width: 50%;
    height: 450px;
  }
`;
export default ImageContainer;
