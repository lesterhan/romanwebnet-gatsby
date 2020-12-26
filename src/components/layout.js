/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header";
import Footer from "../components/Footer";
import '../scss/main.scss';

const Layout = ({ 
  children, 
  renderHeader = null,
  hasFooter = true,
}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {renderHeader ? renderHeader() : <Header />}
      <main>
        {children}
      </main>
      { hasFooter && <Footer /> }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
