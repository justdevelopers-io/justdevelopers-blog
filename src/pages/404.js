import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '@components/Layout'
import styled, { device } from '@styles'
import FourOhFourGif from '@static/404.gif'
import FourOhFourGifAlt from '@static/404-2.gif'
import JDLogo from '@static/jd-logo2.png'

const gifs = [FourOhFourGif, FourOhFourGifAlt]

const NotFoundPage = ({ location }) => {
  const randomGif = gifs[Math.floor(Math.random() * 2)]
  return (
    <Layout location={location} onlyContent>
      <Container>
        <Logo src={JDLogo} />
        <Title>Page Not Found</Title>
        <img src={randomGif} />
        <Description>
          <span>{'Go '}</span>
          <Link to={'/'}>Home</Link>
          <span>{', you are drunk... or lost'}</span>
        </Description>
      </Container>
    </Layout>
  )
}

const Logo = styled.img`
  width: 50px;
  margin-bottom: 1.25rem;
  margin-top: 2rem;
`

const Container = styled.div`
  text-align: center;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 2rem;
  color: var(--yellow);
`

const Description = styled.h4`
  @media ${device.TABLET} {
    font-size: 1.31rem;
  }
`

export default NotFoundPage
