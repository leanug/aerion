/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import BackToTopBtn from './BackToTopBtn'
import GlobalStyles from './GlobalStyles'
import Footer from './Footer'
import Header from './Header'
import 'normalize.css'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Layout = ({ children }) => {  
  return (
    <>
      <GlobalStyles />
      <BackToTopBtn />
      <PageWrapper>
        <Header />
        <main>
          { children }
        </main>
        <Footer />
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout