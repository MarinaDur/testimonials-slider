import styled from "styled-components";
import Main from "./Main";

const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: grid;
  place-content: center; */
  margin: 0 auto;
  background: url("pattern-bg.svg") no-repeat center top 30px,
    url("pattern-curve.svg") no-repeat bottom left,
    url("pattern-quotes.svg") no-repeat center top 390px;
  background-size: 350px, 320px, 60px;

  @media (min-width: 800px) {
    display: grid;
    place-content: center;
  }
  @media (min-width: 900px) {
    background-position: center right, bottom left, top 230px left 100px;
    background-size: 600px, 550px, 90px;
  }
  @media (min-width: 1200px) {
    background-position: center right 300px, bottom left, top 230px left 350px;
    background-size: 550px, 550px, 90px;
  }

  /* @media (min-width: 0px) {
    background-position: center right 300px, bottom left, top 230px left 350px;
    background-size: 550px, 550px, 90px;
  } */
`;

function Body() {
  return (
    <StyledBody>
      <Main />
    </StyledBody>
  );
}

export default Body;
