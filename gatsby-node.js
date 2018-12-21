const path = require(`path`)

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const re = /content\/_posts/
    const jobsre = /jobs/
    if (re.test(node.fileAbsolutePath)) {
      const slug = createFilePath({ node, getNode, basePath: `content/_posts` })
      createNodeField({
        node,
        name: `slug`,
        value: '/blogs' + slug,
      })
    } else if (jobsre.test(node.fileAbsolutePath)) {
      const slug = createFilePath({ node, getNode, basePath: `jobs` })
      createNodeField({
        node,
        name: `slug`,
        value: '/jobs' + slug,
      })
    } else {
      const slug = createFilePath({ node, getNode, basePath: `projects` })
      createNodeField({
        node,
        name: `slug`,
        value: '/projects' + slug,
      })
    }
  } else if (node.internal.type === `AuthorYaml`) {
    const slug = `/contributors/${node.id.toLowerCase().replace(' ', '-')}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allBlogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            author {
              id
            }
          }
          fields {
            slug
          }
        }
      }
    }
    allProjects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
    allJobs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            logo {
              id
            }
            job
            jobURL
            company
            companyURL
            location
            category
            techstack
            date
          }
          fields {
            slug
          }
        }
      }
    }
    allAuthorYaml {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  
  
  `)

  result.data.allBlogs.edges.forEach(({ node }, index) => {
    // To Get the next and previous blog.
    let next = index === 0 ? null : result.data.allBlogs.edges[index - 1].node

    const prev =
      index === result.data.allBlogs.edges.length - 1
        ? null
        : result.data.allBlogs.edges[index + 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        next,
        prev,
      },
    })
  })
  result.data.allProjects.edges.forEach(({ node }, index) => {
    // To Get the next and previous project.
    let next =
      index === 0 ? null : result.data.allProjects.edges[index - 1].node

    const prev =
      index === result.data.allProjects.edges.length - 1
        ? null
        : result.data.allProjects.edges[index + 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        slug: node.fields.slug,
        next,
        prev,
      },
    })
  })

  result.data.allJobs.edges.forEach(({node}) => {
    // To Get the next and previous job.
  //  let next =
  //    index === 0 ? null : result.data.allJobs.edges[index - 1].node
//
  //  const prev =
  //    index === result.data.allProjects.edges.length - 1
  //      ? null
  //      : result.data.allJobs.edges[index + 1].node

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/job-page.js`),
          context: {
            slug: node.fields.slug,
          },
        })   

  })

  result.data.allAuthorYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/contributor-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
