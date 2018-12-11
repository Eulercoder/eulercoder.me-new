import React from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 760px;
`

const Title = styled.h2`
  margin-top: 1.6rem;
  margin-bottom: 1.05rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.0075em;
  font-size: 1.51572rem;
`
const Date = styled.div`
  color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  font-size: 0.94rem;
  margin-bottom: 2.1rem;
  align-self: center;
`
const Body = styled.div`
  font-size: 0.94rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.6rem;
  font-weight: normal;
`

const Author = styled.span`
  color: black;
  border-bottom: 2px #7776 solid;
  &:hover {
    background: #7776;
    border-bottom: none;
    border-bottom: 2px transparent solid;
  }
`
const Blogs = ({
  location: {
    state: {
      post: { title, date, body, author },
    },
  },
}) => (
  <Layout
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <SEO title="Blogs" />
    <Container>
      <Date>
        <Author>{author}</Author> on {date}
      </Date>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  </Layout>
)

export default Blogs
