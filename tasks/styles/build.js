// Build styles
module.exports = function (gulp) {
	gulp.task('styles:build', gulp.series('styles:sass-index', 'styles:sass'));
};