// Concat and minify main Bower scripts
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(plugins.mainBowerFiles('**/*.js'), {base: options.bower.src})
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.babel({}))
			.pipe(plugins.concat(options.bower.scriptFile))
			.pipe(plugins.uglify())
			.pipe(plugins.sourcemaps.write('maps'))
			.pipe(gulp.dest(options.scripts.dest))
			;
	}
};
