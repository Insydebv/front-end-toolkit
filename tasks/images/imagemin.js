// Imagemin Task (compress images)
gulp.task('imagemin', function () {
	return gulp.src([imgSrc, '!src/images/sprite{,/**}'])
		.pipe(plugins.newer(imgDest))
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(imgDest))
		.pipe(browserSync.stream())
	;
});