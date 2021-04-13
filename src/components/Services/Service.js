import React from 'react'
import styled from 'styled-components'
import { CgWebsite } from 'react-icons/cg'
import { setColor, setRadius } from '../../constants/styles'

const Service = ({service}) => (
    <Wrapper>
        <div>
            {service.icon}
        </div>
        <p className="h5">{service.title}</p> 
        <p>{service.text}</p> 
    </Wrapper>
)

const Wrapper = styled.div`
    .h5 {
        margin: 3rem 0;
    }

    p:last-child {
        margin-bottom: 0;
    }

    div {
        box-shadow: 0 6px 24px -2px rgba(119, 139, 165, 0.2);
        color: ${setColor.alpha};
        ${setRadius.rounded}
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;
        height: 8rem;
    }
`

export default Service;