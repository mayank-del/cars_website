import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'montserrat' ,sans-serif;
    
}
html,body{
    overflow-x:hidden;
    background-color: rgba(0, 0, 0, 0.877);
}
`;
export default GlobalStyle;