/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"

import Header from './Header';
import Footer from './Footer';
import '../scss/main.scss';

interface Props {
  children: React.ReactNode;
  renderHeader?: () => JSX.Element;
  hasFooter?: boolean;
}

const Layout: React.FC<Props> = ({
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
      <main>{children}</main>
      {hasFooter && <Footer />}
    </>
  );
};

export default Layout;
