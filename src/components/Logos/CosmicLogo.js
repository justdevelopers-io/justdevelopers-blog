import React from 'react'
import styled from '@styles'
import cosmicjsLogo from '@static/cosmicjs.svg'

const CosmicLogo = () => (
  <a target="_blank" href="https://cosmicjs.com">
    <Logo
      src={cosmicjsLogo}
      alt="Cosmic JS"
    />
    <strong>Cosmic JS</strong>
  </a>
)

export default CosmicLogo


const Logo = styled.img`
    width: 18px;
    margin: 0 4px -2px 5px;
`
