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
        flex-direction: column;
        
        
        & p {
            width: 100%;
            color: var(--color-zero);
            text-align: center;
            text-transform: uppercase;
            font-size: 4vw;
            color: var(--color-third);
            padding: 20px 0;
            filter: drop-shadow(0 0 10px var(--color-third));
        }
    }

`;

export default Base;
