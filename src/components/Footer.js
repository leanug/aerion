import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper className="section-mt">
            <div className="wrapper">
                <div>
                    <span style={{ fontWeight: '700' }}>Aerion.Studio</span>
                </div>
                <div>
                    <span style={{ marginRight: '2rem' }}> <a href="https://www.instagram.com/aerion.studio/">Instagram</a></span>
                    <span><a href="https://www.fiverr.com/leanug/create-a-responsive-and-fast-website">Fiverr Gig</a></span>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--clr-psi);
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media screen and ( min-width: 576px ) {
        .wrapper {
            display: flex;
            justify-content: space-between;
        }
    }

    span {
        color: var(--clr-omega);
    }

    a {
        color: var(--clr-omega);
        font-size: 1.4rem;    
    }
`

export default Footer
