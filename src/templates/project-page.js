import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Launch } from '../icons/launch.svg'
import { ReactComponent as Arrow } from '../icons/arrow.svg'
import { ReactComponent as Linkedin } from '../icons/linkedin.svg'
import { ReactComponent as Twitter } from '../icons/twitter.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 760px;
  @media (max-width:728px) {
    width: 90%;
  }
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
  margin-left: 4px;
  margin-right: 4px;
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

const StyledNext = styled(Link)`
  position: fixed;
  top: 40%;
  @media (max-width:728px) {
    display:none;
  }
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  & h4 {
    color: black;
    margin-bottom: 0.4rem;
    margin-top: 0;
    font-size: 1.1rem;
  }
  & p {
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  }
`
const Left = styled(StyledNext)`
  left: 8vw;
  transform: rotate(-90deg);
  text-align: right;
  & svg {
    transform: rotate(-90deg);
  }
  &:hover {
    & svg {
      transform: rotate(-90deg) translate(5px);
    }
  }
`

const Right = styled(StyledNext)`
  right: 8vw;
  transform: rotate(90deg);
  text-align: left;
  & svg {
    transform: rotate(-90deg);
  }
  &:hover {
    & svg {
      transform: rotate(-90deg) translate(5px);
    }
  }
`

const StyledNextBottom = styled(Link)`

@media (min-width:729px) {
      display:none;
}
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;

font-family: 'Roboto', sans-serif;
text-decoration: none;
& h4 {
  color: black;
  margin: 0;
  font-size: 1.1rem;
  word-break: break-word;
 
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

const RightBottom = styled(StyledNextBottom)`
    display:flex;
    align-items: flex-end;
    margin-left: auto;
    margin-top: 20px;
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
      margin-right: -34px;
    }
  
` 

const LeftBottom = styled(StyledNextBottom)`
display:flex;
justify-content: center;
align-items: flex-start;
  margin-top: 20px;
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

const Project = ({ data, pageContext: { prev, next } }) => {
  const project = data.markdownRemark
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

  const post = data.markdownRemark
  // const siteTitle = title;
  // const { previous, next } = this.props.pathContext;
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
        width: '80vw',
      }}
    >
      <SEO title={title} />
      <Container>
        {next && (
          <Left to={next.fields.slug}>
            <Arrow fill="rebeccapurple" />
            <h4>{next.frontmatter.title}</h4>
            <p>{next.frontmatter.description}</p>
          </Left>
        )}
        {prev && (
          <Right to={prev.fields.slug}>
            <Arrow fill="rebeccapurple" />
            <h4>{prev.frontmatter.title}</h4>
            <p>{prev.frontmatter.description}</p>
          </Right>
        )}
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
        {next && (
          <LeftBottom to={next.fields.slug}>
            <Arrow fill="rebeccapurple" />
            <h4>{next.frontmatter.title}</h4>
            <p>{next.frontmatter.description}</p>
          </LeftBottom>
        )}
        {prev && (
          <RightBottom to={prev.fields.slug}>
            <Arrow fill="rebeccapurple" />
            <h4>{prev.frontmatter.title}</h4>
            <p>{prev.frontmatter.description}</p>
          </RightBottom>
        )}
       
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
