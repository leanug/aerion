import React from 'react'
import Work from './Work'
import styled from 'styled-components'
import { setBreakpoint, setGrid } from '../../constants/styles'

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
  @media screen and (min-width: ${setBreakpoint.small} ) {
    ${setGrid({gap: 0, min: '60rem'})}
  }
`

export default index;