const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'resources/scss')],
        prependData: `@import "imports.scss";`,
    },
    webpack(config) {
        return config;
    },
    env: {
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
        CONTENTFUL_ENV: process.env.CONTENTFUL_ENV,
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        GTM_ID: process.env.GTM_ID,
    },
});
