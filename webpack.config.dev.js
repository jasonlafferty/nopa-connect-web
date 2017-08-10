import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/app/client/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      },
      {
        loader: "css-loader", options: {
          sourceMap: true
        }
      },
      {
        loader: "sass-loader", options: {
          sourceMap: true
        }
      }]
    }],
    loaders: [
      {test: /\.json$/, loader: "json-loader"},
      {test: /\.js$/, include: path.join(__dirname, 'src'), exclude: /node_modules/, loaders: ['babel']},
      {test: /(\.scss)$/, loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
      {test: /\.svg$/, loader: "url-loader?mimetype=image/svg+xml"}
    ]
  }
};
