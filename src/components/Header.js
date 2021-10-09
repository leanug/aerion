import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Header className="wrapper-fluid">
            <div>
                <span className="logo">Aerion.Studio</span>
            </div>
            <div style={{ fontSize: '1.2rem' }}>
                ETH and USDC accepted
            </div>
        </Header>
    )
}

const Header = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 10rem;
    justify-content: space-between;
    transition: color 0.3s linear;

    .logo {
        display: flex;
        font-size: 2rem;
        font-weight: 700;
    }
`

export default Navbar