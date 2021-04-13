import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import styled from 'styled-components'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {setColor, setTransition} from '../styles'

const Slider = ({images}) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
        const lastIndex = images.length - 1
        if(index < 0) setIndex(lastIndex)
        if(index > lastIndex) setIndex(0)
    }, [index, images])

    return (
        <Background image={images[index]}>
            <Wrapper>
                <button 
                    className="prev"
                    type="button" 
                    onClick={() => setIndex(index - 1)} 
                >
                    <BsChevronLeft />
                </button>
               <button 
                    className="next"
                    type="button"
                    onClick={() => setIndex(index + 1)} 
                >
                    <BsChevronRight />
                </button>
                
                <div className="dots">
                    {images.map((_, btnIndex) => {
                        return (
                            <span 
                                key={btnIndex} 
                                onClick={() => setIndex(btnIndex)}
                                className={index === btnIndex ? 'active' : undefined}>
                            </span>
                        )
                    })}
                </div>
            </Wrapper>
        </Background>
    )
}

const Wrapper = styled.div`
    /* Next & previous buttons */
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 10rem 1fr 10rem;
    grid-template-areas:
        "a b c"
        "d e f"
        "g h i";

    .prev,
    .next {
        background: transparent;
        color: ${setColor.sigma};
        height: 6rem;
        width: 5rem;
        cursor: pointer;
        font-size: 3rem;
        line-height: 1;
        ${setTransition()};
    }

    svg{
        display: block;
        margin: auto;
    }

    .prev {
        align-self: center;
        border-radius: 50%;
        grid-area: d;
        margin-left: 3rem;
    }

    .next {
        border-radius: 50%;
        grid-area: f;
        margin-right: 3rem;
    }

    .dots {
        grid-area: h;
        text-align: center;
        width: 100%;
    }

    .dots > span {
        background-color: ${setColor.sigma};
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 14px;
        margin: 0 0.7rem;
        ${setTransition()};
        width: 14px;
    }

    .dots > .active, 
    .dots > span:hover {
        opacity: .3;
    }
`

export default Slider