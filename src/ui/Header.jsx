import styled, { css } from "styled-components";

const Header = styled.h1`
  font-size: 1.5rem;

  ${(props) =>
    props.as === "h1" &&
    css`
      color: var(--color-dark-blue);
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--color-grayish-blue);
      font-weight: 500;
    `}

    @media (min-width: 900px) {
    text-align: left;
  }
`;

export default Header;
