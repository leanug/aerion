import React from 'react'
import styled from 'styled-components'
import { 
    setColor, 
    setRadius } from '../constants/styles'

const Contact = () => (
    <Wrapper>
        <form>
            <label>
                Name
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Name"
                />
            </label>
            <label>
                Email
                <input 
                    type="email" 
                    name="name"
                    className="form-control"
                    placeholder="Email"
                />
            </label>
            <label>
                Message
                <textarea 
                    placeholder="Message" 
                    name="message" 
                    rows="5" 
                    className="form-control"
                ></textarea>
            </label>
            <button aria-label="Send message" className="btn dark" type="submit" value="Send">Send Message</button>
        </form>
    </Wrapper>
)

const Wrapper = styled.section`
    label {
        display: block;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

   .info-data > p {
        display: flex;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea
    {
        background-color: ${ setColor.sigma };
        border: 1px solid ${ setColor.tau };
        ${setRadius.beta}
        color: ${ setColor.delta_2 };
        font-size: 1.6rem;
        margin-top: .5rem;
        padding: 1.5rem;
        width: 100%;
    }

    .btn {
        cursor: pointer;
        padding: 1.7rem 3rem;
        margin-top: 0.5rem;
    }
`

export default Contact;