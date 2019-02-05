import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import PageSection from "../components/PageSection"

// Layout component is used to define site structure:::
// Index page loads layout as home page

//all other pages are children of componenets/layout.js


//PageSection is a custom component which styles and arranges
//each section:::
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <PageSection>
      <div className="Home">
        <h1>About</h1>
      </div>
    </PageSection>

    <PageSection>
      <div className="Services">
        <h1>Services</h1>
      </div>
    </PageSection>

    <PageSection>
      <div className="Articles">
        <h1>Articles</h1>
      </div>
    </PageSection>

    <PageSection>
      <div className="Gallery">
        <h1>Gallery</h1>
      </div>
    </PageSection>


    <PageSection>
      <div className="Contact">
        <h1>Contact</h1>
      </div>
    </PageSection>

    { /* // <p>Welcome to your new Gatsby site.</p>
    // <p>Now go build something great.</p>
    // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //   <Image />
    // </div>
    // <Link to="/page-2/">Go to page 2</Link> */ }
  </Layout>
)

export default IndexPage
