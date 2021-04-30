module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  pathPrefix: "/", // This path is subpath of your hosting https://domain/portfolio,
  siteMetadata: {
    title: "ESCEMI",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ESCEMI - À votre service",
        short_name: "ESCEMI",
        description:
          "À votre service pour vous accompagner et relever les défis de vos projets digitaux",
        start_url: "/",
        background_color: "#1c3144",
        theme_color: "#1c3144",
        display: "standalone",
        lang: "fr",
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `ESCEMI - At your service`,
            short_name: `ESCEMI`,
            description: `At your service to support you and meet the challenges of your digital projects`,
          },
        ],
        icon: "src/assets/img/website-icon.png", // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using "gatsby develop"
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        siteUrl: "https://www.escemi.com",
        localeJsonSourceName: "locale",
        languages: ["fr", "en"],
        defaultLanguage: "fr",
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: "::",
        },
        pages: [],
      },
    },
  ],
};
