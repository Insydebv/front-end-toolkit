// // Watch for changes
module.exports = function (gulp, plugins, options) {
	gulp.task('utilities:watch', function () {
		gulp.watch(options.scripts.bodyScriptSrc, ['scripts:bodyscripts']);
		gulp.watch(options.scripts.headScriptSrc, ['scripts:headscripts']);
		gulp.watch(options.scripts.pageScriptSrc, ['scripts:pagescripts']);

		gulp.watch(options.styles.srcFolder + '/**/*.scss', ['styles:build']);
		gulp.watch(options.styles.componentsSrc + '/**/*.scss', ['styles:build']);

		gulp.watch(options.fonts.src + '/**/*', ['fonts:build']);
		gulp.watch(options.images.src + '/**/*', ['images:imagemin']);
		// gulp.watch('src/images/sprite/**/*', ['sprite']);
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		]).on('change', plugins.browserSync.reload);
	});
};