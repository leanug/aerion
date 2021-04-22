import React from 'react'
import Layout from '../components/Layout'
import Background from '../components/Background'
import Contact from '../components/Contact'
import Title from '../components/Title'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { setBreakpoint, setContainer, setColor } from '../constants/styles'
import services from '../constants/services'
import portfolio from '../constants/portfolio'
import Services from '../components/Services'

export const query = graphql`
  {
    house: file(relativePath: {eq: "iStock-1187621939.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO 
        description="Find out everything you need about the great real estate development project in Colonia del sacramento."
        title="Home"
      />

      <Wrapper>
        <section id="home">
          <Hero />
        </section>

        <section>
          <Background image={data.house.childImageSharp.fluid} styleClass="banner light">
            <div className="container center mx-auto">
              <div className="mw-600">
              <h2 className="center">
                Build a Strong Online Presence with a professional and captivating Website 
                that represents your Brand.
              </h2>
              <a href="#contact" className="btn light-btn">Get a quote</a>
              </div>
            </div>
          </Background>
        </section>

        <section  id="services" className="container p-y">
          <div className="mb-5">
          <Title title="Our Services" />
          </div >
            <div className="services">
              <Services services={services} />
            </div>
        </section>

        <section id="portfolio" className="mb-10">
          <Portfolio portfolio={portfolio} />
        </section>

        <section  id="contact" className="container section-columns">
          <div className="contact-left">
            <p>Say Hi!</p>
            <a className="h5" href="instagram.com/aerion.studio">Instagram</a>
            <div className="mail-container">
              <p>Drop us a line with your ideas</p>
              <div className="fromLeft h1 underline">
                  <a href="mailto:hello@aerion.studio">hi@aerion.studio</a>
              </div>
            </div>
          </div>
          <div>
            <Contact />
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.article`
  margin-bottom: 10rem;
 
  @media screen and (min-width: ${setBreakpoint.small}) {
    .section-columns {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 4rem;
    }

    .columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
    }
  }
  
  .mw-600 {
    max-width: 70rem;
    margin: auto;
  }

  .container {
    ${setContainer()}
  }

  .contact-left {
    p {
      font-size: 1.8rem;
    }
  }

  .mail-container {
    margin-top: 5rem;
  }

  .underline { 
      display:inline-block; 
      margin:0;

      a {
          display: block;
          margin-bottom: 1.3rem;
      }
  }

  .underline:after {
      display:block;
      content: '';
      border-bottom: solid 2px ${setColor.alpha};  
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
  }

  .underline:hover:after {transform: scaleX(1);}
  .underline.fromLeft:after{transform-origin:  0% 50%;}

  .p-y {
      padding: 10rem 0;
  }

  .mb-5 {
      margin-bottom: 5rem;
  }

  .mb-10 {
      margin-bottom: 10rem;
  }

  .light-btn {
    background-color: ${setColor.sigma};
    border: none;
    color: ${setColor.delta_1}; 
  }

  .light-btn:hover {
    color: ${setColor.alpha};  
  }
`

export default IndexPage
