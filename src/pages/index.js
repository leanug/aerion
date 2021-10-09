import React from 'react'
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import PricingTable from "../components/PricingTable"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/SEO'
import styled from 'styled-components'
import { graphql } from 'gatsby'

export const query = graphql`
    {
        placeholderImage1: file(relativePath: { eq: "img1.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                )
            }
        }
        placeholderImage2: file(relativePath: { eq: "img2.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    height: 651
                    
                    placeholder: BLURRED
                )
            }
        }
    }
`

const IndexPage = ({ data }) => {
    const { 
        placeholderImage1,
        placeholderImage2,
    } = data;
    const image1 = getImage( placeholderImage1 )
    const image2 = getImage( placeholderImage2 )

    return (
        <Layout>
            <Seo />
            <article className="wrapper mt-100 section-mb">
                <SectionColumns className="section-mb">
                    <div>
                        <h1>
                            Affordable and high conveting <span className="text-alpha">Landing Pages</span> 
                        </h1>
                        <p style={{ marginTop: '2rem', marginBottom: '3.2rem' }}>
                            Increase the conversion rates of your marketing campaings with a professional 
                            and fast loading landing page.
                        </p>
                        <a href="#contact" style={{ marginRight: '2rem' }} className="button bg-alpha">Contact</a>
                        <a href="https://www.fiverr.com/leanug/create-a-responsive-and-fast-website">
                            Hire us on Fiverr
                        </a>
                    </div>
                    <GatsbyImage 
                        className="border-radius-alpha" 
                        image={ image1 } 
                        alt="Landing page mockup"
                    />
                </SectionColumns>

                <section className="section-mb">
                    <h2 style={{ maxWidth: '70rem', margin: '0 auto', textAlign: 'center', marginBottom: '5rem' }}>
                        We adapt to every budget
                    </h2>
                    <PricingTable />
                </section>

                <SectionColumns className="section-mb">
                    <GatsbyImage 
                        image={ image2 } 
                        alt="Landing page example" 
                    />
                    <div>
                        <h3 style={{ marginBottom: '2rem' }}>
                            What you will get?
                        </h3>
                        <List>
                            <li>A landing page perfectly structured that follows 
                                all the development principles to make it effective.</li>
                            <li>An eye catching header with a state value proposition and visual focus.</li>
                            <li>Optimal site performance verified with Google Lighthouse for SEO purposes.</li>
                            <li>A focused call to action.</li>
                            <li>Intuitive design that is completely hassle-free for users.</li>
                        </List>
                        <p style={{ margin: '2rem 0' }}>
                            Host our landing pages for free on <a href="https://www.netlify.com">Netlify.com</a><br />
                            We can help you to set everything up.
                        </p>
                        <p>
                            Please let us know if you need anything else, 
                            like a <b>multipage website</b> with a <b>CMS</b>.
                        </p>
                    </div>
                </SectionColumns>
            
                <section id="contact" className="section-margin">
                    <ContactGrid>
                        <div>
                            <p style={{ marginBottom: '1rem' }}>Say Hi!</p>
                            <a style={{ fontWeight: '700', fontSize: '2rem' }} href="https://www.instagram.com/aerion.studio">Instagram</a>
                            <div style={{ marginTop: '3rem' }}>
                                <p style={{ marginTop: '3rem' }}>Drop us a line</p>
                                <Mail href="mailto:hello@aerion.studio">
                                    hi@aerion.studio
                                </Mail>
                            </div>
                        </div>
                        <Contact />
                    </ContactGrid>
                </section>
            </article>
        </Layout>
    )
}

const ContactGrid = styled.div`
    display: grid;
    grid-gap: 6rem;
    grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
`

const List = styled.ul`
    line-height: 2em;
    text-indent: 5px;
    list-style-position: outside;
    margin-left: 1.6rem;
    font-size: 1.6rem;

    li:not(:last-child) {
        margin-bottom: 1rem;
    }
`

const Mail = styled.a`
    font-size: 4rem;
    font-weight: 700;

    @media screen and ( max-width: 576px ) {
        font-size: 2rem;
    }
`

const SectionColumns = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 3rem 8rem;
    align-items: center;
    
    @media screen and ( max-width: 768px ) {
        div {
            margin-top: 3rem;
        }
    }
`

export default IndexPage
