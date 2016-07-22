// Concatenate and minify scripts
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.paths.scriptSrc)
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('**/*.js'))
			.pipe(plugins.concat(options.scriptFile))
			.pipe(plugins.babel())
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.paths.appRoot + options.paths.scriptDest))
			;
	}
};