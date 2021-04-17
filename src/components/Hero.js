import React from 'react';
import Background from './Background'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { setBreakpoint, setColor, setTransition } from '../constants/styles'

const query = graphql`
  {
    file(relativePath: { eq: "iStock-1249674769.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery( query )

  return (
    <Wrapper>
      <Background image={fluid}>
        <div className="container">
          <div>
            <h1>
              Aerion is a web development studio based in Uruguay.
            </h1>
            <p>
              Fast landing pages, multi-page websites and E-commerce. Small and medium size projects.
            </p>
            <a href="#portfolio" className="btn">Portfolio</a>
          </div>
        </div>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    align-items: center;
    display: flex;
    height: 100vh;
  }

  p {
    max-width: 30rem;
  }

  h1 {
    line-height: 1.1;
    margin-bottom: 3rem;
    margin-top: 0;
    max-width: 50rem;
    
    @media screen and (min-width: ${setBreakpoint.small}) {
      font-size: 4rem;
      max-width: 60rem;

    }

    @media screen and (min-width: ${setBreakpoint.medium}) {
      font-size: 8rem;
      max-width: 100rem;

    }

    @media screen and (min-width: ${setBreakpoint.large}) {
      font-size: 10rem;
    }

    span {
      color: ${setColor.alpha};
      display: block;
    }
  }

  a {
    border: 0.0625rem solid ${setColor.delta_1};
    border-radius: 3.75rem;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 2rem;
    padding: 1rem 3rem;
    ${setTransition()}
  }

  a:hover {
    background-color: ${setColor.delta_1};
    color: ${setColor.sigma};
  }
`

export default Hero;