const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin//analyzer

module.exports = (env, args) => {
    return merge(baseConfig(env, args),
        {
            plugins: [
                new webpack.HotModuleReplacementPlugin(), //hot update plugin
                //new BundleAnalyzerPlugin()
            ],
            devServer: {
                port: 8001,
                hot: true,
                host: '0.0.0.0',
                stats: 'errors-only' //only prints error in console
                //overlay: false, //full screen error display? default is false
                //clientLogLevel: "silent", //silent meaning no 'Waiting for update signal from WDS...' and other.
                //compress: true //use gzip? default is false.
            }
        }
    )
}