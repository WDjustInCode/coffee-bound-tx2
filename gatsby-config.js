module.exports = {
  siteMetadata: {
    title: 'Coffee Bound',
    author: {
      name: `Justin Blocker`,
    },
    description: 'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
    
    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `pricing`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Features'},
      {path: 'pricing', label: 'Pricing'},
      {path: 'screenshots', label: 'Screenshots'},
      {path: 'testimonials', label: 'Testimonials'},
      {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.facebook.com/CoffeeboundTx`,
        fa: `facebook` },
      { service: `Instagram`,
        url : `https://www.instagram.com/coffee_bound/?hl=en`,
        fa: `twitter` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `../img/coffeeBoundLogoDB.png`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `Building 1387`,
      line2: `Williams Rd`,
      line3: `Fort Sam Houston`,
      line4: 'TX 78234'
    },
    contacts: [
      { text: `Email`, url: `mailto:j.info@coffeeboundtx.com`},
    ],
  },
  plugins: [
    //{
      //resolve: `gatsby-source-google-places`,
      //options: {
        //placeIds: ["ChIJ2UDrHSCNXIYRdyH5DJdC9Rg", "ChIJS2nMwl_1XIYRW7grfPMqMTI"],
        //apiKey: "AIzaSyAqgT1dmDtjKAe1HnXGy3GX1qeqygSS9h0"
      //}
    //},
    `gatsby-plugin-anchor-links`,
    `react-scrollspy`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
