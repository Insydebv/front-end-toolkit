// Lint styles
module.exports = {
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.paths.stylesSrc)
			.pipe(plugins.scssLint({
				'config': options.paths.scssLintConfig
			}))
		;
	}
};