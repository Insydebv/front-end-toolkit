// Lint script
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const jsHintErrorReporter = require('../../libs/jsHintErrorReporter');
const through = require('through2');
const path = require('path');

module.exports = (gulp, options) => () => {
  return gulp.src(options.scripts.bodyScriptSrc.concat(options.scripts.headScriptSrc, options.scripts.pageScriptSrc))
    .pipe(plugins.cached('lint:scripts'))
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.results(results => {
      // Called once for all ESLint results.
      console.log(`Total Results: ${results.length}`);
      console.log(`Total Warnings: ${results.warningCount}`);
      console.log(`Total Errors: ${results.errorCount}`);
    }));
};
