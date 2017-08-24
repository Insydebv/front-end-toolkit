// Lint script
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');
const jsHintErrorReporter = require('../../libs/jsHintErrorReporter');
const through = require('through2');

module.exports = (gulp, options) => () => {
  return gulp.src(options.scripts.src)
    .pipe(plugins.cached('lint:scripts'))
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    // .pipe(through.obj(jsHintErrorReporter))
  // plug in custom error reporter https://github.com/adametry/gulp-eslint/issues/135
  // https://stackoverflow.com/questions/36207566/throw-a-gulp-notify-message-when-gulp-eslint-fails
    ;
};
