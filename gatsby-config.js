module.exports = {
  siteMetadata: {
    title: `프론트엔드 개발자로 살아가기 🐣`,
    description: `Sunhwa Blog`,
    author: `@sunhwajs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        //required unless removeFirebaseServiceWorker == true
        config: {
          apiKey: "AIzaSyDr2PzGa3U_rUra29QoTVnb2UcrdEnhN7s",
          appId: "1:237932076417:web:34d0ae8e72ce774aa15c80",
          messagingSenderId: "237932076417",
          projectId: "gatsby-blog",
        },
        //optionally override the firebase version used by the service worker
        firebaseVersion: "8.2.9", //e.g., '8.1.1'
        //optionally disables development service worker
        disableDevelopment: true,
        //optionally tells plugin to help unregistering/removing service worker
        removeFirebaseServiceWorker: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
