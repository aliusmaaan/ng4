var path = require('path');
var webpack = require('webpack');
var glob = require('glob');


module.exports = {
    entry: './app/app.js',
    entry: {
    'vendor': [
      'jquery',
      'angular',
      'angular-resource',
      'angular-ui-router',
      'angular-sanitize',
      'bootstrap/dist/js/bootstrap',
      'bootstrap/dist/css/bootstrap.css'
    ],
 
    // Auto-detect all pages in directory.
    'all': glob.sync('./app/**/*.js'),
  },
    output: {
        path: __dirname + '/dist',
        filename: 'all.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname +'/app!html?root=' + __dirname + '/app'
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader",
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?root=' + __dirname + '/app', 'autoprefixer-loader?browsers=last 2 versions', 'sass'],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },{
                test: /\.(jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.txt$/,
                loader: 'raw-loader'
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin(['all', 'vendor'], '[name].js')
    ],
    resolve: {
        root: path.resolve('app/'),
        extensions: ['', '.js']
    },
    eslint: {
        failOnError: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./app")]
    },
    devtool: 'source-map' 
};
