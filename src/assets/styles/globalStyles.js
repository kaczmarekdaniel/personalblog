import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing:border-box;
    max-width:100vw;
    } 

*, *::after, *::before {
    box-sizing: inherit;

}

body {
    max-width:100vw;
    font-family: 'Roboto Mono', monospace;
    margin:0;
}

a, button {
    font-family: 'Roboto Mono', monospace;
}

.flexColumn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.flexRow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
`;
