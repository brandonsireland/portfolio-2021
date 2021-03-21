// eslint-disable-next-line import/no-extraneous-dependencies
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages({
    webpack(config) {
        return config;
    },
    env: {
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
        CONTENTFUL_ENV: process.env.CONTENTFUL_ENV,
    },
});
