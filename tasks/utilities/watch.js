// // Watch for changes
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');

// Watch for changes
module.exports = (gulp, options) => () => {

	// Reload  browser
	gulp.task('reloadBrowser', function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('watchFont', function (done) {
		plugins.sequence('fonts:build', 'reloadBrowser');
		done();
	});
	gulp.task('watchImages', function (done) {
		plugins.sequence('images:imagemin', 'reloadBrowser');
		done();
	});
	gulp.task('watchSprite', function (done) {
		plugins.sequence('images:imagemin', 'reloadBrowser');
		done();
	});
	gulp.task('watchBower', function (done) {
		plugins.sequence(['bower:assets', 'bower:scripts'], 'bower:styles', 'styles:sass', 'reloadBrowser');
		done();
	});

	gulp.watch(options.scripts.bodyScriptSrc, ['scripts:bodyscripts']);
	gulp.watch(options.scripts.headScriptSrc, ['scripts:headscripts']);
	gulp.watch(path.join(options.scripts.pageScriptSrc, '/**/*.js'), ['scripts:pagescripts']);

	gulp.watch(path.join(options.styles.componentsSrc + '/**/*.scss'), ['styles:sass-index']);
	gulp.watch(["!" + options.styles.srcFolder + options.sprite.cssName, "!" + options.styles.srcFolder + options.bower.stylesFile, path.join(options.styles.srcFolder, '/**/*.{scss,sass}')], ['styles:sass', 'lint:styles']);

	gulp.watch(options.fonts.src, ['watchFont']);
	gulp.watch(options.bower.config, ['watchBower']);

	gulp.watch(['!' + options.sprite.srcFolder + '{,/**}', options.images.src], ['images:imagemin', 'reloadBrowser']);

	gulp.watch(options.sprite.srcFolder + '/*' + options.sprite.retinaSuffix + '.png', ['watchSprite']);

	gulp.watch(options.utilities.watchSrc).on('change', plugins.browserSync.reload);
};