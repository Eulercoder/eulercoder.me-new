import { Link } from 'gatsby'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: white;
  padding: 1.4rem 4rem;
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 760px;
  width: 80vw;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  @media (max-width:728px) {
    width: 90vw;
    padding: 1.4rem 2rem;
  }
  margin-top: 20px;
  &:hover {
    box-shadow: 0 10px 42px rgba(25, 17, 34, 0.1);
    transform: translateY(-4px);
  }
  &:active {
    box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
    transform: translateY(0px);
  }
  
`
export const Title = styled.h2`
  margin-top: 1.6rem;
  margin-bottom: 1.05rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.0075em;
  font-size: 1.51572rem;
`
export const Date = styled.div`
  color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  font-size: 0.94rem;
  margin-bottom: 2.1rem;
`
export const Body = styled.div`
  font-size: 0.94rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.6rem;
  font-weight: normal;
`

export const Author = styled.span`
  color: black;
  border-bottom: 2px #7776 solid;
  &:hover {
    background: #7776;
    border-bottom: none;
    border-bottom: 2px transparent solid;
  }
  & link {
    text-decoration: none;
  }
`

const Blog = ({ title, date, excerpt, link, author, authorLink }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        <Title>{title}</Title>
        <Body>{excerpt}</Body>
        <Date>
          <Author>
            <Link to={authorLink} style={{ textDecoration: 'none', color: '#000' }}>
              {author}
            </Link>
          </Author>{' '}
          on {date}
        </Date>
      </Container>
    </Link>
  )
}

export default Blog
