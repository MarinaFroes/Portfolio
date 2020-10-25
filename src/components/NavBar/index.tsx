import React from 'react'

import { LINKS } from '../../utils/links'
import logo from '../../assets/icons/logo.svg'
import { StyledNav, StyledLogo, LinksContainer, NavLink, Logo } from './styles'

const NavBar = () => (
  <StyledNav>
    <StyledLogo href='/Portfolio' rel='noopener noreferrer'>
      <Logo src={logo} alt='' />
    </StyledLogo>
    <LinksContainer>
      {LINKS.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </LinksContainer>
  </StyledNav>
)

export default NavBar
