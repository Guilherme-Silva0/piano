import styled from "styled-components";

const SharpKey = styled.button.attrs((props) => ({
  "data-note": props.dataNote,
}))`
  background-color: var(--color-negative);
  border: none;
  border-radius: 0 0 15px 15px;
  width: 50%;
  height: 55%;
  cursor: pointer;
  transition: 0.2s;
  color: var(--color-zero);
  font-size: 2vw;
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

export default SharpKey;
