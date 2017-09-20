// Compress images
// Excludes sprite images
'use strict';
const plugins = require('../../libs/plugins');

module.exports = (gulp, options) => () => {
  return gulp.src([options.images.src, '!' + options.sprite.srcFolder + '{,/**}'])
    .pipe(plugins.newer(options.images.dest))
    .pipe(plugins.imagemin([
      imagemin.svgo({
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
