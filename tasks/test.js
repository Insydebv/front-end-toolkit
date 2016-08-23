// Run all tests
module.exports = function (gulp) {
	gulp.task('test', gulp.parallel('lint:scripts', 'lint:styles'));
};