// Concat and minify main Bower scripts
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(plugins.mainBowerFiles(), {base: options.paths.bowerSrc})
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('*.js'))
			.pipe(plugins.concat(options.bowerScriptFile))
			.pipe(plugins.babel())
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.paths.appRoot + options.paths.scriptDest))
			;
	}
};
