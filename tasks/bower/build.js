// Gather Bower assets and move to dist folders
module.exports = function (gulp) {
	gulp.task('bower:build', gulp.parallel('bower:assets', 'bower:scripts', 'bower:styles'));
};