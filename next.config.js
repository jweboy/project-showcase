/*
 * @Author: jweboy
 * @Date: 2019-12-02 13:10:27
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-02 13:26:28
 */
const withLess = require('@zeit/next-less');

module.exports = withLess({
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  // localsConvention: 'camelCase',
})