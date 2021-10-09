import React from 'react'
import styled from 'styled-components'

const Contact = () => (
    <Wrapper>
        <form 
            name="Contact Form" 
            method="POST" 
            data-netlify="true"
            action="/thank-you"
        >
            <input type="hidden" name="form-name" value="Contact Form" />
            <label>Name
            <input 
                type="text" 
                name="name"
                placeholder="Name"
            />
            </label>
            <label>Email
            <input 
                type="email" 
                name="email"
                placeholder="Email"
            />
            </label>
            <label>Message
            <textarea 
                placeholder="Message" 
                name="message" 
                rows="5" 
            ></textarea>
            </label>
            <button aria-label="Send message" className="button bg-dark" type="submit">Send Message</button>
        </form>
    </Wrapper>
)

const Wrapper = styled.div`
    background-color: white;
    border-radius: 1rem;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.1));
    padding: 3rem;

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
    textarea {
        border: 1px solid var(--clr-gamma);
        border-radius: 0.5rem;
        font-size: 1.6rem;
        margin-top: .5rem;
        padding: 1.5rem;
        width: 100%;
    }

    .button {
        cursor: pointer;
        padding: 1.7rem 3rem;
        margin-top: 0.5rem;
    }
`

export default Contact;