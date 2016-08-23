// Compress images
module.exports = function (gulp, plugins, options) {
	gulp.task('images:imagemin', function () {
		return gulp.src([options.images.src, "!" + options.sprite.src + "/**.*"])
			.pipe(plugins.newer(options.images.dest))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(options.images.dest))
			.pipe(plugins.browserSync.stream())
			;
	});
};