import React from "react"

const PageSectionStyle =
{
	height:`100%`,
	width:`100%`,
}

// Layout component is used to define site structure:::
// Index page loads layout as home page

//all other pages are children of componenets/layout.js

const PageSection = ({children}) => (
  <div className="PageSection" style={PageSectionStyle}>
  	{children}
  </div>
)

export default PageSection
