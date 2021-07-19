import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.contentBg};
        color: ${({ theme }) => theme.text};
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.25s linear;
    }
    
    main {
        padding: 3rem 0;
        transition: all 0.25s linear;
    }

    @media (max-width: 600px) {
        main {
            padding: 2rem 0;
        }
    }
`;
