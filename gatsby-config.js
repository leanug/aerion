module.exports = {
  siteMetadata: {
    title: "Extraterrestre",
    titleTemplate: "%s · Extraterrestre",
    description: "Extraterrestre es un estudio de diseño con sede en Buenos Aires, Argentina.",
    siteUrl: "https://www.extraterrestre.design", // No trailing slash allowed!
    image: "/screenshot.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/assets/portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["400", "500", "700"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
            {
              family: "Manrope",
              variants: ["400", "500", "700"],
              fontDisplay: 'swap',
              strategy: 'selfHosted',
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
}