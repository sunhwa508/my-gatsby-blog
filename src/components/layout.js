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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const LayoutFontAwesomeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  &:hover #icon:not(:hover) {
    opacity: 0.1;
  }
`
const LayoutFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 10px;
  transition: 0.5s;
  cursor: pointer;
  color: #000;
  &:hover {
    transform: scale(1.2);
    color: black;
  }
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
        <Footer>
          <LayoutFontAwesomeIconContainer>
            <a href={"https://github.com/sunhwa508"}>
              <LayoutFontAwesomeIcon icon={faGithub} id={"icon"} />
            </a>
            <a
              href={"https://www.youtube.com/channel/UCXwBCeiqjOezNcpplFuHX9g"}
            >
              <LayoutFontAwesomeIcon icon={faYoutube} id={"icon"} />
            </a>
            <a
              href={
                "https://codesandbox.io/dashboard/home?workspace=ae20d5a1-abd3-4073-8a53-2d4f0c589a43"
              }
            >
              <LayoutFontAwesomeIcon icon={faCodepen} id={"icon"} />
            </a>
          </LayoutFontAwesomeIconContainer>
          <p>{new Date().getFullYear()}, Built with SH</p>
        </Footer>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
