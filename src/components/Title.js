import React from "react"
import styled from 'styled-components'
import { setColor, setFont } from "../constants/styles"

const Title = ({ title, text, styleClass }) => {
  return (
    <Wrapper className={styleClass || 'left'}>
      <h2 className="h1">{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > p {
    font-family: ${setFont.primaryFont};
    letter-spacing: 1px;
    margin-top: 2rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  &.sigma > h2 {
    color: ${setColor.sigma};
  }
`

export default Title