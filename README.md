# gatsby-starter-typescript
The starter theme of Gatsby site with WordPress (Using WP API).

Install this starter (assuming Gatsby is installed) by running from your CLI:

## Getting started

### Create new site

```
$ gatsby new gatsby-wordpress https://github.com/getshifter/gatsby-starter-wordpress-typescript
```

### Set your WordPress URL

Open `gatsby-config.js`, and replace the following properties.

- `siteMetadata.postURLPrefix`: Your WordPress Posts page URL prefix (default: `news`)
- `siteMetadata.pageURLPrefix`: Your WordPress Pages page URL prefix (default: ``)
- `plugins[].options.baseURL`: Your WordPress URL (default: `central.wordcamp.org`)

```javascript
module.exports = {
  siteMetadata: {
    postURLPrefix: 'news',
    pageURLPrefix: '',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: "central.wordcamp.org",
```

All of options can see this page.
https://www.gatsbyjs.org/packages/gatsby-source-wordpress/

### Run in your Local

```bash
$ npm run develop

or

$ gatsby develop
```


### Build static HTML

```bash
$ npm run build

or

$ gatsby build
```

Generated HTML will be placed in `public` directory.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/getshifter/gatsby-starter-wordpress-typescript)
