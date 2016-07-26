// Lint styles
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.styles.src)
			.pipe(plugins.scssLint({
				'config': options.styles.lintConfig
			}))
		;
	}
};