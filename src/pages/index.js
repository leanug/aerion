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
    lake: file(relativePath: {eq: "lake.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    house: file(relativePath: {eq: "house.jpg"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    images: allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {images: {edges: portfolioImages}} = data

  const portfolioFluid = portfolioImages.map(item => (
    item.node.childImageSharp.fluid
  ))

  return (
    <Layout>
      <SEO 
        description="Find out everything you need about the great real estate development project in Colonia del sacramento."
        title="Home"
      />

      <Wrapper>
        <section>
          <Hero />
        </section>

        <section className="container">
            <Title title="Our Services" />
            <div>
              <Services services={services} />
            </div>
        </section>

        <section className="mb-10">
          <Portfolio portfolio={portfolio} />
        </section>

        <section className="container section-columns">
            <div className="contact-left">
                <p>Say Hi!</p>
                <a className="h5" href="instagram.com/aerion.studio">Instagram</a>
                <div className="mail-container">
                  <p>Drop us a line with your ideas</p>
                  <div class="fromLeft h1">
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

  section {
      margin-bottom: 10rem;
  }
  
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

  .h1 { 
      display:inline-block; 
      margin:0;

      a {
          display: block;
          margin-bottom: 1.3rem;
      }
  }

  .h1:after {
      display:block;
      content: '';
      border-bottom: solid 2px ${setColor.alpha};  
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
  }

  .h1:hover:after { transform: scaleX(1); }
  .h1.fromLeft:after{  transform-origin:  0% 50%; }
`

export default IndexPage
