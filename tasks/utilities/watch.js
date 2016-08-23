// // Watch for changes
module.exports = function (gulp, plugins, options) {
	function reload(done) {
		plugins.browserSync.reload();
		done();
	}

	gulp.task('utilities:watch', function (done) {
		gulp.watch(options.scripts.bodyScriptSrc, gulp.series('scripts:bodyscripts'));
		gulp.watch(options.scripts.headScriptSrc, gulp.series('scripts:headscripts'));
		gulp.watch(options.scripts.pageScriptSrc, gulp.series('scripts:pagescripts'));

		gulp.watch(options.styles.srcFolder + '/**/*.scss', gulp.series('styles:build'));
		gulp.watch(options.styles.componentsSrc + '/**/*.scss', gulp.series('styles:build'));

		gulp.watch(options.fonts.src + '/**/*', gulp.series('fonts:build'));
		gulp.watch(options.images.src + '/**/*', gulp.series('images:imagemin'));
		// gulp.watch('src/images/sprite/**/*', ['sprite']);
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		], gulp.series(reload));
		done();
	});
};