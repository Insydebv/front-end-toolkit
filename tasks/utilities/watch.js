// // Watch for changes
module.exports = function (gulp, plugins, options) {

	// Reload  browser
	function reloadBrowser(done) {
		plugins.browserSync.reload();
		done();
	}

	gulp.task('utilities:watch', function (done) {
		gulp.watch(options.scripts.bodyScriptSrc, gulp.series('scripts:bodyscripts', gulp.parallel('lint:scripts', reloadBrowser)));
		gulp.watch(options.scripts.headScriptSrc, gulp.series('scripts:headscripts', gulp.parallel('lint:scripts', reloadBrowser)));
		gulp.watch(options.scripts.pageScriptSrc, gulp.series('scripts:pagescripts', gulp.parallel('lint:scripts', reloadBrowser)));
		gulp.watch(options.styles.componentsSrc + '/**/*.scss', gulp.series('styles:sass-index'));
		gulp.watch([options.styles.srcFolder + '/**/*.{scss, sass}', '!**/' + options.sprite.cssName], gulp.series('styles:sass', 'lint:styles'));
		gulp.watch(options.fonts.src + '/**/*', gulp.series('fonts:build', reloadBrowser));
		gulp.watch(options.bower.config, gulp.parallel('bower:assets', 'bower:scripts', gulp.series('bower:styles', 'styles:sass')));
		gulp.watch([options.images.src, '!' + options.sprite.srcFolder + '{,/**}'], gulp.series('images:imagemin'));
		gulp.watch(options.sprite.srcFolder + '/*' + options.sprite.retinaSuffix + '.png', gulp.series('images:sprite', 'styles:sass'));
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		], gulp.series(reloadBrowser));
		done();
	});
};