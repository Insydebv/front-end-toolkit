// Build everything
module.exports = function (gulp) {
	gulp.task('build', gulp.series('clean:all', 'bower:build', 'styles:build', 'fonts:build', 'images:imagemin', 'scripts:build'));
};