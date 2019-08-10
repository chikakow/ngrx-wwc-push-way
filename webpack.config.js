const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const tailwindcss = require('tailwindcss');
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-short')(),
                        tailwindcss('./tailwind-config.js'),
                        require('autoprefixer'),
                    ]
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: 'App Name',
            contentImage: path.join(__dirname, 'image.png')
        }),
    ]
};