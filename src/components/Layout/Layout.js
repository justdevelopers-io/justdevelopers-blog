import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

import styled, { GlobalStyles, device } from '@styles'
import { rhythm, scale } from '@utils/typography'
import { Typist } from '@components/Common'
import { Bio, Navbar } from '@components/Layout'
import { CosmicLogo, GatsbyLogo } from '@components/Logos'
import devImg from '@static/dev.png'

export default ({ children, location, onlyContent }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          cosmicjsSettings(slug: { eq: "general" }) {
            metadata {
              author_name
              author_bio
              author_avatar {
                imgix_url
              }
            }
          }
        }
      `}
      render={(data) => {
        const author = get(data, 'cosmicjsSettings.metadata')
        const isRootPath = location.pathname === '/'

        if (onlyContent)
          return (
            <>
              <GlobalStyles />
              <Content>{children}</Content>
            </>
          )

        const sentences = [
          'Resources',
          'Tutorials',
          'Tips',
          'To Developers',
          'By Developers',
        ]
        return (
          <AppContainer>
            <GlobalStyles />
            <Navbar location={location} />

            {isRootPath && (
              <IntroSection Tag="div" className="post-hero">
                <IntroImage src={devImg} />
                <IntroContent>
                  <Typist component={TypingTitle} sentences={sentences} />
                </IntroContent>
              </IntroSection>
            )}

            <Content>{children}</Content>
            <Bio settings={author} />
            <Footer>
              {'Made with ❤️, '}
              <GatsbyLogo />
              {' and '}
              <CosmicLogo />
              {' | © 2020 '}
            </Footer>
          </AppContainer>
        )
      }}
    />
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  line-height: 1.6;
  flex-grow: 1;
`

const Footer = styled.footer`
  text-align: center;
  padding: 0 1.17rem 2.34rem 1.17rem;
`

const IntroSection = styled.section`
  padding: 2rem;
  background-image: var(--yellowGradient);
  position: relative;
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  ${(props) => scale(0.8)}
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

  @media ${device.TABLET} {
    ${(props) => scale(1.3)}
    padding: 2rem 6rem;
  }
`

const IntroImage = styled.img`
  width: 40%;
`

const TypingTitle = styled.span`
  color: white;
  text-align: center;
  margin-top: 0;
  height: ${rhythm(2.5)};
`

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const Logo = styled.img`
  border-radius: 50%;
  width: 12em;
  display: block;
`
