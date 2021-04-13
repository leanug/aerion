import React from 'react'
import styled from 'styled-components'
import { 
    setContainer, 
    setGridGap } from '../constants/styles'

const Footer = () => {
    return (
        <Wrapper>
          <div className="container">
              <div className="cols">
                    <div className="h4">
                        Aerion.
                    </div>
                    <div className="right">
                        <span>
                            &copy; { new Date().getFullYear() } Todos los derechos reservados.
                        </span>
                    </div>
                </div>
          </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;

    .container {
      ${setContainer()}
    }

    .cols {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax( 20rem, 1fr ));
        grid-gap: ${ setGridGap.gridGapGamma };
        margin: 1rem 0;

        div {
            display: flex;
            align-items: center;

            &.right {
                justify-self: flex-end;
            }
        }
    }
`

export default Footer
