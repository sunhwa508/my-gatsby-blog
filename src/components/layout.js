/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 01.0875rem 1.45rem;
  position: relative;
`
const LayoutMainContainer = styled.main`
  margin-bottom: 2rem;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LayoutContainer>
        <LayoutMainContainer>{children}</LayoutMainContainer>
        <Footer>© {new Date().getFullYear()}, Built with SH</Footer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
