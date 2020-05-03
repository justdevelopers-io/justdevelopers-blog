import React from 'react'
import styled from '@styles'
import gatsbyLogo from '@static/gatsby.png'

const GatsbyLogo = () => (
  <a target="_blank" href="https://gatsbyjs.org">
    <Logo src={gatsbyLogo} alt="Gatsby JS" />
    <strong>Gatsby</strong>
  </a>
)

export default GatsbyLogo

const Logo = styled.img`
  width: 20px;
  margin: 0 4px -3px 2px;
`
