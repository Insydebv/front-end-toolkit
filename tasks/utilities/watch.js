// Watch for changes
module.exports = {
	fn: function (gulp, plugins, options, callback) {

		gulp.watch(options.paths.bodyScriptSrc, ['scripts:scripts']);
		gulp.watch(options.paths.headScriptSrc, ['scripts:headscripts']);
		gulp.watch(options.paths.pageScriptSrc, ['scripts:pagescripts']);

		gulp.watch(options.paths.stylesSrc, ['styles:sass']);
		gulp.watch(options.paths.stylesComponentsSrc, ['styles']);

		gulp.watch(options.paths.fontSrc, ['fonts:copy']);
		gulp.watch(options.paths.imgSrc, ['images:imagemin']);
		// gulp.watch('src/images/sprite/**/*', ['sprite']);
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		]).on('change', plugins.browserSync.reload);
	}
};
