var webpack = require('webpack');  
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// Entry points
var entryPoints = require("./configs/entry.config.js");

module.exports = {  
    entry: entryPoints,
    output: {
        path: __dirname + "/build",
        filename: '[name]Bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new CommonsChunkPlugin("commons.chunk.js")
    ]
};