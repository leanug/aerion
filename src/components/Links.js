import React from 'react';
import links from '../constants/links'
import {setColor} from "../constants/styles"
import styled from 'styled-components'

const Links = () => {
    return (
        <Wrapper>
            {links.map((link, index) => {
                const {url, title} = link
                return(
                    <a 
                        className="nav-link"
                        key={index} 
                        href={url}
                    >
                        {title}
                    </a>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-auto-flow: row;
    justify-content: left;
   
    a {
        display: block;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: all 0.2s ease-out;
        outline: none;
    }

    a:hover {
        color: ${setColor.alpha};
        opacity: 1;
    }
`

export default Links;