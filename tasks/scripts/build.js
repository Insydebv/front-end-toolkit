// Build all scripts
module.exports = function (gulp) {
	gulp.task('scripts:build', gulp.parallel('scripts:pagescripts', 'scripts:headscripts', 'scripts:bodyscripts'));
};