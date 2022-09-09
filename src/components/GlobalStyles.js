import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: .5rem !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey !important;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
        body{
            font-family: 'Montserrat', sans-serif;
            width: 100%;
            /* padding: 5rem 0; */
            background-color: #32313D;
            color:white;
        }
        h2{
            font-family: 'Abril Fatface';
            font-size:2.5rem;
            font-weight: lighter;;
            color: #f4f4f4;

        }
        h3{
            font-size:1.2rem;
            padding: 1.5rem 0;
            color: #f4f4f4;

        }
        p{
            font-size: 1.05rem;
            color: #f4f4f4;

            line-height: 200%;
        }
        a{
            text-decoration: none;
        }
        img{
            display: block;
        }
    }
`;

export default GlobalStyles;
