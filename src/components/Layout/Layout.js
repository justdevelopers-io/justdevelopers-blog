import React from 'react'
import styled from '@styles'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

import { GlobalStyles } from '@styles'
import { rhythm, scale } from '@utils/typography'
import { Typist } from '@components/Common'
import { Bio, Navbar } from '@components/Layout'
import { CosmicLogo, GatsbyLogo } from '@components/Logos'

export default ({ children, location, onlyContent }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          cosmicjsSettings(slug: { eq: "general" }) {
            metadata {
              logo {
                imgix_url
              }
              site_heading
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
        const siteTitle = get(data, 'cosmicjsSettings.metadata.site_heading')
        const logo = get(data, 'cosmicjsSettings.metadata.logo')
        let header

        // let rootPath = `/`
        // let postsPath = `/posts`
        // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        //   rootPath = __PATH_PREFIX__ + `/`
        //   postsPath = __PATH_PREFIX__ + `/posts`
        // }

        if (onlyContent)
          return (
            <>
              <GlobalStyles />
              <Content>{children}</Content>
            </>
          )
        

        const sentences = ['Resources', 'Tutorials','Tips', 'To Developers', 'By Developers']
        return (
          <AppContainer>
            <GlobalStyles />
            <Navbar location={location}/>
           
            <Content>{children}</Content>
            <TypingSection Tag="div" className="post-hero">
              <Typist
                component={TypingTitle}
                sentences={sentences}
              />
            </TypingSection>
            <Bio settings={author} />
            <Footer>
              {'Made with ❤️, '}
              <GatsbyLogo />
              {' and '}
              <CosmicLogo />
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

const TypingSection = styled.section`
  padding: 2rem;
  background-image: var(--yellowGradient);
  position: relative;
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  ${(props) => scale(1.1)}
  justify-content: center;
`

const TypingTitle = styled.span`
  color: white;
  text-align: center;
  margin-top: 0;
  height: ${rhythm(2.5)};
`

const Logo = styled.img`
  border-radius: 50%;
  width: 12em;
  display: block;
`
