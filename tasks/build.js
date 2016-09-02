// Build everything
module.exports = function (gulp) {
	gulp.task('build', gulp.series('clean:all', gulp.parallel(gulp.series('bower:build', 'images:sprite', 'styles:build'), 'fonts:build', 'images:imagemin', 'scripts:build')));
};