import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  background-color: whitesmoke;
  margin-bottom: 1.45rem;
  position: fixed;
  width:100%;
  top:0;
  z-index:9999999;
`
const HeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const HeaderText = styled.h1`
  margin: 0;
`
const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderDiv>
      <HeaderText>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderText>
    </HeaderDiv>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
