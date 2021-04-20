import React from 'react'
import Links from './Links'
import {IoMdClose} from 'react-icons/io'
import styled from 'styled-components'
import {setColor, setBreakpoint} from '../constants/styles'

const Sidebar = ({isOpen, toggleSidebar}) => (
    <Wrapper 
      className={`${ isOpen ? 'sidebar showSidebar' : 'sidebar' }`}
      aria-label="Main sidebar containing navigation links"
    >
      <div className="sidebar-content">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      </div>
      <div className="btn-container">
        <button aria-label="menu toggle" onClick={toggleSidebar} className="close-btn">
          <IoMdClose />
        </button>
      </div>
    </Wrapper>
)

const Wrapper = styled.aside`
    align-items: flex-start;
    display: flex;
    padding: 4rem 2rem;

    @media screen and (min-width: ${setBreakpoint.small}) {
      padding: 4rem 5rem;
    }

    &.sidebar {
      background-color: ${setColor.delta_1};
      left: 0;
      width: 100vw;
      overflow-x: hidden;
      position: fixed;
      transition: all 0.2s ease-out;
      transform: translateY(-100%);
      top: 0;
      z-index: 999;

      a {
        color: ${setColor.sigma};
        font-size: 1.6rem;
      }

      .btn-container {
        display: flex;
        justify-content: flex-end;
      }

      .close-btn {
        background-color: transparent;
        border: none;
        color: ${setColor.sigma};
        cursor: pointer;
        font-size: 3rem;
        transition: all 0.2s ease-out;
      }

      .close-btn:hover {
        color: ${setColor.alpha};
      }

      .sidebar-content {
        width: 100%;
        align-items: center;
      }

      &.showSidebar {
        transition: all 0.2s ease-out;
        transform: translateX(0);
      }
    }
`

export default Sidebar