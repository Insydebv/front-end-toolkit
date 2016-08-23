// Lint styles
var sassLint = require('gulp-sass-lint');
module.exports = function (gulp, plugins, options) {
	gulp.task('lint:styles', function () {
		return gulp.src(options.styles.srcFolder + "/**/*.scss")
			.pipe(sassLint({
				configFile: options.styles.lintConfig,
				files: {
					ignore: options.styles.lintIgnore
				}
			}))
			.pipe(sassLint.format())
			.pipe(sassLint.failOnError());
	});
};