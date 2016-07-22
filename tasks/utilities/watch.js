// Watch for changes
module.exports = {
	fn: function (gulp, plugins, options, callback) {

		gulp.watch(options.paths.scriptSrc, ['build:scripts']);
		gulp.watch(options.paths.headScriptSrc, ['build:headscripts']);
		gulp.watch(options.paths.pageScriptSrc, ['build:pagescripts']);

		gulp.watch(options.paths.stylesSrc, ['build:styles']);
		gulp.watch(options.paths.stylesComponentsSrc, ['build:sass-index']);

		gulp.watch(options.paths.fontSrc, ['build:fonts']);
		gulp.watch(options.paths.imgSrc, ['imagemin']);
		// gulp.watch('src/images/sprite/**/*', ['sprite']);
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		]).on('change', browserSync.reload);
	}
};
