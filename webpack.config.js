const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        new HtmlWebpackPlugin({
            //filename: 'main.html',
            template: './src/pug/index.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',
        }),
        /*new HtmlWebpackPlugin({
            filename: 'dekanat.html',
            template: './src/pug/pages/dekanat.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pug/pages/news.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: 'spex.html',
            template: './src/pug/pages/spec.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: 'pageNews.html',
            template: './src/pug/pages/pageNews.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '1.html',
            template: './src/pug/pages/1.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '2.html',
            template: './src/pug/pages/2.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '3.html',
            template: './src/pug/pages/3.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '4.html',
            template: './src/pug/pages/4.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '5.html',
            template: './src/pug/pages/5.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: '6.html',
            template: './src/pug/pages/6.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',


        }),
        new HtmlWebpackPlugin({
            filename: 'enrollee.html',
            template: './src/pug/pages/enrollee.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),
        new HtmlWebpackPlugin({
            filename: 'mainInf.html',
            template: './src/pug/pages/mainInf.pug',
            minify: false,
            favicon: './src/assets/images/atom.ico',

        }),*/
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