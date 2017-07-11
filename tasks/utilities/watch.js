// // Watch for changes
'use strict';
const plugins = require('../../libs/plugins');
const path = require('path');

// Watch for changes
module.exports = (gulp, options) => () => {

	// Reload browser after tasks are finished
	// This will be easier in gulp 4.x.x

	gulp.task('watchBodyScripts', ['scripts:bodyscripts', 'lint:scripts'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('watchHeadScripts', ['scripts:headscripts', 'lint:scripts'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('watchPageScripts', ['scripts:pagescripts', 'lint:scripts'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	/* steal watcher */
	gulp.task('watchScripts', ['lint:scripts'], function (done) {
    plugins.stealTools.watch({}, {
      deps: true,
      dest: 'site/assets',
    });
		done();
	});
	gulp.task('watchFont', ['fonts:build'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('watchImages', ['images:imagemin'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('genSprite', function(callback) {
		plugins.sequence('images:generate-small-sprite-images', 'images:sprite', 'styles:sass')(callback);
	});
	gulp.task('watchSprite', ['genSprite'], function (done) {
		plugins.browserSync.reload();
		done();
	});
	gulp.task('genNpm', function(callback) {
		plugins.sequence(['npm:assets', 'npm:scripts', 'npm:styles'],'styles:sass')(callback);
	});
	gulp.task('watchNpm', ['genNpm'], function (done) {
		plugins.browserSync.reload();
		done();
	});

	gulp.watch(options.scripts.bodyScriptSrc, ['watchBodyScripts']);
	gulp.watch(options.scripts.headScriptSrc, ['watchHeadScripts']);
	gulp.watch(options.scripts.pageScriptSrc, ['watchPageScripts']);
	gulp.watch(options.scripts.pageScriptSrc, ['watchScripts']);

	gulp.watch(path.join(options.styles.componentsSrc + '/**/*.scss'), ['styles:sass-index']);
	gulp.watch(["!" + options.styles.srcFolder + options.sprite.cssName, "!" + options.styles.srcFolder + options.npm.stylesFile, path.join(options.styles.srcFolder, '/**/*.{scss,sass}')], ['styles:sass', 'lint:styles']);

	gulp.watch(options.fonts.src, ['watchFont']);
	gulp.watch(options.npm.config, ['watchNpm']);

	gulp.watch(['!' + options.sprite.srcFolder + '{,/**}', options.images.src], ['watchImages']);

	gulp.watch(options.sprite.srcFolder + '/*' + options.sprite.retinaSuffix + '.png', ['watchSprite']);

	gulp.watch(options.utilities.watchSrc).on('change', plugins.browserSync.reload);
};