import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 5rem;
`

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0;
  margin-left: 2rem;

  @media only screen and (max-width: 270px){
    display: none;
  }
`;

export const Logo = styled.img`
  height: 3rem;
  margin: 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 300px){
    margin: 0.5rem;
  }
`;