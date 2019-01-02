import React from "react"
import PropTypes from "prop-types"
import appletouchicon from "./icons/eulercoder-favicon/apple-touch-icon.png"
import favicon32 from "./icons/eulercoder-favicon/favicon-32x32.png"
import favicon16 from "./icons/eulercoder-favicon/favicon-16x16.png"
import safarisvg from "./icons/eulercoder-favicon/safari-pinned-tab.svg"


export default class HTML extends React.Component {
  render() {

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          
        <link rel="apple-touch-icon" sizes="180x180" href={`${appletouchicon}`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${favicon32}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${favicon16}`} />
        <link rel="mask-icon" href={`${safarisvg}`} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#663399"/>
         
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title> {this.props.defaultTitle} </title>
          {this.props.headComponents}
          <title> {this.props.defaultTitle} </title>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script
        dangerouslySetInnerHTML={{
          __html:`
          
          document.body.addEventListener('DOMSubtreeModified', removeLoadingStaticQuery);  
          function removeLoadingStaticQuery() {
          var x = document.getElementsByTagName('div');
          for(var i=0;i<x.length;i++) {
            if(x[i].innerHTML === "Loading (StaticQuery)") {
              x[i].style.display="none";
              }
            }
          }
          `,
        }}
        />
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
