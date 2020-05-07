import React from 'react'
import styled, {device} from '@styles'
import { Link } from 'gatsby'
import JDLogo from '@static/jd-logo.png'

export default () => {
  return (
    <Navbar>
      <Menu>
        <MenuItem>
          <Link to="/posts"> Blog </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/posts"> Tutorials </Link>
        </MenuItem>
        {/* <MenuItem>
          <Link to="/posts"> Posts </Link>
        </MenuItem> */}
      </Menu>

      <LogoWrapper to="/">
        <MainLogo src={JDLogo} alt={'Just Developers Logo'} />
      </LogoWrapper>
      <Menu>
        {/* <MenuItem>
          <Link to="/about"> About us</Link>
        </MenuItem> */}
        <MenuItem>
          <Link to="/about"> Community</Link>
        </MenuItem>
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
  padding: 2rem;
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
    grid-gap: .5rem;
    
  }
 
`

const MenuItem = styled.li`
  text-transform: uppercase;
  margin: 0;
  margin-top: 1rem;
  
  /* border-bottom: solid 4px var(--yellow); */

  position: relative;


  @media ${device.TABLET} {
    margin: .8rem;
  }

  transition: 0.2s ease-in transform;

  :nth-of-type(2n):hover {
      transform: rotateZ(5deg);
    }
    :nth-of-type(2n+1):hover {
      transform: rotateZ(-5deg);
    }
  /* ::after {
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
    color: var(--lightBlueTextColor);
    ::after {
      width: 100%;
    }
  } */
  a {
    color: inherit;

    :hover,
    .selected {
      text-decoration: none;
      color: var(--lightBlueTextColor);
      ::after {
        width: 90%;
      }
    }

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

  }
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
  transition: .5s ease-in-out transform;
  :hover {
    transform: scale(1.15);
  }
`
