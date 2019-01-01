import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(102,51,153);
  background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
  color: white;
  font-family: 'Roboto', sans-serif;
`

const Subscribe = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & h3 {
    margin: 10px;
  }
  & h4 {
    margin: 10px;
    font-weight: normal;
  }

  & input {
    height: 44px;
    font-size: 18px;
    padding: 0px;
    padding-left: 10px;
    color: rebeccapurple;
    width: 240px;
    margin-right: 10px;
    border: none;
    border-radius: 2px;
    box-sizing: border-box;
    transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
    outline: none;
    &:hover,
    &:focus {
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08),
        0 6px 12px rgba(0, 0, 0, 0.08);
      transform: translateY(-3px);
    }
  }

  
  & input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    background-color: white !important;
    background-image: none !important;
    -webkit-text-fill-color: rebeccapurple !important;  
   }

  & button {
    font-size: 18px;
    height: 44px;
    cursor: pointer;
    padding: 0 10px;
    border: none;
    background: white;
    outline: none;
    box-sizing: border-box;
    color: rebeccapurple;
    transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    &:hover,
    &:focus {
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08),
        0 6px 12px rgba(0, 0, 0, 0.08);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 1024px) {
  
    flex-direction:column;
    
  
    & input {
      width: 200px;
    }

    & button {
      padding: 0px 5px;
    }
    & h3 {
      margin: 10px;
    }
    & h4 {
      text-align:center;
      margin: 10px;
      font-weight: normal;
    }
  
  }
`

const Terms = styled.div`
  display: flex;
  justify-content: center;
`

const TermsLink = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  margin-right: 10px;
  cursor: pointer;
  color: #cccccc;
  padding: 10px 0px;
  &:hover {
    color: #fff;
  }
`
 const Footer = ()=>(
        <Foot>
        <Subscribe>
          <div>
            <h4>{'Eulercoder Newsletter'.toUpperCase()}</h4>
            <h3>Subscribe for all the latest posts</h3>
          </div>
          <form action="https://eulercoder.us3.list-manage.com/subscribe/post?u=4dcb96f48ac8cb31e6ad01138&amp;id=ba0a5febe9" method="post">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your@email.com" spellcheck="false" required/>
            <button type="submit">Subscribe</button>
          </div>
          </form>
        </Subscribe>
        <Terms>
        <TermsLink>Terms & Conditions</TermsLink>
        <TermsLink>Privacy Policy</TermsLink>
        </Terms>
        </Foot>
)

export default Footer