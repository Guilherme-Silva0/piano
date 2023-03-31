import styled from "styled-components";

const RotateScreenStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  flex-direction: column;
  padding: 4vw;

  & img {
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    filter: drop-shadow(0 0 5px var(--color-negative));
    width: 50vw;
    transform: rotate(45deg);
    animation: rotate 1.7s linear infinite;
  }

  & p {
    color: var(--color-zero);
    font-size: 5vw;
    text-align: center;
  }

  @keyframes rotate {
    0% {
      transform: rotate(45deg);
    }

    70% {
      opacity: 1;
      transform: rotate(-45deg);
    }

    100% {
      opacity: 0;
      transform: rotate(-45deg);
    }
  }
`;

export default RotateScreenStyles;
