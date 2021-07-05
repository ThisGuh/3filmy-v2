import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    body {
        margin:0;
        min-width: ${({ theme }) => theme.screenSizes.xs};
        background-color: ${({ theme }) => theme.colors.darkGray};
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fontFamilies.default};
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
