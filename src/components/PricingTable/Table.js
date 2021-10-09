import React from 'react'
import { BiCheck } from 'react-icons/bi'
import styled from 'styled-components'

const Table = ({ data }) => {
  return (
    <Wrapper>
      <header>
        <span className="price">{ data.price }</span>
        <span>{ data.pack }</span>
      </header>
      <p className="text">{ data.text }</p>
      <hr className="line" />
      <ul className="list-group">
        { data.options.map(( option, index ) => {
          return (
            <li key={ index }>
              <div className="icon-wrapper"><BiCheck /></div>
              <div>{ option }</div>
            </li>
          )
        })}
      </ul>
      <a 
        href="#contact"
        className="button bg-dark" 
      >
        { data.buttonText }
      </a>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  border-radius: var(--radius-beta);
  background-color: white;
  filter: var(--shadow);
  padding: 4rem 4rem 5rem 4rem;

  header {
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
  }

  .button {
    display: block;
    text-align: center;
    width: 100%;
  }

  .price { 
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 5rem;
    letter-spacing: -3px;
    line-height: 1;
    margin-right: 1.5rem;
  }

  h4 {
    margin: 2rem 0;
  }

  .text {
    color: var(--clr-delta);
    font-size: 1.4rem;
  }

  .time {
    font-family: var(--secondary-font);
    font-weight: 600;
  }

  .line {
    border: 1px solid var(--clr-omega);
    margin: 2.5rem 0;
  }

  a:hover {
    text-decoration: none;
  }

  ul { 
    list-style: none; 
  }

  .icon-wrapper {
    align-items: center;
    background-color: var(--clr-beta);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    height: 2rem;
    margin-right: 1rem;
    margin-top: -1px;
    width: 2rem;
  }

  li {
    display: flex;
    font-size: 1.4rem;

    svg {
      color: var(--clr-alpha);
      font-size: 2rem;
    }
  }

  li:not(:last-child) { 
    margin-bottom: 1rem; 
  }

  .list-group {
    margin-bottom: 3.5rem;
  }
`

export default Table
