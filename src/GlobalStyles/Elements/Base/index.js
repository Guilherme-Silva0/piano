import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    body{
        background-color: var(--color-second);
        font-family: 'Outfit', sans-serif;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Base;
