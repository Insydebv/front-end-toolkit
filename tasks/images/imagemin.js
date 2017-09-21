// Compress images
// Excludes sprite images
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return gulp.src(options.images.src)
    .pipe(plugins.newer(options.images.dest))
    .pipe(plugins.imagemin([
      plugins.imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(options.images.dest))
    .pipe(plugins.browserSync.stream())
    ;
};
