import React from 'react'
import styled from 'styled-components'
import {Link} from '@components/common'
import gatsbyLogo from '@static/gatsby.png'

const GatsbyLogo = () => (
  <Link target="_blank" href="https://gatsbyjs.org">
    <Logo
       src={gatsbyLogo}
       alt="Gatsby JS"
    />
    <strong>Gatsby</strong>
  </Link>
)

export default GatsbyLogo


const Logo = styled.img`
    width: 20px;
    margin: 0 4px -3px 2px;
`
