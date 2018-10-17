const path = require('path');

module.exports = {
	entry: './src/es6/main.js',
	
	//mode: "production",
	mode: "development",

	output: {
		path: path.join(__dirname, 'src/'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ["env"] }
					}
				]
			}
		]
	}
};