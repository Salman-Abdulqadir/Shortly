import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
    
    }
    ul{
        list-style: none;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }
    .btn{
        border: none;
        cursor: pointer;
        padding: 0.75rem 1rem;
        background-color: hsla(180, 66%, 49%, 1);
        font-family: inherit;
        font-weight: 500;
        color: white;
        transition: all 0.3s ease;
        &:hover{
            background-color: hsla(180, 66%, 49%, 0.5);
            color: white;
        }
        border-radius: 8px;
    }
    .round-btn{
        border-radius: 20px;
    }
    .white-btn{
        background-color: white;
        color: black;
    }
    .dark-btn{
        background-color: hsl(260, 8%, 14%);
        color: white;
    }

    

`;

export default GlobalStyles;