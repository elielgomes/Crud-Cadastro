import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`

*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme.colors.background};
}

`

export default GlobalStyle;