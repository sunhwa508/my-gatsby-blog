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
        className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
        maintainCase: true, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
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
