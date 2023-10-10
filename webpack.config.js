const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                loader: 'file-loader', // Add a loader specifically for SVG files
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/', // Output path for SVG images
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Specify the directory to serve
        },
        open: true, // Open the default browser when the server starts
    },
};
