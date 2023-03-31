import styled from "styled-components";

const PianoStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 85vw;
  height: calc(90vw / 3);
  background-color: var(--color-fist);
  padding: 8px 30px 30px;
  border-radius: 15px;
  box-shadow: 35px 35px 70px #0e1421, -35px -35px 70px #141c2d;

  & .keys-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  & .keys-container button:first-child {
    border-radius: 8px 0 8px 8px;
  }

  & .keys-container button:last-child {
    border-radius: 0 8px 8px 8px;
  }

  & .keys-container button[data-note*="#"] {
    z-index: 9;
    margin: 0 calc((-77.8vw / 7) - (-40vw / 5));
  }
`;

export default PianoStyles;
