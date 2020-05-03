
require("dotenv").config({
  path: `.env`,
})

const path = require('path')

module.exports = {
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@templates": path.resolve(__dirname, 'src/templates'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@utils": path.resolve(__dirname, 'src/utils'),
          "@static": path.resolve(__dirname, 'static'),
          "@styles": path.resolve(__dirname, 'src/utils/styles')
        },
        extensions: []
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        anonymize: true,

      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ['posts','settings'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
        localMedia: true
      }
    },
    `gatsby-plugin-offline`,
  ],
}
