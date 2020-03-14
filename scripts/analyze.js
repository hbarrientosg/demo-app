process.env.NODE_ENV = 'production';

const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

const webpackConfigProd = require("react-scripts/config/webpack.config")();

webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({ token: 'a5b1129a025fd1d92a99f5' })
)

require("react-scripts/scripts/build")