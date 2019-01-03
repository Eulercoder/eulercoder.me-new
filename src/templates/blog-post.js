import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import 'medium.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as Arrow } from '../icons/arrow.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 760px;
`

const Category = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Categories = styled(Link)`
  color: #666;
  text-decoration: none solid rgba(0,0,0,0.8);
  border-radius: 4px;
  padding: 4px 10px;
  margin: 4px 10px;
  background: #F9F9F9;
  transition: all 0.2s ease;
  position: relative;
  top: 0px;
  &:hover {
    color: #663399;
    position: relative;
    top: -3px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
}

`

const Title = styled.h2`
   font-size: 42px !important;
`
const Date = styled.div`
  color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  margin-bottom: 2.1rem;
  align-self: center;
`
const Body = styled.div`
  
  & a {
    color: rebeccapurple;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const StyledNext = styled(Link)`
  
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
    
    color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  }
`
const Left = styled(StyledNext)`
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

const Right = styled(StyledNext)`
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
    margin-right: -24px;
  }
`

const Subscribe = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 10px 0;
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

const SubscribeBottom = styled(Subscribe)`
  
    & input {
      height: 48px;
      font-size: 18px;
      padding: 0px;
      padding-left: 10px;
      color: rebeccapurple;
      width: 340px;
      margin-right: 10px;
      padding-left: 16px;
      border: 2px solid rgba(81,24,138,0.8);
      border-radius: 30px;
      box-sizing: border-box;
      transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
      outline: none;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
      &:hover,
      &:focus {
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08),
          0 6px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-3px);
        border: 2px solid rebeccapurple;
      }
    }
    
     
    

     & input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
      background-color: rgb(255, 0, 0) !important;
      background-image: none !important;
      color: rgb(0, 0, 0) !important;
      -webkit-text-fill-color: rebeccapurple !important;
        
     }

    & button {
      font-size: 18px;
      height: 44px;
      cursor: pointer;
      padding: 0 10px;
      border: none;
      background: linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
      outline: none;
      box-sizing: border-box;
      color: white;
      transition: 0.5s transform cubic-bezier(0.215, 0.61, 0.355, 1);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
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
        width: 220px;
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


const Blogs = ({ data, pageContext: { prev, next } }) => {
  const post = data.markdownRemark
  const { author, date, title, categories } = post.frontmatter
  // const siteTitle = title
  // const { previous, next } = pathContext
  const disqusShortname = 'vicky002'
  const disqusConfig = {
    identifier: post.id,
    title: title,
  }
  return (
    <>
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      title={title}
    >
      <SEO title={title} />
      <Container>
        <Date>
          <Author to={author.fields.slug}>{author.id}</Author> on {date}
        </Date>
        <Category>
        { categories && categories.map((category,i)=><Categories key={category + i} to={`/blogs?category=${category}`}>{category}</Categories>)}
        </Category>
        <Title>{title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
        <SubscribeBottom>
        <form action="https://eulercoder.us3.list-manage.com/subscribe/post?u=4dcb96f48ac8cb31e6ad01138&amp;id=ba0a5febe9" method="post">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your@email.com" spellcheck="false" required/>
            <button type="submit">Subscribe</button>
          </div>
          </form>
      </SubscribeBottom>
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
      
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </Layout>
  
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
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
