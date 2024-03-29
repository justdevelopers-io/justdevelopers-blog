import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
      --yellow: #fcc11d;
      /* --lightBlue: #84daf8; */
      --lightBlue: #01a6b2;
      --textColor: #fbf9e6;
      --lightBlueTextColor: #54d4dd;
      --blueTextColor: #213843;
      --bgColor: #1e2227;
      --yellowLightBlueGradient: linear-gradient(86deg, var(--yellow) 0%, var(--lightBlue) 100%);
      --yellowGradient: linear-gradient(
          to right bottom,
          #f8aa00,
          #fab610,
          #fcc11d,
          #fecd29,
          #ffd835
        );
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
    background: var(--bgColor);
    color: var(--textColor);
  }

  a {
    box-shadow: none;
    text-decoration: none;
    background-image: none;
    text-shadow: 1px 1px 1px black;
    color: var(--yellow);

    :hover {
        color: var(--lightBlueTextColor);
        text-decoration: underline;
    }
  }

  

  ul {
    margin-bottom: 0;
  }

  hr {
    background: var(--yellowLightBlueGradient);
  }

  blockquote {
    border-width: .25rem;
    border-color: var(--yellow);
    text-align: justify;
    font-style: initial;
    font-size: 1rem;
    color: var(--lightBlueTextColor);
  }

`

export default GlobalStyles
