import styled from "styled-components";

const StyledArrowsCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0px 5px 15px var(--color-grayish-blue);
  border-radius: 40px;
  padding: 12px 12px;
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 70px;
  transform: translate(50%, 50%);

  @media (min-width: 900px) {
    left: 0;
  }
`;

const StyledArrow = styled.img`
  width: 9px;
  cursor: pointer;
`;

function Arrows({ onClickNext, onClickPrev }) {
  return (
    <StyledArrowsCon>
      <StyledArrow src="icon-prev.svg" alt="arrow-prev" onClick={onClickPrev} />
      <StyledArrow src="icon-next.svg" alt="arrow-next" onClick={onClickNext} />
    </StyledArrowsCon>
  );
}

export default Arrows;
