import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import GatsbyBackgroundImage from 'gatsby-background-image'

import { Bio } from '@components/Layout'
import { Layout } from '@components/Layout'
import { Link } from '@components/common'
import styled from 'styled-components'
import { rhythm, scale } from '@utils/typography'

import PostContent from '@components/Post/PostContent'


class BlogPostTemplate extends React.Component {


  render() {
    const post = this.props.data.cosmicjsPosts
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const location = get(this, 'props.location')
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.created}</PostDate>
        {
          post.headerImage && (
            <GatsbyBackgroundImage
              Tag="div"
              fluid={post.metadata.hero.local.childImageSharp.fluid}
              backgroundColor={`#007ACC`}
            />
          )
        }
        
        <PostContent content={post.content}/>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {/* <Bio settings={author} /> */}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            marginLeft: 0,
            textAlign: 'center'
          }}
        >
          {previous && (
            <PreviousPostLink>
              <EllipsedLink to={`posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </EllipsedLink>
            </PreviousPostLink>
          )}

          {next && (
            <NextPostLink>
              <EllipsedLink to={`posts/${next.slug}`} rel="next">
                {next.title} →
              </EllipsedLink>
            </NextPostLink>
          )}
        </ul>
      </Layout>
    )
  }
}

const PostTitle = styled.h1`
  margin-top: ${rhythm(1)};
  color: #fcc11d;
`

const PostDate = styled.p`
  display: block;
  margin-bottom: ${rhythm(0.6)};
  ${(props) => ({ ...scale(-1 / 5) })}
`

const BackgroundImage = styled(GatsbyBackgroundImage)`
  margin-bottom: ${rhythm(0.6)}
`

const EllipsedLink = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const PostLink = styled.li`
  width: 100%;
`

const PreviousPostLink = styled(PostLink)`
  /* padding-right: 2.5rem; */
  margin-bottom: 1.5rem;  
`

const NextPostLink = styled(PostLink)`
  /* padding-left: 2.5rem; */
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "MMMM DD, YYYY")
      metadata {
        hero {
          local {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
