import React from 'react'
import styled from 'styled-components'
import {setColor, setBreakpoint} from '../../constants/styles'

const Work = ({img, url, title}) => {
  return (
    <Wrapper>
      <a href={url} className="link">
        <img src={img} className="img" />
        <div className="overlay">
          <div className="h3">{title}</div>
        </div>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  line-height: 0;

  .h3 {
    color: ${setColor.sigma};
  }

  &:hover .overlay {
    opacity: 0.9;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: rgba(0,0,0, 0.4);    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    color: ${setColor.sigma};
    text-align: center;
    transition: .5s ease;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  @media screen and (max-width: ${setBreakpoint.small}) {
    .overlay {
      opacity: 1;
    }
  }
`

export default Work
