// Throw a nice error with a sound effect
var onSassError = function (error) {
	plugins.util.log('Sass Error', plugins.util.colors.red('123'));
	plugins.beepbeep();
	console.log(error);
	this.emit('end');
}

// Generate CSS
module.exports = {
	dep: ['lint:styles'],
	fn: function (gulp, plugins, options) {
		return gulp.src(options.styles.src, {base: options.styles.srcFolder})
			.pipe(plugins.plumber({
				errorHandler: onSassError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				includePaths: options.styles.includePaths,
				outputStyle: options.styles.outputStyle,
			}))
			.pipe(plugins.autoprefixer({browsers: ['last 3 versions']}))
			.pipe(plugins.sourcemaps.write('./map'))
			.pipe(gulp.dest(options.styles.dest))
			.pipe(plugins.browserSync.stream({match: '**/*.css'}))
			;
	}
};