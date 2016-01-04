var config = {
	entry: {
		bundle: './entry.jsx',
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
			}
		]
	}
};

module.exports = config;