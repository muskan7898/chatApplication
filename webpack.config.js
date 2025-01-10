const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  watch: false,
  entry: path.resolve(__dirname, './src/server.ts'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'packages'),
        ],
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, 'node_modules')
    }),
  ],
};
