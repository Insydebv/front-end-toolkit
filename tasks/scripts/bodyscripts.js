// Concatenate and minify scripts
module.exports = {
	fn: function (gulp, plugins, options, onError) {
		return gulp.src(options.scripts.bodyScriptSrc)
			.pipe(plugins.plumber({
				errorHandler: onError
			}))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.concat(options.scripts.bodyScriptFile))
			.pipe(plugins.babel())
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	}
};