import styled from "styled-components";

const Key = styled.button.attrs((props) => ({ "data-note": props.dataNote }))`
  background-color: var(--color-zero);
  border: 1px solid var(--color-negative);
  border-radius: 0 0 15px 15px;
  padding: 0;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:active {
    opacity: 0.8;
  }
`;

export default Key;
