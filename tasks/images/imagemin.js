// Compress images
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src([options.paths.imgSrc, '!src/images/sprite{,/**}'])
			.pipe(plugins.newer(options.paths.imgDest))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(options.paths.imgDest))
			.pipe(plugins.browserSync.stream())
			;
	}
};