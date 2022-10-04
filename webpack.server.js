const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const config = {
    entry: './src/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

module.exports = merge(baseConfig, config);