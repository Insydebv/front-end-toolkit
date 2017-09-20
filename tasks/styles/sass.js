// Generate CSS
'use strict';
const plugins = require('../../libs/plugins');
const onError = require('../../libs/onError');

module.exports = (gulp, options) => () => {
  return gulp.src(options.styles.src, {base: options.styles.srcFolder})
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      includePaths: options.styles.includePaths,
      outputStyle: (!plugins.util.env.production ? "expanded" : "compressed"),
    }))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write('./map'))
    .pipe(gulp.dest(options.styles.dest))
    .pipe(plugins.browserSync.stream({match: '**/*.css'}))
    ;
};
