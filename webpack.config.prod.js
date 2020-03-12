const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin//analyzer
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = (env, args) => {
    return merge(baseConfig(env, args),
        {
            optimization: {
                minimize: true,
                minimizer: [
                    new TerserJSPlugin({
                        parallel: true,
                    }),
                    new OptimizeCssAssetsPlugin()
                ]
            },
            plugins: [
                //new BundleAnalyzerPlugin()
            ]
        }
    )
}