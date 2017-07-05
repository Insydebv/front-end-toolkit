// Concatenate and minify body scripts
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');


var stealTools = require("steal-tools");
// var gulp = require('gulp');
// var steal = require('gulp-steal');

module.exports = (gulp, options) => () => {
  return stealTools.build({
    config: 'package.json!npm', // baseURL is now "client"
    // main: 'src/script/main', // relative to baseURL
  }, {
    // bundleAssets: true,
    dest: 'site/assets',
    bundleSteal: false,
    sourceMaps: true,
    minify: false,
    debug: false,
    quiet: false,
    maxBundleRequests: 3,
    maxMainRequests: 3
  });
};
