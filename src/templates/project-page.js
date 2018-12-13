import React from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Launch } from '../icons/launch.svg'
import { ReactComponent as ArrowRight } from '../icons/arrow_right.svg'
import { ReactComponent as ArrowLeft } from '../icons/arrow_left.svg'
import { ReactComponent as Linkedin } from '../icons/linkedin.svg'
import { ReactComponent as Twitter } from '../icons/twitter.svg'

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
  display: flex;
  ${'' /* flex-direction: column; */}
  & svg {
    cursor: pointer;
    margin: 0 6px 0 0px;
  }
`

const CreatorName = styled.div`
  margin: 0 1.2rem 0px 0px;
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

const Project = ({ data, pageContext: { prev, next } }) => {
  const project = data.markdownRemark
  console.log(prev, next)
  const {
    title,
    screenshot,
    githubURL,
    projectURL,
    createdBy,
    linkedIn,
    github,
    twitter,
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
        <Creator>
          <CreatorName>{createdBy}</CreatorName>
          <div>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHub height="22px" />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <Twitter height="22px" fill="#1DA1F2" />
              </a>
            )}
            {linkedIn && (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin height="22px" fill="#0077B5" />
              </a>
            )}
          </div>
        </Creator>
        <Buttons>
          {githubURL && (
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <GitHub height="22px" />
              <div>Source</div>
            </a>
          )}
          {projectURL && (
            <a href={projectURL} target="_blank" rel="noopener noreferrer">
              <Launch height="24px" />
              <div>Visit Site</div>
            </a>
          )}
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
        linkedIn
        github
        twitter
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
