module.exports = {
  siteMetadata: {
    title: "Aerion",
    titleTemplate: "%s · Aerion",
    description: "Aerion es un estudio de diseño web con sede en Uruguay. Landing pages, Static websites, WordPress and eCommerce.",
    siteUrl: "https://www.aerion.studio", // No trailing slash allowed!
    image: "/screenshot.jpg", // Path to your image you placed in the 'static' folder
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