module.exports = {
  siteMetadata: {
    title: `Gatsby Agency Site`,
    description: `Agency Site by gatsby.`,
    author: `@wazimu`,
    siteUrl: `https://agency-site-hb.netlify.app/`,
    image: `/agency-site.png`,
    twitterUsername: `@wazimu_hb`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-B2QQBYZ44J`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-B2QQBYZ44J", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,    
        },
      },
    }
  ],
}