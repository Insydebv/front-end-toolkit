// Watch for changes
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');

// Watch for changes
module.exports = (gulp, options) => () => {

	// Reload browser after tasks are finished
	// This will be easier in gulp 4.x.x
  gulp.task('watchScripts', gulp.series('lint:scripts'), function (done) {
    plugins.browserSync.reload();
    done();
  });
  gulp.task('watchVendorScripts', gulp.series('steal:build'), function (done) {
    plugins.browserSync.reload();
    done();
  });
	gulp.task('watchFont', gulp.series('fonts:build'), function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('watchImages', gulp.series('images:imagemin'), function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('genNpm', function(callback) {
		gulp.series(['npm:assets', 'npm:styles'],'styles:sass')(callback);
	});
	gulp.task('watchNpm', gulp.series('genNpm'), function (done) {
		plugins.browserSync.reload();
		done();
	});

  gulp.watch(options.scripts.src, gulp.series('watchScripts'));
  gulp.watch(options.stealTools.devBundleWatch, gulp.series('watchVendorScripts'));

	gulp.watch(path.join(options.styles.componentsSrc + '/**/*.scss'), gulp.series('styles:sass-index'));
	gulp.watch(["!" + options.styles.srcFolder + options.npm.stylesFile, path.join(options.styles.srcFolder, '/**/*.{scss,sass}')], gulp.series('styles:sass', 'lint:styles'));

	gulp.watch(options.fonts.src, gulp.series('watchFont'));

	gulp.watch(options.npm.config, gulp.series('watchNpm'));

	gulp.watch(options.images.src, gulp.series('watchImages'));

	gulp.watch(options.utilities.watchSrc).on('change', plugins.browserSync.reload);
};
