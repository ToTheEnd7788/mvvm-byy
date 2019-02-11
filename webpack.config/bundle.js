const webpack = require('webpack');
import config from './config.js';

let compiler = webpack(config);

compiler.run((err, stats) => {
	if (err) throw new Error(err);
	console.log(stats.toString({
		colors: true
	}));
})