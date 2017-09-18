module.exports = {

    // set the context (optional)
    context: __dirname + '/src',
    entry: 'index.js',

    // enable loading modules relatively (without the ../../ prefix)
    resolve: {
        modules: [__dirname + "/src", __dirname + '/node_modules']
    },

    module: {
        rules: [

            // load and compile javascript
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // load css and process less
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader']

            },

            // load JSON files and HTML
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.html$/, exclude: /node_modules/, loader: "raw-loader"},

            // load fonts(inline base64 URLs for <=8k)
            {test: /\.(ttf|eot|svg|otf)$/, loader: "file-loader"},
            {test: /\.woff(2)?$/, loader: "url-loader?limit=8192&minetype=application/font-woff"},

            // load images (inline base64 URLs for <=8k images)
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    // webpack dev server configuration
    devServer: {
        contentBase: "./src",
        noInfo: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
    },

    // support source maps
    devtool: "inline-source-map"
};
