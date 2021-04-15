import { createGlobalStyle } from 'styled-components'
import { 
    setColor, 
    setFont, 
    setTransition } from '../constants/styles'

const Globals = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        background:  ${ setColor.sigma };
        color:       ${ setColor.delta_2 };
        font-family: ${ setFont.secondaryFont };
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2;
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: ${ setColor.delta_1 };
        text-decoration: none;
        ${ setTransition() };
    }

    a:hover {
        color: ${ setColor.alpha };
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${ setColor.delta_1 };
        font-family: ${ setFont.primaryFont };
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        color: ${ setColor.delta_1 };
        font-family: ${ setFont.primaryFont };
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    h1, .h1 { font-size: 2.5em; }
    h2, .h2 { font-size: 2em; }
    h3, .h3 { font-size: 1.75em; }
    h4, .h4 { font-size: 1.5em; }
    h5, .h5 { font-size: 1.25em; }
    h6, .h6 { font-size: 1em; }

    p {
        line-height: 1.8;
        margin: 0 0 1.25rem 0;
    }

    .center {
        text-align: center;
    }

    button {
        border: none;
    }

    .btn {
        background-color: transparent;
        border: 0.0625rem solid ${setColor.delta_1};
        border-radius: 3.75rem;
        display: inline-block;
        font-weight: 700;
        letter-spacing: 1px;
        margin-top: 2rem;
        padding: 1rem 3rem;
        ${setTransition()}
    }

    .dark {
        background-color: ${setColor.delta_1};
        color: ${setColor.sigma};
    }

    .light {
        border-color: ${setColor.sigma};
        color: ${setColor.sigma};
    }

    .btn:hover {
        background-color: ${setColor.delta_1};
        color: ${setColor.sigma};
    }

    .btn.dark:hover {
        background-color: transparent;
        color: ${setColor.delta_1};
    }
`

export default Globals