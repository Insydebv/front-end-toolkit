// Copy fonts to dist
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.fonts.src)
			.pipe(plugins.newer(options.fonts.dest))
			.pipe(gulp.dest(options.fonts.dest))
			;
	}
};