// let activeEnv = process.env.NODE_ENV || "staging";
let activeEnv = "staging";
console.log(`Using environment config: '${activeEnv}'`);
require('dotenv').config({
	path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // apiToken: `d629a2851fa7b58b85c29a284bbcef`,
        apiToken: process.env.DATO_API_TOKEN,
        // environment: process.env.ENVIRONMENT,
        environment: `staging`,
      },
    },
  ],
}
