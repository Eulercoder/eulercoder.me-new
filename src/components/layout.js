import React from 'react'
//import {  graphql } from 'gatsby'
import Header from './header'
import './layout.css'



//const Layout = ({ children, background, style }) => (
//  <StaticQuery
//    query={graphql`
//      query SiteTitleQuery {
//        site {
//          siteMetadata {
//            title
//          }
//        }
//      }
//    `}
//    render={data => (
//      <div style={{ background, minHeight: '100vh' }}>
//        <Header siteTitle={data.site.siteMetadata.title} />
//        <div
//          style={{
//            margin: '0 auto',
//            maxWidth: 960,
//            padding: '0px 1.0875rem 1.45rem',
//            paddingTop: '5rem',
//            ...style,
//          }}
//        >
//          {children}
//        </div>
//      </div>
//    )}
//  />
//)

const Layout = ({ children, background, style }) => (
  <div style={{ background, minHeight: '100vh' }}>
  <Header siteTitle= "Eulercoder" />
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: '5rem',
      ...style,
    }}
  >
    {children}
  </div>
</div>
 )

//export const query = graphql`
//query {
//  site {
//    siteMetadata {
//      title
//    }
//  }
//}
//`
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
