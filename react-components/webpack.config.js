const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({development}) => ({
  mode: development ? "development" : "production",
	devtool: development ? "eval" : 'source-map',
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
			title: "React Components",
			template: "src/index.html"
	 }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new ESLintPlugin({ extensions: ['js'] }),
    new CopyPlugin({
      patterns: [
        {
        from: "./src/assets",
        to: "./assets",
        }
      ], 
    }),
  ],
	resolve: {
    extensions: ['.jsx', '.js'],
  },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		port: 9000,
  },
});
