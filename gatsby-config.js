module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Demy Kalcino",
    domain: "https://demykalcino.netlify.com",
    defaultTitle: "Website Creator & Monitoring",
    preamble:
      "We're a Thessaloniki, Greece-based team of computer scientists and software engineers.",
    defaultDescription:
      "We develop our own products. And provide software engineering and consulting to select clients.",
    postamble: "Think we can help your project? We'd love to hear from you:",
    contact: {
      email: "info@typostar.gr",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
  ],
};
