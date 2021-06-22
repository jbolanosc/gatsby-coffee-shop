require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ancestros Coffee`,
    description: `Costa Rican Coffee Shop`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: process.env.SNIPCART_KEY, // use public api key here or in environment variable
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          fr: {
            actions: {
              checkout: "Valider le panier",
            },
          },
        },
        templatesUrl:
          "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
        icon: `src/images/coffee-beans.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
