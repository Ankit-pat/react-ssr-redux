
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,       // (1)
                use: 'file-loader',
            }
        ]
    }
}