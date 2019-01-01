import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Linkedin } from '../icons/linkedin.svg'
import { ReactComponent as Twitter } from '../icons/twitter.svg'
import { ReactComponent as Facebook } from '../icons/facebook.svg'

const Top = styled.div`
    text-align:center; 
    & h1 {
        text-align: center;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #663399;
    background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
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
        outline: none;
    }
    & textarea {
        width: 43vw;
        min-height: 200px;
        resize: vertical;
        outline: none;
    }
    & input, textarea {
        padding: 10px;
        margin: 20px 20px;
        border: none;
        border-radius: 2px;
        box-shadow: 0 5px 15px rgba(0,0,0,.2);
    }
    & input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        background-color: rgb(255, 0, 0) !important;
        background-image: none !important;
          
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
        font-size: 1em;
        font-weight: bold;
        width: 14vw;
        outline: none;
        cursor:pointer;
        transition: all 0.1s ease;
        position:relative;
        top:0px;
        & :active {
            opacity:0.9;
            transform: scale(0.99);
        }
        & :hover {
            position:relative;
            top:-2px;
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
 
const ContactUs = ()=> {
   
   return( 
    <Layout>
    <SEO title="Contact Us" />
    <Top>
    <Socialize>  
    <a href="https://github.com/Eulercoder" target="_blank" rel="noopener noreferrer">  
    <GitHub   height={50} />
    </a>
    <a href="https://twitter.com/eulercoder" target="_blank" rel="noopener noreferrer">
    <Twitter  height={50} /> 
    </a>
    <a href="https://www.linkedin.com/company/eulercoder?trk=company_home_typeahead_result" target="_blank" rel="noopener noreferrer">  
    <Linkedin height={50} />
    </a>
    <a href="https://facebook.com/eulercoder" target="_blank" rel="noopener noreferrer">
    <Facebook height={50} />
    </a>
    </Socialize>
    <h1>Hello.</h1>
    <p>We are all ears!</p>
    </Top>
    <Form action="" method="post">
        <div className="name-email">
        <input type="text" name="contactname" placeholder="Name..."  />
        <input type="email" name="contactemail" placeholder="Email..." />
        </div>
        <textarea name="contactmessage" placeholder="Your Message..." ></textarea>
        <input type="submit" value="Send" />
    </Form>    
    </Layout>
)

}

export default ContactUs