// eslint-disable-next-line import/no-extraneous-dependencies
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[folder]__[local]___[hash:base64:5]',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: './resources/scss/imports.scss',
                    },
                },
            ],
        })
        return config;
    },
});
