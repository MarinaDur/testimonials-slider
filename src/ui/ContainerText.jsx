import styled from "styled-components";

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${(props) => (props.$paragraph ? "8rem" : "2rem")};

  @media (min-width: 900px) {
    text-align: left;
    align-items: flex-start;
    flex-direction: row;
    gap: 1rem;
  }
`;

export default ContainerText;
