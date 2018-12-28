import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as Arrow } from '../icons/arrow.svg'

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

const Author = styled(Link)`
  color: black;
  border-bottom: 2px #7776 solid;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #7776;
    border-bottom: none;
    border-bottom: 2px transparent solid;
  }
`

const Navigation = styled.div`
  display: flex;
  width: 100%;
`

const StyledNext = styled(Link)`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  & h4 {
    color: black;
    margin: 0;
    font-size: 1.1rem;
    word-break: break-word;
    width: 220px;
    &:hover {
      background: #7776;
    }
  }
  & p {
    margin: 0;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  }
`
const Left = styled(StyledNext)`
  & svg {
    transform: rotate(180deg);
  }
  &:hover {
    & svg {
      transform: rotate(180deg) translate(5px);
    }
  }
  & div {
    display: flex;
    margin-left: -24px;
  }
`

const Right = styled(StyledNext)`
  margin-left: auto;
  & svg {
    transform: rotate(0deg);
  }
  &:hover {
    & svg {
      transform: rotate(0deg) translate(5px);
    }
  }
  & div {
    display: flex;
    margin-right: -24px;
  }
`

const Blogs = ({ data, pageContext: { prev, next } }) => {
  const post = data.markdownRemark
  const { author, date, title } = post.frontmatter
  // const siteTitle = title
  // const { previous, next } = pathContext
  const disqusShortname = 'vicky002'
  const disqusConfig = {
    identifier: post.id,
    title: title,
  }
  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SEO title={title} />
      <Container>
        <Date>
          <Author to={author.fields.slug}>{author.id}</Author> on {date}
        </Date>
        <Title>{title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
        <Navigation>
          {prev && (
            <Left to={prev.fields.slug}>
              <p>Previous</p>
              <div>
                <Arrow />
                <h4>{prev.frontmatter.title}</h4>
              </div>
            </Left>
          )}
          {next && (
            <Right to={next.fields.slug}>
              <p>Next</p>
              <div>
                <h4>{next.frontmatter.title}</h4>
                <Arrow />
              </div>
            </Right>
          )}
        </Navigation>
        <ul>
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author {
          fields {
            slug
          }
          id
        }
      }
    }
  }
`

export default Blogs
