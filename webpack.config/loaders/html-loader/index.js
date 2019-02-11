import loaderUtils from 'loader-utils';

export default function(source) {
  let callback = this.async();
  
  let options = loaderUtils.getOptions(this);

  this.emitFile(options.filename, source);

  callback(null, '// Extract byy html-loader...');
}