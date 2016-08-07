module.exports = {
  entry: __dirname + '/../',
  output: {
    path: __dirname,
    filename: 'tydel-logger.js',
    libraryTarget: 'this',
    library: 'TydelLogger'
  },
  externals: {}
};
