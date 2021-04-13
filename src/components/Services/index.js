import React from 'react'
import styled from 'styled-components'
import Service from './Service'

const Services = ({services}) => {
    return (
        <Wrapper>
            <div className="services-row">
                {services.map((service, i) => {
                    return (
                        <Service key={i} service={service} />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .services-row {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
        grid-gap: 3rem;
    }
`

export default Services;