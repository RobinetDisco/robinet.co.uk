module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.robinet.co.uk',
    title: "John's Technical Musings",
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [require('remark-math')],
        defaultLayouts: {
          default: require.resolve('./src/components/mdx-layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
