module.exports = {
	entry: './app/app.jsx', 
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {	
			Nav: 'app/components/Nav.jsx',
			Main: 'app/components/Main.jsx',
			Weather: 'app/components/Weather.jsx',
			GreeterForm: 'app/components/GreeterForm.jsx',
			GreeterMessage: 'app/components/GreeterMessage.jsx',
			About: 'app/components/About.jsx',
			Extensions: 'app/components/Extensions.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};