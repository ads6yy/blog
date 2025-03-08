const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/scripts/index.js',
	output: {
		path: path.join(__dirname, "build"),
		filename: "main.js",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'src/pages'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: path.resolve(__dirname, "src/pages/index.html"),
		// 	filename: "index.html",
		// }),
		// new MiniCssExtractPlugin({
		// 	filename: "[name].css"
		// }),
	],
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
}