import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SEO from "../components/SEO"
import {setContainer} from '../constants/styles'

const ThankYouPage = () => {
    return (
        <Layout>
            <SEO 
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
    ${setContainer.container};

    div {
        margin-top:3rem;
    }
`

export default ThankYouPage
