import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --primary-font: "Roboto", Helvetica, Arial, sans-serif;
        --secondary-font: "Poppins", Helvetica, Arial, sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 2rem;
        --line-height-alpha: 1.5;
        --line-height-beta: 2;
        --max-width: 132rem;
        --clr-alpha: #0075E9;
        --clr-alpha-light: #278BEF;
        --clr-beta: #F2F9FF;
        --clr-gamma: rgb(229, 229, 229);
        --clr-delta: #595959;
        --clr-omega: #F6F6F6;
        --clr-psi: rgb(31, 31, 31);
        --shadow: drop-shadow(0px 0px 10px rgba(0,0,0,.1));
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        color: var(--clr-psi);
        font-family: var(--primary-font);
        font-size: 1.8rem;
        line-height: var(--line-height-alpha);
        transition: color 0.25s linear;
    }

    .wrapper {
        max-width: var(--max-width);
        margin: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 100%;
    }

    .wrapper-fluid {
        padding-left: calc(2rem + 4vw);
        padding-right: calc(2rem + 4vw);

        @media screen and ( max-width: 576px ) {
            padding: 0 2rem;
        }
    }

    .header-1, h1,
    .header-2, h2,
    .header-3, h3,
    .header-4, h4,
    .header-5, h5,
    .header-6, h6,
    .display-one,
    .display-two,
    .display-three,
    .display-four  {
        font-family: var(--secondary-font);
        line-height: var(--line-height-alpha);
        margin: 0;
        font-weight: 700;
    }

    h1, .header-1 {
        font-size: 4rem;
    }

    h2, .header-2 {
        font-size: 3.2rem;
    }

    h3, .header-3 {
        font-size: 2.5rem;
    }

    h4, .header-4 {
        font-size: 1.75rem;
    }

    h5, .header-5 {
        font-size: 1.55rem;
    }

    h6, .header-6 {
        font-size: 1rem;
    }

    @media screen and ( min-width: 992px ) {
        h1, .header-1 {
            font-size: 5rem;
        }

        h2, .header-2 {
            font-size: 3.8rem;
        }

        h3, .header-3 {
            font-size: 3rem;
        }

        h4, .header-4 {
            font-size: 2.25rem;
        }

        h5, .header-5 {
            font-size: 1.75rem;
        }

        h6, .header-6 {
            font-size: 1.25rem;
        }
    }

    a {
        color: var(--clr-psi);
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s linear;
    }

    a:hover {
        text-decoration: underline;
    }

    a.button:hover {
        text-decoration: none;
    }
 
    .button {
        border: none;
        border-radius: 3rem;
        color: var(--clr-omega);
        cursor: pointer;
        font-weight: 600;
        padding: 1.4rem 2.2rem;
    }

    .bg-light {
        background-color: var(--clr-gamma);
        color: var(--clr-psi);
    }

    .bg-dark {
        background-color: var(--clr-psi);
    }

    .bg-alpha {
        background-color: var(--clr-alpha);
        transition: all 0.2s linear;

        &:hover {
            background-color: var(--clr-alpha-light);
        }
    }

    .text-alpha {
        color: var(--clr-alpha);
    }

    .section-my {
        margin-bottom: calc( 6rem + 10vw );
        margin-top: calc( 6rem + 10vw );

        @media screen and ( min-width: 1200px ) {
            margin-bottom: 16rem;
            margin-top: 16rem;
        }
    }

    .section-mb {
        margin-bottom: calc( 6rem + 10vw );
    }

    .section-mt {
        margin-top: calc( 6rem + 10vw );
    }

    @media screen and ( min-width: 1200px ) {
        .section-mb {
            margin-bottom: 16rem;
        }

        .section-mt {
            margin-top: 16rem;
        }
    }
`

export default Globals