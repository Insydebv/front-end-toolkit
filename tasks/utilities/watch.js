// Watch for changes
module.exports = {
	fn: function (gulp, plugins, options) {

		gulp.watch(options.scripts.bodyScriptSrc, ['scripts:bodyscripts']);
		gulp.watch(options.scripts.headScriptSrc, ['scripts:headscripts']);
		gulp.watch(options.scripts.pageScriptSrc, ['scripts:pagescripts']);

		gulp.watch(options.styles.src, ['styles:sass']);
		gulp.watch(options.styles.componentsSrc, ['styles']);

		gulp.watch(options.fonts.src, ['fonts:build']);
		gulp.watch(options.images.src, ['images:imagemin']);
		// gulp.watch('src/images/sprite/**/*', ['sprite']);
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		]).on('change', plugins.browserSync.reload);
	}
};
