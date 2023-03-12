import path from "path";
import 'webpack-dev-server';
import { Configuration  } from "webpack";
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: __dirname,
    publicPath:"/dist/",
    filename: './dist/bundle.js'
 },
  devServer: {
    static: path.join(__dirname, "/dist/"),
    compress: true,
    port: 4000,
    hot: true,
    liveReload: true,
  },
  plugins:
    [
      new ESLintPlugin(),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
        hash: true, // Cache busting
      }),
  ]
};

export default config;