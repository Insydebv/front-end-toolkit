// Concatenate and minify headscripts: scripts that need to be loaded in the <head> section of a page
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
  return gulp.src(options.scripts.testScriptSrc)
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    .pipe(plugins.filter('**/*.spec.js'))
    .pipe(plugins.mocha({reporter: 'nyan'}))
    ;
};
