module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          },
        }
      }
    ]
  },
  devServer: {
      proxy: {
        '/*': {
          bypass: () => '/index.html',
          secure: false
        }
      }
    }
};