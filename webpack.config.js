const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlPluginBuild = (filename,template) => {
    return new HtmlWebpackPlugin({
        filename,
        template,
        minify: false,
        favicon: './src/assets/images/atom.ico',
    })
}
const HtmlPluginDev = template => {
    return new HtmlWebpackPlugin({
        template,
        minify: false,
        favicon: './src/assets/images/atom.ico',
    })
}

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/bundle.[hash].js',
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        }

                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    },


                ],

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/images/[contenthash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/fonts/[contenthash].[ext]',
                        },
                    },
                ],
            },
        ],

    },

    plugins: [
        HtmlPluginBuild('main.html','./src/pug/index.pug'),
        HtmlPluginBuild('dekanat.html','./src/pug/pages/dekanat.pug'),
        HtmlPluginBuild('news.html','./src/pug/pages/news.pug'),
        HtmlPluginBuild('spex.html','./src/pug/pages/spec.pug'),
        HtmlPluginBuild('pageNews.html','./src/pug/pages/pageNews.pug'),
        HtmlPluginBuild('1.html','./src/pug/pages/1.pug'),
        HtmlPluginBuild('2.html','./src/pug/pages/2.pug'),
        HtmlPluginBuild('3.html','./src/pug/pages/3.pug'),
        HtmlPluginBuild('4.html','./src/pug/pages/4.pug'),
        HtmlPluginBuild('5.html','./src/pug/pages/5.pug'),
        HtmlPluginBuild('6.html','./src/pug/pages/6.pug'),
        HtmlPluginBuild('enrollee.html','./src/pug/pages/enrollee.pug'),
        HtmlPluginBuild('mainInf.html','./src/pug/pages/mainInf.pug'),
        HtmlPluginBuild('observatory.html','./src/pug/pages/observatory.pug'),
        HtmlPluginBuild('personTemplate.html','./src/pug/pages/personTemplate.pug'),
        HtmlPluginBuild('publicationsTemplate.html','./src/pug/pages/publicationsTemplate.pug'),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css',
        }),

    ],
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
    }
    if (argv.mode === 'production') {
    }
    return config;
}