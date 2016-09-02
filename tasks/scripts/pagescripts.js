// Minify pagescripts: scripts that don't need to be concatenated and are mostly used on a single occurence
var through = require('through2');

module.exports = function (gulp, plugins, options, onError) {
	gulp.task('scripts:pagescripts', function () {
		return gulp.src(options.scripts.pageScriptSrc)
			.pipe(plugins.cached('scripts'))
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(through.obj(jsHintErrorReporter))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.babel())
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	});
};