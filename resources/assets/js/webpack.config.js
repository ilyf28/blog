var config = {
	entry: {
		james: '../jsx/james.jsx',
	},
	output: {
		path: '../../../public/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
};

module.exports = config;