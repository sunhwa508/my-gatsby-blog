module.exports = {
  siteMetadata: {
    title: `프론트엔드 개발자로 살아가기🐣`,
    description: `Sunhwa Blog`,
    author: `@sunhwajs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-remark-autolink-headers`,
      options: {
        offsetY: `100`,
        icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
        className: `anchor-header`,
        maintainCase: false,
        removeAccents: true,
        isIconAfterHeader: true,
        elements: [`h2`, 'h3', `h4`], // 링크를 추가할 Header 종류 선택
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
