import React from 'react'
import {Link} from 'gatsby'
import {AiOutlineMenu} from 'react-icons/ai'
import styled from 'styled-components'
import { 
  setColor,
  setFont,
  setBreakpoint,
  setTransition} from '../constants/styles'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      <div className="logo-wrap">
        <Link to="/" className="h3">Aerion.</Link>
      </div>
      <button aria-label="menu toggle" onClick={toggleSidebar}>
        <AiOutlineMenu />
      </button>
    </Nav>
  )
}

const Nav = styled.header`
  align-items: center;
  background: transparent;
  display: flex;
  font-family: ${setFont.primaryFont};
  font-weight: 700;
  justify-content: space-between;
  min-height: 9rem;
  padding: 0 2rem;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 10;

  @media screen and (min-width: ${setBreakpoint.small}) {
    padding: 0 4rem;
  }

  .logo-wrap {
    align-items: center;
  }
  
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 3rem;
    line-height: 1;
    margin-left: 3rem;
    padding: 0;
    ${ setTransition() };
    width: min-content;
    height: 26px;
  }

  button:hover {
    color: ${setColor.alpha};
  }

`

export default Navbar