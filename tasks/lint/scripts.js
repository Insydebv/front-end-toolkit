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
    // Manually call notifier with the gulp icon to prevent breaking the stream
    .pipe(plugins.eslint.results(results => {
      if (results.errorCount) {
        notifier.notify({
          icon: path.join(__dirname, '../../../gulp-notify', 'assets', 'gulp-error.png'),
          title: 'Task Failed [gulp-eslint]',
          message: 'See console',
          sound: 'Beep'
        });
      }
    }))
    .pipe(plugins.util.env.production ? plugins.eslint.failAfterError() : plugins.util.noop());
};
