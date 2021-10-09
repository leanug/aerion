module.exports = {
  siteMetadata: {
    author: "Leandro Ubilla Gonzalez",
    description: `Increase the conversion rates of your marketing campaings with a professional 
    and fast loading landing page.`,
    siteUrl: "https://www.aerion.studio",
    title: "Aerion Studio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700`,
          `poppins\:600,700`,
        ],
        display: 'swap'
      }
    }
  ],
};
