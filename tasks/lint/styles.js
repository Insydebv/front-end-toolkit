// Lint styles
var sassLint = require('gulp-sass-lint');
module.exports = {
	fn: function (gulp, plugins, options) {
		return gulp.src(options.styles.srcFolder + "**/*.scss")
			.pipe(sassLint({
				configFile: options.styles.lintConfig,
				files: {
					ignore: options.styles.lintIgnore
				}
			}))
			.pipe(sassLint.format())
			.pipe(sassLint.failOnError())
			;
	}
};