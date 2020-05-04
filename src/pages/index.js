import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import styled from "@styles"
import { Layout } from '@components/Layout'
import { rhythm } from '@utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')

    const location = get(this, 'props.location')

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug
          return (
            <div key={node.slug}>
              <Post>
                <Link to={`/posts/${node.slug}`}>{title}</Link>
              </Post>
              <PostDate>{node.created}</PostDate>
              <p
                dangerouslySetInnerHTML={{ __html: node.metadata.description }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

const Post = styled.h3`
  margin-bottom: ${rhythm(1 / 8)};
`


const PostDate = styled.small`
  display: block;
  margin-bottom: ${rhythm(1 / 2)};
`

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
   
    allCosmicjsPosts(
        sort: { 
          fields: [created], 
          order: DESC
        },
        filter: {
          metadata: {
            category: {
              elemMatch: {
                slug: {
                  in: ["javascript", "react"]
                }
              }
            }
          }
        },
        limit: 1000
      ) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
      }
    }
  }
`
