const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
	target: 'web',
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, "src/scripts/index.js"),
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "js/[name].js",
		chunkFilename: "js/[name].chunk.js",
	},
	devtool: 'source-map',
	devServer: {
		port: 3000,
		hot: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/index.html'),
			filename: 'index.html',
			cache: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/page-template.html'),
			filename: 'page-template.html',
			cache: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/homepage.html'),
			filename: 'homepage.html',
			cache: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/articles.html'),
			filename: 'articles.html',
			cache: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/pages/projets.html'),
			filename: 'projets.html',
			cache: false,
		}),
		new MiniCssExtractPlugin({
			filename: "css/main.css",
			chunkFilename: "css/[name].chunk.js",
		}),
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				use: 'babel-loader',
			},
			{
				test: /\.s?css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// "style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
};