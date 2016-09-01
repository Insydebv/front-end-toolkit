// // Watch for changes
module.exports = function (gulp, plugins, options) {

	// Reload  browser
	function reloadBrowser(done) {
		plugins.browserSync.reload();
		done();
	}

	gulp.task('utilities:watch', function (done) {
		gulp.watch(options.scripts.bodyScriptSrc, gulp.series('scripts:bodyscripts'));
		gulp.watch(options.scripts.headScriptSrc, gulp.series('scripts:headscripts'));
		gulp.watch(options.scripts.pageScriptSrc, gulp.series('scripts:pagescripts'));
		gulp.watch(options.styles.componentsSrc + '/**/*.scss', gulp.series('styles:sass-index'));
		gulp.watch([options.styles.srcFolder + '/**/*.{scss, sass}', '!**/' + options.sprite.cssName], gulp.series('styles:sass'));
			// .on('change', function(path) {
			// 	gulp.src(path)
			// 		.pipe(plugins.stylelint({
			// 		configFile: options.styles.lintConfig,
			// 		reporters: [
			// 			{formatter: 'string', console: true}
			// 		]
			// 	}));
			// 	done();
			// });
		gulp.watch(options.fonts.src + '/**/*', gulp.series('fonts:build'));
		gulp.watch([options.images.src + '/**/*', '!' + options.sprite.src], gulp.series('images:imagemin'));
		gulp.watch(options.sprite.srcFolder + '/**/*.png', gulp.series('images:sprite', 'styles:sass'));
		gulp.watch([
			'templates/**/*.html',
			'site/protected/views/**/*.php',
			'site/protected/widgets/**/*.php',
		], gulp.series(reloadBrowser));
		done();
	});
};