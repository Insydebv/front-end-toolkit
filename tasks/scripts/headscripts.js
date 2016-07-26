// Concatenate and minify headscripts: scripts that need to be loaded in the <head> section of a page
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.scripts.headScriptSrc)
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter(plugins.jshintStylish))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.concat(options.scripts.headScriptFile))
			.pipe(plugins.babel())
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	}
};