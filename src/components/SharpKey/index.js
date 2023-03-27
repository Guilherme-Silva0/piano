import styled from "styled-components";

const SharpKey = styled.button.attrs((props) => ({
  "data-note": props.dataNote,
}))`
  background-color: var(--color-negative);
  border: none;
  border-radius: 0 0 15px 15px;
  padding: 0;
  width: 50%;
  height: 55%;
  cursor: pointer;
  transition: 0.2s;

  &:active {
    opacity: 0.8;
  }
`;

export default SharpKey;
