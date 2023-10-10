import styled from "styled-components";

const Paragraph = styled.p`
  font-size: clamp(1.6rem, 1.5vw, 4rem);
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  color: var(--color-dark-blue);
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  transition: opacity 0.3s ease;

  @media (min-width: 900px) {
    text-align: left;
    line-height: 1.5;
  }
`;
export default Paragraph;
