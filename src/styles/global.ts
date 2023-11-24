import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
}

body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   
} 

.gitHubLink {
  position: absolute;
  top: 0;
  padding: 2rem;
  left: 0;

}
.gitHubLink a {
 color: var(--gray-100);
 text-decoration: none;   
 display: flex;
 align-items: center;
 gap: 0.5rem;
}
.gitHubLink span {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #29292E;
 border-radius: 50%;
 padding: 0.5rem;
 }
 
 .gitHubLink a:hover {
  color: #00875F;
  fill: white;
 }
`
