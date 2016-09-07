// Build and watch for changes + live reload via browser-sync
module.exports = function (gulp) {
	gulp.task('default', gulp.series('build', 'utilities:watch', 'utilities:browser-sync'));
};