const webpack = require("webpack");
const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENABLE_GOOGLE_ANALYTICS_IN_PROD = true;

const config = {
  devtool: "source-map",
  entry: {
    "app": path.resolve(__dirname, "src/index.jsx")
  },
  output: {
    path: path.resolve(__dirname, "app/"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["app"], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin({
      fileName: "webpack_manifest.json"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
};

let prod = false;
let titlePrefix = '';

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  );

  prod = true;
} else {
  titlePrefix = '[DEV] ';
}

if (process.env.NODE_ENV === "watch") {
  config.output.filename = "[name].js";
  config.plugins.push(
    new ExtractTextPlugin("[name].css")
  );

  titlePrefix = '[WATCH] ';
} else {
  config.plugins.push(
    new ExtractTextPlugin("[name].[contenthash].css")
  );

  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "report.html"
    })
  );

  config.performance = {
    hints: "warning"
  };
}

config.plugins.push(new HtmlWebpackPlugin({
  title: `${titlePrefix}Slowness Kills`,
  template: 'src/index.ejs',
  filename: '../index.html',
  prod,
  analytics: prod && ENABLE_GOOGLE_ANALYTICS_IN_PROD
}));
config.plugins.push(new HtmlWebpackPlugin({
  title: `${titlePrefix}About Slowness Kills Project`,
  template: 'src/about.ejs',
  filename: '../about.html',
  prod,
  analytics: prod && ENABLE_GOOGLE_ANALYTICS_IN_PROD
}));

module.exports = config;
