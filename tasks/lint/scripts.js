// Lint script
var through = require('through2');

module.exports = function (gulp, plugins, options, onError, jsHintErrorReporter) {
	gulp.task('lint:scripts', function () {
		return gulp.src(options.scripts.bodyScriptSrc.concat(options.scripts.headScriptSrc, options.scripts.pageScriptSrc))
			.pipe(plugins.cached('scripts'))
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(through.obj(jsHintErrorReporter));
	});
};