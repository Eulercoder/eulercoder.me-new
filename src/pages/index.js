import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
//import Img from 'gatsby-image'
import Helmet from "react-helmet"
import ProgrammingImg from '../images/ProgrammingBoy.svg'
import Footer from '../components/footer'
import { Title, Date, Author, Body } from '../components/blog'

const Container = styled.div`
  background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
  background-image: url(${props=> props.img});
  background-color: rgb(102,51,153);
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: right bottom;
  color: white;
  height: 80vh;
  padding: 0 10vw;
  @media (max-width: 1024px) {
    background-position: center bottom;
    background-size: 90%;
  }
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

const WorkWithUs = styled.a`
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

const WorkWithUsMobile = styled.a`
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
  top:8px;
  right:20px;
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif ;
  flex-direction: row;
  justify-content:evenly;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const LandingImage = styled.div`
  z-index:0;
`

const Information = styled.div`
  background: white;
  color: black;
  display: grid;
  grid-template-columns: 300px 300px ;
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
  background: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
  color: #663399;
  & p {
  font-family: Lora;
 
  }
`

//const StyledImg = styled(Img)`
//  overflow: hidden;
//  height: 100%;
//  width: 100%;
//  top: 0;
//  left: 0;
//  z-index: -10;
//
//`

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
    background: #DCDCDC;
    max-height: 330px;
    height: 330px;
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

const TitleIndex = styled(Title)`
    display: block;
    height: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
`

const ViewAll = styled(Link)`
  padding: 14px;
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




const CardInfo = [
                  {
                    title:"Write Posts",
                    description:"Submit your post as a pull request and it will be live in a few minutes."
                  },
                  {
                    title:"Show your projects",
                    description:"Have you built something interesting? Submit your project and we will help you in promoting it."
                  },
                  {
                    title:"Internships and Jobs",
                    description:"Apply to latest internships and undergrad job openings with a click of a button."
                  },
                ]


const IndexPage = ({ data }) => (
  <>
  <Helmet title="Home | Eulercoder"/>
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
            { name: 'about us', link: 'aboutus' },
            { name: 'jobs', link: 'jobs' },
            { name: 'contact us', link: 'contactus' },
          ].map((item,i) => (
            <MobileNavLink key={item.name + i } to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </MobileNavLink>
          ))}
          <WorkWithUsMobile href="https://goo.gl/forms/p7mPxLrJLm8cuRfa2" target="_blank" rel="noopener noreferrer">WORK WITH US</WorkWithUsMobile>
          <WorkWithUsMobile href="https://github.com/Eulercoder/eulercoder.me-new" target="_blank" rel="noopener noreferrer">CONTRIBUTE</WorkWithUsMobile>

    </MobileNavbar>

    <Container img={ProgrammingImg} >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px 0',
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: "'Roboto', sans-serif",
              fontSize: "1.3rem",
              padding: '0 1rem 0 0',
              position: "relative",
              top: 3
            }}
          >
            Eulercoder
          </Link>
        </h2>
        <NavBar>
          {[
            { name: 'blogs', link: 'blogs' },
            { name: 'projects', link: 'projects' },
            { name: 'about us', link: 'aboutus' },
            { name: 'jobs', link: 'jobs' },
            { name: 'contact us', link: 'contactus' },
          ].map(item => (
            <NavLink key={item.name} to={`/${item.link}/`}>
              {item.name.toUpperCase()}
            </NavLink>
          ))}
          <WorkWithUs href="https://goo.gl/forms/p7mPxLrJLm8cuRfa2" target="_blank" rel="noopener noreferrer">WORK WITH US</WorkWithUs>
          <WorkWithUs href="https://github.com/Eulercoder/eulercoder.me-new" target="_blank" rel="noopener noreferrer">CONTRIBUTE</WorkWithUs>
        </NavBar>
      </div>
     <LandingSection>
      <div style={{ padding: '10vh 0 0 0', zIndex:2, fontFamily:"'Roboto', sans-serif" }}>
        <h1 style={{fontSize:"56px" , fontFamily:"'Roboto', sans-serif", color:"white",}}>Hello!</h1>
        <p style={{fontSize:30, fontFamily:"'Roboto', sans-serif", lineHeight: 1.3, color:"white",}}>Welcome to all new Eulercoder.</p>
        <p style={{fontSize:18, fontFamily:"'Roboto', sans-serif", color:"white",}}>We are opening our platform for developers and companies,<br></br>
        now everyone can write blog posts, post jobs <br></br>and showcase your projects.</p>
      </div>
      <LandingImage>

      </LandingImage>
     </LandingSection>
    </Container>

    <Information>
      <h1 style={{color:"#663399"}}>How you can use Eulercoder</h1>
      {data.allFile.edges.map(({ node: { childImageSharp: { fluid } } }, i) => (
        <Card key={"cards" + i} className="cards">
          <InfoContainer>
            <h3>{`${CardInfo[i].title}`}</h3>
            <p>{`${CardInfo[i].description}`}</p>
          </InfoContainer>
          
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
              <TitleIndex>{title.substring(0,76)}{title.length>75 && <span style={{color:"#ccc"}}>...</span>}</TitleIndex>
              <Body>{excerpt}</Body>
              <Date>
                <Author>
                  <Link
                    to={authorLink}
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
   <Footer />
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
