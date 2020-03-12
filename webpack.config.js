const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPluginConfigs = require('./htmlWebpackPluginConfig.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin//analyzer
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')//removed unused moment locales
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//import dark mode
//const darkThemeVars = require('antd/dist/dark-theme')
module.exports = (env, args) => {
    const mode = args.mode ? args.mode : 'production'
    const isProduction = mode === 'production'
    console.log('mode:', mode)
    return (
        {
            mode: mode,
            devtool: isProduction ? false : 'source-map',
            entry: ['./src/index.tsx'],
            output: {
                path: path.resolve(__dirname, 'build'), //must be absolute path,
                filename: 'index.bundle.[hash:6].js',
                publicPath: '/'
            },
            externals: {
                'react': 'React', //for import react from html with cdn
                'react-dom': 'ReactDOM'
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.web.js', '.js', '.json', '.css', '.png', '.gif', '.svg'],
            },
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        use: 'babel-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.ts[x]?/,
                        use: 'babel-loader',
                        include: path.join(__dirname, 'src'),
                        exclude: /node_modules/
                    },
                    {
                        test: /\.less/,
                        use: [ MiniCssExtractPlugin.loader, 'css-loader', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')()
                                    ]
                                }
                            }
                        }, 'less-loader'],
                        exclude: /node_modules/
                    },
                    //loader for antd styles.
                    {
                        test: /\.less/,
                        use: [{
                            loader:  MiniCssExtractPlugin.loader
                        }, {
                            loader: 'css-loader'
                        }, {
                            loader: 'less-loader',
                            options: {
                                modifyVars: {
                                    'primary-color': '#1DA57A',
                                    //'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
                                    // ...darkThemeVars
                                },
                                javascriptEnabled: true
                            }
                        }],
                        include: path.join(__dirname, '/node_modules/antd')
                    },
                    {
                        test: /\.(jpg|png|gif|webp|svg|eot|ttf|woff|woff2)/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    name: '[name]-[hash:5].[ext]',
                                    limit: 1024,
                                    esModule: false,
                                    outputPath: 'assets'
                                }
                            }
                        ],
                        exclude: /node_modules/
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template:'./src/index.html',
                    filename: 'index.html',
                    config: htmlWebpackPluginConfigs[isProduction ? 'production' : 'development']
                }),
                new CleanWebpackPlugin(),
                new webpack.HotModuleReplacementPlugin(), //hot update plugin
                new BundleAnalyzerPlugin(),
                new MomentLocalesPlugin({
                    localesToKeep: ['es-us', 'fr', 'zh-cn'],
                }),
                new MiniCssExtractPlugin({
                    filename: 'css/[name].css'
                })
            ],
            devServer: {
                port: 8001,
                hot: true,
                host: '0.0.0.0',
                stats: 'errors-only', //only prints error in console
                //overlay: false, //full screen error display? default is false
                //clientLogLevel: "silent", //silent meaning no 'Waiting for update signal from WDS...' and other.
                //compress: true //use gzip? default is false.
            }
        }
    )
}