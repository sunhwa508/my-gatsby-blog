import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  background: white;
  margin-bottom: 1.45rem;
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
