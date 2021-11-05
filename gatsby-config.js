require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

// gatsby-config.js
const myQuery = `{
  allContentfulBlogPost {
    nodes {
      objectID: id
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      publishDate
      tags
      author {
        id
        email
        name
        image {
          gatsbyImageData
        }
      }
      slug
      title
      heroImage {
        gatsbyImageData
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allContentfulBlogPost.nodes, // optional
    // indexName: 'blog-post', // overrides main index name, optional
    // settings: {
    //   // optional, any index settings
    //   // Note: by supplying settings, you will overwrite all existing settings on the index
    // },
    // matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  flags: {
    DEV_WEBPACK_CACHE: true,
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/admin/*`] },
    // },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_YOUR_ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.GATSBY_YOUR_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_YOUR_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        // settings: {
        //   // optional, any index settings
        //   // Note: by supplying settings, you will overwrite all existing settings on the index
        // },
        // //enablePartialUpdates: true, // default: false
        // matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
        // concurrentQueries: false, // default: true
        // skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
        // continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
      },
    },
  ],
};


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: loaders.js(),
          },
        ],
      },
    })
}


