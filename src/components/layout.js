import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./../css/style.scss"

//Layout.js is the site skeleton/structure
//One static query loads for all pages


//render={()} function holds JSX structure


// <main>{children}</main> is a function which
// loads content from pages/*.js
const MainContainerStyle = 
{
  margin: `0 auto`,
  maxWidth:`95%`,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={MainContainerStyle}
        >
          <main>{children}</main>

          { /* <footer>
          //   © {new Date().getFullYear()}, Built with
          //   {` `}
          //   <a href="https://www.gatsbyjs.org">Gatsby</a>
          // </footer> */ }

        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
