// Minify pagescripts: scripts that don't need to be concatenated and are mostly used on a single occurence
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.paths.pageScriptSrc)
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(scriptDest))
			;
	}
};