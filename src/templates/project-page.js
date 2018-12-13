import React from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Launch } from '../icons/launch.svg'

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
  font-size: 1.61572rem;
  margin-left: 24px;
`
const Creator = styled.h3`
  margin-bottom: 1.05rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.0075em;
  font-size: 1.1rem;
  margin-left: 24px;
  color: rebeccapurple;
`

const Body = styled.div`
  font-size: 0.94rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.6rem;
  font-weight: normal;
  text-align: justify;
  margin-left: 24px;
  margin-right: 24px;
`

const Buttons = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 1.05rem;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding-top: 1.05rem;
  & a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    & div {
      margin-left: 8px;
    }
    &:hover {
      fill: rgba(140, 101, 179);
      color: rgba(140, 101, 179);
    }
  }
`

const Project = ({ data }) => {
  const project = data.markdownRemark
  const {
    title,
    screenshot,
    githubURL,
    projectURL,
    createdBy,
  } = project.frontmatter
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
        <Title>{title}</Title>
        <Creator>{createdBy}</Creator>
        <Buttons>
          <a href={githubURL} target="_blank">
            <GitHub height="22px" />
            <div>Source</div>
          </a>
          <a href={projectURL} target="_blank">
            <Launch height="24px" />
            <div>Visit Site</div>
          </a>
        </Buttons>
        <Img
          fluid={screenshot.childImageSharp.fluid}
          style={{ marginBottom: '2rem' }}
        />
        <Body dangerouslySetInnerHTML={{ __html: project.html }} />
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
        githubURL
        projectURL
        description
        createdBy
        screenshot {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project
