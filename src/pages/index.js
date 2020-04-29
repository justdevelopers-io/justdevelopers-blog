import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import {Layout} from '@components/Layout'
import { rhythm } from '@utils/typography'
import {Link} from '@components/common'

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
         <style>
          {`
          .Typist .Cursor {
            display: inline-block;
          }
          .Typist .Cursor--blinking {
            opacity: 1;
            animation: blink 1s linear infinite;
          }
          @keyframes blink {
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
          }
        `}
        </style>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.created}</small>
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

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
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
