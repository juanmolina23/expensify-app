const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = env => {
	const isProduction = env === 'production'

	return {
		entry: ['babel-polyfill', './app/Main.js'],
		output: {
			publicPath: '/',
			path: path.resolve(__dirname, 'app', 'dist'),
			filename: 'bundle.js'
		},
		mode: 'development',
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			port: 3000,
			contentBase: path.join(__dirname, 'app'),
			hot: true,
			historyApiFallback: { index: 'index.html' },
			publicPath: '/dist/'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
								['@babel/preset-env', { targets: { node: '12' } }]
							]
						}
					}
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								url: false
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins: [new MiniCssExtractPlugin()]
	}
}
