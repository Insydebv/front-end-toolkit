// Lint styles
var sassLint = require('gulp-sass-lint');
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.styles.src)
			.pipe(sassLint({
				'configFile': options.styles.lintConfig
			}))
			.pipe(sassLint.format())
			.pipe(sassLint.failOnError())
		;
	}
};