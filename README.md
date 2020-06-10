# gatsby-starter-wordpress-typescript
The starter theme of Gatsby site with WordPress (Using WP API).

Install this starter (assuming Gatsby is installed) by running from your CLI:

## Just try the demo site

You can deploy the demo site to the following services.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/getshifter/gatsby-starter-wordpress-typescript/)


[![netlifybutton](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/getshifter/gatsby-starter-wordpress-typescript/)


## Getting started

### Create new site

```
$ gatsby new gatsby-wordpress https://github.com/getshifter/gatsby-starter-wordpress-typescript

or

$  npx gatsby-cli new gatsby-wordpress https://github.com/getshifter/gatsby-starter-wordpress-typescript
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

## PWA

The example provides PWA by using `gatsby-plugin-manifest` and `gatsby-plugin-offline`.
You can check the application icons in the `static/icons` directory.

```bash
% tree st   i
/icons atic/
static/icons
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-384x384.png
├── icon-512x512.png
├── icon-72x72.png
└── icon-96x96.png

1 directory, 8 files
```

And manifest.json's content are in `gatsby-config.js`.

```javascript
 {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WPGatsby Example`,
        short_name: `WPGatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00bfff`,
        display: `standalone`,
      },
 },
```
