import React from 'react'
import Work from './Work'
import styled from 'styled-components'
import {setBreakpoint} from '../../constants/styles'

const index = ({portfolio}) => {
  return (
    <Wrapper>
      {portfolio.map((project, index) => {
        return <Work key={index} { ...project } />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: ${setBreakpoint.small} ) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

export default index;