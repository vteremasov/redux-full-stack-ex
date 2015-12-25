var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
              // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css']
        // Include accepts either a path or an array of paths.
        //include: PATHS.app
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
