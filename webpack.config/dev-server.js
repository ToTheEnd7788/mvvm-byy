import express from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from './config';
import path from 'path'

const app = express();

config.entry.index.push('webpack-hot-middleware/client');

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];
const compiler = webpack(config);

app.get('/', (req, res) => {
  let srcPath = path.resolve(compiler.outputPath, 'index.html');
  res.set('Content-Type', 'text/html');
  res.send(compiler.outputFileSystem.readFileSync(srcPath));
  res.end();
});

const devMidllware = WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(devMidllware);
app.use(WebpackHotMiddleware(compiler));

app.use('/dist', express.static(path.resolve(__dirname, '../dist')))

app.listen(8080, err => {
  if (err) throw new Error('Failed to start the server...');
  console.log('The dev-server is listening at port: 8080...');
})