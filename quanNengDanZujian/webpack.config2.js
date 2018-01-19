var path = require('path')
var webpack = require('webpack')
var autoprefixer=require("autoprefixer")
//var HtmlWebpackPlugin=require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!sass-loader'
            }),
//          css: ExtractTextPlugin.extract('vue-style', 'css')
          },
//        postcss: [require('autoprefixer')],
          postcss:[autoprefixer({browsers:['last 2 versions']})]
        }
      },
//    {
//      test: /\.css$/,
//      exclude: [
//        /node_modules/,
//      ],
//      use: ["style-loader", "css-loader"]
//    },
//    {
//      test: /\.scss$/,
//      exclude: [
//        /node_modules/,
//      ],
//      use: ["style-loader", 'css-loader', 'sass-loader']
//    },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
//      loader: ExtractTextPlugin.extract({
//					fallback: 'style-loader',
//					use: 'css-loader!vue-style-loader'
//				}),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
//      loader:	ExtractTextPlugin.extract({
//        fallback: 'style-loader',
//        use: 'css-loader!sass-loader!vue-style-loader'
//      }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name]-[hash:7].[ext]'
				},
				include: path.resolve(__dirname, 'src')
			}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
//plugins:[
//  new ExtractTextPlugin('style.css'),
//  autoprefixer
//],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  config.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
//  new webpack.optimize.UglifyJsPlugin({
//    sourceMap: true,
//    compress: {
//      warnings: false
//    }
//  }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
//  new HtmlWebpackPlugin({
//  	title: '企融直通车',
//    filename: 'index.html',
//    template:'index.html',
//    inject: 'body'
//  }),
    new ExtractTextPlugin({
			//filename: 'app_[hash].css',
			filename: 'index.css',
			disable: false,
			allChunks:true
		}),
    autoprefixer
  ])
}

module.exports = config;

// console.log(module.exports.plugins);
