import React from 'react'

import SEO from '../components/seo'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Title, Date, Author, Body } from '../components/blog'

const Container = styled.div`
  background: rebeccapurple;
  color: white;
  height: 80vh;
  padding: 0 20vw;
`

const NavBar = styled.div`
  text-transform: capitalize;
  margin-left: 120px;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 40px;
  font-weight: light;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8437rem;
  &:hover {
    color: #fff7;
  }
`

const Information = styled.div`
  background: white;
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 18vw);
  align-items: center;
  padding: 10vh 20vw;
  grid-gap: 28px;
`

const Card = styled.div`
  width: 100%;
  height: 15vw;
  border-radius: 1vw;
  will-change: transform;
  transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
  max-width: 300px;
  max-height: 240px;
  color: #fff;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.08);
  }
`

const InfoContainer = styled.div`
  background: #0003;
  height: 100%;
  width: 100%;
  padding: 20px;
`

const StyledImg = styled(Img)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -10;
  border-radius: 1vh;
`

const BlogsInfo = styled.div`
  background: #fbfafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`

const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: 450px 450px;
  align-items: center;
  padding: 4vh 0vw;
  grid-gap: 28px;
  & ${Card} {
    max-width: 450px;
    background: white;
    max-height: 320px;
    height: 320px;
    cursor: pointer;
    padding: 20px;
    text-decoration: none;
    color: black;
    border: 2px solid #ccc;
    & * {
      word-break: break-word;
    }
  }
`

const ViewAll = styled(Link)`
  padding: 20px;
  color: rebeccapurple;
  text-decoration: none;
  font-weight: light;
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.08);
    background: rebeccapurple;
    color: white;
    transform: translateY(-3px);
  }
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background: rebeccapurple;
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
    height: 54px;
    font-size: 22px;
    padding: 0px;
    padding-left: 10px;
    color: rebeccapurple;
    width: 400px;
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

  & button {
    font-size: 22px;
    height: 54px;
    cursor: pointer;
    padding: 0 20px;
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
`
const Terms = styled.div`
  display: flex;
  justify-content: center;
`

const TermsLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;
  color: #fff8;
  padding: 10px 0px;
  &:hover {
    color: #fff;
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={['gatsby', 'application', 'react', 'blogs']} />
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          padding: '40px 0',
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: "'Roboto', sans-serif",
              padding: '0 1rem 0 0',
            }}
          >
            Eulercoder
          </Link>
        </h2>
        <NavBar>
          {[
            { name: 'blogs', link: 'blogs' },
            { name: 'projects', link: 'projects' },
            { name: 'work with us', link: '/' },
          ].map(item => (
            <NavLink key={item.name} to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </NavBar>
      </div>
      <div style={{ padding: '15vh 0 0 0' }}>
        <h1>Hi people</h1>
        <p>Welcome to Eulercoder.</p>
        <p>Now go build something great.</p>
      </div>
    </Container>
    <Information>
      {data.allFile.edges.map(({ node: { childImageSharp: { fluid } } }) => (
        <Card>
          <InfoContainer>
            <div>First Card</div>
            <h2>Card Info</h2>
          </InfoContainer>
          <StyledImg fluid={fluid} style={{ position: 'absolute' }} />
        </Card>
      ))}
    </Information>
    <BlogsInfo>
      <h1 style={{ textAlign: 'center', color: 'rebeccapurple' }}>Blogs</h1>
      <BlogsWrapper>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: {
                title,
                author: {
                  id: author,
                  fields: { slug: authorLink },
                },
                date,
              },
              excerpt,
              fields: { slug },
            },
          }) => (
            <Card as={Link} to={slug}>
              <Title>{title}</Title>
              <Body>{excerpt}</Body>
              <Date>
                <Author>
                  <Link
                    to={''}
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    {author}
                  </Link>
                </Author>{' '}
                on {date}
              </Date>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: 'rebeccapurple',
                }}
              >
                Read More
              </p>
            </Card>
          )
        )}
      </BlogsWrapper>
      <ViewAll to="/blogs/">View all posts</ViewAll>
    </BlogsInfo>
    <Footer>
      <Subscribe>
        <div>
          <h4>{'Eulercoder Newsletter'.toUpperCase()}</h4>
          <h3>Subscribe for all the latest posts</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </Subscribe>
      <Terms>
        <TermsLink>Terms & Conditions</TermsLink>
        <TermsLink>Private Policy</TermsLink>
      </Terms>
    </Footer>
  </>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
      limit: 4
    ) {
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt(pruneLength: 60)
        }
      }
    }
    allFile(filter: { name: { regex: "/card/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
