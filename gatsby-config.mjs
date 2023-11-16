import { dirname } from 'path'
import { fileURLToPath } from 'url'
import remarkMath from 'remark-math'
const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
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
        mdxOptions: {
          remarkPlugins: [remarkMath],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
  ],
}

export default config
