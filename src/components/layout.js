/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> style={{
          margin: `100px auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      */}
      <div>
        <div className="container">
        <main>{children}</main>
        </div>
        <div className="fixed-bottom bg-primary text-white text-center py-2">
          © {new Date().getFullYear()}, Copyright
          {` `}
          <b><a style={{textDecoration:`none`, color:`white`}} href="https://www.bookmanindia.com">Bookman India</a></b>
        </div>
      
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
