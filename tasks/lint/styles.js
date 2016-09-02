// Lint styles
var sassLint = require('gulp-sass-lint');
module.exports = function (gulp, plugins, options, onError) {
	gulp.task('lint:styles', function () {
		return gulp.src([options.styles.srcFolder + "/**/*.scss", "!" + options.bower.stylesFile, "!" + options.sprite.cssName])
			.pipe(plugins.cached('lint:styles'))
			.pipe(sassLint({
				configFile: options.styles.lintConfig,
				files: {
					ignore: options.styles.lintIgnore
				}
			}))
			.pipe(sassLint.format());
	});
};