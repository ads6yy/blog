const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin")

const path = require('path')

module.exports = {
	target: "web",
	mode: "development",
	entry: './src/scripts/index.js',
	output: {
		path: path.join(__dirname, "build"),
		filename: "js/[name].js",
	},
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'src/pages'),
		},
		port: 3000,
		hot: true,
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			name: false,
		},
		minimize: true,
		minimizer: [new JsonMinimizerPlugin()],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/pages/index.html"),
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[name].chunk.js",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.s?css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
		],
	},
}