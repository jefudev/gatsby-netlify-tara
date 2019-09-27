module.exports = {
  siteMetadata: {
    title: `Tara Richter`,
    description: `Tara Richter is the President of Richter Publishing LLC. She specializes in helping business owners how to write their non-fiction story in four weeks & publish a book in order to become an expert in their industry. She has been featured on CNN, ABC, Daytime TV, FOX, SSN, Channel 10 News, USA TODAY, Beverly Hills Times and radio stations all over the world.`,
    author: `@jef-lau`,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
