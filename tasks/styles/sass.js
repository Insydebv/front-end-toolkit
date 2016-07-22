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
	fn: function (gulp, plugins, options, callback) {
		return gulp.src(options.paths.stylesSrc, {base: 'src/styles'})
			.pipe(plugins.plumber({
				errorHandler: onSassError
			}))
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				includePaths: options.sassIncludePaths,
				outputStyle: 'compressed'
			}))
			.pipe(plugins.autoprefixer({browsers: ['last 3 versions']}))
			.pipe(plugins.sourcemaps.write('./map'))
			.pipe(gulp.dest(options.paths.appRoot + options.paths.stylesDest))
			.pipe(plugins.browserSync.stream({match: '**/*.css'}))
			;
	}
};