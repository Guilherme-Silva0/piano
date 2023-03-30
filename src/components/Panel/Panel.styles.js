import styled from "styled-components";

const PainelStyles = styled.div`
  background-color: var(--color-second);
  padding: 0.5vw 0;
  width: 20%;
  margin: 0 auto;
  box-shadow: 0px 0px 8px var(--color-negative) inset;
  border-radius: 8px;

  & p {
    color: var(--color-zero);
    text-align: center;
    text-transform: uppercase;
    font-size: 3vw;
    color: var(--color-third);
    filter: drop-shadow(0 0 10px var(--color-third));
  }
`;

export default PainelStyles;
