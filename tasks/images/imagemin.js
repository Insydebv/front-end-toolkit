// Compress images
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src([options.images.src, "!" + sprite.src + "/**.*"])
			.pipe(plugins.newer(options.images.dest))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(options.images.dest))
			.pipe(plugins.browserSync.stream())
			;
	}
};