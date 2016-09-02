// Concatenate and minify headscripts: scripts that need to be loaded in the <head> section of a page
module.exports = function (gulp, plugins, options, onError) {
	gulp.task('scripts:headscripts', function () {
		return gulp.src(options.scripts.headScriptSrc)
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.concat(options.scripts.headScriptFile))
			.pipe(plugins.babel())
			.pipe(!plugins.util.env.production ? plugins.util.noop() : plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	});
};