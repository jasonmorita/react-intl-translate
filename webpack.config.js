
module.exports = {
  entry: './src/app.js',   // The startingpoint of the app
  output: {
    filename: 'bundle.js',  // Name of the "compiled" JavaScript.
    path: './dist',         // Which dir to put it on disk.
    publicPath: '/',        // Which relative path to fetch code from on the client.
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,            // Convert ES2015/React-code into ES5.
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,            // Load JSON-files into code base.
        exclude: /node_modules/,
        loader: 'json',
      },
    ],
  },
};
