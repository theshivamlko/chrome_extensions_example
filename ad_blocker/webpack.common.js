const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        popup: path.resolve(__dirname, 'src/popup/popup.tsx'),
        options: path.resolve(__dirname, 'src/options/options.tsx'),
        background: path.resolve(__dirname, 'src/background.ts'),
        contentScript: path.resolve(__dirname, 'src/contentScript.ts'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/manifest.json'),
                to: path.resolve(__dirname, 'build'),
            }, {
                from: path.resolve(__dirname, 'assets'),
                to: path.resolve(__dirname, 'build/assets'),
            }]
        }),
        ...getHtmlPlugins([
            'popup',
            'options'
        ]),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk],
    }))
}
