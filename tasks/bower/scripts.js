// Concat and minify main Bower scripts
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(plugins.mainBowerFiles(), {base: options.bower.src})
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.filter('*.js'))
			.pipe(plugins.concat(options.bower.scriptFile))
			.pipe(plugins.babel())
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	}
};
