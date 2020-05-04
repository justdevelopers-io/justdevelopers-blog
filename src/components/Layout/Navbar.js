import React from 'react'
import styled from '@styles'
import { Link } from 'gatsby'
import JDLogo from '@static/jd-logo.png'

export default () => {
  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <Link to="/posts"> Posts </Link>
        </MenuItem>
      </Menu>

      <Link to="/">
        <MainLogo src={JDLogo} alt={'Just Developers Logo'} />
      </Link>
      <Menu>
        <MenuItem>
          <Link to="/about"> About us</Link>
        </MenuItem>
      </Menu>
    </Navbar>
  )
}

const Navbar = styled.nav`
  align-items: center;
  grid-template-columns: 1fr 120px 1fr;
  padding: 1rem;
  z-index: 1;
  display: grid;
  box-shadow: 0px 5px 10px 5px #0000007a;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    height:4px;
    width: 100%;
    background: var(--yellowLightBlueGradient);
    bottom: 0;
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 700;
  font-size: 1.2rem;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
`

const MenuItem = styled.li`
  text-transform: uppercase;
  margin: 0;
  /* border-bottom: solid 4px var(--yellow); */

  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 0;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: solid 4px var(--yellow);
    transition: 0.25s ease-in-out width;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
  a {
    color: inherit;
    :hover {
      text-decoration: none;
    }
  }
`

const MainLogo = styled.img`
  width: 120px;
  margin-bottom: 0;
  transition: .5s ease-in-out transform;
  :hover {
    transform: scale(1.15);
  }
`
