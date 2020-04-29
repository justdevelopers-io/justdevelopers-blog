import React from 'react'
import styled from 'styled-components'
import {Link} from '@components/common'
import cosmicjsLogo from '@static/cosmicjs.svg'

const CosmicLogo = () => (
  <Link target="_blank" href="https://cosmicjs.com">
    <Logo
      src={cosmicjsLogo}
      alt="Cosmic JS"
    />
    <strong>Cosmic JS</strong>
  </Link>
)

export default CosmicLogo


const Logo = styled.img`
    width: 18px;
    margin: 0 4px -2px 5px;
`
