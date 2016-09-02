// Concatenate and minify body scripts
var through = require('through2');

module.exports = function (gulp, plugins, options, onError, jsHintErrorReporter) {
	gulp.task('scripts:bodyscripts', function () {
		return gulp.src(options.scripts.bodyScriptSrc)
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(through.obj(jsHintErrorReporter))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.concat(options.scripts.bodyScriptFile))
			.pipe(plugins.babel())
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	});
};