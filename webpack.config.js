const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
                        options: {sourceMap:true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap:true}
                    },


                ],

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
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
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
            template: './src/pug/index.pug',
            minify:false,
            title: 'Физический факултет',
            favicon: './src/assets/images/atom.ico',

        }),
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