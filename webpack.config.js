// var path = require("path");
// var webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/index.jsx",
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env', 'react']
//         }
//       },
//       {
//                 test: /\.s?css$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: { importLoaders: 1 }
//                         },
//                         {
//                             loader: 'sass-loader'
//                         }
//                     ]
//                 })
//             }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"],
//   }
// };

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./frontend/index.jsx",
    output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {

        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                  presets: ['env', 'react']
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};
