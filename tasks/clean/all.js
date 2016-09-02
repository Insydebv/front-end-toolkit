// Clean all dist folders
module.exports = function (gulp) {
	gulp.task('clean:all', gulp.parallel('clean:bower', 'clean:fonts', 'clean:images', 'clean:scripts', 'clean:styles', 'clean:sprite'));
};