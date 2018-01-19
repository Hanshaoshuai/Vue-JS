var path = require('path')
var webpack = require('webpack')
var autoprefixer=require("autoprefixer")
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          postcss:[autoprefixer({browsers:['last 2 versions']})]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
		    use: [{
		      loader: "url-loader",
		      options: {
		        limit: 10000,
		        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
		      }
		    }]
			}
    ]
  },
  resolve: {
  	extensions: ['.js', '.vue', '.jsx'], //后缀名自动补全
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
//    'jquery': 'jquery'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
//plugins: {
//  autoprefixer
//},
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
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
//  new webpack.ProvidePlugin({
//    $: "jquery",
//    jQuery: "jquery"
//	}),
    autoprefixer
  ])
}
