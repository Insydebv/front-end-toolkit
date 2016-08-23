// Copy fonts to dist
module.exports = function (gulp, plugins, options) {
	gulp.task('fonts:build', function () {
		return gulp.src(options.fonts.src)
			.pipe(plugins.newer(options.fonts.dest))
			.pipe(gulp.dest(options.fonts.dest));
	});
};

