const path = require(`path`)

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: 'blogs/first-post',
    component: path.resolve(`./src/templates/blog-post.js`),
  })
}
