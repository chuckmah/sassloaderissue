const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            // The loaders that compile to css (postcss and sass in this case) should be left as normal loaders
    
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        postcssOptions: {
                            plugins: [['autoprefixer']],
                        },
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            includePaths: [
                                resolve('src/commun'),
                                ,
                            ],
                        },
                    },
                },
            ],
        },
    ]
    },
};