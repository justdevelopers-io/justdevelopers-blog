import React from 'react'
import styled, { device, css } from '@styles'
import { Link } from 'gatsby'
import JDLogo from '@static/jd-logo.png'

const routes = ['/blog', '/about', '/tips', '/comunnity']

export default (props) => {
  const isCurrentRoute = (route) =>
    props.location.pathname.match(new RegExp(`^${route}`))
  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <MenuItemLink
            rotateLeft
            isActive={isCurrentRoute('/posts')}
            to="/posts"
          >
            {' '}
            Blog{' '}
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink isActive={isCurrentRoute('/tips')} to="/tips">
            {' '}
            Tips{' '}
          </MenuItemLink>
        </MenuItem>
      </Menu>

      <LogoWrapper to="/">
        <MainLogo src={JDLogo} alt={'Just Developers Logo'} />
      </LogoWrapper>
      <Menu>
        <MenuItem>
          <MenuItemLink
            rotateLeft
            isActive={isCurrentRoute('/comunnity')}
            to="/community"
          >
            {' '}
            Community
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink isActive={isCurrentRoute('/about')} to="/about">
            {' '}
            About us
          </MenuItemLink>
        </MenuItem>
      </Menu>
    </Navbar>
  )
}

const Navbar = styled.nav`
  align-items: center;
  grid-template-columns: 1fr 120px 1fr;
  padding: 2rem;
  z-index: 1;
  display: grid;
  box-shadow: 0px 5px 10px 5px #0000007a;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    background: var(--yellowLightBlueGradient);
    bottom: 0;
  }

  @media ${device.TABLET} {
    padding: 1rem;
  }
`

const Menu = styled.ul`
  grid-column-end: span 3;
  justify-content: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 700;
  font-size: 1.05rem;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;

  :first-of-type {
    padding-top: 1rem;
  }

  @media ${device.TABLET} {
    :first-of-type {
      padding-top: initial;
    }
    justify-content: space-evenly;
    height: auto;
    grid-column-end: initial;
    flex-wrap: wrap;
    flex-direction: row;
    grid-gap: 0.5rem;
  }
`

const MenuItem = styled.li`
  margin: 0;
  margin-top: 1rem;
  position: relative;
  transition: 0.2s ease-in transform;
  text-transform: uppercase;

  @media ${device.TABLET} {
    margin: 0.8rem;
  }
`

const activeLinkStyle = css`
  transform: rotateZ(${(props) => (props.rotateLeft ? '-' : '')}5deg);
  text-decoration: none;
  color: var(--lightBlueTextColor);
  ::after {
    width: 90%;
  }
`

const MenuItemLink = styled(Link)`
  color: inherit;
  display: inline-block;
  text-decoration: none;
  ::after {
    content: '';
    position: absolute;
    width: 0;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: solid 4px var(--yellow);
    transition: 0.2s ease-in width;
  }
  :hover {
    ${activeLinkStyle}
  }

  ${(props) => props.isActive && activeLinkStyle}
`

const LogoWrapper = styled(Link)`
  grid-column-end: span 3;
  grid-row-start: 1;
  justify-self: center;

  @media ${device.TABLET} {
    grid-column-end: initial;
    grid-row-start: initial;
  }
`

const MainLogo = styled.img`
  width: 100px;
  margin-bottom: 0;
  transition: 0.5s ease-in-out transform;
  :hover {
    transform: scale(1.15);
  }
`
