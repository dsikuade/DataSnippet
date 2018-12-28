import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor.js'),
    main: path.resolve(__dirname, 'src/index.js')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Extract the CSS so it is easier (and more reliable)
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Get a Md5 hash for the filename
    new WebpackMd5Hash(),

    //CommonsChunkPlugin will split vendor libraries away from main
    //bundling them separately from our main code
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),

    //HTML plugin
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      //Properties placed here are availaible in index.html via htmlWebpackPlugin.options.varName
      trackJSToken: '3449ef48d257435f94c3f8fab61cb39d',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    //Remove duplicate packages
    new webpack.optimize.DedupePlugin(),

    //Minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
