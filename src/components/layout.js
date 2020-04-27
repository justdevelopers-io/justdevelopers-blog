import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import get from 'lodash/get'
import Typist from 'react-typist';

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm, scale } from '../utils/typography'
import Bio from '../components/Bio'
import Link from '../components/Link'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default ({ children, location }) => (
 
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
    render={data => {
      const author = get(data, 'cosmicjsSettings.metadata')
      const siteTitle = get(data, 'cosmicjsSettings.metadata.site_heading')
      const logo = get(data, 'cosmicjsSettings.metadata.logo')
      let header

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <TitleSection
            Tag="div"
            className="post-hero"
          >
            <Typist>
              <Title>{"To Developers"}</Title>
              <Typist.Backspace count={"To Developers".length} delay={200} />
              <Title>{"By Developers"}</Title>
            </Typist>
          </TitleSection>
        )
      }
      return (
        <AppContainer>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <Bio settings={author} />
          <footer
            style={{
              textAlign: 'center',
              padding: `0 20px 80px 0`,
            }}
          >
            Made with ❤️, &nbsp;
            <Link
              target="_blank"
              href="https://gatsbyjs.org"
            >
              <img
                src={gatsbyLogo}
                alt="Gatsby JS"
                style={{
                  width: '20px',
                  margin: '0 4px -3px 2px',
                }}
              />
              <strong>Gatsby</strong>
            </Link>
            &nbsp;and&nbsp;
            <Link
              target="_blank"
              href="https://cosmicjs.com"
            >
              <img
                src={cosmicjsLogo}
                alt="Cosmic JS"
                style={{
                  width: '18px',
                  margin: '0 4px -2px 5px',
                }}
              />
              <strong>Cosmic JS</strong>
            </Link>
          </footer>
        </AppContainer>
      )
    }}
  />
)

const AppContainer = styled.div`
  background: #1e2227;
  color: #fefefe;
`

const TitleSection = styled.section`
  padding: 2rem;
  background-image: linear-gradient(to right bottom, #f8aa00, #fab610, #fcc11d, #fecd29, #ffd835);
  position: relative;
  margin-bottom: ${rhythm(1.5)};
  display: flex;
  ${props => ({...scale(1.2)}) } 
  justify-content: center;

`

const Logo =styled.img` 
    border-radius: 50%;
    width: 12em;
    display: block;
`

const Title = styled.span`
  color: white;
  text-align: center;
  margin-top: 0;
  height: ${rhythm(2.5)};
`