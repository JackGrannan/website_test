const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

if ( process.env.NODE_ENV != 'production' )
{
  process.env.NODE_ENV = 'development';
}
const mode = process.env.NODE_ENV;

module.exports = {
  entry: {
    components: './src/components.js',
  },
  output: {
    path: path.resolve('dist/dev'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    //new UglifyJSPlugin(),
  ],
  mode: mode,
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['env', 'react']
        },
      }
    ]
  }
}
