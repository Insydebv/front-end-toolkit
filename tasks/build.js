// Build everything
module.exports = function (gulp) {
	gulp.task('build', gulp.parallel(gulp.series('clean:all', 'bower:build', 'images:sprite', 'styles:build'), 'fonts:build', 'images:imagemin', 'scripts:build'));
};