import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Seo from "../components/SEO"

const ThankYouPage = () => {
    return (
        <Layout>
            <Seo 
                description="Success! Thank you for your submission!"
                title="Success! Thank you"
            />
            <Wrapper>
                <h1>Contact</h1>
                <h3>Thank you for your submission!</h3>
                <div>
                    <Link to="/" className="btn">Home</Link>
                </div>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.section`
    margin: 14rem 0;  
    text-align: center;
`

export default ThankYouPage