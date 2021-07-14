import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.text};
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    main {
        background: ${({ theme }) => theme.contentBg};
        padding: 3rem 0;
    }

    @media (max-width: 600px) {
        main {
            padding: 2rem 0;
        }
    }
`;
