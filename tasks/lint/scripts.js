// Lint script
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const path = require('path');
const notifier = require('node-notifier');

module.exports = (gulp, options) => () => {
  return gulp.src(options.scripts.src)
    .pipe(plugins.cached('lint:scripts'))
    .pipe(plugins.plumber())
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.util.env.production ? plugins.eslint.failAfterError() : plugins.util.noop())
    .on('error', function () {
      plugins.util.env.production ? process.exit(1) : plugins.util.noop()
    });
};
