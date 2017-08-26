const webpack = require("webpack");
const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: "source-map",
  entry: {
    "c1-reactcore": [
      "react",
      "react-dom",
      "react-router",
      "prop-types"
    ],
    "c2-libs": [
      "react-bootstrap/lib/Glyphicon",
      "react-bootstrap/lib/Grid",
      "react-bootstrap/lib/Row",
      "react-bootstrap/lib/PageHeader",
      "react-bootstrap/lib/Col",
      "react-bootstrap/lib/Form",
      "react-bootstrap/lib/FormGroup",
      "react-bootstrap/lib/InputGroup",
      "react-bootstrap/lib/FormControl",
      "react-bootstrap/lib/ControlLabel",
      "react-bootstrap/lib/Button",
    ],
    "c3-main": path.resolve(__dirname, "src/index.jsx")
  },
  output: {
    path: path.resolve(__dirname, "app/"),
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
    // alias: {
    //   react: "preact-compat",
    //   "react-dom": "preact-compat"
    // }
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ["c2-libs", "c1-reactcore"],
      minChunks: Infinity
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
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
    }),
    new ExtractTextPlugin("[name].[contenthash].css"),
    new HtmlWebpackPlugin({
      title: 'Slowness Kills',
      template: 'src/index.ejs',
      filename: '../index.html'
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  );
}

if (process.env.NODE_ENV === "watch") {
  config.output.filename = "[name].js";
} else {
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

module.exports = config;
