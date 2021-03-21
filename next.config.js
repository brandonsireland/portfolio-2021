// eslint-disable-next-line import/no-extraneous-dependencies
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages({
    webpack(config) {
        return config;
    },
});
