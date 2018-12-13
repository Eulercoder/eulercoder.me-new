import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Launch } from '../icons/launch.svg'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 32px;
  justify-items: center;
  margin-top: 40px;
`

const Project = styled.div`
  cursor: pointer;
  & h4 {
    margin-bottom: 0.4rem;
    margin-top: 0;
    font-size: 1.1rem;
  }
  & p {
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  }
  & div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  & a {
    z-index: 1000;
  }
  & svg:hover {
    fill: rgba(140, 101, 179);
  }
  &:hover {
    & h4 {
      color: rgba(140, 101, 179);
    }
  }
`

const StyledImg = styled(Img)`
  box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  margin-bottom: 0.4rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
`

const ProjectPage = ({ data }) => (
  <Layout style={{ maxWidth: 1200, width: '80%' }}>
    <SEO title="Projects" />
    <Grid>
      {data.allMarkdownRemark.edges.map(
        ({
          node: {
            frontmatter: {
              title,
              screenshot,
              githubURL,
              projectURL,
              description,
            },
            fields: { slug },
          },
        }) => (
          <Project key={githubURL}>
            <StyledLink to={slug}>
              <StyledImg fixed={screenshot.childImageSharp.fixed} />
              <h4>{title}</h4>
            </StyledLink>
            <div>
              <p>{description}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href={githubURL} target="_blank">
                  <GitHub height="20px" />
                </a>
                <a href={projectURL} target="_blank">
                  <Launch height="24px" />
                </a>
              </div>
            </div>
          </Project>
        )
      )}
    </Grid>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            githubURL
            projectURL
            description
            screenshot {
              childImageSharp {
                fixed(height: 180) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectPage
