import styled from "styled-components";

const ConfirmStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  animation: show-screen 0.4s ease-in-out;

  & div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2vw;
    font-size: 1.5vw;
    color: var(--color-zero);
    background-color: var(--color-fist);
    width: 35vw;
    padding: 2vw;
    border-radius: 8px;
    box-shadow: 0 0 10px var(--color-negative);
    animation: show-screen-result 0.4s ease-in-out;
  }

  & div h1 {
    font-size: 3vw;
    text-align: center;
  }

  & div button {
    border: none;
    background-color: #0099dd;
    color: #111827;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.1s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @keyframes show-screen {
    0% {
      background-color: rgba(1, 1, 1, 0);
    }

    100% {
      background-color: rgba(1, 1, 1, 0.6);
    }
  }

  @keyframes show-screen-result {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    90% {
      opacity: 1;
    }

    100% {
      transform: scale(1);
    }
  }
`;

export default ConfirmStyles;
