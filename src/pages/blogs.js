import React from 'react'
import queryString from 'query-string'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Blog from '../components/blog'
import { graphql } from 'gatsby'

const Blogs = ({ data ,location }) => {
  const categoryType = queryString.parse(location.search).category;
  if(categoryType){
    return (
      <Layout title="Blogs" background="#fbfafc">
      <SEO title="Blogs" />
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => 
          {
            
            if(node.frontmatter.categories && node.frontmatter.categories.toString().includes(`${categoryType}`))
            { 
              
          return(
          <Blog
            key={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            link={node.fields.slug}
            authorLink={node.frontmatter.author.fields.slug}
            author={node.frontmatter.author.id}
          />
          );
          } else return <div></div>;
           
        }
        )}
      </div>
    </Layout>
    );
  } 
  else
  return(
  <Layout title="Blogs" background="#fbfafc">
    <SEO title="Blogs" />
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Blog
          key={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          link={node.fields.slug}
          authorLink={node.frontmatter.author.fields.slug}
          author={node.frontmatter.author.id}
        />
      ))}
    </div>
  </Layout>);
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blogs
