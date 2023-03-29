import styled from "styled-components";

const PianoStyles = styled.div`
  display: flex;
  width: 80vw;
  height: calc(80vw / 3.4);
  background-color: var(--color-fist);
  padding: 2px 30px 30px;
  border-radius: 15px;
  box-shadow: 35px 35px 70px #0e1421, -35px -35px 70px #141c2d;

  & button[data-note*="#"] {
    z-index: 9;
    margin: 0 calc((-77vw / 7) - (-40vw / 5));
  }
`;

export default PianoStyles;
