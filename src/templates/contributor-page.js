import React from 'react'

import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  max-width: 560px;
  width: 80vw;
  margin-bottom: 1rem;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  margin-top: 1.6rem;
  margin-bottom: 0.4rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.0075em;
  font-size: 1.32rem;
`

const Body = styled.div`
  font-size: 0.85rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
`

const Date = styled.div`
  color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  font-size: 0.94rem;
  margin-bottom: 0.6rem;
  align-self: center;
`

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2rem;
  & p {
    font-size: 0.8rem;
  }
  & h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    margin-top: 0.6rem;
  }
`

const ContributorPage = ({ data }) => {
  const author = data.authorYaml
  return (
    <Layout>
      <SEO title="Contributor" keywords={['gatsby', 'application', 'react']} />
      <Author>
        <Img fixed={data.avatar.childImageSharp.fixed} />
        <h2>{author.id}</h2>
        <p>{author.bio}</p>
      </Author>
      <PostContainer>
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            author.id === node.frontmatter.author.id && (
              <StyledLink to={node.fields.slug} key={node.fields.slug}>
                <Title>{node.frontmatter.title}</Title>
                <Date>on {node.frontmatter.date}</Date>
                <Body>{node.excerpt}</Body>
              </StyledLink>
            )
        )}
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $avatar: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            author {
              id
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    authorYaml(fields: { slug: { eq: $slug } }) {
      bio
      id
      avatar
    }
    avatar: file(relativePath: { eq: $avatar }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ContributorPage
