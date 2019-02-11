import { srcRoot, disRoot, byyRoot } from './base';
import path from 'path';

export default {
	context: srcRoot,

	entry: {
		index: ['./index.js']
	},

	mode: 'development',

	output: {
		path: disRoot,
		filename: '[name].js',
		publicPath: '/dist'
	},

	resolve: {
		modules: [
			'node_modules',
      byyRoot,
		],
		extensions: ['.js', '.html'],
		mainFiles: ['index']
  },
  
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'loaders'),
      'node_modules'
    ],
    extensions: ['.js', '.json'],
    mainFields: ['index', 'loader', 'main'],
    moduleExtensions: ['-loader']
  },

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'html',
				options: {
					filename: 'index.html'
				}
			}
		]
	},
};