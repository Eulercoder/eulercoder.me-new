import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Linkedin } from '../icons/linkedin.svg'
import { ReactComponent as Twitter } from '../icons/twitter.svg'
import { ReactComponent as Facebook } from '../icons/facebook.svg'

const Top = styled.div`
    text-align:center; 
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #663399;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    & .name-email {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; 
    }
    & input {
        width: 20vw;
    }
    & textarea {
        width: 43vw;
        min-height: 200px;
        resize: vertical;
    }
    & input, textarea {
        padding: 10px;
        margin: 20px 20px;
        border: none;
        border-radius: 2px;
        box-shadow: 0 5px 15px rgba(0,0,0,.2);
    }
    @media (max-width:1024px) {
        & .name-email {
            flex-direction: column;
        }
        & input, textarea {
            width: 60vw;
        }
    }
    & input[type="submit"] {
        background: white;
        color: #663399;
        font-weight: bold;
        width: 18vw;
        outline: none;
        & :active {
            opacity:0.9;
            transform: scale(0.99);
        }
    }

`

const Socialize = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 300px;
    margin: auto;
`

const handleSubmit = (e)=>{
    e.preventDefault();
} 
const ContactUs = ()=> {
   
   return( 
    <Layout>
    <SEO title="Contact Us" />
    <Top>
    <Socialize>  
    <Link to="https://github.com/Eulercoder">  
    <GitHub   height={50} />
    </Link>
    <Link to="https://twitter.com/eulercoder">
    <Twitter  height={50} /> 
    </Link>
    <Link to="https://www.linkedin.com/company/eulercoder?trk=company_home_typeahead_result">  
    <Linkedin height={50} />
    </Link>
    <Link to="https://facebook.com/eulercoder">
    <Facebook height={50} />
    </Link>
    </Socialize>
    <h1>Hello.</h1>
    <p>We are all ears!</p>
    </Top>
    <Form onSubmit={(e)=>handleSubmit(e)}>
        <div className="name-email">
        <input type="text" placeholder="Name..." name="name" />
        <input type="email" placeholder="Email..." name="email" />
        </div>
        <textarea name="message" placeholder="Your Message..." ></textarea>
        <input type="submit" value="Send" />
    </Form>    
    </Layout>
)

}

export default ContactUs