import React from 'react'

import SEO from '../components/seo'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ReactComponent as ProgrammingBoy } from '../images/ProgrammingBoy.svg'

import { Title, Date, Author, Body } from '../components/blog'

const Container = styled.div`
  background: rgb(102,51,153);
  background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
  color: white;
  height: 80vh;
  padding: 0 10vw;
  @media (max-width: 800px) {
    height: 75vh;
  }
  @media (max-width: 500px) {
    height: 550px;
  }
  @media (max-width: 400px) {
    height: 490px;
  }
`

const NavBar = styled.div`
  text-transform: capitalize;
  margin-left: 80px;
  @media (max-width:1024px) {
    display:none;
  }
`


const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 36px;
  font-weight: light;
  font-family: 'Roboto', sans-serif;
  font-size: 0.7437rem;
  &:hover {
    color: #fff7;
  }
  @media (max-width:1024px) {
    display:none;
  }
`
const MobileNavLink = styled(Link)`
  display: flex;
  color: #663399;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`

const MenuIcon= styled.div`
 
  display: flex;
  position:absolute;
  flex-direction:column;
  top:24px;
  right:30px;
  justify-content:flex-end;
  padding: 14px;
  align-items:center;
  z-index: 999;
 
`

const MenuLine=  styled.div`
 background:white;
 border: 2px solid #663399;
 padding: 3px;
 width: 40px;
`
const Label = styled.label`
   display:none;
   @media (max-width:1024px) {
    &.menulabel {
      display:block;
    }
`

const CheckBoxMenu = styled.input`
&:checked ~ .mobilenavbar {
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background:white;
  text-align:center;
  padding: 60px 0px;
  position:fixed;
  top:0px;
  width:100%;
  height:100%;
  z-index: 998;
  }

  &:checked ~ .menulabel {
    display:block;
    @media (max-width:1024px) {
      &.menulabel {
        display:block;
      }
    }
   }
  
`

const MobileNavbar = styled.div`
    display:none;
`

const LandingSection = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const LandingImage = styled.div`
  
`

const PBoy = styled(ProgrammingBoy)`
 position:absolute;
 max-width:60vw; 
 bottom:130px;
 right:40px;
 @media (min-width: 1800px) {
  bottom:200px;
 }
 @media(max-width: 1024px) {
  max-width:90vw; 
  bottom:270px;
 }
 @media (max-width: 900px) {
  max-width: 60vw; 
}
 @media (max-width: 800px) {
  position: static;
  max-width: 100vw; 
}
`

const Information = styled.div`
  background: white;
  color: black;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  align-items: center;
  grid-gap: 28px;
  padding: 10vh 20px;
  justify-content:center;
  grid-gap: 28px;
  @media (max-width: 1200px) {
    grid-template-columns: 300px 300px;
    margin: auto;
  }
  
  @media (max-width:900px) {
    display:flex;
    flex-direction:column;
    margin: 10vw 10vw;
    justify-content:center;
    padding: 0px 0px;
  }
  
`

const Card = styled.div`
  width: 100%;
  height: 15vw;
  border-radius: 5px;
  will-change: transform;
  transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
  max-width: 300px;
  max-height: 240px;
  color: #fff;
 
  &.cards{
    transition: all 0.1s linear;
    position:relative;
    top:0px;
    height: 30vw;
    &:hover {
      top: -4px;
      box-shadow: 0 16px 32px rgba(102,51,153, 0.1), 0 6px 12px rgba(102,51,153, 0.2);
    }
    &:active {
      box-shadow: 0 16px 32px rgba(102,51,153, 0.02);
    }
    @media (max-width:1200px) {
      max-width: 300px;
      max-height: 240px;
    }
    @media (max-width:900px) {
      margin: 20px 0px;
    }

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
  @media (max-width: 1000px) {
    grid-template-columns: 450px;
  }
  @media (max-width:500px) {
    grid-template-columns: 300px;
  }
 
  & ${Card} {
    max-width: 450px;
    background: white;
    max-height: 320px;
    height: 320px;
    cursor: pointer;
    padding: 20px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    border: 2px solid #ccc;
    & * {
      word-break: break-word;
    }
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.08);
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
    background: rgb(102,51,153);
    background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
    color: white;
    transform: translateY(-3px);
  }
`


const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(102,51,153);
  background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
  color: white;
  font-family: 'Roboto', sans-serif;
`

const Subscribe = styled.div`
  padding: 60px 0;
  margin: auto 30px;
  display: flex;
  justify-content: space-between;
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
    <CheckBoxMenu type="checkbox" id="showmenu" style={{display:"none"}} className="showmenu"/>
     <Label for="showmenu" className="menulabel">
      <MenuIcon className="hamburger"> 
          <MenuLine/>
          <MenuLine/>
          <MenuLine/>
      </MenuIcon> 
      </Label>  
     <MobileNavbar className="mobilenavbar">
          {[
            { name: 'blogs', link: 'blogs' },
            { name: 'projects', link: 'projects' },
            { name: 'contact us', link: 'contactus' },
            { name: 'about us', link: 'aboutus' },
            { name: 'jobs', link: 'jobs' },
            { name: 'work with us', link: '/' },
          ].map((item,i) => (
            <MobileNavLink key={item.name + i } to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </MobileNavLink>
          ))}
    </MobileNavbar>
 
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
            { name: 'contact us', link: 'contactus' },
            { name: 'about us', link: 'aboutus' },
            { name: 'jobs', link: 'jobs' },
            { name: 'work with us', link: '/' },
          ].map(item => (
            <NavLink key={item.name} to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </NavBar>
      </div>
     <LandingSection>
      <div style={{ padding: '13vh 0 0 0' }}>
        <h1 style={{fontSize:"56px"}}>Hi People</h1>
        <p style={{fontSize:18}}>Welcome to Eulercoder.</p>
        <p style={{fontSize:18}}>Now build something great.</p>
      </div>
      <LandingImage>
      <PBoy />
      </LandingImage>
     </LandingSection>
    </Container>
   
    <Information>
      {data.allFile.edges.map(({ node: { childImageSharp: { fluid } } }, i) => (
        <Card key={"cards" + i} className="cards">
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
            <Card key={"blogswrap"+title} as={Link} to={slug}>
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
          <input type="text" id="subscription-email" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </Subscribe>
      <Terms>
        <TermsLink>Terms & Conditions</TermsLink>
        <TermsLink>Privacy Policy</TermsLink>
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
