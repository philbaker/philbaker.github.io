module.exports = {
  siteMetadata: {
    title: `Phil Baker`,
    author: {
      name: `Phil Baker`,
      summary: `Front-end developer`,
    },
    description: `Phil Baker - Front-end developer in the UK`,
    siteUrl: `https://philbaker.me`,
    social: {
      twitter: `philbaker_`,
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phil Baker Blog`,
        short_name: `PB`,
        start_url: `/`,
        background_color: `#DDD`,
        theme_color: `#555`,
        display: `minimal-ui`,
        icon: `content/assets/pb-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-klipse',
      options: {
        // Class prefix for <pre> tags containing code examples
        // defaults to empty string
        // if you use PrimsJS for example then add `language-` as the prefix
        classPrefix: 'language-',
        // Klipse config, you can check it here
        // klipseSettings: {
        //   selector: '.klipse-clojure', //selector for clojure evaluation snippets
        //   selector_js: '.klipse-javascript', // selector for clojure transpilation snippets 
        // },
        // https://github.com/viebel/klipse#configuration
        // Klipse version, defaults to '7.5.0'
        klipseVersion: '7.5.0',
        // To load any external scripts you need, pass an array of URLs. The plugin will always load them before the klipse plugin
        // defaults to an empty Array
        externalScripts: [],
      }
    }
  ],
}
