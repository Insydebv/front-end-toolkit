// Lint script
module.exports = function (gulp, plugins, options) {
	gulp.task('lint:scripts', function () {
		return gulp.src(options.scripts.bodyScriptSrc.concat(options.scripts.headScriptSrc, options.scripts.pageScriptSrc))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish));
	});
};