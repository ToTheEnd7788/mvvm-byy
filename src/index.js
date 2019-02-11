import './main';
import Byy from 'byy-p';

new Byy({
	el: '#app',
	data: {
		name: 'byy',
		btnName: '改变端口',
		version: '1.0.0',
		count: 0,
    showLink: true,
		dependencies: {
			webpack: ['webpack', 'webpack-cli'],
      babel: ['babel-loader', 'babel-cli', 'babel-core', 'babel-preset-env'],
			server: {
				frame: 'express',
				port: 8080,
				page: 'index'
			}
		}
	},

	methods: {
		changePort () {
			this.dependencies.server.port++;
		}
	}
});