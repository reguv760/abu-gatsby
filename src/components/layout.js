import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./../css/style.scss"

//Layout.js is the site skeleton/structure
//One static query loads for all pages


//render={()} function holds JSX structure


// <main>{children}</main> is a function which
// loads content from pages/*.js
const MainContainerStyle = 
{
  margin: `0 auto`,
  padding:`0`,
  maxWidth:`95%`,
  gridArea:`container`
}

const PageContainerStyle =
{
  margin: `0`,
  padding:`0`,
  display:`grid`,
  justify:`center`,
  gridTemplateColumns:`1fr`,
  gridTemplateRows:`8rem 1fr 8rem`, /* 8rem = height of header.js */
  gridTemplateArea: `
    "header"
    "container"
    "footer"
  `,
}

const FooterStyle =
{
  gridArea:`footer`,
  position:`fixed`,
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
        <div className="pageContainer" style={PageContainerStyle}>
          <Header siteTitle={data.site.siteMetadata.title} />
         
          <div style={MainContainerStyle}>
            <main>{children}</main>
          </div>

          <footer style={FooterStyle}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> 
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
