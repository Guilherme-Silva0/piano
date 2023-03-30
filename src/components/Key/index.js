import styled from "styled-components";

const Key = styled.button.attrs((props) => ({ "data-note": props.dataNote }))`
  background-color: var(--color-zero);
  border: 1px solid var(--color-fist);
  border-radius: 0 0 15px 15px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
  color: var(--color-negative);
  font-size: 2.5vw;
  font-weight: bold;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 20px;
  outline: none;

  &:active {
    opacity: 0.8;
  }
`;

export default Key;
