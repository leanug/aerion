import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SEO from "../components/SEO"
import {setContainer} from '../constants/styles'

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO 
            description="404 - age not found"
            title="age not found"
            />
            <Wrapper>
                <h1>404</h1>
                <h3>Page not found</h3>
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

export default NotFoundPage
