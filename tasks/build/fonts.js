// Copy fonts to dist
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.paths.fontSrc)
			.pipe(plugins.newer(options.paths.fontDest))
			.pipe(gulp.dest(options.paths.fontDest))
		;
	}
};