var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS2'],
    files: [
      './js/tests.webpack.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      './js/tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots', 'junit', 'coverage'],
    singleRun: true,
    junitReporter: {
        outputDir: '',
        outputFile: undefined,
        suite: '',
        useBrowserName: true
    },
    coverageReporter: {
        type: 'cobertura',
        dir: 'coverage/',
        file: 'coverage.xml'
    },
    webpack: {
      module: {
        loaders: [
                {
                    test: /.html$/,
                    loader: 'ngtemplate?relativeTo=/app!html?root=' + __dirname + '/../app'
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
                    test: /\.(png|eot|ttf|wav|mp3)$/,
                    loader: 'file-loader'
                }
            ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(test|node_modules)/,
                loader: 'isparta-loader'
            },
            {
                test: /test.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
      },
      resolve: {
          root: path.resolve(__dirname, '../app/'),
          extensions: ['', '.js']
      },
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          })
      ],
      watch: true,
      sassLoader: {
          includePaths: [path.resolve(__dirname, "../app")]
      },
      isparta: {
          babel: {
              presets: 'es2015'
          }
      }
    },
    webpackServer: {
      noInfo: true,
    }
  });
};
